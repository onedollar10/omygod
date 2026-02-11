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
        url: "tutorials/ndi.html",
        summary: "分享新版本的 NDI 檢視工具與使用心得。",
        summary_en: "Sharing the latest NDI viewing tools and usage experiences.",
        content: "因友人想要我分享一下新版本的 NDI 檢視工具... 此教學介紹了如何有效地在複雜網路環境中檢視 NDI 訊號，包含常見的延遲問題處理與基礎設備需求。"
    },
    {
        category: "lighting",
        name: "RDM 協定入門",
        name_en: "Intro to RDM Protocol",
        file: "RDM.docx",
        url: "tutorials/rdm.html",
        summary: "燈光通訊協定 RDM 的基礎介紹與應用。",
        summary_en: "Basic introduction and application of the RDM lighting protocol.",
        content: "RDM (Remote Device Management) 是一種基於 DMX512 的雙向通訊協定... 讓燈光控制員可以遠端設定燈具位址、監測溫度及運作狀態。"
    },
    {
        category: "networking",
        name: "sACN 協定詳解",
        name_en: "sACN Protocol Deep Dive",
        file: "sacn.docx",
        url: "tutorials/sacn.html",
        summary: "深入探討串流 ACN (sACN) 在大型演出中的應用。",
        summary_en: "In-depth exploration of Streaming ACN (sACN) in large-scale shows.",
        content: "sACN 是目前燈光網路的主流協定之一... 本文詳述了 sACN 的封包架構、優先權設定以及如何在交換器上進行流量優化。"
    },
    {
        category: "networking",
        name: "光纖 HUB 選擇指南",
        name_en: "Fiber Hub Selection Guide",
        file: "光纖HUB選擇.docx",
        url: "tutorials/hub.html",
        summary: "針對演出現場的光纖設備與網路交換器選擇建議。",
        summary_en: "Recommendations for fiber equipment and network switches on-site.",
        content: "有人敲碗的光纖以及設備的選擇... 在長距離傳輸時，單模與多模光纖的選擇至關重要，本文推薦了幾款穩定性高的產品。"
    },
    {
        category: "lighting",
        name: "燈光技術概論",
        name_en: "Intro to Lighting Tech",
        file: "概論.docx",
        url: "tutorials/intro.html",
        summary: "從零開始的燈光技術基礎教學。",
        summary_en: "Beginner-friendly fundamental lighting technology tutorial.",
        content: "燈光技術不僅是照亮舞台，更是藝術與技術的交集... 涵蓋了基礎電路、色彩理論與燈光設計的基本流程。"
    },
    {
        category: "lighting",
        name: "燈具功能講解",
        name_en: "Fixture Functions Explained",
        file: "燈具功能講解.docx",
        url: "tutorials/fixtures.html",
        summary: "詳細拆解各類專業燈具的功能與參數。",
        summary_en: "Detailed breakdown of professional lighting fixture functions.",
        content: "妳各位控燈的夥伴，了解燈具的功能是第一步... 從 Pan/Tilt、Gobo 到 CMY 混色系統的深度解析。"
    },
    {
        category: "networking",
        name: "網路概論 (劇場版)",
        name_en: "Networking Intro (Theater Ed.)",
        file: "網路概論.docx",
        url: "tutorials/network-intro.html",
        summary: "專為劇場技術人員整理的網路基礎知識。",
        summary_en: "Network fundamentals curated for theater technicians.",
        content: "因受到北藝中心劇場燈光技術人員的啟發... 講解了 IP 位址分配、子網路遮罩與劇場環境中的網路隔離觀念。"
    },
    {
        category: "tools",
        name: "PDF 數量計算工具",
        name_en: "PDF Counter Tool",
        file: "pdf計算.docx",
        url: "tutorials/pdf-tool.html",
        summary: "利用自動化工具快速計算 PDF 文件中的特定圖案數量。",
        summary_en: "Use automation to quickly count specific patterns in PDF files.",
        content: "在繁瑣的標記工作中，自動化計數能大幅提升效率... 本文介紹了如何使用 Python 套件協助計算 PDF 中的燈圖數量。"
    },
    {
        category: "networking",
        name: "網路檢視 sACN 實務",
        name_en: "sACN Monitoring in Practice",
        file: "網路檢視sacn.docx",
        url: "tutorials/sacn-view.html",
        summary: "如何實地監測 sACN 訊號的健康狀態。",
        summary_en: "How to monitor sACN signal health in real-world scenarios.",
        content: "當網路訊號出現抖動，如何第一時間定位問題？介紹了 Wireshark 與專屬檢視軟體的應用實務。"
    }
];

const software = [
    {
        id: "osc_timecode",
        name: "OSC Timecode Tool",
        name_en: "OSC Timecode Tool",
        tagline: "專業音訊播放與時間碼同步工具",
        tagline_en: "Professional Audio Playback & Timecode Sync Tool",
        description: "專為燈光設計師與舞台技術人員打造，支援 MP3/WAV/OGG 播放與 LTC WAV 匯出，並透過 OSC 協定與 ETC/EOS 燈控台深度同步。",
        description_en: "Built for lighting designers and stage technicians, supporting MP3/WAV/OGG playback and LTC WAV export, with deep sync for ETC/EOS via OSC protocol.",
        url: "products/osc-tool.html",
        manual: "Manual/osc time codeManual.html",
        manual_en: "Manual/osc_time_code_Manual_en.html",
        features: [
            "支援 OSC 指令發送至 ETC 燈控台",
            "實體 LTC 時間碼輸出 (24/25/30 FPS)",
            "即時音訊波形視覺化與 Cue 點標記",
            "sACN (E1.31) DMX 遠端遙控播放功能",
            "自動續播與清單管理功能",
            "支援 CSV 匯入匯出與 Cue 資料管理",
            "LTC (左聲道) + 原始音訊 (右聲道) WAV 輸出"
        ],
        features_en: [
            "Support OSC command sending to ETC consoles",
            "Physical LTC Timecode output (24/25/30 FPS)",
            "Real-time audio waveform visualization & Cue marking",
            "sACN (E1.31) DMX Remote Playback Control",
            "Auto-next & Playlist management",
            "Support CSV import/export & Cue data management",
            "LTC (Left) + Original Audio (Right) WAV Export"
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
        url: "products/etc-grid-tool.html",
        manual: "Manual/Grid_Tool_Manual.html",
        manual_en: "Manual/Grid_Tool_Manual_en.html",
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
    },
    {
        id: "etc_cue_photo",
        name: "ETC Cue Photo Tool",
        name_en: "ETC Cue Photo Tool",
        tagline: "自動接收 OSC 訊號並在 Cue 完成時截圖",
        tagline_en: "Auto-record screenshot when Cue is fired via OSC",
        description: "專為 ETC 燈光控台設計，自動偵測 Cue 與 Channel 指令，即時截取視訊畫面並匯出 PDF/Excel 記錄。",
        description_en: "Designed for ETC consoles. Auto-detects Cue/Channel commands, captures video frame instantly, and exports PDF/Excel records.",
        url: "products/etc-cue-photo.html",
        manual: "Manual/ETC_Cue_Manual.html",
        manual_en: "Manual/ETC_Cue_Manual_en.html",
        features: [
            "多元視訊輸入 (USB/NDI/RTSP)",
            "Cue 模式自動截圖與去重",
            "CH 模式支援 Auto-Delay 拍照",
            "支援 Excel 與 PDF 專業匯出",
            "視訊錄影與精確時間戳功能",
            "sACN 網路協定輸觸發截圖"
        ],
        features_en: [
            "Multi-Video Input (USB/NDI/RTSP)",
            "Cue Mode Auto-Screenshot & Dedup",
            "CH Mode with Auto-Delay Snap",
            "Professional Excel & PDF Export",
            "Video Recording & Precise Timestamps",
            "sACN Network Input & Auto-Triggering"
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

const latestUpdates = [
    {
        date: "2026-02-11",
        content: "ETC Cue Photo Tool 更新：新增 sACN 網路協定觸發截圖功能",
        content_en: "ETC Cue Photo Tool: Added sACN Network Trigger for Screenshots"
    },
    {
        date: "2026-02-07",
        content: "全系列軟體新增線上說明書功能，歡迎查閱",
        content_en: "All software now includes online manuals. Feel free to check them out!"
    },
    {
        date: "2026-02-06",
        content: "ETC Cue Photo Tool v3.0 更新：新增視訊錄影與精確時間戳功能",
        content_en: "ETC Cue Photo Tool v3.0: Added Video Recording & Precise Timestamping"
    },
    {
        date: "2026-02-04",
        content: "新增 ETC Cue Photo Tool 自動截圖記錄軟體",
        content_en: "New Release: ETC Cue Photo Tool - Auto Screenshot & Documentation"
    },
    {
        date: "2026-01-21",
        content: "OSC Timecode Tool 新增 LTC + Audio WAV 匯出功能",
        content_en: "OSC Timecode Tool: Added LTC + Audio WAV Export feature"
    }
];
