// ============================================
// data.js - Website Content Data
// ============================================

const categories = [
    { id: "networking", name: "網路通訊", name_en: "Networking" },
    { id: "lighting", name: "燈光技術", name_en: "Lighting Tech" },
    { id: "tools", name: "實務工具", name_en: "Practical Tools" }
];

const tutorials = [
    {
        category: "networking",
        name: "NDI 檢視教學",
        name_en: "NDI Viewing Tutorial",
        file: "NDI 檢視.docx",
        url: "../tutorials/ndi.html",
        summary: "分享新版本的 NDI 檢視工具與使用心得。",
        summary_en: "Sharing the latest NDI viewing tools and usage experiences."
    },
    {
        category: "lighting",
        name: "RDM 協定入門",
        name_en: "Intro to RDM Protocol",
        file: "RDM.docx",
        url: "../tutorials/rdm.html",
        summary: "燈光通訊協定 RDM 的基礎介紹與應用。",
        summary_en: "Basic introduction and application of the RDM lighting protocol."
    },
    {
        category: "networking",
        name: "sACN 協定詳解",
        name_en: "sACN Protocol Deep Dive",
        file: "sacn.docx",
        url: "../tutorials/sacn.html",
        summary: "深入探討串流 ACN (sACN) 在大型演出中的應用。",
        summary_en: "In-depth exploration of Streaming ACN (sACN) in large-scale shows."
    },
    {
        category: "networking",
        name: "光纖 HUB 選擇指南",
        name_en: "Fiber Hub Selection Guide",
        file: "光纖HUB選擇.docx",
        url: "../tutorials/hub.html",
        summary: "針對演出現場的光纖設備與網路交換器選擇建議。",
        summary_en: "Recommendations for fiber equipment and network switches on-site."
    },
    {
        category: "lighting",
        name: "燈光技術概論",
        name_en: "Intro to Lighting Tech",
        file: "概論.docx",
        url: "../tutorials/intro.html",
        summary: "從零開始的燈光技術基礎教學。",
        summary_en: "Beginner-friendly fundamental lighting technology tutorial."
    },
    {
        category: "lighting",
        name: "燈具功能講解",
        name_en: "Fixture Functions Explained",
        file: "燈具功能講解.docx",
        url: "../tutorials/fixtures.html",
        summary: "詳細拆解各類專業燈具的功能與參數。",
        summary_en: "Detailed breakdown of professional lighting fixture functions."
    },
    {
        category: "networking",
        name: "網路概論 (劇場版)",
        name_en: "Networking Intro (Theater Ed.)",
        file: "網路概論.docx",
        url: "../tutorials/network-intro.html",
        summary: "專為劇場技術人員整理的網路基礎知識。",
        summary_en: "Network fundamentals curated for theater technicians."
    },
    {
        category: "tools",
        name: "PDF 數量計算工具",
        name_en: "PDF Counter Tool",
        file: "pdf計算.docx",
        url: "../tutorials/pdf-tool.html",
        summary: "利用自動化工具快速計算 PDF 文件中的特定圖案數量。",
        summary_en: "Use automation to quickly count specific patterns in PDF files."
    },
    {
        category: "networking",
        name: "網路檢視 sACN 實務",
        name_en: "sACN Monitoring in Practice",
        file: "網路檢視sacn.docx",
        url: "../tutorials/sacn-view.html",
        summary: "如何實地監測 sACN 訊號的健康狀態。",
        summary_en: "How to monitor sACN signal health in real-world scenarios."
    }
];

const software = [
    {
        id: "osc_timecode",
        name: "OSC Timecode Tool",
        name_en: "OSC Timecode Tool",
        tagline: "專業音訊播放與時間碼同步工具",
        tagline_en: "Professional Audio Playback & Timecode Sync Tool",
        description: "專為燈光設計師與舞台技術人員打造，支援 MP3/WAV/OGG，並透過 OSC 協定與 ETC/EOS 燈控台深度同步。",
        description_en: "Built for lighting designers and stage technicians, supporting MP3/WAV/OGG, with deep sync for ETC/EOS via OSC protocol.",
        url: "../products/osc-tool.html",
        features: [
            "支援 OSC 指令發送至 ETC 燈控台",
            "實體 LTC 時間碼輸出 (24/25/30 FPS)",
            "即時音訊波形視覺化與 Cue 點標記",
            "自動續播與清單管理功能",
            "支援 CSV 匯入匯出與 Cue 資料管理"
        ],
        features_en: [
            "Support OSC command sending to ETC consoles",
            "Physical LTC Timecode output (24/25/30 FPS)",
            "Real-time audio waveform visualization & Cue marking",
            "Auto-next & Playlist management",
            "Support CSV import/export & Cue data management"
        ]
    },
    {
        id: "etc_grid",
        name: "ETC Eos Grid Tool",
        name_en: "ETC Eos Grid Tool",
        tagline: "視覺化燈具矩陣控制系統",
        tagline_en: "Visualized Fixture Matrix Control System",
        description: "專為 ETC Eos 燈控台設計的視覺化輔助工具，提供直觀的網格介面進行燈具排列與控制。",
        description_en: "A visualization aid for ETC Eos consoles, providing an intuitive grid interface for fixture layout and control.",
        url: "../products/etc-grid-tool.html",
        features: [
            "視覺化網格佈局與智慧拖放排位",
            "MA3 風格快速色彩分組，無需手動計算",
            "自動獲取 Augment3d 位置進行快速排列",
            "支援控台輸入 CH 自動獲取並傳回分組",
            "整合標準 CIE 1931 色度圖與佈局管理"
        ],
        features_en: [
            "Visualized grid layout with smart drag-and-drop",
            "MA3-style quick color grouping, no manual calc",
            "Auto-fetch Augment3d positions for quick layout",
            "Support console CH input for auto-grouping",
            "Integrated CIE 1931 chromaticity diagram"
        ]
    }
];

const freeTools = [
    {
        id: "pdf_calculator",
        name: "PDF 計算機",
        name_en: "PDF Calculator",
        tagline: "免費線上工具",
        tagline_en: "Free Online Tool",
        description: "眶選圖案按下計算可快速顯示PDF上方一樣的燈具有幾顆",
        description_en: "Select a pattern and click calculate to quickly find how many identical fixtures are on the PDF.",
        url: "https://script.google.com/macros/s/AKfycbzTPOOX5m_OR1t7JPbFA3iNDPhrezbOrwuOHrmHuwe62ksb0HG8HQ8mOctwMVHQD6OBHQ/exec",
        features: ["線上直接使用，無需安裝", "快速選取區域進行圖案比對", "自動計算數量"],
        features_en: ["Use directly online, no installation", "Quick area selection for pattern matching", "Automatic count calculation"]
    }
];

// Works / Portfolio Data
const works = [
    {
        q: 1,
        time: "2024",
        project: "WORLD TOUR 2024 「NEON DREAMS」",
        project_en: "WORLD TOUR 2024 \"NEON DREAMS\"",
        role: "Lead Programmer",
        role_zh: "首席燈光程式師"
    },
    {
        q: 2,
        time: "2024",
        project: "台北流行音樂中心",
        project_en: "Taipei Music Center",
        role: "Systems Tech",
        role_zh: "系統技術"
    },
    {
        q: 3,
        time: "2023",
        project: "企業發表會：G-TECH LAUNCH",
        project_en: "Corp Event: G-TECH LAUNCH",
        role: "Lighting Des.",
        role_zh: "燈光設計"
    },
    {
        q: 4,
        time: "2023",
        project: "獨立樂團「ECHOES」MV",
        project_en: "Indie Band \"ECHOES\" MV",
        role: "Gaffer",
        role_zh: "燈光指導"
    },
    {
        q: 5,
        time: "2022",
        project: "藝術裝置：「VOID」",
        project_en: "Art Installation: \"VOID\"",
        role: "Interaction Dev",
        role_zh: "互動開發"
    }
];

// Translation strings
const translations = {
    zh: {
        hero_title: "我做的不是藝術是技術",
        hero_subtitle: "融合尖端科技與舞台美學，為燈光設計與影音同步提供最精確的解決方案。",
        system_ready: "SYSTEM READY",
        hint_text: "從左側 DIRECT SELECTS 選擇模式開始",
        section_works: "CUE LIST 1: 作品集",
        section_shop: "PATCH: 軟體販售區",
        section_tutorials: "RECORDING: 教學資源區",
        section_free: "MACRO: 免費工具區",
        section_contact: "SYSTEM: 聯絡資訊",
        filter_all: "全部",
        table_q: "Q",
        table_time: "年份",
        table_project: "專案名稱",
        table_role: "角色",
        table_chan: "Chan",
        table_product: "產品名稱",
        table_price: "價格",
        table_action: "動作",
        pending_cue: "> 更多作品籌備中...",
        btn_details: "詳細介紹",
        btn_use: "立即使用",
        contact_email: "電子郵件",
        contact_line: "LINE 聯繫",
        lang_btn: "ENGLISH"
    },
    en: {
        hero_title: "I Don't Build Art, I Build Tech",
        hero_subtitle: "Fusing cutting-edge technology with stage aesthetics to provide precise solutions for lighting design and AV sync.",
        system_ready: "SYSTEM READY",
        hint_text: "SELECT A MODE FROM DIRECT SELECTS TO BEGIN",
        section_works: "CUE LIST 1: PORTFOLIO",
        section_shop: "PATCH: SOFTWARE STORE",
        section_tutorials: "RECORDING: LEARNING RESOURCES",
        section_free: "MACRO: FREE TOOLS",
        section_contact: "SYSTEM: CONTACT INFO",
        filter_all: "All",
        table_q: "Q",
        table_time: "Year",
        table_project: "Project Name",
        table_role: "Role",
        table_chan: "Chan",
        table_product: "Product Name",
        table_price: "Price",
        table_action: "Action",
        pending_cue: "> More projects loading...",
        btn_details: "Details",
        btn_use: "Use Now",
        contact_email: "Email",
        contact_line: "LINE Contact",
        lang_btn: "中文"
    }
};
