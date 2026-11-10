import type { EngineeringContact } from './engineering/types';
import type { Locale } from './home';

export interface IntagDeploymentCopy {
  title: string;
  heading: string;
  intro: string;
  intag: string;
  ble: string;
  diagram: {
    title: string;
    label: string;
    baseline: string;
    recommended: string;
    racks: string;
    aisle: string;
    loading: string;
    intag: string;
    ble: string;
    work: Record<'ble' | 'intag', readonly [string, string, string]>;
    note: string;
  };
  walkTest: { alt: string; caption: string };
  comparison: {
    topicHeading: string;
    bleHeading: string;
    note: string;
    rows: readonly {
      topic: string;
      ble: string;
      intag: string;
      mobile: { ble: string; intag: string };
    }[];
  };
  consultation: string;
  contact: EngineeringContact;
}

export const intagDeploymentCopy: Record<Locale, IntagDeploymentCopy> = {
  en: {
    title: 'Deployment, maintenance and expansion',
    heading: 'Indoor Positioning Without Additional Dedicated Anchors — Where Conditions Allow',
    intro: 'INTAG can leverage existing site conditions to reduce the need for additional dedicated positioning equipment.',
    intag: 'INTAG | Less fixed equipment to install',
    ble: 'BLE architecture requiring new fixed receivers',
    diagram: {
      title: 'One warehouse, two deployment approaches',
      label: 'Deployment illustration',
      baseline: 'Comparison baseline',
      recommended: 'Recommended by NNPC',
      racks: 'Storage racks',
      aisle: 'Aisles',
      loading: 'Loading area',
      intag: 'A technician uses a handheld device to survey the operating route.',
      ble: 'Square markers show example locations for new fixed receivers.',
      work: {
        ble: ['Plan receiver locations and mount new equipment', 'Arrange power and connectivity as needed', 'Maintain the added receivers and connections'],
        intag: ['Check site conditions and walk the operating route', 'Validate positioning on that route', 'Recheck coverage when the site changes'],
      },
      note: 'Hardware requirements and positioning performance are subject to site assessment and validation.',
    },
    walkTest: {
      alt: 'A warehouse technician holds a tablet showing rack rows, a survey route and a yellow survey point.',
      caption: 'Site walk-test illustration. The tablet shows an example interface, not an INTAG product screenshot. The yellow dot marks the survey point.',
    },
    comparison: {
      topicHeading: 'Aspect',
      bleHeading: 'BLE Architecture Requiring New Fixed Receivers',
      note: 'This comparison applies only to BLE architectures requiring additional fixed receivers. INTAG hardware requirements and positioning performance depend on site conditions and validation.',
      rows: [
        {
          topic: 'Deployment',
          ble: 'Plan fixed receiver locations, install the equipment and make the required connections.',
          intag: 'Assess the site, walk the operating route and validate positioning. Where conditions allow, no new dedicated positioning equipment is needed.',
          mobile: {
            ble: 'Plan receiver locations, install fixed equipment and connect it.',
            intag: 'Assess the site, walk the route and validate positioning. Where conditions allow, no new dedicated positioning equipment is needed.',
          },
        },
        {
          topic: 'Maintenance',
          ble: 'Maintain fixed receivers, power and network connections as required by the design.',
          intag: 'Continue to manage the system, end devices and changes to the site environment.',
          mobile: {
            ble: 'Maintain fixed receivers, power and connections.',
            intag: 'Manage the system, end devices and site conditions.',
          },
        },
        {
          topic: 'Management & Expansion',
          ble: 'Assess whether expansion requires moving or adding fixed receivers.',
          intag: 'Repeat the walk survey, validate positioning and make any necessary improvements based on site conditions.',
          mobile: {
            ble: 'Assess whether to move or add fixed receiver locations.',
            intag: 'Repeat the walk survey, validate and make improvements as needed.',
          },
        },
      ],
    },
    consultation: 'Discuss an on-site pilot',
    contact: {
      title: 'Assess the site for a positioning pilot',
      text: 'Share the areas, assets, operating scenarios and wireless network you want to assess. We can check what equipment is needed and how to verify positioning performance on your working routes.',
    },
  },
  'zh-tw': {
    title: '建置、維護與擴區比較',
    heading: '室內定位，不一定需要新增定位基站',
    intro: 'INTAG 可利用現場既有環境，減少專用定位設備的部署需求。',
    intag: 'INTAG｜減少固定設備部署',
    ble: '需新增固定接收器的 BLE 架構',
    diagram: {
      title: '同一座倉庫，兩種部署方式',
      label: '部署方式示意',
      baseline: '比較基準',
      recommended: 'NNPC 推薦',
      racks: '貨架',
      aisle: '走道',
      loading: '裝卸區',
      intag: '現場人員使用手持裝置，沿作業路線走測。',
      ble: '方形標記表示新增固定 BLE 接收器的示意點位。',
      work: {
        ble: ['規劃點位、安裝固定接收器', '依配置安排供電與連線', '維護新增的接收器與連線'],
        intag: ['確認場域條件，沿實際路線走測', '驗證作業路線的定位表現', '場域變更時複核覆蓋範圍'],
      },
      note: '符合現場訊號及裝置條件時，可免增設專用定位設備。實際配置與定位表現依現場驗證確認。',
    },
    walkTest: {
      alt: '倉庫人員手持平板，螢幕顯示貨架、走測路線及黃色走測點。',
      caption: '現場走測示意。平板為介面示例，非 INTAG 實際產品畫面；黃點標示走測位置。',
    },
    comparison: {
      topicHeading: '比較面向',
      bleHeading: '需新增固定接收器的 BLE 架構',
      note: '本比較僅針對需新增固定接收器的 BLE 架構。INTAG 實際設備需求與定位表現，依現場條件及驗證結果確認。',
      rows: [
        {
          topic: '建置',
          ble: '規劃固定接收器點位、安裝設備及相關連線',
          intag: '場勘、走測與驗證；符合條件可免新增專用定位設備',
          mobile: {
            ble: '規劃點位、安裝固定設備與相關連線',
            intag: '場勘、走測與驗證；符合條件可免新增專用設備',
          },
        },
        {
          topic: '維護',
          ble: '依配置維護固定接收器、供電及網路連線',
          intag: '仍需管理系統、終端裝置及環境變更',
          mobile: {
            ble: '固定接收器、供電及連線維護',
            intag: '系統、終端裝置與環境管理',
          },
        },
        {
          topic: '管理與擴充',
          ble: '擴充時評估調整或新增固定接收器點位',
          intag: '依現場條件重新走測、驗證及必要補強',
          mobile: {
            ble: '評估調整或新增固定點位',
            intag: '重新走測、驗證及必要補強',
          },
        },
      ],
    },
    consultation: '洽詢現場定位試點',
    contact: {
      title: '評估場域是否需要新增定位設備',
      text: '提供想驗證的區域、追蹤物件、作業情境與既有無線網路概況。我們可沿實際路線評估設備需求與定位表現的驗收方式。',
    },
  },
  th: {
    title: 'เปรียบเทียบการติดตั้ง การดูแล และการขยายพื้นที่',
    heading: 'ระบบระบุตำแหน่งภายในอาคาร โดยอาจไม่ต้องติดตั้งอุปกรณ์ระบุตำแหน่งเฉพาะทางเพิ่มเติม',
    intro: 'INTAG สามารถใช้ประโยชน์จากสภาพแวดล้อมเดิมของพื้นที่ เพื่อลดความจำเป็นในการติดตั้งอุปกรณ์ระบุตำแหน่งเพิ่มเติม',
    intag: 'INTAG | ลดการติดตั้งอุปกรณ์ประจำจุด',
    ble: 'สถาปัตยกรรม BLE ที่ต้องติดตั้งเครื่องรับประจำจุดเพิ่ม',
    diagram: {
      title: 'คลังสินค้าเดียวกัน การติดตั้งสองรูปแบบ',
      label: 'ภาพประกอบรูปแบบการติดตั้ง',
      baseline: 'รูปแบบอ้างอิงสำหรับการเปรียบเทียบ',
      recommended: 'แนวทางที่ NNPC แนะนำ',
      racks: 'ชั้นวางสินค้า',
      aisle: 'ทางเดิน',
      loading: 'พื้นที่ขนถ่ายสินค้า',
      intag: 'เจ้าหน้าที่ใช้อุปกรณ์พกพาเดินสำรวจตามเส้นทางทำงาน',
      ble: 'สัญลักษณ์สี่เหลี่ยมแสดงตัวอย่างจุดติดตั้งเครื่องรับ BLE เพิ่มเติม',
      work: {
        ble: ['กำหนดจุดและติดตั้งเครื่องรับประจำจุด', 'จัดเตรียมไฟเลี้ยงและการเชื่อมต่อตามรูปแบบที่ใช้', 'ดูแลเครื่องรับและการเชื่อมต่อที่เพิ่มเข้ามา'],
        intag: ['ตรวจสอบสภาพพื้นที่และเดินสำรวจตามเส้นทางทำงาน', 'ทดสอบการระบุตำแหน่งบนเส้นทางนั้น', 'ตรวจสอบพื้นที่ครอบคลุมอีกครั้งเมื่อหน้างานเปลี่ยน'],
      },
      note: 'ทั้งนี้ขึ้นอยู่กับสภาพสัญญาณและอุปกรณ์ในพื้นที่ โดยต้องประเมินและทดสอบก่อนใช้งานจริง',
    },
    walkTest: {
      alt: 'เจ้าหน้าที่คลังสินค้าถือแท็บเล็ตที่แสดงชั้นวาง เส้นทางเดินสำรวจ และจุดสำรวจสีเหลือง',
      caption: 'ภาพประกอบการเดินสำรวจหน้างาน หน้าจอแท็บเล็ตเป็นตัวอย่างประกอบ ไม่ใช่หน้าจอจริงของ INTAG จุดสีเหลืองแสดงตำแหน่งที่กำลังสำรวจ',
    },
    comparison: {
      topicHeading: 'หัวข้อเปรียบเทียบ',
      bleHeading: 'ระบบ BLE ที่ต้องติดตั้งตัวรับสัญญาณประจำที่เพิ่มเติม',
      note: 'การเปรียบเทียบนี้ใช้กับระบบ BLE ที่ต้องติดตั้งตัวรับสัญญาณประจำที่เพิ่มเติมเท่านั้น ส่วนอุปกรณ์ที่จำเป็นและประสิทธิภาพการระบุตำแหน่งของ INTAG ขึ้นอยู่กับสภาพพื้นที่และผลการทดสอบยืนยัน',
      rows: [
        {
          topic: 'การติดตั้งระบบ',
          ble: 'กำหนดตำแหน่งตัวรับสัญญาณประจำที่ ติดตั้งอุปกรณ์และจัดการการเชื่อมต่อที่จำเป็น',
          intag: 'ประเมินพื้นที่ เดินสำรวจ และทดสอบการระบุตำแหน่ง หากสภาพพื้นที่เหมาะสม อาจไม่ต้องติดตั้งอุปกรณ์ระบุตำแหน่งเฉพาะทางเพิ่ม',
          mobile: {
            ble: 'กำหนดจุด ติดตั้งตัวรับสัญญาณประจำที่ และเชื่อมต่ออุปกรณ์',
            intag: 'ประเมินพื้นที่ เดินสำรวจ และทดสอบ หากสภาพพื้นที่เหมาะสม อาจไม่ต้องเพิ่มอุปกรณ์ระบุตำแหน่งเฉพาะทาง',
          },
        },
        {
          topic: 'การบำรุงรักษา',
          ble: 'ดูแลตัวรับสัญญาณประจำที่ ระบบจ่ายไฟ และการเชื่อมต่อเครือข่ายตามรูปแบบที่ติดตั้ง',
          intag: 'ยังต้องดูแลระบบและอุปกรณ์ปลายทาง รวมถึงจัดการเมื่อสภาพหน้างานเปลี่ยนแปลง',
          mobile: {
            ble: 'ดูแลตัวรับสัญญาณประจำที่ ระบบจ่ายไฟ และการเชื่อมต่อ',
            intag: 'ดูแลระบบ อุปกรณ์ปลายทาง และสภาพหน้างาน',
          },
        },
        {
          topic: 'การบริหารจัดการและการขยายพื้นที่',
          ble: 'เมื่อขยายพื้นที่ ให้ประเมินว่าต้องย้ายหรือเพิ่มจุดติดตั้งตัวรับสัญญาณประจำที่หรือไม่',
          intag: 'เดินสำรวจและทดสอบการระบุตำแหน่งอีกครั้ง พร้อมปรับปรุงตามความจำเป็นและสภาพพื้นที่',
          mobile: {
            ble: 'ประเมินว่าต้องย้ายหรือเพิ่มจุดติดตั้งตัวรับสัญญาณหรือไม่',
            intag: 'เดินสำรวจและทดสอบซ้ำ พร้อมปรับปรุงตามความจำเป็น',
          },
        },
      ],
    },
    consultation: 'ปรึกษาการทดสอบหน้างาน',
    contact: {
      title: 'ประเมินว่าต้องเพิ่มอุปกรณ์ระบุตำแหน่งหรือไม่',
      text: 'แจ้งพื้นที่ ทรัพย์สิน ลักษณะงานที่ต้องการทดสอบ และข้อมูลเครือข่ายไร้สายที่มีอยู่ เราช่วยประเมินอุปกรณ์ที่ต้องใช้และวิธีตรวจรับการระบุตำแหน่งตามเส้นทางทำงานจริง',
    },
  },
};
