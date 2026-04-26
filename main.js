// Data loaded from data.js

let currentCategory = "all";
let currentTutorialIndex = 0;
let isTutorialFlipping = false;

document.addEventListener("DOMContentLoaded", () => {
    renderSoftware();
    renderFreeTools();
    renderFilters();
    renderTutorials();
    renderNewsTicker();
    setupModal();
});

function trackClick(label, category = "Download") {
    if (typeof gtag === "function") {
        gtag("event", "click", {
            event_category: category,
            event_label: label
        });
    }
}

function renderSoftware() {
    const container = document.getElementById("software-container");
    if (!container) return;

    container.innerHTML = software.map(item => {
        const name = currentLang === "en" ? item.name_en : item.name;
        const tagline = currentLang === "en" ? item.tagline_en : item.tagline;
        const description = currentLang === "en" ? item.description_en : item.description;
        const features = currentLang === "en" ? item.features_en : item.features;
        const btnText = currentLang === "en" ? translations.en.btn_details : translations.zh.btn_details;
        const manualBtnText = currentLang === "en" ? translations.en.manual_btn : translations.zh.manual_btn;
        const manualUrl = currentLang === "en" ? (item.manual_en || item.manual) : item.manual;

        return `
            <div class="card" id="${item.id}">
                <h3>${name}</h3>
                <p class="tagline">${tagline}</p>
                <p>${description}</p>
                <ul>
                    ${features.map(f => `<li>${f}</li>`).join("")}
                </ul>
                ${item.url ? `<a href="${item.url}" class="btn" style="margin-right:8px" onclick="trackClick('${item.id}_Details', 'Navigation')">${btnText}</a>` : ""}
                ${manualUrl ? `<a href="${manualUrl}" class="btn" style="margin-top:10px; background:linear-gradient(45deg, #7bdcff, #568fff); color:#051427;" target="_blank" onclick="trackClick('${item.id}_Manual', 'ManualView')">${manualBtnText}</a>` : ""}
            </div>
        `;
    }).join("");
}

function renderFreeTools() {
    const container = document.getElementById("free-tools-container");
    if (!container) return;

    container.innerHTML = freeTools.map(item => {
        const name = currentLang === "en" ? item.name_en : item.name;
        const tagline = currentLang === "en" ? item.tagline_en : item.tagline;
        const description = currentLang === "en" ? item.description_en : item.description;
        const features = currentLang === "en" ? item.features_en : item.features;
        const btnKey = item.btn_key || "btn_use_now";
        const btnText = currentLang === "en" ? translations.en[btnKey] : translations.zh[btnKey];
        const manualBtnText = currentLang === "en" ? translations.en.manual_btn : translations.zh.manual_btn;
        const manualUrl = currentLang === "en" ? (item.manual_en || item.manual) : item.manual;

        return `
            <div class="card" id="${item.id}">
                <h3>${name}</h3>
                <p class="tagline">${tagline}</p>
                <p>${description}</p>
                <ul>
                    ${features ? features.map(f => `<li>${f}</li>`).join("") : ""}
                </ul>
                ${item.url ? `<a href="${item.url}" class="btn" target="_blank" style="margin-right:8px" onclick="trackClick('${item.id}_${item.btn_key || "link"}', 'FreeToolClick')">${btnText}</a>` : ""}
                ${manualUrl ? `<a href="${manualUrl}" class="btn" style="margin-top:10px; background:linear-gradient(45deg, #7bdcff, #568fff); color:#051427;" target="_blank" onclick="trackClick('${item.id}_Manual', 'ManualView')">${manualBtnText}</a>` : ""}
            </div>
        `;
    }).join("");
}

function renderFilters() {
    const container = document.getElementById("category-filters");
    if (!container) return;

    const allText = currentLang === "en" ? translations.en.filter_all : translations.zh.filter_all;
    const allBtn = `<button class="filter-btn ${currentCategory === "all" ? "active" : ""}" data-id="all">${allText}</button>`;
    const catBtns = categories.map(cat => {
        const name = currentLang === "en" ? cat.name_en : cat.name;
        return `<button class="filter-btn ${currentCategory === cat.id ? "active" : ""}" data-id="${cat.id}">${name}</button>`;
    }).join("");

    container.innerHTML = allBtn + catBtns;

    container.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            currentCategory = e.currentTarget.dataset.id;
            currentTutorialIndex = 0;
            renderFilters();
            renderTutorials();
        });
    });
}

function getFilteredTutorials() {
    if (currentCategory === "all") return tutorials;
    return tutorials.filter(t => t.category === currentCategory);
}

function getBookLabels() {
    if (currentLang === "en") {
        return {
            prev: "Prev Page",
            next: "Next Page",
            open: translations.en.btn_read || "Read More",
            noData: "No tutorial in this category yet.",
            page: "Page"
        };
    }
    return {
        prev: "上一頁",
        next: "下一頁",
        open: translations.zh.btn_read || "閱讀全文",
        noData: "此分類暫無文章。",
        page: "頁"
    };
}

function renderTutorials() {
    const container = document.getElementById("tutorial-list");
    if (!container) return;

    const filtered = getFilteredTutorials();
    const labels = getBookLabels();

    if (filtered.length === 0) {
        container.innerHTML = `<div class="book-empty">${labels.noData}</div>`;
        return;
    }

    if (currentTutorialIndex >= filtered.length) currentTutorialIndex = 0;
    const item = filtered[currentTutorialIndex];
    const cat = categories.find(c => c.id === item.category);
    const catName = currentLang === "en" ? cat.name_en : cat.name;
    const name = currentLang === "en" ? item.name_en : item.name;
    const summary = currentLang === "en" ? item.summary_en : item.summary;
    const content = currentLang === "en" ? item.content_en : item.content;
    const pageText = `${labels.page} ${currentTutorialIndex + 1} / ${filtered.length}`;

    container.innerHTML = `
        <div class="book-shell">
            <button class="book-nav" id="book-prev" ${filtered.length <= 1 ? "disabled" : ""}>◀ ${labels.prev}</button>
            <div class="tutorial-book" id="tutorial-book">
                <div class="book-pages">
                    <article class="book-page left">
                        <p class="book-label">CATEGORY</p>
                        <h3 class="book-title"># ${catName}</h3>
                        <p class="book-summary">${summary}</p>
                    </article>
                    <article class="book-page right">
                        <p class="book-label">ARTICLE</p>
                        <h3 class="book-title">${name}</h3>
                        <p class="book-summary">${content}</p>
                    </article>
                </div>
                <div class="book-meta">
                    <span class="book-count">${pageText}</span>
                    <a class="btn book-open-btn" href="${item.url}" onclick="trackClick('tutorial_${item.category}_${currentTutorialIndex}', 'TutorialRead')">${labels.open}</a>
                </div>
            </div>
            <button class="book-nav" id="book-next" ${filtered.length <= 1 ? "disabled" : ""}>${labels.next} ▶</button>
        </div>
    `;

    const prevBtn = document.getElementById("book-prev");
    const nextBtn = document.getElementById("book-next");
    const book = document.getElementById("tutorial-book");

    prevBtn?.addEventListener("click", () => flipTutorial("prev", filtered));
    nextBtn?.addEventListener("click", () => flipTutorial("next", filtered));
    book?.addEventListener("dblclick", () => {
        window.location.href = item.url;
    });
}

function flipTutorial(direction, filtered) {
    if (isTutorialFlipping || filtered.length <= 1) return;

    const book = document.getElementById("tutorial-book");
    if (!book) return;

    isTutorialFlipping = true;
    const flipClass = direction === "next" ? "is-flipping-next" : "is-flipping-prev";
    book.classList.add(flipClass);

    setTimeout(() => {
        if (direction === "next") {
            currentTutorialIndex = (currentTutorialIndex + 1) % filtered.length;
        } else {
            currentTutorialIndex = (currentTutorialIndex - 1 + filtered.length) % filtered.length;
        }
        renderTutorials();
    }, 250);

    setTimeout(() => {
        isTutorialFlipping = false;
    }, 560);
}

function setupModal() {
    const modal = document.getElementById("reader-modal");
    const closeBtn = document.querySelector(".close-btn");
    if (!modal || !closeBtn) return;

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (event) => {
        if (event.target === modal) modal.style.display = "none";
    };
}

function openModal(tutorial) {
    const modal = document.getElementById("reader-modal");
    if (!modal) return;

    document.getElementById("modal-title").innerText = tutorial.name;
    document.getElementById("modal-content").innerText = tutorial.content;
    document.getElementById("modal-download").href = `./${tutorial.file}`;
    modal.style.display = "flex";
}

function renderNewsTicker() {
    const container = document.getElementById("news-content");
    if (!container) return;

    container.innerHTML = latestUpdates.map(item => {
        const content = currentLang === "en" ? item.content_en : item.content;
        return `<span class="news-date">${item.date}</span> ${content}`;
    }).join(" • ");
}
