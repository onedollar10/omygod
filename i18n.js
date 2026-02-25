const translations = {
    "zh": {
        "nav_home": "首頁",
        "nav_software": "軟體販售",
        "nav_tutorials": "教學區",
        "hero_title": "我做的不是藝術是技術",
        "hero_subtitle": "融合尖端科技與舞台美學，為燈光設計與影音同步提供最精確的解決方案。",
        "section_software": "軟體販售區",
        "section_free": "免費好用區",
        "section_tutorials": "教學資源區",
        "filter_all": "全部",
        "btn_read": "閱讀內容",
        "btn_download": "下載原始文件",
        "btn_use_now": "立即使用",
        "btn_details": "詳細介紹",
        "manual_btn": "使用說明書 / Manual",
        "footer_rights": "© 2026 onedoller. All rights reserved. | 我做的不是藝術是技術",
        "lang_toggle": "English",
        "latest_update": "最新更新:",
        // Product Page - OSC Tool
        "osc_hero_subtitle": "專業燈光設計師的終極同步解決方案",
        "osc_buy_email": "欲購買請聯絡 5664762@gmail.com",
        "osc_buy_line": "LINE 聯繫 ID: 5664762",
        "osc_demo": "產品演示",
        "osc_f1_title": "視覺化波形",
        "osc_f1_desc": "精準的視覺化波形分析。支援縮放功能，讓您即時看見音樂的起伏，點擊波形即可瞬間定位。",
        "osc_f1_hl": "特色功能： 已標註的 Cue 點會直接顯示於波形圖上，讓您一目了然，精確掌握每一個節奏點。",
        "osc_f2_title": "精確正時",
        "osc_f2_desc": "支援 24, 25, 30 FPS 標準影格率。我們深知同步的重要性，因此提供了雙重時間顯示。",
        "osc_f2_hl": "同步顯示： 同時呈現 FPS 影格時間以及音樂播放時間，讓您在編程與回放時能有最直觀的對照。",
        "osc_f3_title": "一鍵標記",
        "osc_f3_desc": "極致簡化的工作流程。當您設定好燈控台 IP 與 Cue 號碼後，同步工作變得輕而易舉。",
        "osc_f3_hl": "即時同步： 當音樂播放到預定位置時，只需按下 Mark，時間碼將即刻發送至 ETC 控台，瞬間完成時間碼寫入。",
        "osc_f6_title": "LTC 音訊輸出",
        "osc_f6_desc": "將 LTC (左聲道) 與 原始音訊 (右聲道) 整合輸出為 WAV 檔案。",
        "osc_f6_hl": "特色功能： 一鍵匯出立體聲 WAV 檔案，方便進行離線編程或作為備援系統使用。",
        "osc_f4_title": "智慧播放清單",
        "osc_f4_desc": "自動化播放清單管理。專為多首曲目的演出設計，直觀的拖放與管理介面。",
        "osc_f4_hl": "獨立設定： 每一首曲目皆可設定獨立的 Track Offset (起始時間碼)，切換曲目時自動套用。",
        "osc_f5_title": "sACN DMX 遙控",
        "osc_f5_desc": "透過 sACN (E1.31) 協定接收 DMX 訊號，讓您可以直接從燈控台遙控播放器的 播放、暫停、停止、上一首與下一首等功能。",
        "osc_f5_hl": "特色功能： 每個功能可自由設定對應的 DMX 通道 (1-512)，輕鬆實現燈光與音效的硬體連動控裝。",
        "osc_sys_req": "系統需求",
        "spec_os": "OS",
        "spec_console": "控台",
        "nav_products": "產品",
        // Product Page - ETC Grid Tool
        "grid_hero_subtitle": "專業燈光師的視覺化矩陣控制",
        "grid_f1_title": "MA3 風格矩陣",
        "grid_f1_desc": "革命性的分組與網格介面。參考 MA3 的邏輯，使用色彩視覺化區分燈具群組，完全不需要手動計算位址。",
        "grid_f1_hl": "智慧排位與分組： 透過色彩直觀表達關係，自動避開衝突功能，一鍵同步傳回 ETC 控台。",
        "grid_f2_title": "同步與排列",
        "grid_f2_desc": "深度雙向 OSC 整合與智慧佈局。不只是發送指令，更能即時接收 ETC 控台回傳狀態。",
        "grid_f2_hl": "雙向聯動： 系統可自動獲取控台 CH 資料與 3D 座標，同步生成網格位置，達成「所見即所得」。",
        "grid_f3_title": "OPEN FADE",
        "grid_f3_desc": "強大的色彩與漸變控制。快速將您製作的 GROUP 進行 FAN (扇形) 設定。",
        "grid_f3_hl": "補足功能特效： 內建快速彩虹顏色功能，有效填補 ETC 控台原生的不足，一鍵渲染動態效果。",
        "grid_tech_specs": "技術規格",
        // Product Page - ETC Cue Photo
        "cue_hero_subtitle": "ETC 燈光控台自動截圖記錄工具",
        "cue_f1_title": "視訊輸入模組",
        "cue_f1_desc": "多元視訊輸入模組，滿足各種現場需求。支援 USB 攝影機、NDI 網路視訊串流以及 RTSP 監控串流。",
        "cue_f1_hl": "核心支援： USB Camera / NDI / RTSP。即插即用，輕鬆設定，讓您的記錄畫面清晰不卡頓。",
        "cue_f2_title": "CUE 自動記錄",
        "cue_f2_desc": "自動化 Cue 點記錄。當 ETC 控台執行 Cue 結束時軟體自動偵測並截取當下畫面。",
        "cue_f2_hl": "智慧邏輯： 具備重複觸發處理機制，僅在秒數變更時更新，避免產生冗餘資料，確保每一張截圖都是關鍵時刻。",
        "cue_f3_title": "CH / CHANNEL 模式",
        "cue_f3_desc": "專為燈具調整設計的 CH 模式。支援多種指令格式，如 `Chan 1 Thru 3` 或 `Chan 1 + 5`。",
        "cue_f3_hl": "自動延遲： 收到 Chan 指令後自動等待 Level/@ 設定，並智慧延遲拍照，確保燈光亮度到位後再行記錄。",
        "cue_f4_title": "專業報表匯出",
        "cue_f4_desc": "一鍵匯出 Excel 與 PDF 報告。支援將 Cue 模式與 CH 模式拆分為獨立檔案，與中文內容完美相容。",
        "cue_f4_hl": "排版優化： CH 模式匯出時自動隱藏秒數，圖片放大顯示，並自動最佳化列高與欄寬，提供最專業的交付文件。",
        "cue_f5_title": "視訊錄影與時間戳",
        "cue_f5_desc": "全新的錄影模組。在錄製現場畫面的同時，自動標記每一個 Cue 的精確影影格時間。",
        "cue_f5_hl": "點擊即播： 匯出資料包含時間碼鏈結，點擊即可開啟影片並自動跳轉至對應 Cue 點，徹底解決回找關鍵畫面費時的問題。",
        "cue_f6_title": "sACN 輸入支援",
        "cue_f6_desc": "支援 sACN 網路協定輸入。透過接收 sACN 訊號來觸發截圖，提供更靈活的自動化記錄選擇。",
        "cue_f6_hl": "網路整合： 無需實體線路，透過網路即可接收控台訊號，支援標準 E1.31 sACN 協定。"
    },
    "en": {
        "nav_home": "Home",
        "nav_software": "Software",
        "nav_tutorials": "Tutorials",
        "hero_title": "I Don't Build Art, I Build Tech",
        "hero_subtitle": "Fusing cutting-edge technology with stage aesthetics to provide precise solutions for lighting design and AV sync.",
        "section_software": "Software Sale",
        "section_free": "Free Tools",
        "section_tutorials": "Learning Resources",
        "filter_all": "All",
        "btn_read": "Read More",
        "btn_download": "Download Source File",
        "btn_use_now": "Use Now",
        "btn_details": "Details",
        "manual_btn": "User Manual",
        "footer_rights": "© 2026 onedoller. All rights reserved. | Tech x Art Studio",
        "lang_toggle": "中文",
        "latest_update": "Latest Update:",
        // Product Page - OSC Tool
        "osc_hero_subtitle": "The Ultimate Sync Solution for Lighting Designers",
        "osc_buy_email": "Contact 5664762@gmail.com to Purchase",
        "osc_buy_line": "LINE Contact ID: 5664762",
        "osc_demo": "PRODUCT DEMO",
        "osc_f1_title": "VISUAL WAVEFORM",
        "osc_f1_desc": "Precise visual waveform analysis. Supports zooming to see music ups and downs, click to locate instantly.",
        "osc_f1_hl": "Feature: Marked Cue points show directly on the waveform for precise rhythm control.",
        "osc_f2_title": "PRECISION TIMING",
        "osc_f2_desc": "Supports 24, 25, 30 FPS. We know sync is vital, so we provide dual time displays.",
        "osc_f2_hl": "Sync Display: Shows both Frame Time (FPS) and Actual Playback Time for intuitive reference.",
        "osc_f3_title": "ONE-CLICK MARK",
        "osc_f3_desc": "Ultra-simplified workflow. Set your console IP and Cue, and sync work becomes a breeze.",
        "osc_f3_hl": "Real-time Sync: Press Mark at the desired position to send timecode instantly to ETC consoles.",
        "osc_f6_title": "LTC + AUDIO EXPORT",
        "osc_f6_desc": "Export LTC (Left Channel) + Original Audio (Right Channel) as a WAV file.",
        "osc_f6_hl": "Feature: Generate a stereo WAV file with embedded timecode in one click, perfect for offline programming or backup.",
        "osc_f4_title": "SMART PLAYLIST",
        "osc_f4_desc": "Automated playlist management. Designed for multi-track shows with drag-and-drop interface.",
        "osc_f4_hl": "Independent Settings: Each track has a unique Track Offset, applied automatically on switch.",
        "osc_f5_title": "sACN DMX REMOTE",
        "osc_f5_desc": "Receive DMX signals via sACN (E1.31) protocol, allowing your lighting console to remotely control Play, Pause, Stop, Prev, and Next functions.",
        "osc_f5_hl": "Key Feature: Fully customizable DMX channel mapping (1-512) for each function, enabling seamless integration with hardware consoles.",
        "osc_sys_req": "SYSTEM REQUIREMENTS",
        "spec_os": "OS",
        "spec_console": "Console",
        "nav_products": "PRODUCTS",
        // Product Page - ETC Grid Tool
        "grid_hero_subtitle": "Visual Matrix Control for Lighting Pros",
        "grid_f1_title": "MA3-STYLE GRID MATRIX",
        "grid_f1_desc": "Revolutionary grouping and grid interface. Using MA3 logic with color visualization, no manual address calc needed.",
        "grid_f1_hl": "Smart Layout: Intuitive color grouping, collision avoidance, and one-click sync back to ETC consoles.",
        "grid_f2_title": "SYNC & ARRANGEMENT",
        "grid_f2_desc": "Deep bi-directional OSC integration. Not just sending commands, but receiving real-time console status.",
        "grid_f2_hl": "Bi-directional Sync: Auto-fetch CH data and 3D coordinates for a 'What You See Is What You Get' experience.",
        "grid_f3_title": "OPEN FADE/COLOR",
        "grid_f3_desc": "Powerful color and gradient control. Quickly apply FAN settings to your groups.",
        "grid_f3_hl": "Enhanced Effects: Built-in quick rainbow features to fill ETC console gaps for dynamic color rendering.",
        "grid_tech_specs": "TECHNICAL SPECS",
        // Product Page - ETC Cue Photo
        "cue_hero_subtitle": "Auto Screenshot & Documentation for ETC Consoles",
        "cue_f1_title": "Video Input Module",
        "cue_f1_desc": "Versatile video input support for any onsite requirement. Supports USB Cameras, NDI network streams, and RTSP.",
        "cue_f1_hl": "Core Support: USB Camera / NDI / RTSP. Plug & play, easy setup for clear, lag-free recording.",
        "cue_f2_title": "Cue Auto-Record",
        "cue_f2_desc": "Automated Cue recording. Detects ETC console Cues and captures the moment instantly.",
        "cue_f2_hl": "Smart Logic: Handles duplicate triggers intelligently, updating only when timing changes to avoid redundancy.",
        "cue_f3_title": "CH / Channel Mode",
        "cue_f3_desc": "Designed for fixture focus. Supports various formats like `Chan 1 Thru 3` or `Chan 1 + 5`.",
        "cue_f3_hl": "Auto-Delay: Waits for Level/@ commands after Channel selection, with smart delay to ensure lights are on before snapping.",
        "cue_f4_title": "Professional Export",
        "cue_f4_desc": "One-click Excel & PDF export. Splits Cue and CH modes into separate files, with full Chinese character support.",
        "cue_f4_hl": "Layout Optimized: Hides seconds for CH mode, enlarges images, and optimizes row/column sizes for professional delivery.",
        "cue_f5_title": "Video Recording & Timestamps",
        "cue_f5_desc": "Brand new recording module. Records live video while automatically marking precise frame timestamps for every fired Cue.",
        "cue_f5_hl": "Click to Play: Exported data includes timestamp links. Click to open the video and auto-seek to the exact Cue moment.",
        "cue_f6_title": "sACN Input Support",
        "cue_f6_desc": "Supports sACN network protocol input. Triggers screenshots by receiving sACN signals, offering flexible automation options.",
        "cue_f6_hl": "Network Integration: No physical cables needed. Receives console signals via network, supporting standard E1.31 sACN protocol."
    }
};

let currentLang = localStorage.getItem('lang') || 'zh';

function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('lang', currentLang);
    applyTranslations();

    // If on main page, re-render dynamic content
    if (typeof renderSoftware === 'function') {
        renderSoftware();
        renderFreeTools();
        renderFilters();
        renderTutorials();
        renderNewsTicker();
    }
}

function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (el.tagName === 'INPUT' && (el.type === 'button' || el.type === 'submit')) {
                el.value = translations[currentLang][key];
            } else {
                el.innerText = translations[currentLang][key];
            }
        }
    });

    // Update document language attribute
    document.documentElement.lang = currentLang === 'zh' ? 'zh-TW' : 'en';
}

// Automatically apply on load
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
});
