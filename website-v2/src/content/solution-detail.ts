import type { Locale } from './home';
import type { solutionIds } from './company';

export type SolutionId = typeof solutionIds[number];
type Entry = readonly [title: string, text: string];
interface SolutionDetail {
  title: string;
  intro: string;
  useCases: readonly Entry[];
  definition?: string;
  workflow: readonly Entry[];
  scope: readonly Entry[];
  tests: readonly Entry[];
  applications?: {
    title: string;
    text: string;
    items: readonly Entry[];
  };
}

export const detailLabels = {
  en: { eyebrow: 'Smart Operations', useCases: 'Where it fits', workflow: 'From data to action', scope: 'What to include in the proposal', tests: 'Pilot acceptance and exceptions', more: 'Explore this solution', contact: 'Discuss a pilot', consult: 'Discuss a solution' },
  'zh-tw': { eyebrow: '智慧營運', useCases: '適用情境', workflow: '資料如何變成現場行動', scope: '採購範圍與交付', tests: '試點驗收與例外處理', more: '查看方案詳情', contact: '討論試點範圍', consult: '洽詢解決方案' },
  th: { eyebrow: 'การดำเนินงานอัจฉริยะ', useCases: 'งานที่เหมาะกับโซลูชัน', workflow: 'จากข้อมูลสู่การปฏิบัติงาน', scope: 'ขอบเขตและสิ่งส่งมอบในข้อเสนอ', tests: 'เกณฑ์ตรวจรับและกรณีผิดปกติ', more: 'ดูรายละเอียดโซลูชัน', contact: 'หารือขอบเขตโครงการนำร่อง', consult: 'ปรึกษาเรื่องโซลูชัน' },
};

export const solutionDetail: Record<Locale, Record<SolutionId, SolutionDetail>> = {
  en: {
    iiot: {
      title: 'IIoT for machine and utility data',
      intro: 'Make selected machine and utility signals usable for shift reviews, maintenance and abnormal-event follow-up. Start with a defined equipment group and a clear action for each measurement.',
      useCases: [
        ['Recurring stops without a reliable timeline', 'Collect available run, stop and count signals so supervisors can compare events with shift notes and ask operators to classify unresolved stops.'],
        ['Utility readings spread across panels', 'Compare selected meters or conditions by time and area. Agree who reviews abnormal consumption or temperatures before sending alerts.'],
      ],
      workflow: [
        ['Survey points and permissions', 'Record equipment IDs, readable signals, data types, units, sampling needs and the OT owner. Plan read-only access. If a point is unavailable, document the gap and agree whether to exclude it, use a manual record or quote an added sensor.'],
        ['Collect and qualify', 'Where equipment and network conditions allow, map approved points to a gateway or existing data service. Keep source time and quality status where available. Record gaps, resets and manual values separately.'],
        ['Review and act', 'Show a shift timeline or trend with the relevant operating context. Route an agreed exception to the responsible role and record follow-up.'],
      ],
      scope: [
        ['Pilot scope and deliverables', 'Agree the machine list, point map, sampling and retention rules, network boundary, one view or alert path, and a handover sheet for the site owner.'],
        ['Integrations priced separately', 'Confirm legacy controller access, additional sensors, panel work, network segmentation, long-term storage and MES or maintenance-system interfaces. Control changes need their own scope.'],
      ],
      tests: [
        ['Reconcile the measurement', 'Compare agreed points, units, counts and timestamps with the machine or meter across a representative shift. Record tolerances and explain differences before sign-off.'],
        ['Interrupt and recover', 'Temporarily disconnect the collection path in a controlled test. Verify stale data is marked, and that any agreed buffer or retry behavior does not present duplicates as new readings.'],
      ],
    },
    'mes-mom': {
      title: 'MES / MOM for production execution',
      intro: 'Give supervisors a traceable view of what was scheduled, what operators ran and what was produced. Begin with one line or operation and agree where ERP and shop-floor records meet.',
      definition: 'A Manufacturing Execution System (MES) manages and records production on the shop floor. Manufacturing Operations Management (MOM) covers a broader scope that can include production, quality, maintenance and material movement.',
      useCases: [
        ['Work orders tracked on paper and spreadsheets', 'Make released orders, current instructions and actual quantities visible to the line. Identify which steps still require operator confirmation.'],
        ['Quality and rework are hard to reconcile', 'Connect agreed defects, holds or rework records to the relevant order and lot so supervisors can explain the difference between input and accepted output.'],
      ],
      workflow: [
        ['Release and identify', 'Receive an approved order or load a sample order. Confirm product, operation, quantity, line and instruction revision before the operator starts.'],
        ['Execute and report', 'Capture the start, output, rejects and relevant downtime or lot events. Distinguish operator entry from machine-derived data.'],
        ['Close and reconcile', 'Review adjustments, close the operation and reconcile the agreed result with ERP or an export. Assign ownership of rejects and failed interface messages.'],
      ],
      scope: [
        ['Pilot scope and deliverables', 'Define one line, user roles, order states, data ownership, sample records, interface mapping and operator handover.'],
        ['Integrations priced separately', 'Confirm ERP interfaces, machine signals, scanners, label printing, quality or traceability rules and rollout across lines.'],
      ],
      tests: [
        ['Trace a representative order', 'Check order identity, instruction version, input, good output, scrap and rework. Confirm the agreed production record matches what is exported or posted.'],
        ['Handle a change or rejection', 'Test a revised order, an interface failure or an approved quantity correction. Verify duplicate submissions do not create extra production and the audit trail shows who changed what.'],
      ],
    },
    wms: {
      title: 'WMS for warehouse execution',
      intro: 'Keep physical stock movements aligned with item, quantity, lot and location records. Begin with one warehouse flow, using the actual labels, scanners and exceptions seen on site.',
      useCases: [
        ['Receiving and putaway go out of sync', 'Capture the handoff from dock to storage and confirm the actual item, lot, quantity and location.'],
        ['Inventory exists on screen but cannot be found', 'Use location-level records and agreed cycle counts to identify mismatches, holds and stock that cannot be allocated.'],
      ],
      workflow: [
        ['Receive and identify', 'Match the receipt against the agreed document. Validate item and unit of measure, and record lot or serial data where required. Where incoming inspection applies, distinguish physically received stock, stock held for inspection and stock released for use.'],
        ['Move and confirm', 'Scan the source and destination, confirm the quantity and apply the agreed location or hold rules. Route exceptions for review.'],
        ['Complete and reconcile the selected process', 'Check the transactions for the receiving, putaway, picking or dispatch process selected for this phase. Reconcile them with the designated system of record where integration is in scope.'],
      ],
      scope: [
        ['Pilot scope and deliverables', 'Agree one process, label and location conventions, scanner coverage, exception ownership, reconciliation report and operator training.'],
        ['Integrations priced separately', 'Confirm ERP ownership, label printing, integrations with carriers or automation, device provisioning and migration of opening balances.'],
      ],
      tests: [
        ['Reconcile one physical flow', 'Follow an actual sample from receiving to putaway or picking. Reconcile the scanned item, lot, units and location with the recorded balance.'],
        ['Test an exception before rollout', 'Try a duplicate scan, wrong location and a shortage or held lot. Confirm the operator sees what to correct and that the exception does not silently change available stock.'],
      ],
    },
    intag: {
      title: 'INTAG | Indoor positioning using existing site signals',
      intro: 'Where existing signals and compatible devices meet the site’s requirements, INTAG can support asset tracking and dispatch without adding dedicated positioning equipment. Verify coverage and positioning performance along the routes your team uses.',
      applications: {
        title: 'Applications to evaluate in a pilot',
        text: 'These diagrams illustrate pilot scenarios. Define the modules, rules, user roles and acceptance checks in the project scope.',
        items: [
          ['Dynamic Dispatch', 'Example: A loading request arrives. The supervisor checks the forklift’s last reported zone and update time, confirms availability with the operator, assigns the move and follows up at the loading point. Agree how the team records assignments and completion during the pilot.'],
          ['GEO Fencing', 'Define a zone on the floor plan and test when an entry, exit or dwell event should be recorded. Agree who receives the notification and how to handle uncertain positions near a boundary.'],
          ['ESG Enhance Analytics', 'Compare travel routes and dwell by zone or shift to find repeated waiting and unnecessary trips. Energy use or emissions estimates require separate measurements and an agreed calculation method.'],
        ],
      },
      useCases: [
        ['Reusable assets are hard to locate', 'Record agreed handoff or zone events for containers, tools or equipment when staff need to know where to look next.'],
        ['Movement events cannot be matched to a process', 'Connect a known asset ID and time to a receiving, staging or dispatch point. Define whether the use case needs a checkpoint event, a zone or a position.'],
      ],
      workflow: [
        ['Choose objects and event points', 'List the objects, materials, mounting constraints, movement speeds and critical detection areas. Define which events matter to operations.'],
        ['Test the selected approach on site', 'Use the proposed positioning or identification equipment in representative routes and areas. Check metal, obstacles, nearby zones and different orientations where relevant.'],
        ['Turn events into an action', 'Associate the event with the asset register. Decide how to handle repeat reads, missing events and the gap between last observed and current position.'],
      ],
      scope: [
        ['Pilot scope and deliverables', 'Agree a sample asset population, location or checkpoint map, event schema, coverage test and report on detection exceptions.'],
        ['Integrations priced separately', 'Confirm the selected hardware, network and power, tag maintenance, WMS or ERP event interfaces and any required location precision. Product specifications depend on the chosen design.'],
      ],
      tests: [
        ['Compare against a known movement', 'Run the agreed routes with a manual reference log. Compare detected and missed events, wrong-zone reads and time stamps by location.'],
        ['Challenge the edge cases', 'Test several assets passing together, a missed read and an object held near a boundary. Check how staff correct or annotate events without inventing a position.'],
      ],
    },
    'enterprise-ai': {
      title: 'Enterprise AI for controlled knowledge access',
      intro: 'Help staff find approved procedures and reference information for one defined workflow. Agree who can access each source, which answers need review and what the system should do when it cannot find support.',
      useCases: [
        ['Staff search multiple procedure repositories', 'Start with a controlled set of SOPs or training documents and test whether staff can find the current approved instruction with its source.'],
        ['Repeated queries interrupt subject experts', 'Use agreed questions to distinguish those that can be answered from documents from those that must go to a responsible person.'],
      ],
      workflow: [
        ['Approve the knowledge set', 'Name document owners, approved versions, access roles and excluded data. Choose the workflow and prepare realistic questions in the required languages.'],
        ['Retrieve and respond', 'Evaluate answers that cite sources the user is allowed to view. Define how to signal conflicting, missing or stale information.'],
        ['Review and maintain', 'Assign someone to review flagged answers and approve document updates. Agree how corrections, access changes and feedback are recorded.'],
      ],
      scope: [
        ['Pilot scope and deliverables', 'Agree the corpus, user roles, expected source references, evaluation set, review workflow and handover notes for content owners.'],
        ['Integrations priced separately', 'Confirm document connectors, identity provider, hosting or model choice, data handling and workflow actions. Requests to automate decisions require separate approval and testing.'],
      ],
      tests: [
        ['Check source and access boundaries', 'Compare representative answers with approved documents and confirm that each user role sees only permitted sources. Include an obsolete procedure in the test design.'],
        ['Test when no answer is supported', 'Use out-of-scope, ambiguous and restricted questions. Test whether the system signals insufficient evidence and follows the agreed human review process.'],
      ],
    },
  },
  'zh-tw': {
    iiot: {
      title: 'IIoT 設備與公用系統資料',
      intro: '把設備和公用系統的讀值用於交班、維護和異常追蹤。從一組機台開始，先確認每項量測值對應的現場行動。',
      useCases: [
        ['反覆停機但無法還原時間線', '擷取可讀的運轉、停機及計數訊號，讓主管比對班別紀錄，請現場人員補登未分類的停機。'],
        ['公用系統讀值分散在各處', '按區域和時間比對選定電表或環境狀態。設定告警前先確認由誰追蹤異常讀值。'],
      ],
      workflow: [
        ['盤點點位與存取權', '記錄設備代碼、可讀訊號、資料型態、單位、取樣需求及 OT 負責人。先約定唯讀；無法取值的點位列入差距清單，再決定排除、用人工紀錄或另議感測器。'],
        ['擷取並辨識資料品質', '在設備及網路條件允許時，以閘道器或既有資料服務讀取核准點位。有來源時間及品質欄位時一併保留，另標示中斷、歸零及手動值。'],
        ['交班檢視及追蹤', '用班別時間線或趨勢圖顯示作業脈絡。把約定的異常交給負責角色並記錄後續處置。'],
      ],
      scope: [
        ['試點範圍及交付', '確認設備清單、點位表、取樣與保存規則、網路界線、單一畫面或告警路徑，以及現場交接文件。'],
        ['另議整合', '舊控制器存取、加裝感測器、控制盤施工、網路分段、長期儲存及與 MES 或維護系統介接須另確認。控制變更另訂範圍。'],
      ],
      tests: [
        ['與現場讀值對帳', '抽取具代表性的班別，比對機台或儀表的點位、單位、計數和時間。簽認前約定容許差異並說明誤差。'],
        ['中斷與復原', '在受控條件下中斷擷取，確認過期值明確標示。若約定補傳或重試，查核重複資料不會被當作新讀值。'],
      ],
    },
    'mes-mom': {
      title: 'MES / MOM 生產執行與營運管理',
      intro: '讓現場主管查到計畫、執行和實際產出的關聯。從一條產線或一個工序開始，先劃清 ERP 與現場紀錄的分工。',
      definition: 'MES（Manufacturing Execution System，製造執行系統）管理與記錄產線作業。MOM（Manufacturing Operations Management，製造營運管理）的範圍更廣，可涵蓋生產、品質、維護與物料移動。',
      useCases: [
        ['工單分散在紙本和試算表', '讓產線看到已發工單、有效作業指示及實際數量，明確保留需由操作人員確認的步驟。'],
        ['品質和重工數量對不上', '把約定的缺陷、待判或重工紀錄連回工單和批次，解釋投入與良品的差異。'],
      ],
      workflow: [
        ['發工及辨識', '接收已核准工單或匯入樣本。開工前確認產品、工序、數量、產線及作業指示版本。'],
        ['執行與回報', '記錄開始、產量、不良，以及適用的停機或批次事件。區分人員填報與設備訊號。'],
        ['結工與對帳', '審查調整、關閉工序，與 ERP 或匯出檔核對約定結果。指派退件及介接失敗的處理人。'],
      ],
      scope: [
        ['試點範圍及交付', '確認單一產線、角色、工單狀態、資料歸屬、樣本紀錄、欄位對照和操作交接。'],
        ['另議整合', 'ERP 介接、機台資料、掃描或列印、品質和追溯規則、跨線展開各依專案確認。'],
      ],
      tests: [
        ['追蹤一張代表工單', '核對工單、指示版本、投入、良品、不良及重工，並確認約定的匯出或回傳與現場紀錄一致。'],
        ['測試異動或退件', '測試工單改版、介接退件或數量更正。確認重送不會增加產量，異動可追溯至處理人。'],
      ],
    },
    wms: {
      title: 'WMS 倉儲作業管理',
      intro: '讓實際貨物流動和品項、數量、批號與儲位紀錄同步。先以一段倉儲流程試做，納入現場標籤、設備和例外。',
      useCases: [
        ['收貨後的上架紀錄不同步', '記錄裝卸區到儲位的交接，確認品項、批號、數量和實際位置。'],
        ['帳上有貨但現場找不到', '用儲位明細和約定的循環盤點辨識差異、待判與不可分配的庫存。'],
      ],
      workflow: [
        ['收貨與辨識', '依約定單據比對收貨，檢查品項和計量單位，必要時記錄批號或序號。若有進料檢驗，區分實際收貨、待驗及已放行庫存。'],
        ['搬移與確認', '掃描來源和目的儲位、確認數量、套用儲位或待判規則，例外交由負責人處理。'],
        ['完成選定流程與對帳', '核對本期選定的收貨、上架、揀貨或出貨交易。若本期包含整合，再與指定主系統對帳。'],
      ],
      scope: [
        ['試點範圍及交付', '確認一段流程、標籤與儲位規則、掃描覆蓋、例外處理、對帳報表和人員操作交接。'],
        ['另議整合', '確認 ERP 資料歸屬、標籤列印、承運或自動化設備介接、終端部署和期初庫存匯入。'],
      ],
      tests: [
        ['對帳一段實物流', '用實際樣品從收貨走到上架或揀貨，核對掃描的品項、批號、單位和位置與帳面一致。'],
        ['在展開前演練例外', '試做重複掃描、錯誤儲位、短收或批次待判。確認操作人員知道如何更正，且庫存不會被默默改動。'],
      ],
    },
    intag: {
      title: 'INTAG｜用既有訊號做室內定位',
      intro: '現場訊號與終端條件符合需求時，INTAG 可沿用既有訊號，免增設專用定位設備，支援資產追蹤與派工輔助。沿實際作業路線確認訊號覆蓋與定位表現。',
      applications: {
        title: '試點可評估的應用模組',
        text: '圖解為試點情境示意。模組、作業規則、使用角色與驗收方式依專案約定。',
        items: [
          ['動態派工（Dynamic Dispatch）', '情境示意：收到裝卸需求後，主管先查堆高機最後回報的區域與時間，向操作員確認車輛是否可調度，再指派搬運並追蹤裝卸點的進度。試點時約定如何記錄指派及完工。'],
          ['電子圍籬（GEO Fencing）', '在平面圖上劃定區域，測試何時應記錄進入、離開或停留事件。確認通知對象，以及位置在區界附近不確定時的處理方式。'],
          ['ESG 延伸分析（ESG Enhance Analytics）', '依區域或班別比較移動路徑與停留時間，找出反覆等待或多餘往返。若要估算能耗或排放，需另外取得量測資料並約定計算方式。'],
        ],
      },
      useCases: [
        ['周轉資產不易查找', '為料箱、工具或設備記錄約定的交接或區域事件，讓人員知道可以先去哪裡查找。'],
        ['移動紀錄難與流程對應', '將資產編號和時間連到收貨、暫存或出貨點，釐清需要的是通過事件、區域還是位置。'],
      ],
      workflow: [
        ['選擇物件與事件點', '列出物件、材質、安裝限制、移動速度及關鍵偵測區，確認哪些事件與作業有關。'],
        ['現場測試定位或辨識', '用選定的定位或識別設備在具代表性的路線和區域實測，依情況納入金屬、障礙、鄰區及不同方向。'],
        ['將事件轉為處置', '將讀取結果與資產清冊對應。確認重複讀取、漏讀和最後觀測位置不等於當前位置時的處理方式。'],
      ],
      scope: [
        ['試點範圍及交付', '約定樣本資產、關卡或區域圖、事件欄位、覆蓋測試及辨識例外紀錄。'],
        ['另議整合', '設備、供電、網路、標籤維護、WMS／ERP 介接與所需定位精度依方案確認，規格依選定設計為準。'],
      ],
      tests: [
        ['與已知移動比對', '用人工紀錄做基準，逐區核對已讀、漏讀、誤入區及事件時間。'],
        ['演練邊界與漏讀', '測試多物件同時通過、漏讀及停在區界等情況，查核人員能更正或註記，而不是補造位置。'],
      ],
    },
    'enterprise-ai': {
      title: 'Enterprise AI 企業知識查詢',
      intro: '從一個工作流程開始，讓員工查找已核准的程序和參考資料。先確認存取權、哪些答案需要覆核，以及找不到依據時的處理。',
      useCases: [
        ['同一程序散在多處', '以一組受控的 SOP 或培訓文件試點，驗證員工能查到現行核准版本和來源。'],
        ['資深同仁反覆回答同類問題', '用約定的問題區分哪些可依文件回答，哪些要轉給負責人。'],
      ],
      workflow: [
        ['審定資料範圍', '指定文件負責人、有效版本、存取角色和排除資料，並依使用語言準備真實問題。'],
        ['查找並回答', '驗證答案能引用使用者有權查看的資料，確認資料互相矛盾、缺少或過期時如何提醒。'],
        ['覆核與維護', '指定人員覆核標記的回答和文件更新，約定更正、權限異動與回饋如何留存。'],
      ],
      scope: [
        ['試點範圍及交付', '約定文件集、角色、來源引用、評估題組、覆核流程及內容管理交接。'],
        ['另議整合', '文件連接、身分系統、部署或模型、資料處理及工作流程介接另議。自動執行或決策須另行核准與測試。'],
      ],
      tests: [
        ['查核來源及權限界線', '以代表性問題對照核准文件，測試各角色僅能查閱獲准來源，並納入過期程序的測試。'],
        ['測試無法回答的情境', '用超出範圍、模糊或涉及受限資訊的問題，測試系統是否會說明依據不足，並依約定流程交由人員處理。'],
      ],
    },
  },
  th: {
    iiot: {
      title: 'IIoT สำหรับข้อมูลเครื่องจักรและสาธารณูปโภค',
      intro: 'นำสัญญาณจากเครื่องจักรและระบบสาธารณูปโภคมาใช้ทบทวนกะ วางแผนดูแล และติดตามความผิดปกติ เริ่มจากอุปกรณ์กลุ่มเดียวและกำหนดว่าจะใช้ค่าที่วัดทำอะไร',
      useCases: [
        ['เครื่องหยุดซ้ำแต่ไม่มีลำดับเหตุการณ์', 'เก็บสัญญาณเดินเครื่อง หยุด และตัวนับที่อ่านได้ เพื่อเทียบกับบันทึกกะและให้ผู้ปฏิบัติงานระบุเหตุที่ยังไม่ทราบสาเหตุ'],
        ['ค่าจากมิเตอร์อยู่คนละจุด', 'เปรียบเทียบค่าที่เลือกตามพื้นที่และเวลา ตกลงผู้ติดตามค่าพลังงานหรืออุณหภูมิผิดปกติก่อนตั้งแจ้งเตือน'],
      ],
      workflow: [
        ['สำรวจจุดข้อมูลและสิทธิ์', 'ระบุรหัสอุปกรณ์ สัญญาณ ชนิดข้อมูล หน่วย ความถี่ และผู้ดูแล OT กำหนดการอ่านอย่างเดียว หากอ่านบางจุดไม่ได้ ให้บันทึกและตกลงว่าจะตัดออก ใช้บันทึกด้วยคน หรือเสนอเพิ่มเซ็นเซอร์'],
        ['เก็บข้อมูลและตรวจคุณภาพ', 'เมื่ออุปกรณ์และเครือข่ายรองรับ ให้อ่านจุดที่อนุมัติผ่านเกตเวย์หรือระบบเดิม เก็บเวลาและสถานะคุณภาพจากต้นทางถ้ามี แยกกรณีข้อมูลขาด การรีเซ็ต และค่าที่กรอกเอง'],
        ['ทบทวนและติดตาม', 'แสดงลำดับเหตุการณ์หรือแนวโน้มพร้อมบริบทของกะ ส่งกรณีผิดปกติที่ตกลงไว้ให้ผู้รับผิดชอบและบันทึกการติดตาม'],
      ],
      scope: [
        ['ขอบเขตและสิ่งส่งมอบนำร่อง', 'ตกลงรายการเครื่อง จุดข้อมูล ความถี่และระยะเก็บ ขอบเขตเครือข่าย หน้าจอหรือทางแจ้งเตือนหนึ่งแบบ และเอกสารส่งมอบ'],
        ['งานเชื่อมต่อที่ต้องตกลงเพิ่ม', 'ตรวจสิทธิ์ตัวควบคุมเดิม เซ็นเซอร์เพิ่ม งานตู้ ระบบเครือข่าย การเก็บระยะยาว และการเชื่อม MES หรือระบบบำรุงรักษา งานเปลี่ยนการควบคุมให้แยกขอบเขต'],
      ],
      tests: [
        ['เทียบค่ากับหน้างาน', 'เทียบจุด หน่วย ตัวนับ และเวลากับเครื่องหรือมิเตอร์ในกะตัวแทน ระบุช่วงคลาดเคลื่อนและอธิบายผลต่างก่อนตรวจรับ'],
        ['จำลองการขาดข้อมูลและการกู้คืน', 'ตัดทางรับข้อมูลในสภาพควบคุม ตรวจว่าระบบระบุข้อมูลเก่า และกรณีส่งซ้ำตามที่ตกลงไม่แสดงค่าเดิมเป็นข้อมูลใหม่'],
      ],
    },
    'mes-mom': {
      title: 'MES / MOM สำหรับการดำเนินงานผลิต',
      intro: 'ให้หัวหน้างานตรวจสอบความเชื่อมโยงระหว่างแผน งานที่ทำ และผลผลิตจริง เริ่มจากสายการผลิตหรือขั้นตอนเดียวและแบ่งหน้าที่ระหว่าง ERP กับหน้างานให้ชัด',
      definition: 'MES (Manufacturing Execution System) ใช้จัดการและบันทึกงานผลิตที่หน้างาน ส่วน MOM (Manufacturing Operations Management) มีขอบเขตกว้างกว่า ครอบคลุมได้ทั้งการผลิต คุณภาพ การบำรุงรักษา และการเคลื่อนย้ายวัสดุ',
      useCases: [
        ['ใบสั่งผลิตกระจายในกระดาษและสเปรดชีต', 'แสดงใบสั่งที่อนุมัติ วิธีปฏิบัติงานฉบับปัจจุบัน และจำนวนจริง ระบุขั้นตอนที่ผู้ปฏิบัติงานต้องยืนยันเอง'],
        ['กระทบยอดของเสียและงานแก้ไขไม่ได้', 'เชื่อมของเสีย งานพักรอตรวจ และงานแก้ไขกับใบสั่งและล็อตเพื่ออธิบายส่วนต่างจากวัตถุดิบถึงผลผลิตที่ผ่าน'],
      ],
      workflow: [
        ['ปล่อยและระบุงาน', 'รับใบสั่งที่อนุมัติหรือใช้ตัวอย่าง ยืนยันสินค้า ขั้นตอน จำนวน สายการผลิต และฉบับวิธีปฏิบัติก่อนเริ่ม'],
        ['ดำเนินการและรายงาน', 'บันทึกเวลาเริ่ม ผลผลิต ของเสีย รวมถึงเวลาหยุดหรือล็อตตามที่ตกลง แยกข้อมูลที่คนกรอกกับข้อมูลจากเครื่อง'],
        ['ปิดงานและกระทบยอด', 'ทบทวนการปรับยอด ปิดขั้นตอน และเทียบกับ ERP หรือไฟล์ส่งออก กำหนดผู้ดูแลรายการที่ถูกปฏิเสธหรือส่งไม่สำเร็จ'],
      ],
      scope: [
        ['ขอบเขตและสิ่งส่งมอบนำร่อง', 'ตกลงสายการผลิตหนึ่งสาย บทบาท สถานะใบสั่ง เจ้าของข้อมูล ตัวอย่างรายการ การจับคู่ฟิลด์ และการส่งมอบให้ผู้ใช้งาน'],
        ['งานเชื่อมต่อที่ต้องตกลงเพิ่ม', 'ยืนยันการเชื่อม ERP สัญญาณเครื่อง สแกนเนอร์ ฉลาก ข้อกำหนดคุณภาพและการตามล็อต รวมถึงการขยายหลายสาย'],
      ],
      tests: [
        ['ตามใบสั่งผลิตหนึ่งรายการ', 'ตรวจรหัสใบสั่ง ฉบับวิธีปฏิบัติ จำนวนเข้า ของดี ของเสีย และงานแก้ไข เทียบกับข้อมูลที่ส่งออกหรือส่งกลับตามที่ตกลง'],
        ['ทดสอบการเปลี่ยนแปลงและรายการถูกปฏิเสธ', 'ทดลองแก้ใบสั่ง ส่งข้อมูลไม่สำเร็จ หรือแก้จำนวนที่ได้รับอนุมัติ ตรวจว่าการส่งซ้ำไม่เพิ่มยอดและตามรอยผู้แก้ไขได้'],
      ],
    },
    wms: {
      title: 'WMS สำหรับงานคลังสินค้า',
      intro: 'ทำให้การเคลื่อนสินค้าจริงตรงกับรหัส จำนวน ล็อต และตำแหน่ง เริ่มทดสอบหนึ่งกระบวนการด้วยฉลาก เครื่องสแกน และกรณีผิดปกติที่พบจริง',
      useCases: [
        ['รับเข้าแล้วตำแหน่งจัดเก็บไม่ตรง', 'บันทึกการส่งต่อจากจุดรับถึงพื้นที่จัดเก็บ ยืนยันสินค้า ล็อต จำนวน และตำแหน่งจริง'],
        ['ยอดในระบบมีสินค้าแต่หาไม่พบ', 'ใช้ข้อมูลรายตำแหน่งและการนับตามรอบเพื่อตรวจผลต่าง รายการพัก และสินค้าที่จัดสรรไม่ได้'],
      ],
      workflow: [
        ['รับเข้าและระบุสินค้า', 'เทียบกับเอกสารที่ตกลง ตรวจรหัสและหน่วยนับ บันทึกล็อตหรือเลขประจำเครื่องเมื่อจำเป็น หากมีการตรวจรับด้านคุณภาพ ให้แยกสินค้าที่รับจริง สินค้ารอตรวจ และสินค้าที่อนุมัติให้ใช้'],
        ['ย้ายและยืนยัน', 'สแกนต้นทางและปลายทาง ยืนยันจำนวน ใช้กฎพื้นที่จัดเก็บหรือพักสินค้า และส่งข้อยกเว้นให้ผู้ดูแล'],
        ['จบกระบวนการที่เลือกและกระทบยอด', 'ตรวจรายการรับเข้า จัดเก็บ หยิบ หรือจัดส่งตามขอบเขตระยะนี้ หากรวมการเชื่อมต่อ ให้กระทบยอดกับระบบหลักที่กำหนด'],
      ],
      scope: [
        ['ขอบเขตและสิ่งส่งมอบนำร่อง', 'ตกลงกระบวนการหนึ่งส่วน กฎฉลากและตำแหน่ง พื้นที่สแกน ผู้จัดการข้อยกเว้น รายงานกระทบยอด และสอนการใช้งาน'],
        ['งานเชื่อมต่อที่ต้องตกลงเพิ่ม', 'กำหนดเจ้าของข้อมูล ERP การพิมพ์ฉลาก การเชื่อมผู้ขนส่งหรือระบบอัตโนมัติ การติดตั้งอุปกรณ์ และการย้ายยอดตั้งต้น'],
      ],
      tests: [
        ['กระทบยอดหนึ่งขั้นตอนจริง', 'ติดตามตัวอย่างตั้งแต่รับเข้าถึงจัดเก็บหรือหยิบ ตรวจรหัส ล็อต หน่วย และตำแหน่งให้ตรงกับยอดบันทึก'],
        ['จำลองกรณีผิดปกติก่อนขยาย', 'ทดลองสแกนซ้ำ ตำแหน่งผิด จำนวนขาด หรือล็อตพัก ตรวจว่าผู้ใช้แก้ไขได้และยอดคงเหลือไม่เปลี่ยนโดยไม่มีการแจ้ง'],
      ],
    },
    intag: {
      title: 'INTAG | ระบุตำแหน่งในอาคารด้วยสัญญาณเดิม',
      intro: 'หากสัญญาณเดิมและอุปกรณ์ที่รองรับตรงตามความต้องการของพื้นที่ INTAG สามารถติดตามทรัพย์สินและช่วยมอบหมายงานได้โดยไม่ต้องติดตั้งอุปกรณ์ระบุตำแหน่งเฉพาะทางเพิ่ม ตรวจสอบพื้นที่ครอบคลุมและผลการระบุตำแหน่งตามเส้นทางทำงานจริง',
      applications: {
        title: 'โมดูลที่ประเมินได้ในโครงการนำร่อง',
        text: 'ภาพแสดงตัวอย่างการใช้งานในโครงการนำร่อง ตกลงโมดูล กติกาการทำงาน บทบาทผู้ใช้ และเกณฑ์ตรวจรับตามขอบเขตโครงการ',
        items: [
          ['การจัดงานตามสถานการณ์ (Dynamic Dispatch)', 'ตัวอย่าง: เมื่อมีงานขนถ่าย หัวหน้างานดูโซนและเวลาที่รถยกรายงานล่าสุด สอบถามผู้ขับว่ารถพร้อมใช้งานหรือไม่ แล้วจึงมอบหมายงานและติดตามความคืบหน้าที่จุดขนถ่าย ในโครงการนำร่องให้ตกลงวิธีบันทึกการมอบหมายและการเสร็จงาน'],
          ['รั้วเสมือน (GEO Fencing)', 'กำหนดโซนบนแผนผังและทดสอบว่าควรบันทึกเหตุการณ์เข้า ออก หรืออยู่ในโซนนานเมื่อใด ระบุผู้รับแจ้งเตือนและวิธีจัดการเมื่อข้อมูลตำแหน่งใกล้ขอบโซนไม่ชัดเจน'],
          ['การวิเคราะห์เพิ่มเติมด้าน ESG (ESG Enhance Analytics)', 'เปรียบเทียบเส้นทางและเวลาที่อยู่ในแต่ละโซนหรือแต่ละกะ เพื่อหาจุดที่รอบ่อยหรือมีการวิ่งกลับไปกลับมา หากต้องการประเมินพลังงานหรือการปล่อยก๊าซ ต้องมีข้อมูลวัดเพิ่มเติมและวิธีคำนวณที่ตกลงร่วมกัน'],
        ],
      },
      useCases: [
        ['หาอุปกรณ์หมุนเวียนไม่พบ', 'บันทึกจุดส่งต่อหรือโซนที่ตกลงสำหรับภาชนะ เครื่องมือ หรืออุปกรณ์ เพื่อให้พนักงานรู้ว่าจะเริ่มหาที่ไหน'],
        ['เชื่อมการเคลื่อนย้ายกับขั้นตอนไม่ได้', 'เชื่อมรหัสและเวลากับจุดรับ พัก หรือจัดส่ง ระบุว่าต้องการเพียงเหตุการณ์ผ่านจุด โซน หรือตำแหน่ง'],
      ],
      workflow: [
        ['เลือกสิ่งของและจุดเหตุการณ์', 'ระบุวัสดุ ข้อจำกัดการติดตั้ง ความเร็ว และพื้นที่สำคัญ ตกลงเหตุการณ์ที่มีผลต่อการปฏิบัติงาน'],
        ['ทดลองเทคโนโลยีที่เลือกหน้างาน', 'ทดลองอุปกรณ์ระบุตำแหน่งหรือระบุตัวตนบนเส้นทางและพื้นที่ตัวแทน พิจารณาโลหะ สิ่งกีดขวาง โซนข้างเคียง และทิศทางตามความเหมาะสม'],
        ['นำเหตุการณ์ไปใช้งาน', 'เชื่อมเหตุการณ์กับทะเบียนทรัพย์สิน ตกลงวิธีจัดการการอ่านซ้ำ การอ่านไม่พบ และกรณีตำแหน่งล่าสุดไม่ใช่ตำแหน่งปัจจุบัน'],
      ],
      scope: [
        ['ขอบเขตและสิ่งส่งมอบนำร่อง', 'ตกลงกลุ่มตัวอย่าง แผนผังจุดผ่านหรือโซน โครงสร้างข้อมูลเหตุการณ์ การทดสอบพื้นที่ และรายงานข้อยกเว้น'],
        ['งานเชื่อมต่อที่ต้องตกลงเพิ่ม', 'ยืนยันอุปกรณ์ ไฟ เครือข่าย การดูแลแท็ก การส่งเหตุการณ์ไป WMS หรือ ERP และความแม่นยำตามแบบที่เลือก'],
      ],
      tests: [
        ['เปรียบเทียบกับการเคลื่อนย้ายที่ทราบ', 'เดินตามเส้นทางทดสอบและทำบันทึกอ้างอิงด้วยคน เปรียบเทียบเหตุการณ์ที่อ่านได้ อ่านไม่พบ อ่านข้ามโซน และเวลา'],
        ['ทดสอบขอบเขตและการอ่านพลาด', 'ให้หลายชิ้นผ่านพร้อมกัน ทดลองพลาดการอ่านและหยุดใกล้ขอบโซน ตรวจว่าผู้ใช้แก้ไขหรือระบุข้อสังเกตได้โดยไม่สมมติตำแหน่ง'],
      ],
    },
    'enterprise-ai': {
      title: 'Enterprise AI สำหรับค้นความรู้ภายในตามสิทธิ์',
      intro: 'ช่วยพนักงานค้นขั้นตอนและเอกสารที่อนุมัติในงานหนึ่งกระบวนการ ตกลงสิทธิ์ คำตอบที่ต้องตรวจทาน และวิธีปฏิบัติเมื่อไม่พบหลักฐาน',
      useCases: [
        ['ขั้นตอนเดียวกระจายหลายแหล่ง', 'นำร่องด้วย SOP หรือเอกสารฝึกอบรมที่ควบคุมแล้ว ทดสอบว่าค้นคำแนะนำฉบับปัจจุบันพร้อมแหล่งอ้างอิงได้'],
        ['ผู้เชี่ยวชาญต้องตอบคำถามซ้ำ', 'ใช้คำถามที่ตกลงแยกกรณีที่ตอบจากเอกสารได้และกรณีที่ต้องส่งต่อผู้รับผิดชอบ'],
      ],
      workflow: [
        ['กำหนดชุดเอกสารที่อนุมัติ', 'ระบุเจ้าของ ฉบับที่ใช้ สิทธิ์ และข้อมูลที่ไม่รวม เลือกกระบวนการและเตรียมคำถามจริงตามภาษาที่ใช้'],
        ['ค้นและตอบพร้อมหลักฐาน', 'ประเมินคำตอบจากแหล่งที่ผู้ใช้มีสิทธิ์ดู ตกลงวิธีเตือนเมื่อข้อมูลขัดกัน ขาดหาย หรือหมดอายุ'],
        ['ตรวจทานและดูแล', 'กำหนดผู้ตรวจคำตอบที่ถูกส่งต่อและอนุมัติการแก้เอกสาร ระบุวิธีบันทึกการแก้ไข การเปลี่ยนสิทธิ์ และข้อเสนอแนะ'],
      ],
      scope: [
        ['ขอบเขตและสิ่งส่งมอบนำร่อง', 'ตกลงชุดเอกสาร บทบาท วิธีอ้างอิง คำถามประเมิน ขั้นตอนตรวจทาน และเอกสารส่งมอบให้เจ้าของเนื้อหา'],
        ['งานเชื่อมต่อที่ต้องตกลงเพิ่ม', 'ยืนยันแหล่งเอกสาร ระบบยืนยันตัวตน วิธีโฮสต์หรือโมเดล การจัดการข้อมูล และงานเชื่อมกระบวนการ การตัดสินใจอัตโนมัติต้องแยกอนุมัติและทดสอบ'],
      ],
      tests: [
        ['ตรวจแหล่งอ้างอิงและขอบเขตสิทธิ์', 'เทียบคำตอบตัวอย่างกับเอกสารที่อนุมัติ ตรวจว่าแต่ละบทบาทเห็นเฉพาะข้อมูลที่ได้รับอนุญาต และรวมขั้นตอนฉบับเก่าในกรณีทดสอบ'],
        ['ทดสอบกรณีที่ไม่มีหลักฐานพอ', 'ใช้คำถามนอกขอบเขต คำถามกำกวม และคำถามเกี่ยวกับข้อมูลจำกัด ทดสอบว่าระบบระบุว่าหลักฐานไม่พอและส่งต่อให้ผู้รับผิดชอบตามขั้นตอนที่ตกลงหรือไม่'],
      ],
    },
  },
};
