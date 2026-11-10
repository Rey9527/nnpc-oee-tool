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
  items: readonly (readonly [topic: string, summary: string, intag: string, ble: string])[];
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
    items: [
      ['Installation', 'Suitable sites may need less fixed equipment and installation work.', 'Survey the site and check device compatibility. Where conditions allow, deployment can proceed without new dedicated positioning equipment.', 'Plan receiver locations, mounting and any power or network connections the design requires.'],
      ['Maintenance', 'Less fixed equipment can mean fewer devices to maintain.', 'Continue to manage the system, devices and changes to the site environment.', 'Maintain the receivers and their power and network connections as required.'],
      ['Management', 'Site changes or expansion may call for a new walk-through and validation.', 'Review the changed or expanded area and repeat the walk-through and validation as needed.', 'Review receiver locations and check whether existing devices need to be moved or new ones installed.'],
    ],
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
    items: [
      ['建置', '符合條件時，可減少新增固定設備及相關安裝工作。', '先走測並確認裝置相容性，條件合適時可免增設專用定位設備。', '規劃固定接收器的點位和安裝，依配置確認供電及網路需求。'],
      ['維護', '可能減少固定設備的維護負擔。', '仍需管理系統、裝置與環境變更。', '依配置維護固定接收器及其供電和網路連線。'],
      ['管理', '場域擴充或調整時，依條件重新走測及驗證。', '先檢視變更或擴充範圍，再依現場條件安排走測和驗證。', '重新確認接收器點位，評估既有設備是否需要移動或增設。'],
    ],
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
    items: [
      ['การติดตั้ง', 'เมื่อสภาพพื้นที่เหมาะสม อาจลดจำนวนอุปกรณ์ประจำจุดและงานติดตั้งได้', 'เดินสำรวจและตรวจสอบความเข้ากันได้ของอุปกรณ์ หากสภาพพื้นที่เหมาะสม อาจใช้งานได้โดยไม่ต้องติดตั้งอุปกรณ์ระบุตำแหน่งเฉพาะทางเพิ่ม', 'วางแผนจุดติดตั้งเครื่องรับ รวมถึงไฟเลี้ยงและการเชื่อมต่อเครือข่ายตามรูปแบบที่ใช้'],
      ['การบำรุงรักษา', 'อุปกรณ์ประจำจุดที่น้อยลงอาจช่วยลดภาระการดูแลอุปกรณ์', 'ยังต้องดูแลระบบ อุปกรณ์ และการเปลี่ยนแปลงของสภาพแวดล้อม', 'ดูแลเครื่องรับประจำจุด รวมถึงไฟเลี้ยงและการเชื่อมต่อเครือข่ายตามรูปแบบที่ใช้'],
      ['การจัดการ', 'เมื่อขยายหรือปรับพื้นที่ อาจต้องเดินสำรวจและทดสอบอีกครั้ง', 'ตรวจสอบขอบเขตที่เปลี่ยนแปลงหรือขยาย แล้วเดินสำรวจและทดสอบตามความเหมาะสม', 'ทบทวนตำแหน่งเครื่องรับและประเมินว่าต้องย้ายอุปกรณ์เดิมหรือติดตั้งเพิ่มหรือไม่'],
    ],
    consultation: 'ปรึกษาการทดสอบหน้างาน',
    contact: {
      title: 'ประเมินว่าต้องเพิ่มอุปกรณ์ระบุตำแหน่งหรือไม่',
      text: 'แจ้งพื้นที่ ทรัพย์สิน ลักษณะงานที่ต้องการทดสอบ และข้อมูลเครือข่ายไร้สายที่มีอยู่ เราช่วยประเมินอุปกรณ์ที่ต้องใช้และวิธีตรวจรับการระบุตำแหน่งตามเส้นทางทำงานจริง',
    },
  },
};
