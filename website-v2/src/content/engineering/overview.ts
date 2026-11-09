import type { Locale } from '../home';
import type { EngineeringContact, EngineeringIntro, EngineeringSection } from './types';

interface OverviewCopy {
  intro: EngineeringIntro;
  services: string;
  scope: string;
  sections: EngineeringSection[];
  contact: EngineeringContact;
}

export const overviewCopy = {
  en: {
    intro: {
      eyebrow: 'Engineering / ELV',
      title: 'Engineering services for industrial facilities',
      description: 'Plan, install, integrate and maintain ELV systems for factories and commercial facilities in Thailand. Define what the site needs, who will do the work and how the system will be accepted.',
    },
    services: 'Engineering services',
    scope: 'A project can start with a new installation, an extension to an existing system or a fault that needs investigation. We confirm what can be reused, which systems must stay in operation, who provides power and network access, and what the quotation includes.',
    sections: [
      {
        id: 'partners', title: 'How we work with you', layout: 'cards',
        text: 'NNPC coordinates the agreed scope with qualified local installation partners, equipment suppliers and system integrators. We document who supplies, installs, configures and signs off each part before work starts.',
        items: [
          ['Factory owners & facility teams', 'Agree priorities, site access and work windows with your facility team. Coordinate installation and review test results together at acceptance.'],
          ['General contractors', 'Take on the agreed ELV subcontract scope. Coordinate cable routes, work sequencing and handoffs with the main contractor and other trades.'],
          ['System integrators', 'Support cabling, device installation and field integration. Confirm who configures each system and who leads end-to-end testing.'],
        ],
      },
      {
        id: 'process', title: 'From survey to acceptance', layout: 'steps',
        items: [
          ['Review the brief', 'Identify operating areas, existing systems, project objectives and who owns each decision.'],
          ['Survey the site', 'Check routes, mounting points, rack space, power, network connections and access restrictions with the site team.'],
          ['Agree scope and test criteria', 'Review drawings, equipment specifications, work windows, exclusions and how each deliverable will be accepted.'],
          ['Install and integrate', 'Coordinate site induction and permits with the facility team. Schedule cabling, installation and configuration around agreed work windows.'],
          ['Test and hand over', 'Record test results and outstanding items. Confirm sign-off, operator briefing and the after-sales contact.'],
        ],
      },
      {
        id: 'deliverables', title: 'What goes into the handover', layout: 'checklist',
        text: 'Confirm the document list and who accepts each item in the proposal.',
        items: [
          ['Drawings and schedules', 'Agreed equipment list, installed device locations, cable identifiers and as-built drawings where included.'],
          ['Testing and sign-off', 'Test records against the agreed criteria, an outstanding-items list and the acceptance record.'],
          ['Operating information', 'Basic operating instructions, the responsible contacts and a secure transfer of access to the site owner as agreed.'],
        ],
      },
      {
        id: 'maintenance', title: 'Maintenance and after-sales support', layout: 'checklist',
        items: [
          ['Planned maintenance', 'Agree inspection points and service frequency around site access and production schedules.'],
          ['Faults and changes', 'Agree how to report issues and what remote or on-site work, parts, warranty terms and response arrangements are covered.'],
        ],
      },
    ],
    contact: {
      title: 'Discuss your engineering scope',
      text: 'Share the site location, systems involved, preferred work window and any drawings you can provide. We can use them to prepare the site survey and identify decisions needed for the quotation.',
    },
  },
  'zh-tw': {
    intro: {
      eyebrow: '工程／弱電系統',
      title: '工業設施工程服務',
      description: '協助泰國工廠及商業設施規劃、安裝、整合與維護弱電系統。從現場需求出發，先確認施工分工、交付項目與驗收方式。',
    },
    services: '八項工程服務',
    scope: '可從新建、既有系統擴充或故障排查開始。報價前先確認可沿用的設備、施工期間必須維持的系統、電源與網路的提供責任，以及本次工程包含的範圍。',
    sections: [
      {
        id: 'partners', title: '三種合作模式', layout: 'cards',
        text: 'NNPC 依約定範圍協調泰國當地具備相應能力的安裝夥伴、設備供應商與系統整合商。開工前確認各項設備由誰供應、安裝、設定與驗收。',
        items: [
          ['工廠業主與廠務團隊', '與廠務確認優先區域、進場限制及施工時段，協調安裝並共同查核驗收結果。'],
          ['總承包商', '承接約定的弱電分包範圍，與總包及其他工種確認線路路徑、施工順序和交接界面。'],
          ['系統整合商', '支援配線、設備安裝與現場整合，明確劃分系統設定與端到端測試責任。'],
        ],
      },
      {
        id: 'process', title: '從現場勘查到驗收', layout: 'steps',
        items: [
          ['盤點需求', '了解作業區域、既有系統、專案目標與各項決策的負責人。'],
          ['現場勘查', '與廠務查核走線路徑、安裝位置、機櫃空間、電源、網路與進場限制。'],
          ['確認範圍與驗收條件', '核對圖面、設備規格、施工時段、排除項目及各項交付的驗收方式。'],
          ['施工與整合', '與廠方協調入場安全說明及作業許可，依約定時段配線、安裝及設定。'],
          ['測試與交付', '記錄測試結果及待改善項目，確認驗收簽認、操作說明與售後聯絡窗口。'],
        ],
      },
      {
        id: 'deliverables', title: '交付文件與資料', layout: 'checklist',
        text: '在提案中確認文件清單及各項驗收負責人。',
        items: [
          ['圖面與設備清單', '依約提供設備清單、實際安裝點位、線路標示及竣工圖。'],
          ['測試及驗收紀錄', '提供依約定條件執行的測試結果、待改善項目清單及驗收紀錄。'],
          ['操作與管理資訊', '提供基本操作說明與負責窗口，依約以安全方式移交管理權限。'],
        ],
      },
      {
        id: 'maintenance', title: '維護與售後服務', layout: 'checklist',
        items: [
          ['定期維護', '依生產時段和進場規定，確認巡檢項目、頻率及安排。'],
          ['故障與變更', '確認通報方式，以及遠端或到場支援、備品、保固與回應安排的涵蓋範圍。'],
        ],
      },
    ],
    contact: {
      title: '討論您的工程需求',
      text: '請提供廠區位置、涉及系統、希望施工的時段及可分享的圖面，方便安排勘查並先確認報價所需資訊。',
    },
  },
  th: {
    intro: {
      eyebrow: 'งานวิศวกรรม / ระบบ ELV',
      title: 'งานวิศวกรรมสำหรับโรงงานอุตสาหกรรม',
      description: 'วางแผน ติดตั้ง เชื่อมต่อ และบำรุงรักษาระบบ ELV สำหรับโรงงานและอาคารพาณิชย์ในประเทศไทย โดยระบุความต้องการหน้างาน ผู้รับผิดชอบ และเกณฑ์ตรวจรับให้ชัดเจนตั้งแต่ต้น',
    },
    services: 'บริการงานวิศวกรรม 8 ด้าน',
    scope: 'เริ่มได้ทั้งจากการติดตั้งใหม่ การขยายระบบเดิม หรือการตรวจหาสาเหตุขัดข้อง ก่อนเสนอราคา เราจะตรวจว่าอุปกรณ์ใดใช้ต่อได้ ระบบใดต้องทำงานระหว่างติดตั้ง ใครจัดเตรียมไฟฟ้าและเครือข่าย และใบเสนอราคาครอบคลุมงานใดบ้าง',
    sections: [
      {
        id: 'partners', title: 'รูปแบบการทำงานร่วมกัน', layout: 'cards',
        text: 'NNPC ประสานผู้รับเหมาท้องถิ่นที่มีความชำนาญ ผู้จัดหาอุปกรณ์ และผู้รวมระบบตามขอบเขตที่ตกลงกัน ก่อนเริ่มงานจะระบุว่าใครจัดหา ติดตั้ง ตั้งค่า และตรวจรับงานแต่ละส่วน',
        items: [
          ['เจ้าของโรงงานและทีมดูแลอาคาร', 'ตกลงพื้นที่สำคัญ เงื่อนไขเข้าพื้นที่ และช่วงเวลาทำงานกับทีมหน้างาน จากนั้นประสานการติดตั้งและตรวจผลทดสอบร่วมกัน'],
          ['ผู้รับเหมาหลัก', 'รับงานระบบ ELV ตามขอบเขตงานรับเหมาช่วง และประสานแนวเดินสาย ลำดับงาน และจุดส่งต่องานกับผู้รับเหมาหลักและงานระบบอื่น'],
          ['ผู้รวมระบบ', 'สนับสนุนงานเดินสาย ติดตั้งอุปกรณ์ และเชื่อมต่อที่หน้างาน พร้อมระบุผู้รับผิดชอบการตั้งค่าและการทดสอบทั้งระบบ'],
        ],
      },
      {
        id: 'process', title: 'จากสำรวจหน้างานถึงตรวจรับ', layout: 'steps',
        items: [
          ['ทบทวนความต้องการ', 'ระบุพื้นที่ปฏิบัติงาน ระบบเดิม เป้าหมาย และผู้มีอำนาจตัดสินใจในแต่ละเรื่อง'],
          ['สำรวจหน้างาน', 'ตรวจแนวเดินสาย จุดติดตั้ง พื้นที่ตู้แร็ก ไฟฟ้า เครือข่าย และข้อจำกัดการเข้าพื้นที่กับทีมโรงงาน'],
          ['ตกลงขอบเขตและเกณฑ์ตรวจรับ', 'ทบทวนแบบ รายละเอียดอุปกรณ์ ช่วงเวลาทำงาน ข้อยกเว้น และวิธีตรวจรับงานแต่ละรายการ'],
          ['ติดตั้งและเชื่อมต่อ', 'ประสานการอบรมก่อนเข้าพื้นที่และใบอนุญาตทำงานกับโรงงาน แล้วเดินสาย ติดตั้ง และตั้งค่าตามช่วงเวลาที่ตกลงไว้'],
          ['ทดสอบและส่งมอบ', 'บันทึกผลทดสอบและรายการที่ต้องแก้ไข ยืนยันการลงนามตรวจรับ อธิบายวิธีใช้งาน และระบุช่องทางติดต่อหลังการขาย'],
        ],
      },
      {
        id: 'deliverables', title: 'เอกสารและข้อมูลส่งมอบ', layout: 'checklist',
        text: 'ระบุรายการเอกสารและผู้ตรวจรับแต่ละรายการในข้อเสนอ',
        items: [
          ['แบบและรายการอุปกรณ์', 'รายการอุปกรณ์ ตำแหน่งติดตั้งจริง รหัสสาย และแบบตามที่ติดตั้งจริง ตามขอบเขตที่ตกลงกัน'],
          ['บันทึกทดสอบและตรวจรับ', 'ผลทดสอบตามเกณฑ์ที่ตกลง รายการที่ต้องแก้ไข และบันทึกการตรวจรับ'],
          ['ข้อมูลสำหรับผู้ดูแลระบบ', 'คำแนะนำการใช้งานเบื้องต้น รายชื่อผู้ประสานงาน และการส่งต่อสิทธิ์ดูแลระบบให้เจ้าของอย่างปลอดภัยตามที่ตกลง'],
        ],
      },
      {
        id: 'maintenance', title: 'การบำรุงรักษาและบริการหลังการขาย', layout: 'checklist',
        items: [
          ['แผนบำรุงรักษา', 'ตกลงจุดตรวจและรอบบำรุงรักษาให้เหมาะกับเวลาเดินเครื่องและเงื่อนไขเข้าพื้นที่'],
          ['แจ้งปัญหาและปรับเปลี่ยนระบบ', 'ตกลงวิธีแจ้งปัญหา ขอบเขตการช่วยเหลือทางไกลหรือที่หน้างาน รวมถึงอะไหล่ เงื่อนไขรับประกัน และแนวทางตอบรับงาน'],
        ],
      },
    ],
    contact: {
      title: 'พูดคุยเรื่องขอบเขตงานวิศวกรรม',
      text: 'แจ้งที่ตั้งโรงงาน ระบบที่เกี่ยวข้อง ช่วงเวลาที่เข้าทำงานได้ และแนบแบบที่สะดวกให้ดู เพื่อเตรียมการสำรวจและระบุข้อมูลที่ต้องใช้สำหรับเสนอราคา',
    },
  },
} satisfies Record<Locale, OverviewCopy>;
