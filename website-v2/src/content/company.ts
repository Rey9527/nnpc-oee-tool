import type { Locale } from './home';
import type { MainPage } from './routes';

export const solutionIds = ['iiot', 'mes-mom', 'wms', 'intag', 'enterprise-ai'] as const;
type Item = readonly [string, string];
interface CompanyCopy {
  titles: Record<MainPage, string>;
  solutionNotes: readonly string[];
  industry: Item;
  industries: readonly Item[];
  work: Item;
  workChecks: readonly Item[];
  about: Item;
  responsibilities: readonly Item[];
  contact: Item;
  brief: readonly Item[];
  contactIntro: string;
  contactActions: string;
}

export const companyCopy = {
  en: {
    titles: { solutions: 'Smart Operations Solutions', industries: 'Industries & Facilities', work: 'Engineering Scenarios', about: 'About NNPC', contact: 'Contact NNPC' },
    solutionNotes: [
      'Start with one machine or utility signal. Agree collection points, access to the equipment and how operators will use the data before expanding to other lines.',
      'Map the production order, work instructions and actual output for a pilot line. Agree where master data lives and which information must flow to or from ERP.',
      'Trace receiving, storage, picking and dispatch. Confirm item and location identifiers, scanners, labels and how inventory reconciles with existing systems.',
      'Discuss which assets or movements need to be tracked, where visibility is missing and what accuracy, coverage and integration must be validated at the site.',
      'Start with one business process or an approved document set. Agree permitted data, user access and how staff will check answers before extending the pilot.',
    ],
    industry: ['Typical facility requirements', 'Use your operating conditions and maintenance windows to decide which systems to survey first. The following are planning examples.'],
    industries: [
      ['Manufacturing plants', 'Plan camera coverage, industrial network links and environmental monitoring around shift changes, machine access and planned maintenance windows.'],
      ['Warehouses and distribution facilities', 'Review loading-dock visibility, wireless coverage for handhelds, access permissions and the handoff between physical movement and inventory records.'],
      ['Commercial facilities', 'Coordinate access control, cabling, server room work and monitoring with the facility team, tenants and other contractors.'],
    ],
    work: ['Illustrative engineering scenarios', 'These illustrative scenes show decisions discussed during a site survey and handover. They do not show customer sites or completed projects.'],
    workChecks: [
      ['CCTV inspection', 'Agree what needs to be visible by area, and demonstrate day and night views and playback at acceptance.'],
      ['Network room', 'Confirm rack space, cable labels, as-built records and how live systems will be protected during the work.'],
      ['AHU and environmental monitoring', 'Identify sensor locations and existing controller interfaces. Agree alarm recipients, test method and handover records.'],
    ],
    about: ['How we deliver engineering work', 'NNPC coordinates an agreed engineering scope with local installation partners, suppliers and system integrators in Thailand.'],
    responsibilities: [
      ['Project coordination', 'Agree the scope, work windows, responsibility for interfaces and the acceptance criteria with the site team.'],
      ['Site delivery', 'Confirm who supplies, installs and configures each system and who approves changes during installation.'],
      ['Handover and support', 'Review tests, documentation, operating access and any maintenance arrangements in the proposal.'],
    ],
    contact: ['What to include in your enquiry', 'Send an email or contact us on LINE. A short brief helps identify what we should check during a site survey.'],
    brief: [
      ['Facility and location', 'Share the province, facility type, operating hours and site access restrictions. A general location is enough for an initial enquiry.'],
      ['System and objective', 'Describe the existing setup, what you want to improve, and the areas that need work. Include a shareable drawing or equipment list if available.'],
      ['Timing and responsibilities', 'Mention preferred work windows, planned outages and who should join the site survey from facility, IT or procurement.'],
    ],
    contactIntro: 'Contact NNPC about an engineering project, site survey or maintenance requirement in Thailand.',
    contactActions: 'Contact us by email or LINE',
  },
  'zh-tw': {
    titles: { solutions: '智慧營運方案', industries: '產業與設施', work: '工程應用情境', about: '關於 NNPC', contact: '聯絡 NNPC' },
    solutionNotes: [
      '從一台機器或一項公用系統訊號開始。先確認資料擷取點、設備存取與現場人員如何使用資料，再考慮擴展到其他產線。',
      '以一條試點產線盤點工單、作業指示及實際產出，確認主資料歸屬及與 ERP 交換的資訊。',
      '梳理入庫、上架、揀貨與出貨，確認品項與儲位編碼、掃描器、標籤，以及與既有系統的庫存核對方式。',
      '確認哪些資產或移動需要追蹤、現場哪裡缺乏可視性，以及定位精度、覆蓋和整合要如何驗證。',
      '從一項業務流程或經核准的文件集開始，先確認資料使用範圍、人員權限和答案驗證方式，再擴大試點。',
    ],
    industry: ['常見設施需求', '依作業條件與可維護時段決定優先勘查的系統。以下為規劃情境。'],
    industries: [
      ['製造工廠', '依輪班、設備動線與停機窗口，規劃監控覆蓋、工業網路連線及環境監測。'],
      ['倉庫與配送中心', '盤點裝卸區影像、手持設備的無線覆蓋、門禁權限，以及貨物移動和庫存紀錄如何對應。'],
      ['商業設施', '與設施團隊、租戶及其他工種協調門禁、配線、機房與監測施工。'],
    ],
    work: ['工程情境示意', '以下場景用來說明現場勘查與交付時會討論的工程問題，並非客戶案場或完工案例。'],
    workChecks: [
      ['CCTV 檢查', '確認各區域要辨識的細節，驗收時查看日夜影像並示範錄影回放。'],
      ['廠區網路機房', '確認機櫃空間、線路標示與竣工紀錄，以及施工期間如何維持既有系統。'],
      ['AHU 與環境監測', '確認感測位置及既有控制介面，並約定告警對象、測試方式及交付資料。'],
    ],
    about: ['我們如何交付工程', 'NNPC 依約定範圍協調泰國本地施工夥伴、供應商和系統整合商。'],
    responsibilities: [
      ['專案協調', '與廠方確認工程範圍、施工時段、介面分工及驗收條件。'],
      ['現場執行', '確認各系統由誰供應、安裝和設定，以及誰核准施工中的變更。'],
      ['交付與支援', '依提案核對測試、文件、操作權限及後續維護安排。'],
    ],
    contact: ['詢問工程需求時可提供的資料', '可透過 Email 或 LINE 聯絡。先提供簡要需求，方便確認現場勘查重點。'],
    brief: [
      ['設施類型與區域', '提供所在府別、場地類型、運作時段和進場限制。初步洽詢時提供大致區域即可。'],
      ['系統及目標', '說明現況、要改善的問題和施工區域。如有可分享的圖面或設備清單，可一併提供。'],
      ['時程與分工', '說明期望施工時段、可安排的停機窗口，以及廠務、IT 或採購的勘查窗口。'],
    ],
    contactIntro: '洽詢泰國工程專案、現場勘查或系統維護需求。',
    contactActions: '透過 Email 或 LINE 聯絡',
  },
  th: {
    titles: { solutions: 'โซลูชันสำหรับการดำเนินงาน', industries: 'อุตสาหกรรมและประเภทสถานที่', work: 'ตัวอย่างลักษณะงานวิศวกรรม', about: 'เกี่ยวกับ NNPC', contact: 'ติดต่อ NNPC' },
    solutionNotes: [
      'เริ่มจากสัญญาณของเครื่องจักรหรือระบบสาธารณูปโภคหนึ่งจุด ตกลงจุดเก็บข้อมูล สิทธิ์เข้าถึงอุปกรณ์ และวิธีใช้ข้อมูลก่อนขยายไปสายการผลิตอื่น',
      'ทบทวนใบสั่งผลิต วิธีปฏิบัติงาน และผลผลิตจริงในสายงานนำร่อง ระบุแหล่งข้อมูลหลักและข้อมูลที่ต้องแลกเปลี่ยนกับ ERP',
      'ไล่ขั้นตอนรับเข้า จัดเก็บ หยิบ และจัดส่ง ตรวจรหัสสินค้าและตำแหน่ง เครื่องสแกน ฉลาก และวิธีกระทบยอดกับระบบเดิม',
      'ระบุทรัพย์สินหรือการเคลื่อนย้ายที่ต้องติดตาม จุดที่ยังมองไม่เห็น และระดับความแม่นยำ พื้นที่ครอบคลุม และการเชื่อมต่อที่ต้องทดสอบหน้างาน',
      'เริ่มจากกระบวนการเดียวหรือชุดเอกสารที่อนุญาตให้ใช้ ระบุสิทธิ์เข้าถึงและวิธีที่พนักงานจะตรวจคำตอบก่อนขยายการทดลอง',
    ],
    industry: ['ความต้องการที่พบบ่อยในแต่ละสถานที่', 'ใช้สภาพการทำงานและช่วงเวลาบำรุงรักษาเพื่อจัดลำดับระบบที่จะสำรวจ ตัวอย่างต่อไปนี้ใช้ประกอบการวางแผน'],
    industries: [
      ['โรงงานผลิต', 'วางพื้นที่กล้อง เครือข่ายอุตสาหกรรม และการติดตามสภาพแวดล้อมให้สอดคล้องกับกะทำงาน การเข้าถึงเครื่องจักร และช่วงหยุดซ่อม'],
      ['คลังสินค้าและศูนย์กระจายสินค้า', 'ตรวจมุมมองบริเวณขนถ่าย สัญญาณสำหรับอุปกรณ์พกพา สิทธิ์เข้าออก และการเชื่อมการเคลื่อนย้ายสินค้ากับบันทึกสต็อก'],
      ['อาคารพาณิชย์', 'ประสานงานระบบเข้าออก งานเดินสาย ห้องเซิร์ฟเวอร์ และการตรวจวัดกับทีมอาคาร ผู้เช่า และผู้รับเหมารายอื่น'],
    ],
    work: ['ภาพประกอบลักษณะงาน', 'ภาพประกอบเหล่านี้แสดงประเด็นที่ใช้พูดคุยระหว่างการสำรวจและส่งมอบงาน ไม่ใช่ภาพสถานที่ของลูกค้าหรือโครงการที่ส่งมอบแล้ว'],
    workChecks: [
      ['ตรวจระบบ CCTV', 'ตกลงรายละเอียดที่ต้องเห็นในแต่ละพื้นที่ แล้วตรวจภาพกลางวัน กลางคืน และการเปิดย้อนหลังในวันตรวจรับ'],
      ['ห้องเครือข่าย', 'ตรวจพื้นที่ตู้ ป้ายสาย และเอกสารติดตั้งจริง พร้อมตกลงวิธีรักษาระบบเดิมให้ทำงานระหว่างติดตั้ง'],
      ['AHU และการติดตามสภาพแวดล้อม', 'ระบุจุดเซ็นเซอร์และตัวควบคุมเดิม ผู้รับแจ้งเตือน วิธีทดสอบ และข้อมูลที่จะส่งมอบ'],
    ],
    about: ['วิธีส่งมอบงานวิศวกรรม', 'NNPC ประสานผู้รับเหมาติดตั้งในประเทศไทย ผู้จัดหาอุปกรณ์ และผู้รวมระบบตามขอบเขตที่ตกลงกับลูกค้า'],
    responsibilities: [
      ['ประสานโครงการ', 'ตกลงขอบเขต ช่วงเวลาทำงาน ผู้รับผิดชอบส่วนเชื่อมต่อ และเกณฑ์ตรวจรับกับทีมหน้างาน'],
      ['ดำเนินงานที่หน้างาน', 'ระบุผู้จัดหา ผู้ติดตั้ง ผู้ตั้งค่าระบบ และผู้อนุมัติการเปลี่ยนแปลงระหว่างทำงาน'],
      ['ส่งมอบและดูแล', 'ทบทวนผลทดสอบ เอกสาร สิทธิ์ใช้งาน และการบำรุงรักษาตามข้อเสนอ'],
    ],
    contact: ['ข้อมูลที่ใช้เริ่มพูดคุย', 'ติดต่อทางอีเมลหรือ LINE พร้อมข้อมูลสั้น ๆ เพื่อระบุสิ่งที่ต้องตรวจเมื่อสำรวจหน้างาน'],
    brief: [
      ['สถานที่และประเภทอาคาร', 'แจ้งจังหวัด ประเภทสถานที่ เวลาปฏิบัติงาน และข้อจำกัดการเข้าพื้นที่ เริ่มต้นด้วยตำแหน่งโดยประมาณได้'],
      ['ระบบและเป้าหมาย', 'อธิบายระบบเดิม สิ่งที่ต้องการปรับปรุง และพื้นที่ทำงาน แนบแบบหรือรายการอุปกรณ์ที่สะดวกแบ่งปันถ้ามี'],
      ['ช่วงเวลาและผู้ประสานงาน', 'แจ้งช่วงเวลาทำงานหรือหยุดระบบที่สะดวก รวมถึงผู้ประสานงานจากทีมอาคาร IT หรือจัดซื้อ'],
    ],
    contactIntro: 'ติดต่อ NNPC เพื่อพูดคุยเกี่ยวกับโครงการวิศวกรรม การสำรวจหน้างาน หรือการบำรุงรักษาระบบในประเทศไทย',
    contactActions: 'ติดต่อทางอีเมลหรือ LINE',
  },
} satisfies Record<Locale, CompanyCopy>;
