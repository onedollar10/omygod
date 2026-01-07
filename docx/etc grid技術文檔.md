# ETC Eos Grid Tool - 技術文檔與使用手冊

## 1. 專案簡介
**ETC Eos Grid Tool** 是一個專為 ETC Eos 燈光控制台設計的視覺化輔助工具。它提供了一個直觀的網格介面（Grid Matrix），讓使用者可以透過圖形化的方式來選擇、排列和控制燈具（Channels）。

### 主要功能
- **視覺化網格佈局**：以網格形式顯示燈具通道，直觀呈現舞台配置。
- **靈活的選擇操作**：支援單選、多選（Ctrl）、範圍選擇（Shift）以及滑鼠拖曳框選。
- **拖放排位 (Drag & Drop)**：可自由拖曳單個或多個燈具方塊來調整其在網格中的位置，支援自動避讓和位置交換。
- **佈局管理 (Layouts)**：可儲存和載入不同的網格佈局，適應不同場景需求。
- **群組功能 (Groups)**：快速建立和調用燈具群組。
- **雙向 OSC 通訊**：
  - **發送指令**：點擊網格即可向 ETC Eos 發送選擇指令。
  - **接收反饋**：接收控台的選擇狀態（Active Channels），並在 UI 上高亮顯示。
  - **3D 位置同步**：支援讀取 Augment3d 的位置資訊並更新網格位置。
- **顏色控制**：內建 CIE 色度圖選色器，可直接控制燈具顏色。

---

## 2. 系統需求與安裝

### 系統環境
- **作業系統**：Windows (推薦), macOS, Linux
- **Python 版本**：Python 3.8 或更高版本

### 依賴套件
本程式依賴以下 Python 函式庫，請查看 `requirements_osc.txt`：
- `python-osc`: 用於 OSC 通訊
- `tkinter`: 用於圖形介面 (通常 Python 內建)
- `numpy`: 用於數學運算

### 安裝步驟
1. 確保已安裝 Python。
2. 安裝依賴：
   ```bash
   pip install -r requirements_osc.txt
   ```
3. 執行程式：
   ```bash
   python main.py
   ```

---

## 3. 使用說明

### 3.1 基礎操作
- **啟動程式**：執行 `main.py`，視窗將自動最大化。
- **選擇燈具**：
  - **左鍵點擊**：選擇單個燈具（通道）。
  - **Ctrl + 點擊**：加選/減選特定燈具。
  - **Shift + 點擊**：選擇從上一個選中燈具到當前點擊範圍內的所有燈具。
  - **滑鼠拖曳**：畫出矩形框選區域內的燈具。
- **移動燈具**：
  - 選中一個或多個燈具後，按住左鍵拖曳即可移動它們在網格中的位置。
  - 放開滑鼠後，燈具會自動吸附到最近的網格格點。
  - 系統會自動處理位置衝突，嘗試尋找最近的空位。

### 3.2 右鍵選單
在網格區域點擊右鍵，可呼叫功能選單：
- **Layout Manager**：開啟佈局管理器，儲存或載入目前的網格排列。
- **CIE Color Picker**：開啟顏色選擇器，控制選中燈具的顏色。
- **Group Manager**：開啟群組管理器。
- **Settings**：設定 OSC 連線參數。
- **Clear Selection**：取消所有選擇。

### 3.3 OSC 設定
首次使用請先至 **Settings** 設定連線：
- **Eos IP**：輸入 ETC Eos 控台的 IP 位址。
- **OSC Out Port**：發送埠 (預設 8000)。
- **OSC In Port**：接收埠 (預設 8001)。
- **Enable OSC Listener**：勾選以啟用雙向回饋，讓程式能顯示控台當前的選擇狀態。

---

## 4. 技術架構文檔

### 4.1 檔案結構
- `main.py`: 程式入口點，初始化主視窗。
- `ui.py`: 核心 UI 邏輯。包含 `GridMatrixUI` 類別，負責網格繪製、滑鼠事件處理（`MultiSelectManager`, `MultiDragHandler`）。
- `osc_message_handler.py`: 處理接收到的 OSC 訊息，解析 Active Channels 和 3D 位置數據。
- `osc_listener_manager.py`: 管理 OSC 監聽伺服器線程。
- `channel_parser.py`: 負責解析和格式化通道字串（如 "1-5, 7, 10"）。
- `layout_manager.py`: 負責將網格佈局儲存為 JSON 檔案。
- `group_manager.py`: 管理燈具群組數據。
- `cie_color_picker.py`: 實作顏色選擇邏輯與 UI。
- `osc_config.json`: 儲存使用者的 OSC 設定檔。

### 4.2 核心類別說明

#### `GridMatrixUI` (ui.py)
主介面類別，負責：
- 初始化 Tkinter Canvas。
- 繪製網格線和燈具方塊。
- 綁定滑鼠事件（點擊、拖曳、右鍵）。
- 更新燈具狀態（顏色、邊框）。

#### `MultiSelectManager` (ui.py)
專責處理複雜的選擇邏輯：
- 維護 `selected_items` 集合。
- 處理 Shift 連續選擇和 Ctrl 多重選擇邏輯。
- 提供 API 供外部查詢當前選中的通道。

#### `MultiDragHandler` (ui.py)
處理多物件拖曳邏輯：
- 計算拖曳時的相對位移。
- 預覽拖曳位置。
- `resolve_placement_conflicts`: 智慧演算法，解決放置時的位置重疊問題，使用螺旋搜尋算法尋找最近空位。

#### `OSCMessageHandler` (osc_message_handler.py)
接收來自 Eos 的 OSC 封包：
- `/eos/out/active/chan`: 解析當前活動通道，並回調 UI 更新高亮狀態。
- `/eos/out/get/patch/.../adjust3d/position`: 解析 Augment3d 的 3D 座標，並可選地更新網格位置。

### 4.3 數據儲存
- **Layouts**: 儲存在 `layouts/` 資料夾下，格式為 JSON，記錄每個 Channel ID 對應的 (Row, Col) 座標。
- **Groups**: 儲存在 `groups/` 資料夾下，記錄群組名稱與包含的通道。

---

## 5. 常見問題排除 (Troubleshooting)

**Q: 程式無法啟動？**
A: 請檢查是否已安裝 Python 3 以及 `requirements_osc.txt` 中的所有依賴庫。

**Q: 無法控制控台？**
A:
1. 檢查 **Settings** 中的 IP 是否正確。
2. 檢查控台端的 OSC 設定 (Setup -> System -> Show Control -> OSC) 是否已開啟，且 RX/TX Port 對應正確。
3. 確保防火牆未阻擋 UDP 8000/8001 端口。

**Q: 控台選燈時，Grid Tool 沒有反應？**
A: 請在 Settings 中確認 "Enable OSC Listener" 已勾選，並且 OSC In Port 與控台的 TX Port 一致。

**Q: 拖曳燈具後位置錯亂？**
A: 這是因為目標位置已被佔用。程式會自動尋找最近的空位放置。您可以再次拖曳以調整至理想位置，並建議隨時使用 Layout Manager 儲存理想的佈局。
