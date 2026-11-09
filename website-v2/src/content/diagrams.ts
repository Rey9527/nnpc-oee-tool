export const diagramCopy = {
  en: {
    note: 'Concept diagram. The site design may differ.',
    access: { title: 'Access signal and door release', flows: [[['access', 'Credential reader'], ['server', 'Door controller'], ['access', 'Electric lock']]] },
    fiber: { title: 'Fiber termination and acceptance', flows: [[['network', 'Fiber cable route'], ['server', 'Splice and patch panel'], ['wrench', 'Link loss test']]] },
    environment: { title: 'Two example monitoring paths', flows: [[['sensor', 'Room sensor'], ['server', 'Monitoring gateway'], ['bell', 'Reading and alert']], [['ahu', 'AHU status point'], ['server', 'Control panel'], ['screen', 'Equipment status']]] },
    pilot: { title: 'How to scope a pilot', flows: [[['layers', 'Pick one process'], ['network', 'Confirm data and access'], ['screen', 'Agree the test']]] },
  },
  'zh-tw': {
    note: '概念示意，實際配置依現場確認。',
    access: { title: '門禁訊號與開門流程', flows: [[['access', '憑證讀卡機'], ['server', '門禁控制器'], ['access', '電鎖']]] },
    fiber: { title: '光纖端接與驗收', flows: [[['network', '光纖佈線路徑'], ['server', '熔接及光纖配線盤'], ['wrench', '鏈路損耗測試']]] },
    environment: { title: '兩種監測路徑示意', flows: [[['sensor', '室內環境感測器'], ['server', '監測閘道器'], ['bell', '讀值及告警']], [['ahu', 'AHU 狀態點位'], ['server', '控制盤'], ['screen', '設備狀態']]] },
    pilot: { title: '如何界定試點', flows: [[['layers', '選一項作業'], ['network', '確認資料與權限'], ['screen', '約定驗收方式']]] },
  },
  th: {
    note: 'แผนภาพแนวคิด การออกแบบจริงขึ้นอยู่กับหน้างาน',
    access: { title: 'สัญญาณควบคุมและการปลดล็อกประตู', flows: [[['access', 'เครื่องอ่านบัตร'], ['server', 'ตัวควบคุมประตู'], ['access', 'กลอนไฟฟ้า']]] },
    fiber: { title: 'การเข้าหัวและทดสอบสายใยแก้ว', flows: [[['network', 'แนวเดินสายใยแก้ว'], ['server', 'จุดเชื่อมสายและแผงกระจาย'], ['wrench', 'ทดสอบการสูญเสียของลิงก์']]] },
    environment: { title: 'ตัวอย่างเส้นทางการติดตามสองแบบ', flows: [[['sensor', 'เซ็นเซอร์ในห้อง'], ['server', 'เกตเวย์เก็บข้อมูล'], ['bell', 'ค่าที่วัดและการแจ้งเตือน']], [['ahu', 'จุดสถานะ AHU'], ['server', 'ตู้ควบคุม'], ['screen', 'สถานะอุปกรณ์']]] },
    pilot: { title: 'กำหนดขอบเขตงานนำร่อง', flows: [[['layers', 'เลือกหนึ่งกระบวนการ'], ['network', 'ยืนยันข้อมูลและสิทธิ์'], ['screen', 'ตกลงวิธีทดสอบ']]] },
  },
} as const;
