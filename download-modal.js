/**
 * 試用版下載彈跳視窗控制器 (Trial Download Modal Controller)
 * 整合 Google Apps Script 自動統計並觸發 Google 雲端直接下載
 */

(function () {
    const GAS_API_URL = "https://script.google.com/macros/s/AKfycbwHXX4r9KiZRKxqn0u74C2EUuJk2-nSXSUa1wQcYUlFsmB1H9yGtzyGX74c7j4HqSIu/exec";
    const STORAGE_KEY_EMAIL = "onedoller_user_email";
    const STORAGE_KEY_NAME = "onedoller_user_name";

    // 模組內部語系字典
    const i18nTexts = {
        zh: {
            badgePrefix: "即將下載：",
            title: "免費下載試用版",
            desc: "留下您的電子信箱即可立即開始下載！日後有重大升級或實用更新時，我們將第一時間寄信通知您。",
            labelEmail: "電子信箱 (Email) *",
            placeholderEmail: "例如: your.name@example.com",
            labelName: "稱呼 / 團隊名稱 (選填)",
            placeholderName: "例如: 陳大衛 / 音響團隊",
            rememberTip: "已自動為您帶入上次登記的信箱",
            btnSubmit: "立即取得試用檔",
            btnLoading: "正在登記並準備下載...",
            btnSuccess: "登記成功！正在啟動下載...",
            privacy: "🔒 我們嚴格遵守隱私保護，絕不發送垃圾信件。",
            errorEmailEmpty: "請輸入有效的電子信箱！",
            errorEmailInvalid: "電子信箱格式不正確，請重新檢查。",
            errorTooFast: "操作過於頻繁，請稍候再試。",
            manualFallback: "若下載未自動開始，請"
        },
        en: {
            badgePrefix: "Downloading: ",
            title: "Download Free Trial",
            desc: "Leave your email to start the download immediately. We'll also notify you of major releases and updates.",
            labelEmail: "Email Address *",
            placeholderEmail: "e.g. your.name@example.com",
            labelName: "Name / Organization (Optional)",
            placeholderName: "e.g. David / Audio Studio",
            rememberTip: "Loaded your previously saved email",
            btnSubmit: "Download Trial Now",
            btnLoading: "Submitting & Preparing...",
            btnSuccess: "Success! Starting download...",
            privacy: "🔒 We respect your privacy. No spam guaranteed.",
            errorEmailEmpty: "Please enter a valid email address!",
            errorEmailInvalid: "Invalid email format. Please check again.",
            errorTooFast: "Too many requests. Please wait a moment.",
            manualFallback: "If download did not start automatically, please "
        }
    };

    let currentProduct = "軟體試用版";
    let currentDownloadUrl = "";
    let isSubmitting = false;

    // 取得使用者環境與地域資訊 (途徑二：免外部 API，零延遲且保護隱私)
    function getUserEnvironment() {
        let timezone = "未知";
        try {
            timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "未知";
        } catch (e) {}

        const language = navigator.language || navigator.userLanguage || "未知";
        const platform = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || "未知";
        const screenRes = (window.screen && window.screen.width) ? `${window.screen.width}x${window.screen.height}` : "未知";

        return {
            timezone: timezone,
            language: language,
            platform: platform,
            screen: screenRes
        };
    }

    function getLang() {
        return localStorage.getItem("lang") === "en" ? "en" : "zh";
    }

    // 建立 Modal DOM 結構
    function injectModalDOM() {
        if (document.getElementById("trial-download-modal")) return;

        const overlay = document.createElement("div");
        overlay.id = "trial-download-modal";
        overlay.className = "trial-modal-overlay";
        overlay.innerHTML = `
            <div class="trial-modal-card" role="dialog" aria-modal="true">
                <button type="button" class="trial-modal-close" id="trial-modal-close-btn" aria-label="Close">&times;</button>
                
                <div class="trial-modal-header">
                    <div class="trial-modal-badge" id="trial-modal-badge">
                        <i class="fa-solid fa-cube"></i> <span id="trial-modal-badge-text">即將下載</span>
                    </div>
                    <h3 class="trial-modal-title" id="trial-modal-title">免費下載試用版</h3>
                    <p class="trial-modal-desc" id="trial-modal-desc">留下您的電子信箱即可立即開始下載！</p>
                </div>

                <form id="trial-modal-form" novalidate>
                    <div class="trial-form-group">
                        <label for="trial-input-email" id="trial-label-email">電子信箱 (Email) *</label>
                        <div class="trial-input-wrap">
                            <i class="fa-solid fa-envelope"></i>
                            <input type="email" id="trial-input-email" class="trial-input" required autocomplete="email">
                        </div>
                        <div class="trial-form-note" id="trial-remember-note" style="display:none;">
                            <i class="fa-solid fa-circle-check" style="color:#22c55e;"></i> <span id="trial-remember-text">已自動帶入信箱</span>
                        </div>
                    </div>

                    <div class="trial-form-group">
                        <label for="trial-input-name" id="trial-label-name">稱呼 / 團隊名稱 (選填)</label>
                        <div class="trial-input-wrap">
                            <i class="fa-solid fa-user"></i>
                            <input type="text" id="trial-input-name" class="trial-input" autocomplete="name">
                        </div>
                    </div>

                    <button type="submit" class="trial-submit-btn" id="trial-submit-btn">
                        <i class="fa-solid fa-download"></i>
                        <span id="trial-submit-btn-text">立即取得試用檔</span>
                    </button>

                    <div class="trial-status-msg" id="trial-status-msg"></div>

                    <div class="trial-footer-privacy" id="trial-footer-privacy">
                        🔒 我們嚴格遵守隱私保護，絕不發送垃圾信件。
                    </div>
                </form>
            </div>
        `;

        document.body.appendChild(overlay);

        // 綁定關閉事件
        document.getElementById("trial-modal-close-btn").addEventListener("click", closeTrialModal);
        overlay.addEventListener("click", function (e) {
            if (e.target === overlay) closeTrialModal();
        });

        // 綁定鍵盤 ESC 關閉
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && overlay.classList.contains("active")) {
                closeTrialModal();
            }
        });

        // 綁定表單提交
        document.getElementById("trial-modal-form").addEventListener("submit", handleFormSubmit);
    }

    // 更新 Modal 上的多語系文字
    function updateModalTexts() {
        const lang = getLang();
        const t = i18nTexts[lang];

        const badgeText = document.getElementById("trial-modal-badge-text");
        const title = document.getElementById("trial-modal-title");
        const desc = document.getElementById("trial-modal-desc");
        const labelEmail = document.getElementById("trial-label-email");
        const inputEmail = document.getElementById("trial-input-email");
        const labelName = document.getElementById("trial-label-name");
        const inputName = document.getElementById("trial-input-name");
        const submitText = document.getElementById("trial-submit-btn-text");
        const privacy = document.getElementById("trial-footer-privacy");
        const rememberText = document.getElementById("trial-remember-text");

        if (badgeText) badgeText.textContent = t.badgePrefix + currentProduct;
        if (title) title.textContent = t.title;
        if (desc) desc.textContent = t.desc;
        if (labelEmail) labelEmail.textContent = t.labelEmail;
        if (inputEmail) inputEmail.placeholder = t.placeholderEmail;
        if (labelName) labelName.textContent = t.labelName;
        if (inputName) inputName.placeholder = t.placeholderName;
        if (submitText) submitText.textContent = t.btnSubmit;
        if (privacy) privacy.textContent = t.privacy;
        if (rememberText) rememberText.textContent = t.rememberTip;
    }

    // 開啟 Modal
    window.openTrialModal = function (productName, downloadUrl) {
        injectModalDOM();
        currentProduct = productName || "軟體試用版";
        currentDownloadUrl = downloadUrl || "";

        updateModalTexts();

        // 讀取快取的 Email / 稱呼
        const cachedEmail = localStorage.getItem(STORAGE_KEY_EMAIL) || "";
        const cachedName = localStorage.getItem(STORAGE_KEY_NAME) || "";
        const emailInput = document.getElementById("trial-input-email");
        const nameInput = document.getElementById("trial-input-name");
        const rememberNote = document.getElementById("trial-remember-note");
        const statusMsg = document.getElementById("trial-status-msg");

        if (statusMsg) {
            statusMsg.className = "trial-status-msg";
            statusMsg.style.display = "none";
            statusMsg.innerHTML = "";
        }

        if (emailInput) {
            if (cachedEmail) {
                emailInput.value = cachedEmail;
                if (rememberNote) rememberNote.style.display = "flex";
            } else {
                emailInput.value = "";
                if (rememberNote) rememberNote.style.display = "none";
            }
        }
        if (nameInput) {
            nameInput.value = cachedName;
        }

        const submitBtn = document.getElementById("trial-submit-btn");
        if (submitBtn) {
            submitBtn.disabled = false;
        }

        const overlay = document.getElementById("trial-download-modal");
        overlay.classList.add("active");

        setTimeout(() => {
            if (!cachedEmail && emailInput) {
                emailInput.focus();
            }
        }, 150);
    };

    // 關閉 Modal
    window.closeTrialModal = function () {
        const overlay = document.getElementById("trial-download-modal");
        if (overlay) {
            overlay.classList.remove("active");
        }
        isSubmitting = false;
    };

    // 表單送出處理
    async function handleFormSubmit(e) {
        e.preventDefault();

        const lang = getLang();
        const t = i18nTexts[lang];
        const emailInput = document.getElementById("trial-input-email");
        const nameInput = document.getElementById("trial-input-name");
        const submitBtn = document.getElementById("trial-submit-btn");
        const submitText = document.getElementById("trial-submit-btn-text");
        const statusMsg = document.getElementById("trial-status-msg");

        if (isSubmitting) return;

        // 防刷與頻率限制 (8 秒冷卻保護，避免重複灌水或消耗配額)
        const now = Date.now();
        const lastSubmitTime = parseInt(sessionStorage.getItem("last_trial_submit_time") || "0", 10);
        if (now - lastSubmitTime < 8000) {
            showStatus(t.errorTooFast, "error");
            return;
        }

        const email = (emailInput.value || "").trim();
        const name = (nameInput.value || "").trim();

        // 1. Email 基礎驗證
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            showStatus(t.errorEmailEmpty, "error");
            emailInput.focus();
            return;
        }
        if (!emailRegex.test(email)) {
            showStatus(t.errorEmailInvalid, "error");
            emailInput.focus();
            return;
        }

        // 2. 切換為載入狀態與鎖定
        isSubmitting = true;
        sessionStorage.setItem("last_trial_submit_time", now.toString());
        submitBtn.disabled = true;
        submitText.innerHTML = `<span class="trial-spinner"></span> ${t.btnLoading}`;
        hideStatus();

        // 3. 儲存快取資訊
        localStorage.setItem(STORAGE_KEY_EMAIL, email);
        if (name) localStorage.setItem(STORAGE_KEY_NAME, name);

        // 4. GA 數據追蹤 (送出 GA4 原生 file_download 與 generate_lead 標準事件)
        if (typeof gtag === "function") {
            try {
                // (1) GA4 原生標準檔案下載事件
                gtag("event", "file_download", {
                    file_name: currentProduct,
                    file_extension: "zip",
                    link_url: currentDownloadUrl,
                    product_name: currentProduct
                });

                // (2) GA4 原生名單轉換事件 (可在 GA4 後台直接標記為重要轉換)
                gtag("event", "generate_lead", {
                    lead_source: "trial_download_modal",
                    product_name: currentProduct
                });

                // (3) 自訂詳細事件
                gtag("event", "download_trial", {
                    event_category: "Conversion",
                    event_label: currentProduct,
                    product_name: currentProduct
                });
            } catch (gaErr) {
                console.warn("GA tracking error:", gaErr);
            }
        }

        // 5. 擷取環境資訊 (途徑二) 並非同步背景發送至 Google 試算表
        const envInfo = getUserEnvironment();
        const payload = {
            email: email,
            name: name || "未填寫",
            product: currentProduct,
            referrer: window.location.href,
            timezone: envInfo.timezone,
            language: envInfo.language,
            platform: envInfo.platform,
            screen: envInfo.screen,
            timestamp: new Date().toISOString()
        };

        try {
            fetch(GAS_API_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(payload)
            }).catch(fetchErr => {
                console.warn("Background log request dispatch:", fetchErr);
            });
        } catch (postErr) {
            console.warn("Network request error:", postErr);
        }

        // 6. 顯示成功提示並觸發下載
        setTimeout(() => {
            submitText.innerHTML = `<i class="fa-solid fa-check"></i> ${t.btnSuccess}`;
            showStatus(`🎉 ${t.btnSuccess}`, "success");

            // 觸發實際下載
            triggerDownload(currentDownloadUrl);

            // 1.8 秒後自動關閉彈窗
            setTimeout(() => {
                closeTrialModal();
                submitBtn.disabled = false;
                submitText.textContent = t.btnSubmit;
                isSubmitting = false;
            }, 1800);
        }, 600);
    }

    // 啟動下載
    function triggerDownload(url) {
        if (!url) return;

        // 建立隱藏連結觸發直接下載 (加入 rel="noopener noreferrer" 安全屬性)
        const a = document.createElement("a");
        a.href = url;
        a.setAttribute("download", "");
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();

        setTimeout(() => {
            if (document.body.contains(a)) {
                document.body.removeChild(a);
            }
        }, 1000);
    }

    function showStatus(msg, type) {
        const statusMsg = document.getElementById("trial-status-msg");
        if (!statusMsg) return;
        statusMsg.className = `trial-status-msg ${type}`;
        statusMsg.style.display = "flex";
        statusMsg.innerHTML = `<i class="fa-solid ${type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-check'}"></i> <span>${msg}</span>`;
    }

    function hideStatus() {
        const statusMsg = document.getElementById("trial-status-msg");
        if (statusMsg) {
            statusMsg.style.display = "none";
        }
    }

    // 全局點擊監聽 (委派給所有帶有 .trigger-download-modal 或 .btn-trial-download 的按鈕)
    document.addEventListener("click", function (e) {
        const trigger = e.target.closest(".trigger-download-modal, .btn-trial-download");
        if (!trigger) return;

        e.preventDefault();
        const product = trigger.getAttribute("data-product") || "軟體試用版";
        const url = trigger.getAttribute("data-url") || "";

        if (typeof gtag === "function") {
            try {
                gtag("event", "select_content", {
                    content_type: "trial_download_button",
                    item_id: product
                });
            } catch (err) {}
        }

        window.openTrialModal(product, url);
    });

    // 監聽語言切換
    window.addEventListener("languageChanged", updateModalTexts);

    // DOM Ready 初始化
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", injectModalDOM);
    } else {
        injectModalDOM();
    }
})();
