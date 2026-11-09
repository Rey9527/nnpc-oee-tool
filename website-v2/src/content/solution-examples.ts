export const exampleCopy = {
  en: {
    title: 'What it can look like on site',
    note: 'Illustrative scenario and sample data. Views and rules are agreed during the pilot.',
    intag: {
      controls: 'Choose a map view', modes: ['Floor plan', 'Dwell heatmap', 'Geofence'],
      zones: ['Receiving', 'Storage', 'Staging', 'Loading', 'Cross aisle'],
      asset: 'Forklift F-07', timestamp: 'Last position report: 10:15', viewTime: 'View time: 10:20', status: 'Data status: stale',
      heatScale: ['Less time', 'More time'], fence: 'Loading zone',
      descriptions: [
        ['Find a last reported position', 'See the asset, floor and zone together with its report time. If updates stop, show the last observation as stale rather than treating it as current.'],
        ['See where time accumulates', 'This example estimates dwell time from available location observations between 08:00 and 12:00. Compare matching windows and flag areas with sparse coverage. A data gap does not mean zero dwell.'],
        ['Turn a boundary crossing into an event', 'Example rule: log entry and exit for F-07 at the loading zone. Notify the supervisor if it remains there for at least five minutes. Evaluate repeated observations or another suitable boundary rule on site. If updates stop, flag the dwell decision for review. Track notification acknowledgment separately.'],
      ],
      events: [['10:08', 'Entered the loading zone'], ['10:13', 'Dwell reached 5 minutes · alert awaiting acknowledgment'], ['10:15', 'Exited the loading zone']],
      limit: 'Confirm the floor plan, update interval, coverage, boundary behavior and event delivery with on-site tests. Alerts support operations and do not replace safety interlocks.',
    },
    iiot: {
      heading: 'Motor current across one shift', metric: 'Current (A)', gap: 'No data', labels: ['08:00', '09:00', '10:00', '11:00'],
      points: [['08:00–09:20', 'Compare the rise in current with the active work order and the equipment operating state.'], ['09:20–10:00', 'A gateway outage leaves a visible gap. Treat missing readings separately from zero current.'], ['10:00 onward', 'Check source timestamps after reconnection and compare the recovered record with the equipment log.']],
    },
    'mes-mom': {
      heading: 'Follow work order WO-024', columns: ['Step', 'Recorded example'],
      rows: [['Release', '120 units · assembly · revision B'], ['Report production', '10:22 · 111 good · 5 rejected · 4 on hold'], ['Correction', '10:35 · Quality released 1 held unit · supervisor approved'], ['Reconcile', '120 checked in this example · 112 good · 5 rejected · 3 on hold']],
      points: [['Operator', 'Records actual output against the released order and instruction revision.'], ['Supervisor', 'Reviews exceptions and approves any corrections before close.'], ['ERP boundary', 'Send only the agreed production fields and record rejected or repeated submissions.']],
    },
    wms: {
      heading: 'Receipt PO-381 · Item PK-12 · Lot L-08', columns: ['Stock state', 'Sample quantity and location'],
      rows: [['Total received', '24 cartons · Receiving R-01'], ['Pending inspection', '4 cartons · Hold Q-02 · unavailable'], ['Released', '20 cartons · Storage A-03 · available']],
      points: [['Receive', 'Check the item, unit, lot and quantity against the receipt.'], ['Inspect and move', 'Place only released cartons into available stock; held cartons keep their separate status.'], ['Reconcile', 'Check locations and quantities against the agreed stock record before closing the receipt.']],
    },
    'enterprise-ai': {
      heading: 'A warehouse operator checks the procedure', question: 'Where do I put cartons that fail incoming inspection?',
      answer: 'Move the cartons to the designated hold area and record the item, lot and quantity. Ask Quality before returning them to available stock.',
      citation: 'Example SOP WH-07 · Rev. B · § 4.2', restricted: 'Role: warehouse operator. Restricted documents are excluded.', secondQuestion: 'Has this batch been released?', secondAnswer: 'The sources you can access do not confirm this batch’s release. Ask Quality to check the official record.',
      points: [['Source', 'The answer points to the approved instruction the user can open.'], ['Access', 'The operator sees the warehouse SOP, while a restricted review record remains out of scope.'], ['No reliable source', 'If the approved procedure is missing or contradictory, show insufficient evidence and route the question for review.']],
    },
  },
  'zh-tw': {
    title: '現場使用畫面示意',
    note: '以下為情境與範例資料，實際畫面與規則依試點確認。',
    intag: {
      controls: '切換地圖視圖', modes: ['平面圖', '停留熱點圖', '電子圍籬'],
      zones: ['收貨區', '儲存區', '暫存區', '裝卸區', '主通道'],
      asset: '堆高機 F-07', timestamp: '最後位置回報：10:15', viewTime: '畫面時間：10:20', status: '資料狀態：過期',
      heatScale: ['停留較短', '停留較長'], fence: '裝卸區圍籬',
      descriptions: [
        ['查找最後回報位置', '同時查看資產、樓層、區域與回報時間。訊號中斷時將最後觀測標為過期，避免誤認為仍在原位。'],
        ['找出停留較久的區域', '這張圖根據 08:00–12:00 可用的定位紀錄估算停留時間，並非通行次數。比較班別時用相同時段並標示覆蓋不足區域；資料缺失不等於沒有停留。'],
        ['把進出和停留變成可處理事件', '規則示例：記錄 F-07 進出裝卸區，停留滿五分鐘通知主管。可評估以連續觀測或其他適用條件確認進出，判定方式依方案與現場測試確認。回報中斷時停留事件列為待核對，通知是否有人確認則另外記錄。'],
      ],
      events: [['10:08', '進入裝卸區'], ['10:13', '停留達 5 分鐘・通知待主管確認'], ['10:15', '離開裝卸區']],
      limit: '以現場實測確認平面圖、位置更新間隔、覆蓋、區界行為及事件送達。通知用於營運管理，不取代安全聯鎖。',
    },
    iiot: {
      heading: '一個班別的馬達電流', metric: '電流（A）', gap: '資料中斷', labels: ['08:00', '09:00', '10:00', '11:00'],
      points: [['08:00–09:20', '比對電流上升期間的工單和設備運轉狀態，再判斷是否需追查。'], ['09:20–10:00', '閘道器中斷時曲線保留缺口。資料缺失與零電流分開處理。'], ['10:00 起', '恢復連線後核對來源時間，並與設備紀錄比對補回的資料。']],
    },
    'mes-mom': {
      heading: '工單 WO-024 追蹤範例', columns: ['步驟', '範例紀錄'],
      rows: [['發工', '120 件・組裝工序・作業指示 B 版'], ['報工', '10:22・良品 111 件・不良 5 件・待判 4 件'], ['更正', '10:35・品管放行 1 件・主管核准'], ['對帳', '範例數量核對 120 件・良品 112・不良 5・待判 3']],
      points: [['作業員', '依已發工單及作業指示版本回報實際產出。'], ['現場主管', '結工前確認例外與更正是否已核准。'], ['ERP 分工', '只回傳約定的生產欄位，並保留介接退件與重送紀錄。']],
    },
    wms: {
      heading: '收貨 PO-381・品項 PK-12・批號 L-08', columns: ['庫存狀態', '範例數量與位置'],
      rows: [['收貨總量', '24 箱・收貨區 R-01'], ['待驗', '4 箱・隔離區 Q-02・不可分配'], ['放行', '20 箱・儲位 A-03・可用庫存']],
      points: [['收貨', '對照收貨單確認品項、單位、批號與數量。'], ['檢驗與移轉', '已放行的箱數才納入可用庫存，待驗仍保留獨立狀態。'], ['對帳', '收貨結案前，與約定的庫存紀錄核對儲位及數量。']],
    },
    'enterprise-ai': {
      heading: '倉庫人員查詢處理程序', question: '進料檢驗不合格的紙箱要放哪裡？',
      answer: '移到指定隔離區，記錄品項、批號與數量。放回可用庫存前，先請品管確認。',
      citation: '範例 SOP WH-07・B 版・第 4.2 節', restricted: '角色：倉庫作業員。無權文件不納入答案。', secondQuestion: '這批紙箱已經可以放行了嗎？', secondAnswer: '目前可查資料不足以確認這批貨的放行狀態，請由品管依正式紀錄確認。',
      points: [['來源', '答案附上使用者能開啟的現行核准文件。'], ['權限', '作業員可以查看倉儲 SOP，受限制的稽核紀錄不在查詢範圍。'], ['查無依據', '核准程序缺漏或互相矛盾時，顯示依據不足並交由人員確認。']],
    },
  },
  th: {
    title: 'ตัวอย่างหน้าจอสำหรับงานจริง',
    note: 'เป็นสถานการณ์และข้อมูลตัวอย่าง หน้าจอและกฎจริงตกลงในงานนำร่อง',
    intag: {
      controls: 'เลือกมุมมองแผนที่', modes: ['ผังพื้นที่', 'แผนที่เวลาหยุด', 'รั้วเสมือน'],
      zones: ['รับเข้า', 'จัดเก็บ', 'พักสินค้า', 'ขนถ่าย', 'ทางเดินหลัก'],
      asset: 'รถยก F-07', timestamp: 'รายงานตำแหน่งล่าสุด: 10:15', viewTime: 'เวลาที่ดู: 10:20', status: 'สถานะข้อมูล: ไม่เป็นปัจจุบัน',
      heatScale: ['เวลาน้อย', 'เวลามาก'], fence: 'เขตขนถ่าย',
      descriptions: [
        ['ดูตำแหน่งที่รายงานล่าสุด', 'ดูทรัพย์สิน ชั้น โซน และเวลาที่รายงาน หากสัญญาณหาย ให้ระบุว่าข้อมูลเก่าเพื่อไม่ให้เข้าใจว่าเป็นตำแหน่งปัจจุบัน'],
        ['ดูจุดที่ใช้เวลานาน', 'ตัวอย่างประมาณเวลาหยุดจากข้อมูลตำแหน่งที่มีในช่วง 08:00–12:00 ไม่ใช่จำนวนครั้งที่ผ่าน ใช้ช่วงเวลาเดียวกันเมื่อเทียบกะและระบุพื้นที่ครอบคลุมน้อย ข้อมูลขาดไม่ได้แปลว่าไม่มีการหยุด'],
        ['สร้างเหตุการณ์จากการเข้าออกพื้นที่', 'ตัวอย่างกฎคือบันทึกการเข้าออกเขตขนถ่ายของ F-07 และแจ้งหัวหน้างานเมื่ออยู่ครบห้านาที ประเมินการสังเกตต่อเนื่องหรือเงื่อนไขอื่นในการยืนยันการเข้าออกตามเทคโนโลยีและผลทดสอบ หากข้อมูลขาดให้ตรวจเหตุการณ์ก่อน และแยกบันทึกการตอบรับการแจ้งเตือน'],
      ],
      events: [['10:08', 'เข้าพื้นที่ขนถ่าย'], ['10:13', 'อยู่ครบ 5 นาที · รอหัวหน้างานตอบรับการแจ้งเตือน'], ['10:15', 'ออกจากพื้นที่ขนถ่าย']],
      limit: 'ทดสอบผัง รอบอัปเดต พื้นที่ครอบคลุม พฤติกรรมใกล้ขอบเขต และการส่งเหตุการณ์ที่หน้างาน การแจ้งเตือนใช้ช่วยงานและไม่ทดแทนระบบอินเตอร์ล็อกเพื่อความปลอดภัย',
    },
    iiot: {
      heading: 'กระแสมอเตอร์ในหนึ่งกะ', metric: 'กระแส (A)', gap: 'ขาดข้อมูล', labels: ['08:00', '09:00', '10:00', '11:00'],
      points: [['08:00–09:20', 'เทียบช่วงกระแสสูงขึ้นกับใบสั่งงานและสถานะเครื่องก่อนตัดสินใจตรวจสอบ'], ['09:20–10:00', 'เมื่อเกตเวย์ขาดการเชื่อมต่อ กราฟแสดงช่วงขาดข้อมูลแยกจากค่ากระแสเป็นศูนย์'], ['หลัง 10:00', 'ตรวจเวลาจากต้นทางหลังเชื่อมต่อ และเทียบข้อมูลที่กู้คืนกับบันทึกเครื่อง']],
    },
    'mes-mom': {
      heading: 'ติดตามใบสั่งผลิต WO-024', columns: ['ขั้นตอน', 'ตัวอย่างบันทึก'],
      rows: [['ปล่อยงาน', '120 ชิ้น · ขั้นตอนประกอบ · วิธีปฏิบัติฉบับ B'], ['รายงานผลผลิต', '10:22 · ผ่าน 111 · เสีย 5 · พักรอตรวจ 4'], ['แก้ไข', '10:35 · ฝ่ายคุณภาพปล่อย 1 ชิ้น · หัวหน้างานอนุมัติ'], ['กระทบยอด', 'ตรวจยอดตัวอย่างครบ 120 ชิ้น · ผ่าน 112 · เสีย 5 · รอตรวจ 3']],
      points: [['ผู้ปฏิบัติงาน', 'รายงานผลตามใบสั่งและฉบับวิธีปฏิบัติที่ปล่อยแล้ว'], ['หัวหน้างาน', 'ตรวจกรณีผิดปกติและอนุมัติการแก้ไขก่อนปิดงาน'], ['ขอบเขต ERP', 'ส่งเฉพาะฟิลด์ที่ตกลงและบันทึกรายการที่ไม่ผ่านหรือส่งซ้ำ']],
    },
    wms: {
      heading: 'รับสินค้า PO-381 · รหัส PK-12 · ล็อต L-08', columns: ['สถานะสินค้า', 'จำนวนและตำแหน่งตัวอย่าง'],
      rows: [['ยอดรับรวม', '24 กล่อง · จุดรับ R-01'], ['รอตรวจ', '4 กล่อง · พื้นที่กัก Q-02 · ยังไม่พร้อมใช้'], ['อนุมัติให้ใช้', '20 กล่อง · ตำแหน่ง A-03 · พร้อมใช้']],
      points: [['รับเข้า', 'ตรวจรหัส หน่วย ล็อต และจำนวนกับใบรับ'], ['ตรวจและย้าย', 'เฉพาะกล่องที่ผ่านการตรวจจึงนับเป็นสต็อกพร้อมใช้ สินค้ารอตรวจยังแยกสถานะ'], ['กระทบยอด', 'ตรวจตำแหน่งและจำนวนกับระบบหลักที่ตกลงก่อนปิดรายการรับ']],
    },
    'enterprise-ai': {
      heading: 'พนักงานคลังสอบถามขั้นตอน', question: 'กล่องที่ไม่ผ่านการตรวจรับต้องนำไปไว้ที่ไหน?',
      answer: 'ย้ายไปพื้นที่กักที่กำหนดและบันทึกรหัส ล็อต และจำนวน ขอให้ฝ่ายคุณภาพยืนยันก่อนคืนเข้าสต็อกพร้อมใช้',
      citation: 'ตัวอย่าง SOP WH-07 · ฉบับ B · ข้อ 4.2', restricted: 'บทบาท: พนักงานคลัง ไม่ใช้เอกสารจำกัดสิทธิ์', secondQuestion: 'สินค้าล็อตนี้ได้รับอนุมัติให้ใช้แล้วหรือยัง?', secondAnswer: 'ข้อมูลที่คุณเปิดดูได้ยังยืนยันการอนุมัติของล็อตนี้ไม่ได้ โปรดให้ฝ่ายคุณภาพตรวจบันทึกทางการ',
      points: [['แหล่งอ้างอิง', 'คำตอบอ้างถึงขั้นตอนฉบับอนุมัติที่ผู้ใช้เปิดดูได้'], ['สิทธิ์', 'พนักงานดู SOP คลังได้ แต่บันทึกการตรวจสอบที่จำกัดสิทธิ์อยู่นอกขอบเขต'], ['หลักฐานไม่พอ', 'หากไม่พบขั้นตอนที่อนุมัติหรือข้อมูลขัดกัน ให้แจ้งว่าหลักฐานไม่พอและส่งต่อให้ตรวจทาน']],
    },
  },
} as const;
