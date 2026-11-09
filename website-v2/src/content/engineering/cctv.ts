import type { Locale } from '../home';
import type { EngineeringContact, EngineeringIntro, EngineeringSection } from './types';

interface CctvCopy {
  intro: EngineeringIntro;
  imageAlt: string;
  sections: EngineeringSection[];
  contact: EngineeringContact;
}

export const cctvCopy = {
  en: {
    intro: {
      eyebrow: 'Engineering / CCTV',
      title: 'CCTV & Surveillance',
      description: 'Plan factory camera coverage, recording and network capacity around what operators need to see live and retrieve later. Agree the day and night acceptance checks before installation.',
    },
    imageAlt: 'Illustration of a technician checking a factory CCTV camera installation.',
    sections: [
      {
        id: 'coverage', title: 'What each area needs to capture', layout: 'cards',
        text: 'Start with the purpose of each view and the detail operators must be able to see at the expected distance.',
        items: [
          ['Gates and vehicle lanes', 'Agree whether each view is for general activity or vehicle and plate detail. Check angle, distance, gate lighting and headlight glare.'],
          ['Loading docks and warehouses', 'Cover handover points, doors and selected aisles. Check blind spots created by trucks, stock and racks.'],
          ['Production and restricted areas', 'Agree which events and access points need coverage. Confirm permitted views and who can see recordings with the facility team.'],
        ],
      },
      {
        id: 'system', title: 'System components and sizing', layout: 'checklist',
        text: 'A typical path runs from IP cameras through PoE access switches and network uplinks to an NVR or recording server, then to authorized viewing stations.',
        items: [
          ['IP cameras', 'Choose lens, field of view, mounting position and enclosure for the target detail and conditions such as dust, moisture, backlight and low light.'],
          ['PoE switches and network', 'Check port count, per-port and total PoE power budget, cable routes and uplink capacity. Agree camera network segmentation, permitted access and any fiber uplinks with site IT.'],
          ['NVR, recording server and viewing', 'Check compatible cameras and streams, recording channels, incoming throughput, playback capacity and user permissions. Confirm where operators view live and recorded video.'],
          ['Recording storage', 'Estimate usable capacity from the number of cameras, expected bitrate, recording schedule and agreed retention period. Check the effect of resolution, frame rate and scene activity, and allow for storage overhead and agreed expansion.'],
        ],
      },
      {
        id: 'scope', title: 'Base scope and options', layout: 'cards',
        items: [
          ['Base scope to define in the quotation', 'Survey agreed areas, plan camera positions and routes, confirm the equipment list, then install and configure the quoted devices. Include agreed functional tests and handover records.'],
          ['Parameters and options to confirm', 'Agree retention days, recording mode, remote viewing, AI video analytics, integration with existing systems and any backup power or redundancy. Quote warranty terms, maintenance coverage and response commitments separately where applicable.'],
        ],
      },
      {
        id: 'installation', title: 'Planning and installation', layout: 'steps',
        items: [
          ['Walk the site', 'Mark camera positions and cable routes. Check viewing distance, lighting across shifts, installation access, rack space and existing systems.'],
          ['Approve the design and work window', 'Review the camera schedule, network and storage design, responsibilities and acceptance criteria. Agree access permits, work hours and any changeover affecting live systems.'],
          ['Install and configure', 'Coordinate mounting, cable termination and labeling, then configure recording, clocks and access roles. Verify coverage on site and record changes to the design.'],
          ['Test with the site team', 'Run the agreed checks, record exceptions, hand over camera and equipment records, and show designated operators how to find and export footage.'],
        ],
      },
      {
        id: 'acceptance', title: 'Acceptance checklist', layout: 'checklist',
        items: [
          ['Day and night image checks', 'Verify each agreed view for target detail, focus and blind spots. Check glare and low-light performance in representative day and night conditions.'],
          ['Recording, search and playback', 'Verify recording schedules, timestamps and time synchronization. Find a known event by camera and time, play it back and export a sample for review.'],
          ['Network, storage and permissions', 'Check camera connectivity, recording status, usable storage and configured retention against the design. Validate live, playback and export permissions. Agree how actual retention will be checked once enough footage has accumulated.'],
          ['Recovery where included', 'Test agreed outage or fault scenarios with the facility team, such as a camera link loss, and verify recording recovery and alerts where configured.'],
        ],
      },
      {
        id: 'maintenance', title: 'Maintenance and fault checks', layout: 'checklist',
        items: [
          ['Preventive checks', 'Review camera alignment, lens and housing condition, switch and recorder health, disk alerts and the oldest retrievable recording. Sample playback and export.'],
          ['Changes and repairs', 'Log failed or moved cameras, review storage impact when adding streams, and coordinate updates or replacements with site IT. Confirm service frequency, parts and support terms in the maintenance scope.'],
        ],
      },
    ],
    contact: {
      title: 'Prepare a CCTV site survey',
      text: 'Send a site plan if available, the areas you need to cover, any existing recorder and network details, and who needs to view or export footage. If you have a retention target, include it in the brief.',
    },
  },
  'zh-tw': {
    intro: {
      eyebrow: '工程／CCTV',
      title: 'CCTV 影像監控',
      description: '依照現場人員即時觀看及事後調閱的需求，規劃工廠攝影機覆蓋、錄影和網路容量，並在施工前確認日夜影像及驗收方式。',
    },
    imageAlt: '示意圖中的技術人員正在檢查工廠攝影機安裝。',
    sections: [
      {
        id: 'coverage', title: '各區域需要拍到什麼', layout: 'cards',
        text: '先確認每個畫面的用途，以及操作人員在預定距離要辨識到的細節。',
        items: [
          ['出入口與車道', '確認是觀察車流，還是要辨識車輛或車牌細節，再檢查角度、距離、門口照明與車燈眩光。'],
          ['裝卸區與倉庫', '覆蓋交接點、出入口和指定走道，檢查卡車、堆貨與貨架形成的遮蔽。'],
          ['產線與限制區域', '確認需要覆蓋的事件及出入點，並與廠方確認可拍攝的範圍及錄影調閱權限。'],
        ],
      },
      {
        id: 'system', title: '系統組成與容量規劃', layout: 'checklist',
        text: '常見架構是 IP 攝影機接入 PoE 交換器，經網路上行鏈路連到 NVR 或錄影伺服器，由具權限的操作端調閱。',
        items: [
          ['IP 攝影機', '依辨識需求選擇鏡頭、視角、安裝位置與外殼，並考量粉塵、潮濕、逆光與低照度。'],
          ['PoE 交換器與監控網路', '確認連接埠數、單埠及整機供電預算、走線路徑與上行頻寬，並與廠方 IT 確認網路分段、存取規則及光纖上行需求。'],
          ['NVR、錄影伺服器與操作端', '確認攝影機及影像串流相容性、錄影通道數、輸入頻寬、回放負載與使用者權限，並確認操作人員在哪裡觀看即時和歷史影像。'],
          ['錄影儲存', '依攝影機數量、預估位元率、錄影排程與約定保存期間估算可用容量。檢查解析度、幀率與場景活動的影響，並納入儲存開銷及約定的擴充空間。'],
        ],
      },
      {
        id: 'scope', title: '基本工程與專案選配', layout: 'cards',
        items: [
          ['報價時確認的基本工程', '勘查約定區域、規劃攝影機點位與路徑、確認設備清單，依報價安裝與設定設備，並執行約定的功能測試及交付紀錄。'],
          ['依專案確認的參數與選配', '錄影保存天數、錄影模式、遠端觀看、AI 影像分析、既有系統整合、備援電源與冗餘皆依專案確認。保固、維護範圍及回應承諾如適用，另於報價中列明。'],
        ],
      },
      {
        id: 'installation', title: '規劃與施工流程', layout: 'steps',
        items: [
          ['現場勘查', '標出攝影機點位與走線路徑，查核辨識距離、各班照明、施工動線、機櫃空間及既有系統。'],
          ['確認設計與施工時段', '核對點位表、網路及儲存規劃、分工與驗收條件，並確認工作許可、施工時段和既有系統切換安排。'],
          ['安裝與設定', '協調固定設備、線路端接及標示，再設定錄影、時間同步和存取角色。於現場查核覆蓋並記錄施工變更。'],
          ['與廠方共同測試', '執行約定項目、記錄異常並交付點位及設備資料，向指定操作人員說明影像查找與匯出方式。'],
        ],
      },
      {
        id: 'acceptance', title: '測試驗收清單', layout: 'checklist',
        items: [
          ['日夜影像檢查', '確認各約定畫面能辨識目標細節、對焦正確並查核盲區。在具代表性的日夜條件下檢查眩光與低照度表現。'],
          ['錄影、搜尋與回放', '核對錄影排程、時間戳記與時間同步。以已知事件測試依攝影機及時間搜尋、回放和匯出。'],
          ['網路、儲存與權限', '核對攝影機連線、錄影狀態、可用容量與保存設定是否符合設計，並驗證即時觀看、回放及匯出權限。約定累積足夠影像後如何查核實際保存期間。'],
          ['依約驗證故障恢復', '與廠方測試約定的中斷或故障情境，例如攝影機斷線，並查核錄影是否恢復及已設定的告警。'],
        ],
      },
      {
        id: 'maintenance', title: '維護與故障排查', layout: 'checklist',
        items: [
          ['預防性巡檢', '查核攝影機角度、鏡頭與外殼、交換器和錄影設備狀態、磁碟告警及最早可調閱影像，並抽測回放與匯出。'],
          ['變更與維修', '記錄故障或移位點位，新增串流時重新評估儲存影響，並與廠方 IT 協調更新或更換。巡檢頻率、備品與支援條件依維護範圍確認。'],
        ],
      },
    ],
    contact: {
      title: '準備 CCTV 現場勘查',
      text: '如有廠區平面圖、需覆蓋區域、既有錄影設備與網路資料，請一併提供。也可說明誰需要觀看或匯出錄影，以及是否已有保存期間目標。',
    },
  },
  th: {
    intro: {
      eyebrow: 'งานวิศวกรรม / CCTV',
      title: 'ระบบกล้องวงจรปิด (CCTV)',
      description: 'วางแผนพื้นที่ครอบคลุม การบันทึก และความจุเครือข่ายตามสิ่งที่ผู้ปฏิบัติงานต้องดูสดหรือค้นย้อนหลัง พร้อมตกลงวิธีตรวจรับภาพกลางวันและกลางคืนก่อนติดตั้ง',
    },
    imageAlt: 'ภาพประกอบช่างตรวจสอบการติดตั้งกล้องวงจรปิดภายในโรงงาน',
    sections: [
      {
        id: 'coverage', title: 'แต่ละพื้นที่ต้องเห็นอะไร', layout: 'cards',
        text: 'เริ่มจากระบุจุดประสงค์ของภาพแต่ละมุม และรายละเอียดที่ผู้ใช้งานต้องมองเห็นได้จากระยะที่กำหนด',
        items: [
          ['ประตูและช่องทางรถเข้าออก', 'ระบุว่าต้องการดูภาพรวม หรือต้องเห็นรายละเอียดของรถและป้ายทะเบียน แล้วตรวจมุม ระยะ แสงบริเวณประตู และแสงจ้าจากไฟหน้ารถ'],
          ['จุดขนถ่ายและคลังสินค้า', 'ครอบคลุมจุดส่งมอบ ประตู และช่องทางเดินที่กำหนด พร้อมตรวจจุดอับจากรถบรรทุก สินค้า และชั้นวาง'],
          ['สายการผลิตและพื้นที่จำกัดการเข้าถึง', 'ตกลงเหตุการณ์และจุดเข้าออกที่ต้องเฝ้าดู แล้วระบุมุมที่อนุญาตให้บันทึกและผู้ที่เปิดดูย้อนหลังได้ร่วมกับทีมโรงงาน'],
        ],
      },
      {
        id: 'system', title: 'องค์ประกอบระบบและการคำนวณขนาด', layout: 'checklist',
        text: 'โครงสร้างทั่วไปเริ่มจากกล้อง IP ต่อเข้า PoE Switch ผ่านลิงก์เครือข่ายไปยัง NVR หรือเซิร์ฟเวอร์บันทึกภาพ แล้วให้ผู้มีสิทธิ์เปิดดูจากเครื่องที่กำหนด',
        items: [
          ['กล้อง IP (IP Camera)', 'เลือกเลนส์ มุมมอง จุดติดตั้ง และตัวเรือนตามรายละเอียดที่ต้องการเห็น รวมถึงสภาพฝุ่น ความชื้น แสงย้อน และแสงน้อย'],
          ['PoE Switch และเครือข่ายกล้อง', 'ตรวจจำนวนพอร์ต กำลังไฟต่อพอร์ตและกำลังไฟรวม แนวเดินสาย และความจุลิงก์ขาขึ้น ตกลงการแบ่งเครือข่าย สิทธิ์เข้าถึง และลิงก์ใยแก้วนำแสงกับฝ่าย IT'],
          ['NVR เซิร์ฟเวอร์บันทึก และเครื่องดูภาพ', 'ตรวจความเข้ากันได้ของกล้องและสตรีม จำนวนช่องบันทึก อัตรารับข้อมูล ภาระการดูย้อนหลัง และสิทธิ์ผู้ใช้ พร้อมระบุจุดดูภาพสดและภาพย้อนหลัง'],
          ['พื้นที่เก็บภาพบันทึก', 'ประเมินความจุที่ใช้ได้จากจำนวนกล้อง บิตเรตที่คาดไว้ ตารางบันทึก และระยะเวลาเก็บภาพที่ตกลงกัน พิจารณาผลจากความละเอียด อัตราเฟรม และความเคลื่อนไหวในภาพ พร้อมเผื่อพื้นที่ที่ระบบใช้และการขยายตามแผน'],
        ],
      },
      {
        id: 'scope', title: 'ขอบเขตงานหลักและทางเลือก', layout: 'cards',
        items: [
          ['งานหลักที่ระบุในใบเสนอราคา', 'สำรวจพื้นที่ที่ตกลง วางจุดติดตั้งและแนวสาย ยืนยันรายการอุปกรณ์ ติดตั้งและตั้งค่าตามใบเสนอราคา พร้อมทดสอบการทำงานและส่งมอบบันทึกตามที่ตกลง'],
          ['ค่าที่ต้องกำหนดและทางเลือกตามโครงการ', 'ตกลงจำนวนวันเก็บภาพ รูปแบบการบันทึก การดูภาพจากระยะไกล การวิเคราะห์ภาพด้วย AI การเชื่อมระบบเดิม ไฟสำรอง และระบบสำรอง ระบุเงื่อนไขรับประกัน ขอบเขตบำรุงรักษา และเวลาตอบสนองแยกในใบเสนอราคาเมื่อเกี่ยวข้อง'],
        ],
      },
      {
        id: 'installation', title: 'ขั้นตอนวางแผนและติดตั้ง', layout: 'steps',
        items: [
          ['สำรวจหน้างาน', 'ทำเครื่องหมายจุดติดตั้งและแนวเดินสาย ตรวจระยะมองเห็น สภาพแสงในแต่ละกะ ทางเข้าทำงาน พื้นที่ตู้แร็ก และระบบเดิม'],
          ['ยืนยันแบบและช่วงเวลาทำงาน', 'ทบทวนรายการจุดกล้อง แบบเครือข่ายและพื้นที่เก็บข้อมูล ผู้รับผิดชอบ และเกณฑ์ตรวจรับ ตกลงใบอนุญาต ช่วงเวลาทำงาน และการสลับระบบที่ใช้งานอยู่'],
          ['ติดตั้งและตั้งค่า', 'ประสานการยึดอุปกรณ์ เข้าหัวสาย และติดป้าย จากนั้นตั้งค่าการบันทึก เวลา และสิทธิ์ ตรวจมุมมองหน้างานและบันทึกสิ่งที่เปลี่ยนจากแบบ'],
          ['ทดสอบร่วมกับทีมโรงงาน', 'ทดสอบตามรายการที่ตกลง บันทึกข้อยกเว้น ส่งมอบข้อมูลจุดกล้องและอุปกรณ์ พร้อมสาธิตการค้นและส่งออกภาพแก่ผู้ใช้งานที่ได้รับมอบหมาย'],
        ],
      },
      {
        id: 'acceptance', title: 'รายการทดสอบและตรวจรับ', layout: 'checklist',
        items: [
          ['ภาพกลางวันและกลางคืน', 'ตรวจแต่ละมุมที่ตกลงว่ามองเห็นรายละเอียดเป้าหมาย โฟกัสชัด และมีจุดอับตรงไหน ทดสอบแสงจ้าและแสงน้อยในสภาพที่ใกล้เคียงการใช้งานจริง'],
          ['การบันทึก ค้นหา และดูย้อนหลัง', 'ตรวจตารางบันทึก เวลาบนภาพ และการเทียบเวลา ค้นเหตุการณ์ที่ทราบเวลาจากกล้องที่กำหนด จากนั้นเปิดดูและส่งออกตัวอย่างเพื่อตรวจสอบ'],
          ['เครือข่าย พื้นที่เก็บ และสิทธิ์', 'ตรวจการเชื่อมต่อ สถานะบันทึก ความจุที่ใช้ได้ และการตั้งค่าเก็บภาพเทียบกับแบบ ทดสอบสิทธิ์ดูสด ดูย้อนหลัง และส่งออก ตกลงวิธีตรวจระยะเวลาเก็บจริงเมื่อมีภาพสะสมเพียงพอ'],
          ['การกู้คืนเมื่ออยู่ในขอบเขตงาน', 'ทดสอบเหตุขัดข้องตามที่ตกลงกับทีมโรงงาน เช่น การเชื่อมต่อกล้องหลุด ตรวจว่าระบบกลับมาบันทึกและแจ้งเตือนตามการตั้งค่า'],
        ],
      },
      {
        id: 'maintenance', title: 'การบำรุงรักษาและตรวจหาปัญหา', layout: 'checklist',
        items: [
          ['การตรวจเชิงป้องกัน', 'ตรวจแนวกล้อง สภาพเลนส์และตัวเรือน สถานะสวิตช์และเครื่องบันทึก การแจ้งเตือนดิสก์ และภาพเก่าสุดที่เรียกดูได้ พร้อมสุ่มทดสอบดูย้อนหลังและส่งออก'],
          ['การเปลี่ยนแปลงและซ่อมแซม', 'บันทึกกล้องที่เสียหรือย้ายจุด ประเมินผลต่อพื้นที่เก็บเมื่อเพิ่มสตรีม และประสานการอัปเดตหรือเปลี่ยนอุปกรณ์กับฝ่าย IT ตกลงรอบบริการ อะไหล่ และเงื่อนไขช่วยเหลือไว้ในขอบเขตบำรุงรักษา'],
        ],
      },
    ],
    contact: {
      title: 'เตรียมข้อมูลสำหรับสำรวจระบบ CCTV',
      text: 'หากมีแบบผังโรงงาน ให้ส่งพร้อมพื้นที่ที่ต้องการครอบคลุม ข้อมูลเครื่องบันทึกและเครือข่ายเดิม และระบุผู้ที่ต้องดูหรือส่งออกภาพ รวมถึงระยะเวลาเก็บภาพที่ต้องการหากกำหนดไว้แล้ว',
    },
  },
} satisfies Record<Locale, CctvCopy>;
