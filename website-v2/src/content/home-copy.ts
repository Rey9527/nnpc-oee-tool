export const navigationIds = ['engineering', 'solutions', 'industries', 'work', 'about', 'contact'] as const;
export const serviceIcons = ['camera', 'access', 'network', 'wifi', 'server', 'sensor', 'ahu', 'wrench'] as const;
export const engineeringScenarios = [
  { id: 'new-construction', icon: 'helmet', label: 'New Construction' },
  { id: 'factory-expansion', icon: 'factory', label: 'Factory Expansion' },
  { id: 'renovation', icon: 'layers', label: 'Relocation & Renovation' },
  { id: 'modernization', icon: 'network', label: 'System Modernization' },
  { id: 'energy-smart', icon: 'sensor', label: 'Energy & Smart Control' },
  { id: 'maintenance', icon: 'wrench', label: 'Maintenance & Improvement' },
] as const;

type ScenarioId = typeof engineeringScenarios[number]['id'];
type ScenarioCopy = {
  title: string;
  text: string;
  link: string;
  entries: Record<ScenarioId, [title: string, description: string]>;
};

export const capabilityIcons = ['helmet', 'layers', 'people', 'headset'] as const;
export const solutionNames = ['IIoT', 'MES / MOM', 'WMS', 'INTAG', 'Enterprise AI'];
export const contact = { email: 'rey@nnpc.ai', lineId: '@nnpc', lineUrl: 'https://line.me/R/ti/p/%40nnpc' };
export const provinces = [
  { id: 'samut-prakan', count: 3 },
  { id: 'chon-buri', count: 4 },
  { id: 'rayong', count: 1 },
  { id: 'chachoengsao', count: 1 },
  { id: 'pathum-thani', count: 2 },
] as const;
export const siteCount = provinces.reduce((sum, province) => sum + province.count, 0);

export const homeCopy = {
  en: {
    skip: 'Skip to content', home: 'NNPC home', navLabel: 'Main navigation', mobileNav: 'Open navigation',
    language: 'Choose language', footerNav: 'Footer navigation',
    nav: ['Engineering', 'Solutions', 'Industries', 'Engineering Scenarios', 'About Us', 'Contact'],
    consult: 'Discuss your project', servicesCoverage: 'Engineering services and customer footprint',
    hero: {
      eyebrow: 'Engineering & ELV systems in Thailand',
      title: 'Engineering systems for industrial facilities',
      text: 'From CCTV and networks to environmental monitoring and AHU systems, we help you plan, integrate and maintain the systems your site relies on.',
      alt: 'A technician works beside a CCTV camera and cable trays in a factory.',
    },
    servicesTitle: 'Engineering Services',
    servicesText: 'Define the scope around your facility, existing equipment and operating requirements.',
    services: [
      ['CCTV', 'Camera placement, recording and system integration.'],
      ['Access Control', 'Doors, credentials and access permissions.'],
      ['LAN / Fiber', 'Structured cabling, fiber links and testing.'],
      ['Wi-Fi', 'Coverage planning and access point installation.'],
      ['Server Room', 'Racks, patch panels and network equipment layout.'],
      ['Environmental Monitoring', 'Temperature, humidity and equipment alerts.'],
      ['AHU', 'Air handling unit monitoring and controls integration.'],
      ['Maintenance', 'Inspections, troubleshooting and agreed follow-up.'],
    ],
    footprint: {
      title: 'Customer Footprint', unit: 'verified customer sites', region: 'provinces',
      countLabel: (count: number) => `${count} ${count === 1 ? 'site' : 'sites'}`,
      names: ['Samut Prakan', 'Chon Buri', 'Rayong', 'Chachoengsao', 'Pathum Thani'],
      areas: ['Bangpoo Industrial Estate area', 'Ban Bueng industrial area', 'Pluak Daeng / Ta Sit industrial area', 'Tha Kham / Bang Pakong area', 'Thanyaburi area'],
      mapTitle: 'Customer footprint in central and eastern Thailand',
      mapNote: 'Markers indicate approximate customer locations. Site counts are verified; project status is tracked separately.',
    },
    capabilityTitle: 'How we support your project',
    capabilities: [
      ['Project coordination', 'Agree the scope, schedule and responsibilities before work starts.'],
      ['Systems integration', 'Plan how equipment and software will connect with existing systems.'],
      ['Local installation partners', 'Coordinate site work with Thailand-based partners.'],
      ['After-sales support', 'Agree maintenance and troubleshooting arrangements for each project.'],
    ],
    engineering: {
      eyebrow: '01 / ENGINEERING', title: 'From site requirements to a working engineering system',
      text: 'We help factories and commercial facilities plan, install, integrate and maintain ELV systems — from CCTV and access control to structured cabling, fiber networks and environmental monitoring.',
      link: 'Explore our engineering approach', detail: 'One accountable project coordinator',
      detailText: 'NNPC manages the agreed engineering scope and coordinates qualified local installation partners, equipment suppliers and system integrators. Project deliverables may include site surveys, equipment specifications, installation coordination, testing, handover documentation and after-sales support, as defined in each proposal.',
      partnershipTitle: 'How we work with you',
      partnerships: [
        ['Factory Owners & Facility Teams', 'Engineering planning, project coordination, installation and acceptance.'],
        ['General Contractors', 'ELV subcontracting, on-site coordination and installation resources.'],
        ['System Integrators', 'Cabling, device installation and field integration support.'],
      ],
    },
    work: {
      eyebrow: '02 / ENGINEERING SCENARIOS', title: 'Engineering scenarios',
      text: 'Typical tasks that help define the scope of a factory project.',
      label: 'Illustrative engineering scene · not a client site',
      needs: {
        title: 'When do you need ELV engineering?',
        text: 'From building a new factory or expanding a production line to upgrading existing facilities, see what infrastructure and systems to plan at each stage.',
        link: 'Explore project needs and when to involve an ELV team',
        entries: {
          'new-construction': ['New factory or office', 'Plan networks, equipment and monitoring during building and M&E design.'],
          'factory-expansion': ['Factory or production line expansion', 'Extend networks, fiber links and environmental monitoring for new lines and equipment.'],
          renovation: ['Relocation or renovation', 'Review equipment locations and cable routes before work on the new layout begins.'],
          modernization: ['Aging or unreliable systems', 'Address aging cabling, incompatible equipment and recurring system faults.'],
          'energy-smart': ['Energy and smart controls upgrade', 'Put in place the infrastructure for environmental monitoring, equipment controls and smart operations.'],
          maintenance: ['Maintenance and system improvement', 'Improve reliability with regular inspections, testing and targeted upgrades.'],
        },
      } satisfies ScenarioCopy,
      scenes: [
        ['CCTV inspection', 'Check camera angles, cable routes and access for maintenance.'],
        ['Factory network room', 'Plan rack space, patching and cable identification before changes.'],
        ['AHU and environmental monitoring', 'Identify measurement points and agree how alarms should be handled.'],
      ],
    },
    delivery: {
      eyebrow: '03 / DELIVERY PROCESS', title: 'From site survey to handover',
      text: 'Confirm deliverables and acceptance criteria before starting. Set support arrangements at handover.',
      steps: ['Review requirements', 'Survey the site', 'Confirm design and scope', 'Install and integrate', 'Test and hand over'],
    },
    solutions: {
      eyebrow: '04 / SMART OPERATIONS', title: 'Connect engineering with operations',
      text: 'Explore solutions for equipment data, production and warehouse management, indoor asset location and company knowledge. Start with what your site needs.',
      viewAll: 'View all solutions',
      subtitles: {
        iiot: '(Industrial Internet of Things)',
        'mes-mom': 'Production Execution & Operations Management',
        wms: '(Warehouse Management System)',
        intag: 'Indoor Location & Dispatch Support',
        'enterprise-ai': 'Internal Knowledge Search',
      },
    },
    industries: {
      eyebrow: '05 / INDUSTRIES', title: 'Start with the operating environment',
      text: 'Factories, warehouses and other industrial facilities each have different access, uptime and maintenance constraints. Tell us what is already in place and what needs to change.',
      link: 'Discuss your facility',
    },
    about: {
      eyebrow: 'ABOUT NNPC', title: 'Engineering coordination and systems integration',
      text: 'NNPC Consulting works with local installation partners in Thailand. We also discuss software and AI where they fit the operational requirement.',
    },
    contact: {
      eyebrow: 'CONTACT', title: 'Tell us about your project',
      text: 'Share your site area, required systems and target timeline so we can discuss next steps.',
      email: 'Email NNPC', line: 'Open LINE',
    },
    footer: 'Engineering and ELV systems in Thailand', country: 'Thailand',
  },
  'zh-tw': {
    skip: '跳至主要內容', home: 'NNPC 首頁', navLabel: '主要導覽', mobileNav: '開啟選單',
    language: '選擇語言', footerNav: '頁尾導覽',
    nav: ['工程服務', '解決方案', '產業應用', '工程情境', '關於我們', '聯絡我們'],
    consult: '洽詢工程需求', servicesCoverage: '工程服務與客戶案場分布',
    hero: {
      eyebrow: '泰國工業工程與弱電系統',
      title: '為工業設施規劃與整合工程系統',
      text: '從監控、網路到環境監測與空調箱，協助你規劃、整合與維護現場運作所需的系統。',
      alt: '技術人員在工廠內的監視器與線槽旁作業。',
    },
    servicesTitle: '工程服務',
    servicesText: '依設施條件、既有設備與營運需求確認工程範圍。',
    services: [
      ['CCTV 影像監控', '規劃攝影機點位、影像錄製與系統整合。'],
      ['門禁管理', '規劃門禁設備、通行憑證與權限。'],
      ['LAN／光纖', '結構化布線、光纖連接與測試。'],
      ['Wi-Fi 無線網路', '評估訊號涵蓋與無線基地台安裝。'],
      ['機房工程', '規劃機櫃、配線盤與網路設備配置。'],
      ['環境監測', '監測溫濕度並規劃設備告警。'],
      ['AHU 空調箱', '規劃空調箱監測與控制系統整合。'],
      ['維護保養', '依約定範圍巡檢、排查故障與後續追蹤。'],
    ],
    footprint: {
      title: '客戶案場分布', unit: '處已核對案場', region: '府',
      countLabel: (count: number) => `${count} 處案場`,
      names: ['北欖府（Samut Prakan）', '春武里府（Chon Buri）', '羅勇府（Rayong）', '北柳府（Chachoengsao）', '巴吞他尼府（Pathum Thani）'],
      areas: ['Bangpoo 工業區一帶', 'Ban Bueng 工業聚落', 'Pluak Daeng／Ta Sit 工業區', 'Tha Kham／Bang Pakong 一帶', 'Thanyaburi 一帶'],
      mapTitle: '泰國中部與東部客戶案場分布',
      mapNote: '標記顯示客戶案場的大致位置。案場數量已核對，工程進度另行追蹤。',
    },
    capabilityTitle: '工程合作方式',
    capabilities: [
      ['工程協調', '開工前確認範圍、工期與各方分工。'],
      ['系統整合', '規劃新設備、軟體與既有系統如何串接。'],
      ['泰國在地施工夥伴', '與在地合作夥伴協調現場施作。'],
      ['售後支援', '依個案約定維護與故障排查方式。'],
    ],
    engineering: {
      eyebrow: '01 / 工程服務', title: '從現場需求到可運作的工程系統',
      text: '我們協助工廠與商業設施規劃、安裝、整合及維護弱電系統，涵蓋 CCTV 影像監控、門禁管理、結構化布線、光纖網路及環境監測。',
      link: '了解工程合作方式', detail: '由 NNPC 擔任單一專案窗口',
      detailText: 'NNPC 負責管理雙方約定的工程範圍，並協調具資格的在地施工夥伴、設備供應商及系統整合商。依各案提案約定，交付範圍可包含現場勘查、設備規格、施工協調、測試、移交文件與售後支援。',
      partnershipTitle: '合作模式',
      partnerships: [
        ['工廠業主與廠務團隊', '工程規劃、專案協調、施工安裝及驗收。'],
        ['總承包商', '弱電分包、現場協調及安裝資源。'],
        ['系統整合商', '布線、設備安裝及現場整合支援。'],
      ],
    },
    work: {
      eyebrow: '02 / 工程情境', title: '工廠工程應用情境',
      text: '以下常見任務可作為討論工程範圍的起點。',
      label: '工程情境示意・非客戶案場',
      needs: {
        title: '什麼時候需要弱電工程？',
        text: '從新建廠房、擴建產線，到既有設施改善與智慧化升級，了解不同工程階段所需的基礎設施與系統規劃。',
        link: '了解工程需求與介入時機',
        entries: {
          'new-construction': ['新建工廠／辦公室', '在建築與機電設計階段，提前規劃網路、設備與監測系統。'],
          'factory-expansion': ['擴廠／新增產線', '配合新產線與設備導入，擴充網路、光纖與環境監測設施。'],
          renovation: ['搬遷／裝修', '在空間調整與裝修施工前，重新規劃設備位置及線路。'],
          modernization: ['系統老舊／故障', '改善老舊線路、設備不相容及系統不穩定問題。'],
          'energy-smart': ['節能／智慧化升級', '建立環境監測、設備控制與智慧營運所需的基礎設施。'],
          maintenance: ['維護／系統改善', '透過定期檢查、測試與改善，提升既有系統的可靠性。'],
        },
      } satisfies ScenarioCopy,
      scenes: [
        ['CCTV 現場巡檢', '確認攝影機角度、線路走向及維修動線。'],
        ['工廠網路機房', '施工前盤點機櫃空間、配線與標示。'],
        ['空調箱與環境監測', '確認量測點，並約定告警處理方式。'],
      ],
    },
    delivery: {
      eyebrow: '03 / 執行流程', title: '從現場勘查到測試交付',
      text: '開工前確認交付物與驗收條件，交付時約定後續支援方式。',
      steps: ['盤點需求', '勘查現場', '確認設計與範圍', '施工及整合', '測試與交付'],
    },
    solutions: {
      eyebrow: '04 / 智慧營運', title: '讓工程系統支援日常營運',
      text: '從設備資料、生產與倉儲管理，到資產定位與企業知識查詢，依現場需求選擇適合的方案。',
      viewAll: '查看全部方案',
      subtitles: {
        iiot: '工業物聯網',
        'mes-mom': '製造執行與營運管理',
        wms: '倉儲管理系統',
        intag: '室內定位與派工輔助',
        'enterprise-ai': '企業知識查詢',
      },
    },
    industries: {
      eyebrow: '05 / 產業應用', title: '從實際營運環境出發',
      text: '工廠、倉庫與其他工業設施各有不同的門禁、停機與維護限制。歡迎提供既有系統及改善需求。',
      link: '討論你的設施需求',
    },
    about: {
      eyebrow: '關於 NNPC', title: '工程協調與系統整合',
      text: 'NNPC Consulting 在泰國與在地施工夥伴合作，並視營運需求討論軟體與 AI 方案。',
    },
    contact: {
      eyebrow: '聯絡我們', title: '聊聊你的工程需求',
      text: '歡迎提供案場區域、所需系統與預計時程，方便一起討論下一步。',
      email: '寄信給 NNPC', line: '開啟 LINE',
    },
    footer: '泰國工業工程與弱電系統', country: '泰國',
  },
  th: {
    skip: 'ข้ามไปยังเนื้อหาหลัก', home: 'หน้าแรก NNPC', navLabel: 'เมนูหลัก', mobileNav: 'เปิดเมนู',
    language: 'เลือกภาษา', footerNav: 'เมนูท้ายหน้า',
    nav: ['งานวิศวกรรม', 'โซลูชัน', 'อุตสาหกรรม', 'ตัวอย่างงานวิศวกรรม', 'เกี่ยวกับเรา', 'ติดต่อ'],
    consult: 'ปรึกษาเรื่องโครงการ', servicesCoverage: 'บริการวิศวกรรมและพื้นที่ตั้งของลูกค้า',
    hero: {
      eyebrow: 'งานวิศวกรรมและระบบ ELV ในประเทศไทย',
      title: 'ระบบวิศวกรรมสำหรับโรงงานและสถานประกอบการ',
      text: 'เราช่วยวางแผน เชื่อมต่อ และดูแลระบบที่หน้างานต้องใช้ ตั้งแต่กล้องวงจรปิดและเครือข่าย ไปจนถึงระบบติดตามสภาพแวดล้อมและเครื่องส่งลมเย็น',
      alt: 'ช่างปฏิบัติงานใกล้กล้องวงจรปิดและรางเดินสายในโรงงาน',
    },
    servicesTitle: 'บริการด้านวิศวกรรม',
    servicesText: 'กำหนดขอบเขตงานตามสภาพหน้างาน อุปกรณ์เดิม และความต้องการในการดำเนินงาน',
    services: [
      ['กล้องวงจรปิด (CCTV)', 'วางตำแหน่งกล้อง ระบบบันทึกภาพ และการเชื่อมต่อ'],
      ['ระบบควบคุมการเข้าออก', 'วางระบบประตู บัตรผ่าน และสิทธิ์การเข้าออก'],
      ['LAN / ใยแก้วนำแสง', 'เดินสาย เชื่อมต่อใยแก้วนำแสง และทดสอบ'],
      ['เครือข่าย Wi-Fi', 'วางแผนพื้นที่ครอบคลุมและติดตั้งจุดกระจายสัญญาณ'],
      ['ห้องเซิร์ฟเวอร์', 'วางผังตู้แร็ก แผงกระจายสาย และอุปกรณ์เครือข่าย'],
      ['ติดตามสภาพแวดล้อม', 'ติดตามอุณหภูมิ ความชื้น และการแจ้งเตือนอุปกรณ์'],
      ['เครื่องส่งลมเย็น (AHU)', 'ติดตามการทำงานและเชื่อมต่อระบบควบคุม AHU'],
      ['บำรุงรักษา', 'ตรวจสอบ แก้ปัญหา และติดตามตามขอบเขตที่ตกลง'],
    ],
    footprint: {
      title: 'พื้นที่ตั้งของลูกค้า', unit: 'สถานที่ที่ตรวจสอบแล้ว', region: 'จังหวัด',
      countLabel: (count: number) => `${count} แห่ง`,
      names: ['สมุทรปราการ', 'ชลบุรี', 'ระยอง', 'ฉะเชิงเทรา', 'ปทุมธานี'],
      areas: ['บริเวณนิคมอุตสาหกรรมบางปู', 'ย่านอุตสาหกรรมบ้านบึง', 'ย่านอุตสาหกรรมปลวกแดง / ตาสิทธิ์', 'บริเวณท่าข้าม / บางปะกง', 'บริเวณธัญบุรี'],
      mapTitle: 'พื้นที่ตั้งของลูกค้าในภาคกลางและภาคตะวันออกของไทย',
      mapNote: 'จุดบนแผนที่แสดงตำแหน่งโดยประมาณของหน้างานลูกค้า จำนวนหน้างานผ่านการตรวจสอบแล้ว และมีการติดตามสถานะโครงการแยกต่างหาก',
    },
    capabilityTitle: 'รูปแบบการทำงานร่วมกัน',
    capabilities: [
      ['ประสานงานโครงการ', 'ตกลงขอบเขต ระยะเวลา และผู้รับผิดชอบก่อนเริ่มงาน'],
      ['เชื่อมต่อระบบ', 'วางแผนการเชื่อมอุปกรณ์และซอฟต์แวร์กับระบบเดิม'],
      ['พันธมิตรติดตั้งในไทย', 'ประสานการทำงานหน้างานกับพันธมิตรท้องถิ่น'],
      ['บริการหลังการขาย', 'ตกลงการบำรุงรักษาและการแก้ปัญหาเป็นรายโครงการ'],
    ],
    engineering: {
      eyebrow: '01 / งานวิศวกรรม', title: 'จากความต้องการหน้างานสู่ระบบที่ใช้งานได้จริง',
      text: 'เราช่วยโรงงานและอาคารพาณิชย์วางแผน ติดตั้ง เชื่อมต่อ และบำรุงรักษาระบบ ELV ตั้งแต่กล้องวงจรปิดและระบบควบคุมการเข้าออก ไปจนถึงระบบเดินสายแบบมีโครงสร้าง เครือข่ายใยแก้วนำแสง และระบบตรวจติดตามสภาพแวดล้อม',
      link: 'ดูแนวทางการทำงาน', detail: 'NNPC เป็นผู้ประสานงานหลักที่รับผิดชอบโครงการ',
      detailText: 'NNPC บริหารงานวิศวกรรมตามขอบเขตที่ตกลง และประสานงานกับพันธมิตรติดตั้งในพื้นที่ที่มีคุณสมบัติเหมาะสม ผู้จัดหาอุปกรณ์ และผู้รับงานบูรณาการระบบ งานส่งมอบอาจครอบคลุมการสำรวจหน้างาน การกำหนดสเปกอุปกรณ์ การประสานงานติดตั้ง การทดสอบ เอกสารส่งมอบ และบริการหลังการขาย ตามที่ระบุในข้อเสนอของแต่ละโครงการ',
      partnershipTitle: 'รูปแบบการร่วมงาน',
      partnerships: [
        ['เจ้าของโรงงานและทีมดูแลอาคาร', 'วางแผนงานวิศวกรรม ประสานงานโครงการ ติดตั้ง และตรวจรับงาน'],
        ['ผู้รับเหมาหลัก', 'รับเหมาช่วงระบบ ELV ประสานงานหน้างาน และจัดหาทรัพยากรสำหรับการติดตั้ง'],
        ['ผู้รับงานบูรณาการระบบ', 'เดินสาย ติดตั้งอุปกรณ์ และสนับสนุนการเชื่อมต่อระบบหน้างาน'],
      ],
    },
    work: {
      eyebrow: '02 / ตัวอย่างงานวิศวกรรม', title: 'ตัวอย่างลักษณะงานวิศวกรรมในโรงงาน',
      text: 'ตัวอย่างงานทั่วไปสำหรับใช้หารือขอบเขตของโครงการ',
      label: 'ภาพประกอบงานวิศวกรรม · ไม่ใช่สถานที่ของลูกค้า',
      needs: {
        title: 'ควรเริ่มวางแผนงานระบบ ELV เมื่อไร?',
        text: 'ตั้งแต่สร้างโรงงานใหม่ เพิ่มสายการผลิต ไปจนถึงปรับปรุงอาคารหรืออัปเกรดระบบควบคุม ดูว่าแต่ละช่วงควรเตรียมโครงสร้างพื้นฐานและวางแผนระบบอะไรบ้าง',
        link: 'ดูความต้องการของโครงการและช่วงที่ควรเริ่มวางแผน',
        entries: {
          'new-construction': ['สร้างโรงงานหรือสำนักงานใหม่', 'วางแผนเครือข่าย อุปกรณ์ และระบบตรวจวัดตั้งแต่ขั้นออกแบบอาคารและงานระบบประกอบอาคาร'],
          'factory-expansion': ['ขยายโรงงานหรือเพิ่มสายการผลิต', 'ขยายเครือข่าย สายใยแก้วนำแสง และระบบตรวจวัดสภาพแวดล้อมให้รองรับสายการผลิตและอุปกรณ์ใหม่'],
          renovation: ['ย้ายหรือปรับปรุงพื้นที่', 'ทบทวนตำแหน่งอุปกรณ์และแนวเดินสายก่อนเริ่มปรับผังหรือตกแต่งพื้นที่'],
          modernization: ['ระบบเก่าหรือขัดข้องบ่อย', 'แก้ปัญหาสายสัญญาณเสื่อมสภาพ อุปกรณ์ทำงานร่วมกันไม่ได้ และระบบทำงานไม่เสถียร'],
          'energy-smart': ['ประหยัดพลังงานและอัปเกรดระบบควบคุม', 'เตรียมโครงสร้างพื้นฐานสำหรับตรวจวัดสภาพแวดล้อม ควบคุมอุปกรณ์ และบริหารการทำงานด้วยข้อมูล'],
          maintenance: ['บำรุงรักษาและปรับปรุงระบบ', 'ตรวจสอบ ทดสอบ และปรับปรุงตามรอบเพื่อให้ระบบเดิมทำงานได้อย่างน่าเชื่อถือ'],
        },
      } satisfies ScenarioCopy,
      scenes: [
        ['ตรวจสอบกล้องวงจรปิด', 'ตรวจมุมกล้อง แนวเดินสาย และการเข้าถึงเพื่อซ่อมบำรุง'],
        ['ห้องเครือข่ายโรงงาน', 'วางแผนพื้นที่ตู้แร็ก การต่อสาย และการติดป้ายสายก่อนปรับปรุง'],
        ['AHU และการติดตามสภาพแวดล้อม', 'กำหนดจุดวัดและวิธีดำเนินการเมื่อมีการแจ้งเตือน'],
      ],
    },
    delivery: {
      eyebrow: '03 / ขั้นตอนดำเนินงาน', title: 'จากการสำรวจถึงการส่งมอบ',
      text: 'ยืนยันสิ่งที่จะส่งมอบและเกณฑ์ตรวจรับก่อนเริ่มงาน พร้อมตกลงแนวทางดูแลเมื่อส่งมอบ',
      steps: ['ทบทวนความต้องการ', 'สำรวจหน้างาน', 'ยืนยันแบบและขอบเขต', 'ติดตั้งและเชื่อมระบบ', 'ทดสอบและส่งมอบ'],
    },
    solutions: {
      eyebrow: '04 / การดำเนินงานอัจฉริยะ', title: 'เชื่อมระบบวิศวกรรมกับการดำเนินงาน',
      text: 'เลือกโซลูชันตามความต้องการหน้างาน ตั้งแต่ข้อมูลเครื่องจักร การจัดการการผลิตและคลังสินค้า ไปจนถึงการระบุตำแหน่งทรัพย์สินและการค้นหาความรู้ในองค์กร',
      viewAll: 'ดูโซลูชันทั้งหมด',
      subtitles: {
        iiot: 'อินเทอร์เน็ตของสรรพสิ่งในอุตสาหกรรม',
        'mes-mom': 'ระบบบริหารการผลิตและการปฏิบัติงาน',
        wms: 'ระบบบริหารจัดการคลังสินค้า',
        intag: 'การระบุตำแหน่งในอาคารและช่วยจัดงาน',
        'enterprise-ai': 'การค้นหาความรู้ภายในองค์กร',
      },
    },
    industries: {
      eyebrow: '05 / อุตสาหกรรม', title: 'เริ่มจากสภาพการทำงานจริง',
      text: 'โรงงาน คลังสินค้า และสถานประกอบการแต่ละแห่งมีข้อจำกัดด้านการเข้าออก การหยุดระบบ และการบำรุงรักษาต่างกัน แจ้งระบบที่ใช้อยู่และสิ่งที่ต้องการปรับปรุงให้เราทราบได้',
      link: 'หารือความต้องการของหน้างาน',
    },
    about: {
      eyebrow: 'เกี่ยวกับ NNPC', title: 'ประสานงานวิศวกรรมและเชื่อมต่อระบบ',
      text: 'NNPC Consulting ทำงานร่วมกับพันธมิตรติดตั้งในประเทศไทย และหารือทางเลือกด้านซอฟต์แวร์และ AI ตามความต้องการในการดำเนินงาน',
    },
    contact: {
      eyebrow: 'ติดต่อ', title: 'เล่าโครงการของคุณให้เราฟัง',
      text: 'แจ้งพื้นที่หน้างาน ระบบที่ต้องการ และกำหนดเวลาเบื้องต้น เพื่อหารือขั้นตอนต่อไป',
      email: 'ส่งอีเมลถึง NNPC', line: 'เปิด LINE',
    },
    footer: 'งานวิศวกรรมและระบบ ELV ในประเทศไทย', country: 'ประเทศไทย',
  },
};
