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
        id: "ma2_osc_tool",
        name: "OSC to MA2 Tool",
        name_en: "OSC to MA2 Tool",
        tagline: "創新思維，輕鬆實現跨平台 OSC 整合",
        tagline_en: "Innovative cross-platform OSC integration",
        description: "OSC（Open Sound Control）協定是現今業界廣泛使用的標準，舉凡 QLab、Resolume、TouchDesigner 等各大軟體皆具備強大支援。本工具運用創新技術，讓 MA2 也能完美無縫地接收 OSC，大幅提升跨設備連動的靈活性與創意空間。",
        description_en: "OSC is the industry standard widely supported by QLab, Resolume, TouchDesigner, etc. This innovative tool empowers MA2 to flawlessly receive OSC, vastly improving flexibility and cross-device sync capabilities.",
        url: "products/ma2-osc-tool.html",
        manual: "Manual/OSC to MA2 Manual.html",
        manual_en: "Manual/OSC to MA2 Manual.html",
        features: [
            "無縫銜接各類支援 OSC 協定的現代軟體與設備",
            "即時高效轉換，並精準轉發 OSC 訊號至 MA2",
            "打破設備孤島，激發無限的演出創意與整體連動性"
        ],
        features_en: [
            "Seamlessly connect any modern software or device supporting OSC",
            "Real-time and highly efficient signal translation to MA2",
            "Break hardware silos to inspire boundless show creativity"
        ]
    },
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
            "統一設定視窗，管理 OSC、sACN 與時間碼輸出",
            "即時音訊波形視覺化與 Cue 點標記",
            "sACN (E1.31) DMX 遠端遙控播放功能",
            "支援 ETC 控台版本選擇 (3.3.5+ / 3.3.4-)",
            "LTC (左聲道) + 原始音訊 (右聲道) WAV 輸出",
            "MTC (MIDI Timecode) 與 LTC (實體音訊) 雙模式輸出"
        ],
        features_en: [
            "Unified Settings window for OSC, sACN, and Timecode management",
            "Real-time audio waveform visualization and Cue marking",
            "sACN (E1.31) DMX remote playback control",
            "Support for ETC console version selection (3.3.5+ / 3.3.4-)",
            "LTC (Left) + Original Audio (Right) WAV output",
            "Dual mode output: MTC (MIDI Timecode) and LTC (Audio)"
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
            "整合標準 CIE 1931 色度圖與佈局管理",
            "ETC Magic Sheet 遠端連動與按鈕整合",
            "RTSP 桌面/視窗多框串流與文字浮水印"
        ],
        features_en: [
            "Visualized grid layout with smart drag-and-drop",
            "MA3-style quick color grouping, no manual calc",
            "Auto-fetch Augment3d positions for quick layout",
            "Support console CH input for auto-grouping",
            "Integrated CIE 1931 chromaticity diagram",
            "ETC Magic Sheet remote control & button integration",
            "RTSP multi-region streaming with text overlay"
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
            "多元視訊輸入 (USB/RTSP)",
            "Cue 模式自動截圖與去重",
            "CH 模式支援 Auto-Delay 拍照",
            "支援 Excel 與 PDF 專業匯出",
            "視訊錄影與精確時間戳功能",
            "sACN 網路協定輸觸發截圖",
            "內容與備註同步 ETC Label & Node"
        ],
        features_en: [
            "Multi-Video Input (USB/RTSP)",
            "Cue Mode Auto-Screenshot & Dedup",
            "CH Mode with Auto-Delay Snap",
            "Professional Excel & PDF Export",
            "Video Recording & Precise Timestamps",
            "sACN Network Input & Auto-Triggering",
            "Content & Notes Sync (ETC Label & Node)"
        ]
    },
    {
        id: "cue_lab",
        name: "Cue Lab",
        name_en: "Cue Lab",
        tagline: "演出控制與播放軟體",
        tagline_en: "Show Control & Playback Software",
        description: "類似 macOS QLab 的演出控制軟體，支援音軌、影片、圖片依序播放，並具備多螢幕投影與四角獨立梯形校正功能。",
        description_en: "A macOS QLab-like show control software supporting sequential audio, video, and image playback, with multi-screen projection and 4-corner keystone correction.",
        url: "products/cue-lab.html",
        manual: "Manual/Cue_LAB Manual.html",
        manual_en: "Manual/Cue_LAB Manual_en.html",
        features: [
            "多軌音影播放 (支援淡入/淡出、自動連動與群組播放)",
            "多路獨立音效卡路由與聲道音量包絡線控制",
            "多螢幕投影輸出 (支援影片與圖片的全螢幕投影)",
            "獨立四角梯形校正 (配合現場投影進行畫面調整)",
            "局部與全域遮罩 (支援自訂多遮罩與全域啟用開關，解決投影遮擋問題)",
            "WMI 啟動防卡死與註冊表高可靠備用機制"
        ],
        features_en: [
            "Multi-track audio/video playback (supports fade in/out, follow, and group cues)",
            "Multi-device audio routing and independent channel volume envelopes",
            "Multi-screen projection output (full screen video/image projection)",
            "4-corner keystone correction (adjust projection to match physical surfaces)",
            "Local & Global Masks (Support custom masks & global toggle switch to resolve projection blocking)",
            "WMI startup hang protection and registry hardware GUID fallback"
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
    },
    {
        id: "rtsp_tool",
        name: "螢幕 RTSP 串流工具",
        name_en: "Screen RTSP Streaming Tool",
        tagline: "即時螢幕與視窗串流工具",
        tagline_en: "Real-time Screen & Window Streaming Tool",
        description: "可將「整個螢幕」或「指定視窗」即時推送成 RTSP 串流，供 ETC 等軟體接收",
        description_en: "Streams your full screen or selected window as RTSP for ETC and other software.",
        url: "https://drive.google.com/file/d/19Y9nigLXjWoHCcLITu-x2XzBTHMgS1B2/view?usp=sharing",
        btn_key: "btn_download_app",
        manual: "Manual/RTSP TOOL Manual.html",
        features: ["雙來源模式 (全螢幕/指定視窗)", "自動下載 FFmpeg 與 MediaMTX", "低延遲推流技術 (RTSP)", "即時狀態回饋 (FPS / Bitrate)"],
        features_en: ["Dual Source (Full Screen/Window)", "Auto FFmpeg & MediaMTX download", "Low-latency RTSP streaming", "Real-time Metrics (FPS / Bitrate)"]
    }
];

const latestUpdates = [
    {
        date: "2026-06-16",
        content: "Cue Lab 重磅更新：新增多音軌裝置路由輸出、獨立聲道音量包絡線編輯，以及 WMI 啟動防卡死保護機制。歡迎 <a href='products/cue-lab.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('cue_lab_TickerDetails', 'TickerDetails')\">點此了解詳情</a>",
        content_en: "Cue Lab Major Update: Added multi-device audio routing, channel volume envelope editing, and WMI startup hang protection. <a href='products/cue-lab.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('cue_lab_TickerDetails', 'TickerDetails')\">Learn More</a>"
    },
    {
        date: "2026-06-10",
        content: "全新上架：演出控制軟體 Cue Lab 已發布！支援音軌/影片/圖片播放、多螢幕投影與四角梯形校正。歡迎 <a href='products/cue-lab.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('cue_lab_TickerDetails', 'TickerDetails')\">點此了解詳情</a>",
        content_en: "New Release: Show control software Cue Lab is out now! Supports audio/video/image playback, multi-screen projection & 4-corner keystone correction. <a href='products/cue-lab.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('cue_lab_TickerDetails', 'TickerDetails')\">Learn More</a>"
    },
    {
        date: "2026-05-04",
        content: "OSC Timecode Tool v6.0 重磅更新：新增 MTC 支援、統一設定視窗與 ETC 控台版本適配功能",
        content_en: "OSC Timecode Tool v6.0 Major Update: Added MTC support, Unified Settings, and ETC Console version compatibility."
    },
    {
        date: "2026-04-26",
        content: "ETC Eos Grid Tool 更新：新增 ETC Magic Sheet 整合與 RTSP 多框串流功能",
        content_en: "ETC Eos Grid Tool Update: Added ETC Magic Sheet Integration & RTSP Multi-Region Streaming"
    },
    {
        date: "2026-03-31",
        content: "全新上架：創新的 OSC to MA2 Tool 已經發布，完美橋接跨平台裝置！歡迎 <a href='products/ma2-osc-tool.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('ma2_osc_tool_TickerDetails', 'TickerDetails')\">點此了解詳情</a> (或 <a href='Manual/OSC%20to%20MA2%20Manual.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('ma2_osc_tool_TickerManual', 'TickerManual')\">查看說明書</a>)",
        content_en: "New Release: The innovative OSC to MA2 Tool is out now! <a href='products/ma2-osc-tool.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('ma2_osc_tool_TickerDetails', 'TickerDetails')\">Learn More</a> (or <a href='Manual/OSC%20to%20MA2%20Manual.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('ma2_osc_tool_TickerManual', 'TickerManual')\">View Manual</a>)"
    },
    {
        date: "2026-03-06",
        content: "新增：螢幕 RTSP 串流工具已發布，歡迎 <a href='https://drive.google.com/file/d/19Y9nigLXjWoHCcLITu-x2XzBTHMgS1B2/view?usp=sharing' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('rtsp_tool_TickerDownload', 'TickerDownload')\">點此下載</a> (或 <a href='Manual/RTSP TOOL Manual.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('rtsp_tool_TickerManual', 'TickerManual')\">查看說明書</a>)",
        content_en: "New Release: Screen RTSP Streaming Tool available <a href='https://drive.google.com/file/d/19Y9nigLXjWoHCcLITu-x2XzBTHMgS1B2/view?usp=sharing' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('rtsp_tool_TickerDownload', 'TickerDownload')\">Download Here</a> (or <a href='Manual/RTSP TOOL Manual.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('rtsp_tool_TickerManual', 'TickerManual')\">View Manual</a>)"
    },
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
