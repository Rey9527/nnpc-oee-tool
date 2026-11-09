export const pilotCopy = {
  en: {
    prepare: 'Before we discuss scope',
    acceptance: 'What to test in a pilot',
    solutions: {
      iiot: ['Identify one machine, its available signals and who can authorize access.', 'Collect a selected signal, compare its time and value with the machine record, and agree how to flag missing data.'],
      'mes-mom': ['Bring a sample work order, current work instructions and a list of relevant ERP inputs or exports.', 'Follow one work order through instructions, actual output and any agreed ERP exchange.'],
      wms: ['Bring a receiving or picking flow, sample item and location labels, and any ERP or scanner constraints.', 'Run one receiving-to-putaway scenario and reconcile the resulting item, quantity and location.'],
      intag: ['List the assets, areas and movements to track. Agree where errors or missed events would matter.', 'Test representative movements on site against agreed coverage and accuracy targets.'],
      'enterprise-ai': ['Choose an approved document set, two user roles and representative questions.', 'Check answers against source documents. Test that restricted material stays out of answers and decide which cases require human review.'],
    },
  },
  'zh-tw': {
    prepare: '洽詢前準備',
    acceptance: '試點驗收方向',
    solutions: {
      iiot: ['選定一台設備，列出可讀取的訊號及負責核准存取的人員。', '擷取一項訊號，與設備紀錄比對時間和數值，並約定資料中斷的標示方式。'],
      'mes-mom': ['準備一份工單、現行作業指示，以及相關的 ERP 輸入或匯出欄位。', '用一張工單走過作業指示、實際產出和約定的 ERP 資料交換。'],
      wms: ['準備入庫或揀貨流程、品項與儲位標籤樣本，以及 ERP 或掃描器限制。', '走一遍收貨到上架，核對品項、數量與儲位紀錄。'],
      intag: ['列出要追蹤的資產、區域與移動路線，標出不能漏報或誤判的環節。', '用現場具代表性的移動路線，對照約定的覆蓋與準確度目標。'],
      'enterprise-ai': ['選定經核准的文件範圍、兩種使用角色和常見問題。', '對照原始文件核查答案，驗證受限內容不會出現在未授權的回答中，並約定需要人工覆核的情形。'],
    },
  },
  th: {
    prepare: 'ข้อมูลก่อนหารือขอบเขต',
    acceptance: 'สิ่งที่ควรทดสอบในโครงการนำร่อง',
    solutions: {
      iiot: ['เลือกเครื่องจักรหนึ่งเครื่อง ระบุสัญญาณที่อ่านได้และผู้อนุมัติการเข้าถึง', 'เก็บสัญญาณที่เลือก เทียบเวลาและค่ากับบันทึกของเครื่องจักร แล้วตกลงวิธีระบุเมื่อข้อมูลขาดหาย'],
      'mes-mom': ['เตรียมตัวอย่างใบสั่งผลิต วิธีปฏิบัติงานปัจจุบัน และรายการข้อมูลเข้าออกของ ERP ที่เกี่ยวข้อง', 'ติดตามใบสั่งผลิตหนึ่งรายการตั้งแต่วิธีปฏิบัติงาน ผลผลิตจริง ไปจนถึงการแลกเปลี่ยนข้อมูลกับ ERP ตามที่ตกลง'],
      wms: ['เตรียมขั้นตอนรับเข้าหรือหยิบสินค้า ตัวอย่างฉลากสินค้าและตำแหน่งจัดเก็บ รวมถึงข้อจำกัดของ ERP หรือเครื่องสแกน', 'ทดลองรับเข้าถึงจัดเก็บหนึ่งรอบ แล้วตรวจให้รหัสสินค้า จำนวน และตำแหน่งตรงกับรายการจริง'],
      intag: ['ระบุทรัพย์สิน พื้นที่ และเส้นทางที่ต้องติดตาม รวมถึงจุดที่ไม่ควรพลาดหรือแจ้งผิด', 'ทดลองการเคลื่อนย้ายจริงที่เป็นตัวแทน แล้วเทียบกับเป้าหมายด้านพื้นที่ครอบคลุมและความแม่นยำที่ตกลงไว้'],
      'enterprise-ai': ['เลือกชุดเอกสารที่อนุญาตให้ใช้ บทบาทผู้ใช้สองแบบ และคำถามตัวอย่าง', 'เทียบคำตอบกับเอกสารต้นทาง ทดสอบว่าผู้ไม่มีสิทธิ์ไม่ได้รับข้อมูลจำกัด และตกลงกรณีที่ต้องให้คนตรวจทาน'],
    },
  },
} as const;
