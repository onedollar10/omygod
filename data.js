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
        id: "etc_cue_photo",
        name: "ETC Cue Photo Tool",
        name_en: "ETC Cue Photo Tool",
        tagline: "排練自動隨 Cue 拍照存檔 · 切割燈光斑即時還原",
        tagline_en: "Automated Cue-by-Cue Photo Logging · Real-Time Shutter Framing Visualizer",
        description: "解決舞台排練時「手動拍照做 Cue 記錄手忙腳亂」、「切割燈現場盲調看不見光斑歪斜」的痛點。控台每下一記 Cue 自動拍照錄影、免按確認直接回寫 Cue 備註，並將切割燈切刀姿態精準還原為現場實際投射光斑！",
        description_en: "Solves the rush of manual Cue logging and the difficulty of blind shutter adjustments on stage. Automatically captures photos and video as Cues fire, updates Cue notes live, and renders real moving light shutter framing.",
        url: "products/etc-cue-photo.html",
        manual: "Manual/ETC_Cue_Manual.html",
        manual_en: "Manual/ETC_Cue_Manual_en.html",
        video: "https://www.youtube.com/playlist?list=PLaSodMfnFBsA",
        features: [
            "🎯 自動隨 Cue 拍照錄影：控台執行 Cue 自動精準截圖與錄影，一鍵匯出 Excel/PDF 報告",
            "✂️ 切割燈光斑所見即所得：自適應刀盤動態校正，現場切刀角度與形狀即時在畫布還原",
            "⭐ 燈具切刀基準跟隨：設定一顆基準燈，同桿位跟隨燈具自動同步，告別重複設定",
            "📋 控台資料直覺透視：Cue 標籤備註直接修改免按 Enter、調色盤雙擊立即套用"
        ],
        features_en: [
            "🎯 Auto Cue Capture & Recording: Fires with Cues, logs video timestamps, exports to Excel/PDF reports",
            "✂️ WYSIWYG Shutter Framing: Live adaptive canvas visualizes real beam shape and blade angles",
            "⭐ Blade Baseline Follower: Calibrate one master fixture, followers auto-sync across positions",
            "📋 Intuitive Console Telemetry: Two-way Cue List editing without Enter confirmation, quick Palette fire"
        ]
    },
    {
        id: "etc_grid",
        name: "ETC Eos Grid Tool",
        name_en: "ETC Eos Grid Tool",
        tagline: "矩陣燈具快速排列 · 一鍵完成跑燈色彩漸變分組",
        tagline_en: "Fast Fixture Matrix Layout · One-Click Color Chase & Grouping",
        description: "解決在 ETC 控台上「矩陣燈具排位慢、手動計算跑燈色彩漸變繁瑣」的痛點。提供直觀拖曳畫布與一鍵色彩分組，數秒內完成複雜矩陣排列與流動效果！",
        description_en: "Solves slow fixture layout and tedious manual color gradient math on ETC consoles. Offers an intuitive drag-and-drop grid and one-click color grouping for instant chase effects.",
        url: "products/etc-grid-tool.html",
        manual: "Manual/Grid_Tool_Manual.html",
        manual_en: "Manual/Grid_Tool_Manual_en.html",
        video: "https://www.youtube.com/playlist?list=PLMwlChksQtYo",
        features: [
            "💡 拖曳式矩陣排位：直觀排列舞台燈具矩陣，自動套用 Augment3d 實際座標",
            "🎨 MA3 風格一鍵漸變：免手動計算色碼，一秒生成流暢的色彩跑燈分組",
            "⚡ 控台深度雙向連動：輸入 CH 自動獲取並傳回分組，支援 Magic Sheet 遠端連動"
        ],
        features_en: [
            "💡 Drag-and-Drop Matrix Layout: Intuitive visual canvas with automatic Augment3d coordinate sync",
            "🎨 One-Click MA3-Style Gradients: Generate smooth color chase groups without manual math",
            "⚡ Deep Console Integration: Bidirectional channel sync with Magic Sheet remote triggers"
        ]
    },
    {
        id: "cue_lab",
        name: "Cue Lab",
        name_en: "Cue Lab",
        tagline: "Windows 專屬劇場演出播放系統 · 音效視訊投影一體化控制",
        tagline_en: "Professional Stage Show Control for Windows · All-in-One Audio/Video/Projection",
        description: "解決 Windows 系統「缺乏好用、平價且專業的劇場多媒體播放軟體（QLab 替代方案）」的痛點。一套搞定多軌音效路由、多螢幕投影、網格梯形校正（Keystone）與燈光網路連動！",
        description_en: "Solves the lack of a dedicated stage show control tool (QLab alternative) on Windows. Integrates multi-track audio routing, multi-screen video projection, Mesh Keystone warping, and lighting network triggers.",
        url: "products/cue-lab.html",
        manual: "Manual/Cue_LAB Manual.html",
        manual_en: "Manual/Cue_LAB Manual_en.html",
        video: "https://www.youtube.com/playlist?list=PLdw8lI3-AanI",
        features: [
            "🎬 多媒體一鍵循序播放：支援音效、視訊、圖片與 FADE 漸變，排練演出穩定不跳痛",
            "📐 投影幾何梯形校正：內建四角與 3x3 網格校正，曲面或不規則投影現場秒調",
            "📡 燈光與網路投影機連動：支援 sACN 燈控台遙控與 OSC / PJLink 遠端指令控制",
            "🛡️ 雙機熱備份與專案打包：主副控電腦即時心跳同步，素材與設定一鍵打包防遺漏"
        ],
        features_en: [
            "🎬 Multi-Media Cue Playback: Seamlessly triggers audio, video, images, and FADE transition chains",
            "📐 Integrated Mesh Keystone: 4-corner & 3x3 grid geometry warping for irregular projection surfaces",
            "📡 Lighting & Projector Sync: Controlled via sACN lighting desks and OSC / PJLink projector commands",
            "🛡️ Hot-Standby Redundancy: Real-time dual-machine failover and one-click full project packaging"
        ]
    },
    {
        id: "osc_timecode",
        name: "OSC Timecode Tool",
        name_en: "OSC Timecode Tool",
        tagline: "放音樂即同步發送時間碼 · 劇場排練隨點隨放精準對位",
        tagline_en: "Audio Playback with Auto Timecode Sync · Rehearsal Precision",
        description: "解決排練時「音樂與燈光時間碼難以同步」、「昂貴時間碼發射硬體門檻高」的痛點。點擊播放音樂即同步向 ETC 燈控台發送時間碼，還能用燈控台直接遙控播放音樂！",
        description_en: "Solves rehearsal timecode desync and eliminates the need for expensive timecode hardware. Plays audio while transmitting OSC/LTC/MTC timecode to ETC consoles, with DMX remote control.",
        url: "products/osc-tool.html",
        manual: "Manual/osc time codeManual.html",
        manual_en: "Manual/osc_time_code_Manual_en.html",
        video: "https://www.youtube.com/playlist?list=PLPMNpDVjAk9o",
        features: [
            "⏱️ 音樂播放即同步時間碼：支援 LTC、MTC 與 OSC，燈光隨音軌精準走位",
            "🎵 視覺化波形與 Cue 點標記：排練跳段、段落重來點擊波形立即同步控台",
            "📡 燈控台遠端遙控播放：燈光師在控台直接下 DMX 指令遠端播放、暫停音樂"
        ],
        features_en: [
            "⏱️ Auto Audio-to-Timecode Sync: Real-time LTC, MTC, and OSC output to lighting desk",
            "🎵 Visual Waveform & Cue Markers: Click anywhere on the waveform to sync console instantly",
            "📡 Remote Console Trigger: Control audio play/pause directly via sACN DMX cues"
        ]
    },
    {
        id: "ma2_osc_tool",
        name: "OSC to MA2 Tool",
        name_en: "OSC to MA2 Tool",
        tagline: "讓 grandMA2 輕鬆接收 OSC 訊號 · 影音燈光無縫連動",
        tagline_en: "Empower grandMA2 with OSC · Seamless Audio-Visual Lighting Sync",
        description: "解決 grandMA2 控台無法靈活接收外部 OSC 指令的痛點。讓 QLab 音效、Resolume 視訊與 TouchDesigner 直接向 MA2 發送控制訊號，打破系統隔閡，實現跨設備全自動燈光觸發！",
        description_en: "Solves grandMA2's limitation in handling incoming OSC signals. Seamlessly connects QLab audio, Resolume video, and TouchDesigner to trigger MA2 cues automatically.",
        url: "products/ma2-osc-tool.html",
        manual: "Manual/OSC to MA2 Manual.html",
        manual_en: "Manual/OSC to MA2 Manual.html",
        features: [
            "🔗 跨設備自動連動：QLab 音效、Resolume 視訊即時連動觸發 MA2 燈光",
            "⚡ 零延遲訊號轉換：精準將外部 OSC 指令即時轉換為 MA2 原生語法",
            "🛠️ 隨插即用免寫腳本：直觀設定連接埠即可穩定運作，告別複雜網路程式碼"
        ],
        features_en: [
            "🔗 Cross-Device Sync: Real-time trigger MA2 cues from QLab, Resolume, and TouchDesigner",
            "⚡ Zero-Latency Translation: Converts external OSC into native MA2 syntax seamlessly",
            "🛠️ Plug & Play: Intuitive port setup without writing complex network scripts"
        ]
    }
];


const apps = [
    {
        id: "etc_eos_rfr",
        name: "ETC EOS OSC RFR Controller",
        name_en: "ETC EOS OSC RFR Controller",
        tagline: "舞台現場隨身調光神器 · 支援 AI 語音開口調光",
        tagline_en: "Pocket Lighting Console on Stage · AI Voice & Wireless Control",
        description: "解決燈光師「舞台走位對光必須在控台與現場來回跑」的痛點。手機或平板一開即是完整 ETC 控台，內建 72 鍵專業鍵盤、推桿與色盤，更能用 AI 語音直接說指令調光，一人獨立高效對光！",
        description_en: "Solves the exhaustion of running back and forth between stage and console during focus. Turns your phone or tablet into a full-featured ETC console with 72-key desk, faders, color picker, and AI voice commands.",
        url: "products/etc-eos-rfr.html",
        manual: "Manual/ETC_EOS_RFR_Manual.html",
        manual_en: "Manual/ETC_EOS_RFR_Manual_en.html",
        features: [
            "🗣️ AI 智慧語音調光：開口說「1號燈 全亮」立即執行，解放雙手現場對光超快",
            "🎛️ 完整控台觸控面板：72 鍵專業數字鍵盤、10 軌虛擬推桿與高精度旋鈕輪盤",
            "🎨 視覺化色彩選取器：CIE 1931 色彩空間直觀調色，常用色溫色卡快捷切換",
            "📱 跨平台隨身攜帶：支援 Windows 電腦、Android 手機與 iOS 平板全螢幕操作"
        ],
        features_en: [
            "🗣️ AI Voice Lighting Control: Speak commands like 'Chan 1 @ Full' for hands-free instant execution",
            "🎛️ Complete Desk Layout: 72-key lighting keypad, 10 motorized-style faders, and rotary encoders",
            "🎨 Visual Color Studio: CIE 1931 chromaticity color picker with quick color temperature presets",
            "📱 Cross-Platform Mobility: Runs seamlessly on Windows, Android phones, and iOS full-screen PWA"
        ]
    }
];

const freeTools = [
    {
        id: "pdf_calculator",
        name: "PDF 計算機",
        name_en: "PDF Calculator",
        tagline: "燈圖燈具自動計數器 · 告別人工肉眼數燈",
        tagline_en: "Automatic Fixture Counter for Plot PDFs · No More Manual Counting",
        description: "解決看燈圖「人工數燈具眼花算錯、費時耗力」的痛點。在 PDF 上框選目標燈具圖案，一秒自動統計全圖相同燈具數量！",
        description_en: "Solves the tedium and human error of manually counting lighting fixtures on PDF plots. Select a pattern and calculate the total count in one second!",
        url: "https://script.google.com/macros/s/AKfycbzTPOOX5m_OR1t7JPbFA3iNDPhrezbOrwuOHrmHuwe62ksb0HG8HQ8mOctwMVHQD6OBHQ/exec",
        features: [
            "🖱️ 框選即算：線上直接使用無需安裝，框選圖案一秒統計",
            "💯 精準防漏：避免人工清點疏漏，出圖清點設備事半功倍"
        ],
        features_en: [
            "🖱️ Direct Online Tool: No installation needed, pattern match with one click",
            "💯 Accurate & Fast: Prevents manual counting errors during prep and rental logistics"
        ]
    },
    {
        id: "rtsp_tool",
        name: "螢幕 RTSP 串流工具",
        name_en: "Screen RTSP Streaming Tool",
        tagline: "電腦畫面即時推流 · 燈控台與預覽軟體無縫接收",
        tagline_en: "Real-Time Screen & Window RTSP Streaming for Consoles",
        description: "解決「電腦畫面或指定軟體視窗想即時傳進燈控台或預覽系統」的串流痛點。一鍵將桌面或視窗推送為低延遲 RTSP 串流，即開即用！",
        description_en: "Solves the hassle of streaming desktop screens or specific application windows into lighting consoles and visualizers via low-latency RTSP.",
        url: "https://drive.google.com/file/d/19Y9nigLXjWoHCcLITu-x2XzBTHMgS1B2/view?usp=sharing",
        btn_key: "btn_download_app",
        manual: "Manual/RTSP TOOL Manual.html",
        features: [
            "🖥️ 雙來源模式：支援全螢幕或單一指定視窗推流",
            "⚡ 低延遲自動推流：內建輕量推流引擎，無需複雜設定一鍵啟動"
        ],
        features_en: [
            "🖥️ Dual Source: Flexible streaming of full screen or selected window",
            "⚡ Low Latency: Built-in lightweight streaming engine with zero complicated configuration"
        ]
    }
];

const latestUpdates = [
    {
        date: "2026-09-23",
        content: "ETC Cue Photo Tool v2.0 重磅大更新：新增「Tab 2 控台資料瀏覽器」(Cue List 免確認回寫、Palette 7合1 快速工作台) 與「物理四刀自適應刀盤」(非零原點校正、基準追隨管理器)，並全系列官方教學影片已上架！歡迎 <a href='https://www.youtube.com/playlist?list=PLaSodMfnFBsA' style='color:#ff5555; font-weight:bold;' target='_blank' onclick=\"trackClick('etc_cue_photo_TickerVideo', 'TickerVideo')\">點此觀看教學影片</a> (或 <a href='products/etc-cue-photo.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('etc_cue_photo_TickerDetails', 'TickerDetails')\">了解詳情</a> / <a href='Manual/ETC_Cue_Manual.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('etc_cue_photo_TickerManual', 'TickerManual')\">查看說明書</a>)",
        content_en: "ETC Cue Photo Tool v2.0 Major Upgrade: Added 'Tab 2 Console Data Browser' (instant Cue List sync, 7-in-1 Palette) & 'Physical 4-Blade Adaptive Shutter' (origin calibration, baseline follower manager), along with official video tutorial series out now! <a href='https://www.youtube.com/playlist?list=PLaSodMfnFBsA' style='color:#ff5555; font-weight:bold;' target='_blank' onclick=\"trackClick('etc_cue_photo_TickerVideo', 'TickerVideo')\">Watch Video Tutorials</a> (or <a href='products/etc-cue-photo.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('etc_cue_photo_TickerDetails', 'TickerDetails')\">Learn More</a> / <a href='Manual/ETC_Cue_Manual_en.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('etc_cue_photo_TickerManual', 'TickerManual')\">View Manual</a>)"
    },
    {
        date: "2026-09-22",
        content: "ETC Eos Grid Tool 官方教學影片已上架！歡迎 <a href='https://www.youtube.com/playlist?list=PLMwlChksQtYo' style='color:#ff5555; font-weight:bold;' target='_blank' onclick=\"trackClick('etc_grid_TickerVideo', 'TickerVideo')\">點此觀看教學影片</a> (或 <a href='products/etc-grid-tool.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('etc_grid_TickerDetails', 'TickerDetails')\">了解詳情</a> / <a href='Manual/Grid_Tool_Manual.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('etc_grid_TickerManual', 'TickerManual')\">查看說明書</a>)",
        content_en: "ETC Eos Grid Tool official video tutorials are out now! <a href='https://www.youtube.com/playlist?list=PLMwlChksQtYo' style='color:#ff5555; font-weight:bold;' target='_blank' onclick=\"trackClick('etc_grid_TickerVideo', 'TickerVideo')\">Watch Video Tutorials</a> (or <a href='products/etc-grid-tool.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('etc_grid_TickerDetails', 'TickerDetails')\">Learn More</a> / <a href='Manual/Grid_Tool_Manual_en.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('etc_grid_TickerManual', 'TickerManual')\">View Manual</a>)"
    },
    {
        date: "2026-09-04",
        content: "Cue Lab 重磅更新：新增 sACN (E1.31) 燈光網路遙控與雙機熱備份 (Dual-Machine Redundancy) 連線同步，並支援全專案素材一鍵覆蓋同步！歡迎 <a href='products/cue-lab.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('cue_lab_TickerDetails', 'TickerDetails')\">點此了解詳情</a> (或 <a href='Manual/Cue_LAB%20Manual.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('cue_lab_TickerManual', 'TickerManual')\">查看說明書</a> / <a href='https://www.youtube.com/playlist?list=PLdw8lI3-AanI' style='color:#ff5555; font-weight:bold;' target='_blank' onclick=\"trackClick('cue_lab_TickerVideo', 'TickerVideo')\">教學影片</a>)",
        content_en: "Cue Lab Major Upgrade: Added sACN (E1.31) Lighting Network Remote Control & Dual-Machine Hot-Standby Redundancy with one-click full project sync! <a href='products/cue-lab.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('cue_lab_TickerDetails', 'TickerDetails')\">Learn More</a> (or <a href='Manual/Cue_LAB%20Manual_en.html' style='color:var(--primary); font-weight:bold;' target='_blank' onclick=\"trackClick('cue_lab_TickerManual', 'TickerManual')\">View Manual</a> / <a href='https://www.youtube.com/playlist?list=PLdw8lI3-AanI' style='color:#ff5555; font-weight:bold;' target='_blank' onclick=\"trackClick('cue_lab_TickerVideo', 'TickerVideo')\">Video Tutorials</a>)"
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
