const categories = [
    { id: "networking", name: "網路通訊" },
    { id: "lighting", name: "燈光技術" },
    { id: "tools", name: "實務工具" }
];

const tutorials = [
    {
        category: "networking",
        name: "NDI 檢視教學",
        file: "NDI 檢視.docx",
        url: "tutorials/ndi.html",
        summary: "分享新版本的 NDI 檢視工具與使用心得。",
        content: "因友人想要我分享一下新版本的 NDI 檢視工具... 此教學介紹了如何有效地在複雜網路環境中檢視 NDI 訊號，包含常見的延遲問題處理與基礎設備需求。"
    },
    {
        category: "lighting",
        name: "RDM 協定入門",
        file: "RDM.docx",
        url: "tutorials/rdm.html",
        summary: "燈光通訊協定 RDM 的基礎介紹與應用。",
        content: "RDM (Remote Device Management) 是一種基於 DMX512 的雙向通訊協定... 讓燈光控制員可以遠端設定燈具位址、監測溫度及運作狀態。"
    },
    {
        category: "networking",
        name: "sACN 協定詳解",
        file: "sacn.docx",
        url: "tutorials/sacn.html",
        summary: "深入探討串流 ACN (sACN) 在大型演出中的應用。",
        content: "sACN 是目前燈光網路的主流協定之一... 本文詳述了 sACN 的封包架構、優先權設定以及如何在交換器上進行流量優化。"
    },
    {
        category: "networking",
        name: "光纖 HUB 選擇指南",
        file: "光纖HUB選擇.docx",
        url: "tutorials/hub.html",
        summary: "針對演出現場的光纖設備與網路交換器選擇建議。",
        content: "有人敲碗的光纖以及設備的選擇... 在長距離傳輸時，單模與多模光纖的選擇至關重要，本文推薦了幾款穩定性高的產品。"
    },
    {
        category: "lighting",
        name: "燈光技術概論",
        file: "概論.docx",
        url: "tutorials/intro.html",
        summary: "從零開始的燈光技術基礎教學。",
        content: "燈光技術不僅是照亮舞台，更是藝術與技術的交集... 涵蓋了基礎電路、色彩理論與燈光設計的基本流程。"
    },
    {
        category: "lighting",
        name: "燈具功能講解",
        file: "燈具功能講解.docx",
        url: "tutorials/fixtures.html",
        summary: "詳細拆解各類專業燈具的功能與參數。",
        content: "妳各位控燈的夥伴，了解燈具的功能是第一步... 從 Pan/Tilt、Gobo 到 CMY 混色系統的深度解析。"
    },
    {
        category: "networking",
        name: "網路概論 (劇場版)",
        file: "網路概論.docx",
        url: "tutorials/network-intro.html",
        summary: "專為劇場技術人員整理的網路基礎知識。",
        content: "因受到北藝中心劇場燈光技術人員的啟發... 講解了 IP 位址分配、子網路遮罩與劇場環境中的網路隔離觀念。"
    },
    {
        category: "tools",
        name: "PDF 數量計算工具",
        file: "pdf計算.docx",
        url: "tutorials/pdf-tool.html",
        summary: "利用自動化工具快速計算 PDF 文件中的特定圖案數量。",
        content: "在繁瑣的標記工作中，自動化計數能大幅提升效率... 本文介紹了如何使用 Python 套件協助計算 PDF 中的燈圖數量。"
    },
    {
        category: "networking",
        name: "網路檢視 sACN 實務",
        file: "網路檢視sacn.docx",
        url: "tutorials/sacn-view.html",
        summary: "如何實地監測 sACN 訊號的健康狀態。",
        content: "當網路訊號出現抖動，如何第一時間定位問題？介紹了 Wireshark 與專屬檢視軟體的應用實務。"
    }
];

const software = [
    {
        id: "osc_timecode",
        name: "OSC Timecode Tool 4.0",
        tagline: "專業音訊播放與時間碼同步工具",
        description: "專為燈光設計師與舞台技術人員打造，支援 MP3/WAV/OGG，並透過 OSC 協定與 ETC/EOS 燈控台深度同步。",
        url: "products/osc-tool.html",
        features: [
            "支援 OSC 指令發送至 ETC 燈控台",
            "實體 LTC 時間碼輸出 (24/25/30 FPS)",
            "即時音訊波形視覺化與 Cue 點標記",
            "自動續播與清單管理功能",
            "支援 CSV 匯入匯出與 Cue 資料管理"
        ]
    },
    {
        id: "etc_grid",
        name: "ETC Eos Grid Tool",
        tagline: "視覺化燈具矩陣控制系統",
        description: "專為 ETC Eos 燈控台設計的視覺化輔助工具，提供直觀的網格介面進行燈具排列與控制。",
        url: "products/etc-grid-tool.html",
        features: [
            "視覺化網格佈局與智慧拖放排位",
            "MA3 風格快速色彩分組，無需手動計算",
            "自動獲取 Augment3d 位置進行快速排列",
            "支援控台輸入 CH 自動獲取並傳回分組",
            "整合標準 CIE 1931 色度圖與佈局管理"
        ]
    }
];
