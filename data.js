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
        tagline: "專業多媒體演出控制與播放系統",
        tagline_en: "Professional Multimedia Show Control & Playback System",
        description: "類似 macOS QLab 的演出控制軟體，支援多軌音影播放、多裝置音效路由、四角/多點網格幾何校正與遮罩融合，並整合 FADE 漸變鏈、RTSP/NDI 網路視訊串流及網路控制 Cue (OSC/PJLink) 等高階舞台 Show Control 功能。",
        description_en: "A macOS QLab-like show control software supporting multi-track playback, multi-device audio routing, 4-corner/Mesh keystone calibration, local/global masks, FADE chain transitions, RTSP/NDI video streaming, and Network Cues (OSC/PJLink).",
        url: "products/cue-lab.html",
        manual: "Manual/Cue_LAB Manual.html",
        manual_en: "Manual/Cue_LAB Manual_en.html",
        features: [
            "多軌音影播放與 FADE 漸變連續鏈控制",
            "多路獨立音效卡路由與聲道獨立音量包絡線",
            "多螢幕投影與背景 RTSP 虛擬螢幕推流輸出",
            "NDI 網路視訊高畫質低延遲串流 (Full NDI & NDI HX)",
            "四角 Keystone 與 3x3 多點網格 (Mesh) 幾何校正",
            "局部與全域遮罩 (支援自訂遮罩與全域啟用開關)",
            "網路控制 Cue (支援標準 OSC 封包與 PJLink 投影機協定)",
            "sACN (E1.31) 燈光網路遙控 (支援 GO/Pause/Stop 等 6 大動作與抗噪鎖定)",
            "雙機熱備份與連線同步 (Master/Standby 心跳跟隨與全專案素材一鍵同步)",
            "專案一鍵打包 (Package Project) 與路徑自癒機制",
            "WMI 啟動防卡死保護與註冊表高可靠備用機制"
        ],
        features_en: [
            "Multi-track playback & FADE Cue chain transition control",
            "Multi-device audio routing & independent channel volume envelopes",
            "Multi-screen projection & background RTSP virtual screen streaming",
            "NDI network video streaming output (Full NDI & NDI HX support)",
            "4-corner & 3x3 multi-point Mesh Keystone calibration",
            "Local & Global Masks (custom masking & global toggle switches)",
            "Network Cues (integrated with standard OSC & PJLink protocols)",
            "sACN (E1.31) Lighting Network Remote Control (6 Core Actions & Anti-Crosstalk)",
            "Dual-Machine Hot-Standby Redundancy & One-Click Full Project Sync",
            "One-click Project Packaging & relative path auto-healing",
            "WMI startup hang protection & high-reliability registry fallback"
        ]
    }
];


const apps = [
    {
        id: "etc_eos_rfr",
        name: "ETC EOS OSC RFR Controller",
        name_en: "ETC EOS OSC RFR Controller",
        tagline: "專業全功能 ETC Eos 燈光遙控控制器 (支援 Gemini AI 智慧語音)",
        tagline_en: "Professional Full-Featured ETC Eos Lighting RFR Controller (with Gemini AI Voice Control)",
        description: "專為 ETC Eos 系列燈光控台（Apex / Gio / Ion Xe / Element 2 / ETCnomad）打造的專業無線遙控軟體。具備 72 鍵 EOS 調光鍵盤、8 組高精度旋鈕滾輪、CIE 1931 色彩選取器、10 軌推桿矩陣、OpenFade 同屏全覽工作台，並內建 Gemini 3.1 Live 智慧語音調光大腦。",
        description_en: "Engineered for ETC Eos Family consoles (Apex, Gio, Ion Xe, Element 2, ETCnomad). Features 72-key lighting keypad, 8 precision rotary encoders, CIE 1931 color picker, 10 motorized-style faders, OpenFade simultaneous desk, and Gemini 3.1 Live AI voice control.",
        url: "products/etc-eos-rfr.html",
        manual: "Manual/ETC_EOS_RFR_Manual.html",
        manual_en: "Manual/ETC_EOS_RFR_Manual_en.html",
        features: [
            "72 鍵專業數字語法鍵盤與 Master Playback 即時播放器",
            "8 組高精度自訂旋鈕滾輪 (支援 11 大類、60+ 燈具參數與微調步進)",
            "CIE 1931 色彩工作室 (P1/P2 雙點漸變與常用色溫色卡快捷)",
            "OpenFade 三欄同屏工作台 (推桿群組 + FAN 扇形模式 + 特效矩陣)",
            "10 軌虛擬推桿與 Size/Rate/Trail/Grouping 特效絕對值推桿",
            "Gemini 3.1 Live + 1ms 本地正則雙軌智慧語音調光系統",
            "跨平台支援：Windows PC、Android 原生 APK 與 iOS PWA 全螢幕"
        ],
        features_en: [
            "72-Key Professional Lighting Keypad & Master Cue Playback Box",
            "8 Precision Rotary Encoders (11 Categories, 60+ Parameters & Step Sizes)",
            "CIE 1931 Color Studio (P1/P2 Fan Gradients & Color Temperature Chips)",
            "OpenFade 3-Column Simultaneous Desk (Faders + FAN Modes + FX Matrix)",
            "10-Track Faders & Size/Rate/Trail/Grouping Absolute FX Faders",
            "Dual-Engine Gemini 3.1 Live + 1ms Local Regex Voice Control System",
            "Cross-Platform: Windows PC, Android Native APK, and iOS Full-Screen PWA"
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
        date: "2026-09-04",
        content: "Cue Lab 重磅更新：新增 sACN (E1.31) 燈光網路遙控與雙機熱備份 (Dual-Machine Redundancy) 連線同步，並支援全專案素材一鍵覆蓋同步！歡迎 <a href='products/cue-lab.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('cue_lab_TickerDetails', 'TickerDetails')\">點此了解詳情</a> (或 <a href='Manual/Cue_LAB%20Manual.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('cue_lab_TickerManual', 'TickerManual')\">查看說明書</a>)",
        content_en: "Cue Lab Major Upgrade: Added sACN (E1.31) Lighting Network Remote Control & Dual-Machine Hot-Standby Redundancy with one-click full project sync! <a href='products/cue-lab.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('cue_lab_TickerDetails', 'TickerDetails')\">Learn More</a> (or <a href='Manual/Cue_LAB%20Manual_en.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('cue_lab_TickerManual', 'TickerManual')\">View Manual</a>)"
    },
    {
        date: "2026-08-28",
        content: "全新發布：ETC EOS OSC RFR 專業燈光遙控控制器已上架！支援 72 鍵調光鍵盤、8 組高精度旋鈕、CIE 1931 色彩選取器與 Gemini 3.1 Live 智慧語音調光。歡迎 <a href='products/etc-eos-rfr.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('etc_eos_rfr_TickerDetails', 'TickerDetails')\">點此了解詳情</a> (或 <a href='Manual/ETC_EOS_RFR_Manual.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('etc_eos_rfr_TickerManual', 'TickerManual')\">查看說明書</a>)",
        content_en: "New Release: ETC EOS OSC RFR Controller is out now! Features 72-key keypad, 8 precision encoders, CIE 1931 color picker, and Gemini 3.1 Live AI voice control. <a href='products/etc-eos-rfr.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('etc_eos_rfr_TickerDetails', 'TickerDetails')\">Learn More</a> (or <a href='Manual/ETC_EOS_RFR_Manual_en.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('etc_eos_rfr_TickerManual', 'TickerManual')\">View Manual</a>)"
    },
    {
        date: "2026-07-05",
        content: "Cue Lab 重磅升級：新增 NDI 網路視訊串流、網路控制 Cue (OSC/PJLink)、多點網格幾何校正 (Mesh Keystone)，並整合 FADE 漸變鏈與 RTSP 離屏推流！歡迎 <a href='products/cue-lab.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('cue_lab_TickerDetails', 'TickerDetails')\">點此了解詳情</a>",
        content_en: "Cue Lab Major Upgrade: Added NDI video streaming, Network Cues (OSC/PJLink), multi-point Mesh Keystone, and integrated FADE transitions & RTSP background streaming! <a href='products/cue-lab.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('cue_lab_TickerDetails', 'TickerDetails')\">Learn More</a>"
    },
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
