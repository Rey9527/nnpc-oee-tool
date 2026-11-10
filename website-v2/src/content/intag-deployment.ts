import type { EngineeringContact } from './engineering/types';
import type { Locale } from './home';

export interface IntagDeploymentCopy {
  title: string;
  intro: string;
  intag: string;
  ble: string;
  diagram: { title: string; intag: string; ble: string; note: string };
  walkTest: { alt: string; caption: string };
  items: readonly (readonly [topic: string, summary: string, intag: string, ble: string])[];
  consultation: string;
  contact: EngineeringContact;
}

export const intagDeploymentCopy: Record<Locale, IntagDeploymentCopy> = {
  en: {
    title: 'Deployment, maintenance and expansion',
    intro: 'INTAG can combine signals already present on site, such as Wi-Fi and Bluetooth. Compare the two configurations using the same area, tracked assets, update rate and acceptance criteria. Some BLE designs can also use existing access points.',
    intag: 'INTAG with existing site signals',
    ble: 'BLE with new fixed equipment',
    diagram: {
      title: 'One warehouse, two deployment approaches',
      intag: 'A technician walks the operating route to collect existing signals and build a site signal map.',
      ble: 'Square markers show example locations for new fixed BLE receivers.',
      note: 'Deployment illustration. Where site conditions meet the requirements, INTAG can be deployed without adding dedicated positioning equipment.',
    },
    walkTest: {
      alt: 'Over the shoulder of a warehouse technician holding a device that shows a yellow survey point on a simple floor plan.',
      caption: 'Walk-test illustration. The yellow dot marks the current survey point along the signal collection route.',
    },
    items: [
      ['Deployment cost', 'Survey and map the site, or plan and install new fixed equipment.', 'Survey the site and walk the working routes to build a signal map. Budget for compatible devices, software and integration. Suitable sites can avoid buying and installing dedicated positioning equipment.', 'Budget for fixed beacons or receivers, mounting and any power, cabling or network backhaul the design requires.'],
      ['Maintenance', 'Plan for devices and signal maps, and for fixed equipment where installed.', 'Maintain the devices, software and signal map. Recheck coverage after changes to the layout or wireless environment and update the map when needed.', 'Also maintain the fixed equipment. Depending on the design, this can include battery replacement, power and network checks, and checks after equipment is moved.'],
      ['Management and expansion', 'Survey each new area and check whether it needs additional fixed equipment.', 'Keep track of compatible devices and mapped areas. Survey, map and validate each new area before expanding coverage.', 'Also keep an inventory of fixed equipment, including its location and maintenance owner. Plan the placement and installation of equipment needed for a new area.'],
    ],
    consultation: 'Discuss an on-site pilot',
    contact: {
      title: 'Assess the site for a positioning pilot',
      text: 'Share the areas, assets, operating scenarios and wireless network you want to assess. We can check what equipment is needed and how to verify positioning performance on your working routes.',
    },
  },
  'zh-tw': {
    title: '建置、維護與擴區比較',
    intro: 'INTAG 可融合現場既有的 Wi-Fi、藍牙等訊號。比較兩種配置時，採用相同覆蓋範圍、追蹤物件數量、更新頻率及驗收條件。部分 BLE 架構也能沿用既有基地台。',
    intag: 'INTAG 沿用既有訊號',
    ble: 'BLE 新設固定定位設備',
    diagram: {
      title: '同一座倉庫，兩種部署方式',
      intag: '沿作業路線走測，採集現場既有訊號並建立訊號地圖。',
      ble: '方形標記表示新增固定 BLE 接收器的示意點位。',
      note: '部署示意。現場條件符合需求時，INTAG 可免增設專用定位設備。',
    },
    walkTest: {
      alt: '從倉庫技術人員肩後看手持裝置，螢幕上的簡化平面圖有一個黃色走測點。',
      caption: '走測流程示意。黃色圓點標出目前的訊號採集位置。',
    },
    items: [
      ['建置開銷', '估算走測建圖，或另列固定設備的採購與安裝。', '場勘後沿作業路線走測建圖，估列相容終端、軟體與整合費用。現場條件合適時，可省去專用定位設備的採購與安裝。', '另估固定 Beacon 或接收器的採購、安裝，以及依配置所需的供電、配線或網路回傳。'],
      ['維護成本', '管理終端與訊號地圖，有固定設備時加計設備維護。', '維護終端、軟體及訊號地圖。場地配置或無線環境變動時，重新確認覆蓋，必要時更新地圖。', '另需維護固定設備，依配置處理換電池、供電與網路檢查，以及設備移位後的覆蓋確認。'],
      ['管理與擴區', '勘查新區訊號，再確認是否需要補設固定設備。', '管理相容終端與已建圖的區域。擴區前先勘查訊號、建圖並驗收。', '另需管理固定設備台帳、位置與維護責任。擴區時規劃新區所需的設備點位與安裝。'],
    ],
    consultation: '洽詢現場定位試點',
    contact: {
      title: '評估場域是否需要新增定位設備',
      text: '提供想驗證的區域、追蹤物件、作業情境與既有無線網路概況。我們可沿實際路線評估設備需求與定位表現的驗收方式。',
    },
  },
  th: {
    title: 'เปรียบเทียบการติดตั้ง การดูแล และการขยายพื้นที่',
    intro: 'INTAG ใช้สัญญาณเดิมหลายชนิดร่วมกันได้ เช่น Wi-Fi และบลูทูธ การเปรียบเทียบใช้พื้นที่ครอบคลุม จำนวนทรัพย์สินที่ติดตาม ความถี่ในการอัปเดต และเกณฑ์ตรวจรับเดียวกัน ระบบ BLE บางรูปแบบใช้จุดกระจายสัญญาณเดิมได้เช่นกัน',
    intag: 'INTAG ที่ใช้สัญญาณเดิมในพื้นที่',
    ble: 'BLE ที่ติดตั้งอุปกรณ์ประจำจุดเพิ่ม',
    diagram: {
      title: 'คลังสินค้าเดียวกัน การติดตั้งสองรูปแบบ',
      intag: 'เดินตามเส้นทางทำงานเพื่อเก็บสัญญาณที่มีอยู่และสร้างแผนที่สัญญาณ',
      ble: 'สัญลักษณ์สี่เหลี่ยมแสดงตัวอย่างจุดติดตั้งเครื่องรับ BLE เพิ่มเติม',
      note: 'ภาพประกอบการติดตั้ง หากสภาพหน้างานตรงตามข้อกำหนด INTAG สามารถใช้งานได้โดยไม่ต้องเพิ่มอุปกรณ์ระบุตำแหน่งเฉพาะทาง',
    },
    walkTest: {
      alt: 'มุมมองข้ามไหล่ช่างในคลังสินค้าเห็นจุดสำรวจสีเหลืองบนผังพื้นที่ในอุปกรณ์พกพา',
      caption: 'ภาพประกอบการเดินสำรวจ จุดสีเหลืองแสดงจุดสำรวจปัจจุบันบนเส้นทางเก็บสัญญาณ',
    },
    items: [
      ['ค่าใช้จ่ายในการติดตั้ง', 'ประเมินค่าเดินสำรวจและทำแผนที่ หรือรวมค่าจัดซื้อและติดตั้งอุปกรณ์ประจำจุดเพิ่ม', 'สำรวจพื้นที่และเดินเก็บสัญญาณตามเส้นทางทำงานเพื่อสร้างแผนที่สัญญาณ ประเมินค่าอุปกรณ์ที่รองรับ ซอฟต์แวร์ และงานเชื่อมระบบ หากสภาพหน้างานเหมาะสม สามารถลดค่าจัดซื้อและติดตั้งอุปกรณ์ระบุตำแหน่งเฉพาะทางได้', 'ประเมินค่า Beacon หรือเครื่องรับสัญญาณประจำจุดและค่าติดตั้งเพิ่มเติม รวมถึงไฟเลี้ยง การเดินสาย หรือเครือข่ายสำหรับส่งข้อมูลตามรูปแบบที่เลือก'],
      ['การบำรุงรักษา', 'ดูแลอุปกรณ์พกพาและแผนที่สัญญาณ รวมถึงอุปกรณ์ประจำจุดหากมีการติดตั้ง', 'ดูแลอุปกรณ์ ซอฟต์แวร์ และแผนที่สัญญาณ เมื่อผังพื้นที่หรือสภาพสัญญาณเปลี่ยน ให้ตรวจสอบพื้นที่ครอบคลุมและอัปเดตแผนที่ตามความจำเป็น', 'ดูแลอุปกรณ์ประจำจุดเพิ่มเติม เช่น เปลี่ยนแบตเตอรี่ ตรวจไฟเลี้ยงหรือเครือข่าย และตรวจพื้นที่ครอบคลุมอีกครั้งเมื่อย้ายอุปกรณ์ ทั้งนี้ขึ้นอยู่กับรูปแบบที่ใช้'],
      ['การจัดการและขยายพื้นที่', 'สำรวจสัญญาณในพื้นที่ใหม่ก่อนพิจารณาว่าต้องเพิ่มอุปกรณ์ประจำจุดหรือไม่', 'จัดการอุปกรณ์ที่รองรับและพื้นที่ที่ทำแผนที่แล้ว ก่อนขยายพื้นที่ให้สำรวจสัญญาณ จัดทำแผนที่ และตรวจรับในพื้นที่ใหม่', 'จัดทำทะเบียนอุปกรณ์ประจำจุด ระบุตำแหน่งและผู้รับผิดชอบการดูแล เมื่อขยายพื้นที่ให้วางแผนจุดติดตั้งและอุปกรณ์ที่ต้องใช้เพิ่ม'],
    ],
    consultation: 'ปรึกษาการทดสอบหน้างาน',
    contact: {
      title: 'ประเมินว่าต้องเพิ่มอุปกรณ์ระบุตำแหน่งหรือไม่',
      text: 'แจ้งพื้นที่ ทรัพย์สิน ลักษณะงานที่ต้องการทดสอบ และข้อมูลเครือข่ายไร้สายที่มีอยู่ เราช่วยประเมินอุปกรณ์ที่ต้องใช้และวิธีตรวจรับการระบุตำแหน่งตามเส้นทางทำงานจริง',
    },
  },
};
