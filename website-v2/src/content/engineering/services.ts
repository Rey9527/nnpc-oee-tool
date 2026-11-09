import type { Locale } from '../home';
import type { AdditionalService } from '../routes';

type Items = readonly (readonly [string, string])[];
interface ServiceCopy {
  title: string;
  description: string;
  scope: Items;
  acceptance: Items;
  options: string;
}

export const serviceLabels = {
  en: { eyebrow: 'Engineering / ELV', scope: 'Plan the scope', acceptance: 'Test and hand over', options: 'Confirm in the quotation', discuss: 'Prepare for a site survey', contact: 'Discuss your engineering scope' },
  'zh-tw': { eyebrow: '工程／弱電系統', scope: '規劃工程範圍', acceptance: '測試與交付', options: '報價時確認', discuss: '準備現場勘查', contact: '討論您的工程需求' },
  th: { eyebrow: 'งานวิศวกรรม / ระบบ ELV', scope: 'วางขอบเขตงาน', acceptance: 'ทดสอบและส่งมอบ', options: 'รายการที่ต้องยืนยันในใบเสนอราคา', discuss: 'เตรียมข้อมูลสำรวจหน้างาน', contact: 'พูดคุยเรื่องขอบเขตงานวิศวกรรม' },
};

export const upkeepCopy = {
  en: {
    title: 'Maintenance after handover', item: 'Checks to agree with the site team',
    notes: {
      'access-control': 'Review reader and lock condition, remove inactive credentials and spot-check door events after configuration changes.',
      'lan-fiber': 'Keep patch records current, inspect damaged or moved links and repeat the agreed tests when a termination or route changes.',
      'wi-fi-network': 'Review coverage after layout or equipment changes. Agree who reviews access point alerts, configuration backups and firmware updates.',
      'server-room': 'Check rack labeling, cable strain and access paths. Record moved equipment and approve changes to power and patching with site owners.',
      'environmental-monitoring-ahu': 'Agree how to check sensor drift, communication faults and alarm delivery. Record setpoint and point-list changes with the facility team.',
      'maintenance-support': 'Use the service record to track recurring faults, follow-up owners and parts availability. Review the inspection scope when systems change.',
    },
  },
  'zh-tw': {
    title: '交付後維護', item: '與廠方確認的巡檢項目',
    notes: {
      'access-control': '巡檢讀卡機與門鎖，清理停用憑證，變更設定後抽查門點事件紀錄。',
      'lan-fiber': '維持跳線表更新，巡檢損壞或移動的連線，端接或路徑變更後依約複測。',
      'wi-fi-network': '設備或場地配置改變後複查覆蓋，確認基地台告警、設定備份和韌體更新的負責人。',
      'server-room': '檢查機櫃標示、線材拉力及維修動線。記錄設備移位，配電和跳線變更與廠方確認。',
      'environmental-monitoring-ahu': '約定感測器偏移、通訊異常及告警送達的檢查方式，與廠方一併記錄設定值及點位表變更。',
      'maintenance-support': '透過服務紀錄追蹤重複故障、後續負責人及備品狀況。系統變更時重新檢視巡檢範圍。',
    },
  },
  th: {
    title: 'การดูแลหลังส่งมอบ', item: 'รายการตรวจที่ตกลงกับทีมหน้างาน',
    notes: {
      'access-control': 'ตรวจสภาพเครื่องอ่านและกลอน ยกเลิกสิทธิ์ที่ไม่ได้ใช้ และสุ่มตรวจเหตุการณ์ประตูหลังเปลี่ยนการตั้งค่า',
      'lan-fiber': 'อัปเดตรายการสายแพตช์ ตรวจลิงก์ที่เสียหายหรือย้ายจุด และทดสอบซ้ำตามที่ตกลงเมื่อเปลี่ยนหัวต่อหรือแนวสาย',
      'wi-fi-network': 'ตรวจพื้นที่ครอบคลุมอีกครั้งหลังเปลี่ยนผังหรืออุปกรณ์ ระบุผู้ดูแลการแจ้งเตือน การสำรองค่าตั้ง และการอัปเดตเฟิร์มแวร์',
      'server-room': 'ตรวจป้ายตู้ แรงดึงที่สาย และทางเข้าซ่อม บันทึกการย้ายอุปกรณ์และยืนยันการเปลี่ยนไฟฟ้าหรือสายแพตช์กับเจ้าของระบบ',
      'environmental-monitoring-ahu': 'ตกลงวิธีตรวจค่าคลาดเคลื่อน การสื่อสารขัดข้อง และการส่งแจ้งเตือน บันทึกการเปลี่ยนค่าตั้งและรายการจุดร่วมกับทีมอาคาร',
      'maintenance-support': 'ใช้บันทึกบริการติดตามปัญหาซ้ำ ผู้รับผิดชอบ และสถานะอะไหล่ ทบทวนขอบเขตตรวจเมื่อมีการเปลี่ยนระบบ',
    },
  },
} satisfies Record<Locale, { title: string; item: string; notes: Record<AdditionalService, string> }>;

export const serviceCopy = {
  en: {
    'access-control': {
      title: 'Access Control', description: 'Plan how staff, visitors and contractors enter each area, and agree how the facility team manages permissions and responds to faults.',
      scope: [['Doors and user roles', 'Survey door types, access routes and existing equipment. Define reader, controller, lock, exit device and power requirements for each opening.'], ['Permissions and interfaces', 'Agree credential lifecycle, time schedules, door events, access logs and ownership of any alarm or HR integration. Review emergency egress interfaces with the responsible site team.']],
      acceptance: [['Test each door', 'Verify authorized and denied access, exit operation, forced or held-open events where configured, and agreed behavior during power or controller failure.'], ['Handover and support', 'Review the door schedule, administrator roles and event records. Explain how to issue and revoke credentials and report faults.']],
      options: 'Share door drawings, opening hours and credential requirements. Confirm reuse, integration, backup power and maintenance separately in the proposal.',
    },
    'lan-fiber': {
      title: 'LAN & Fiber Optic', description: 'Plan copper and fiber routes between work areas, racks and buildings. Agree link specifications and what the cabling contractor will test.',
      scope: [['Routes and endpoints', 'Survey pathways, link lengths, cabinet space and environmental conditions. Identify the endpoints and select the copper category or fiber type for the design.'], ['Termination and labeling', 'Agree patch panel, connector and labeling conventions, firestop responsibility, pathway provisions and the changeover window for live links.']],
      acceptance: [['Measure each agreed link', 'Match copper certification or fiber loss test results to cable IDs. Specify any additional fiber trace testing in the proposal.'], ['Document installed routes', 'Deliver port schedules, rack and route records, and test results with exceptions identified for follow-up.']],
      options: 'Share the site layout, network endpoints and links that must stay live. Confirm pathways, active equipment and cutover support in the quotation.',
    },
    'wi-fi-network': {
      title: 'Wi-Fi & Network', description: 'Plan wireless coverage for the actual devices and work areas, including scanners, production terminals and handhelds.',
      scope: [['Coverage and demand', 'Identify critical zones, device types, expected concurrency and roaming routes. Review racks, machinery and stock that may affect signals.'], ['Network integration', 'Agree access point positions, uplinks, PoE power and network separation. Confirm who controls authentication, guest access and the management platform.']],
      acceptance: [['Walk the agreed areas', 'Check coverage and device behavior against the agreed measurements, including roaming or application tests on representative devices where specified.'], ['Hand over the design', 'Record access point locations, relevant configuration and ownership of administration and troubleshooting.']],
      options: 'Share floor plans, device lists and problem areas. Confirm survey type, subscriptions, support and acceptance thresholds for the project.',
    },
    'server-room': {
      title: 'Server Room', description: 'Plan rack space, cabling and equipment access so the site team can identify, service and expand the installation.',
      scope: [['Rack and equipment layout', 'Inventory existing equipment and reserve space for maintenance. Agree patch panels, cable paths and power responsibilities with the facility and IT teams.'], ['Work around live equipment', 'Identify systems that must stay operational. Agree labeling, relocation steps, interruption windows and who can approve changes.']],
      acceptance: [['Inspect installation and links', 'Check equipment placement, cable identifiers and access clearances. Run the agreed continuity or connection checks and record exceptions.'], ['Hand over records', 'Review rack elevations, patch schedules and equipment locations with the site team.']],
      options: 'Share equipment lists, rack plans and operating constraints. Confirm whether power distribution, UPS, cooling or equipment migration is included.',
    },
    'environmental-monitoring-ahu': {
      title: 'Environmental Monitoring & AHU', description: 'Agree what to measure, where to measure it and who responds when readings or air handling unit conditions change.',
      scope: [['Points and alarms', 'Confirm temperature, humidity and other required measurements, sensor positions, alarm thresholds and notification ownership.'], ['AHU interfaces', 'Review available signals such as fan status and filter condition. Agree whether the project reads data only or also changes controls, and who owns the equipment interface.']],
      acceptance: [['Verify readings and alarms', 'Compare representative readings with the agreed reference method and simulate selected alarms. Check history, timestamps and notification paths.'], ['Verify agreed interfaces', 'Check each documented point and its displayed state. Where controls are included, agree safe test conditions and the return to normal operation.']],
      options: 'Share AHU lists, controller interfaces and points of concern. Confirm sensor calibration, integration, monitoring history and maintenance scope.',
    },
    'maintenance-support': {
      title: 'Maintenance & Support', description: 'Set a practical maintenance scope around installed equipment, recurring faults and production windows.',
      scope: [['Inventory and condition', 'Identify covered systems, recurring faults and access limits. Agree the equipment register and any baseline tests before maintenance begins.'], ['Inspection and escalation', 'Set inspection tasks, frequency and reporting. Define how to log a fault, who can authorize changes, and who supplies replacement parts.']],
      acceptance: [['Review service records', 'Record inspection results, faults found, corrective work and open items. Check the affected function after a repair where agreed.'], ['Review the next actions', 'Separate immediate issues from planned improvements. Identify parts, changes and responsibilities that need a separate decision.']],
      options: 'Share equipment lists, recent faults and permitted work windows. Agree visits, remote support, spare parts, coverage and response terms in the proposal.',
    },
  },
  'zh-tw': {
    'access-control': {
      title: '門禁控制', description: '依各區域的進出需求規劃員工、訪客及承包商門禁，並確認廠方如何管理權限及處理故障。',
      scope: [['門點與使用角色', '盤點門型、通行動線及既有設備，逐門確認讀卡機、控制器、門鎖、出門裝置及電源需求。'], ['權限與系統介接', '確認憑證發放、停用、時段、門點事件及紀錄管理，並與廠方負責人確認逃生及警報介面。']],
      acceptance: [['逐門驗收', '測試授權與拒絕進入、出門功能、已設定的門點告警，以及斷電或控制器失效時的約定行為。'], ['交接與故障處理', '確認門點表、管理角色及事件紀錄，說明如何新增、停用憑證及通報故障。']],
      options: '請提供門點圖、通行時段與憑證需求。既有設備沿用、系統整合、備援電源及維護範圍依報價確認。',
    },
    'lan-fiber': {
      title: 'LAN 與光纖佈線', description: '規劃工作區、機櫃與建物之間的銅纜和光纖，並確認連線規格及驗收方式。',
      scope: [['路徑與端點', '勘查管線路徑、距離、機櫃空間及環境，依端點與用途確認銅纜等級或光纖種類。'], ['端接與標示', '確認配線架、接頭、標籤規則、穿牆防火封堵責任，以及既有連線的切換時段。']],
      acceptance: [['按線路編號驗證', '依約取得銅纜認證測試或光纖損耗紀錄。若需光纖事件分析或測距，先在報價列明。'], ['交付配線資料', '交付配線埠表、機櫃與路徑紀錄、測試結果及待處理項目。']],
      options: '請提供廠區圖、網路端點及不得中斷的連線。管線、主動設備與切換支援依報價確認。',
    },
    'wi-fi-network': {
      title: 'Wi-Fi 與網路', description: '依工作區及實際使用設備規劃無線覆蓋，包括掃描器、產線終端及手持設備。',
      scope: [['覆蓋與使用需求', '確認關鍵區域、設備型號、同時使用量與移動漫遊路線，並評估貨架、機台和存貨的遮蔽。'], ['網路整合', '確認無線基地台位置、上行連線、PoE 電源及網路分段，並劃分認證、訪客存取與管理平台責任。']],
      acceptance: [['走測約定區域', '依約測量覆蓋及設備行為，必要時使用具代表性的終端測試漫遊或實際應用。'], ['交付管理資料', '記錄基地台點位、相關設定及管理和故障排查的負責人。']],
      options: '請提供平面圖、終端清單及問題區域。勘查方式、授權訂閱、維護及驗收門檻依專案確認。',
    },
    'server-room': {
      title: '機房工程', description: '規劃機櫃、配線與設備維修動線，方便廠方識別、維護和擴充。',
      scope: [['機櫃與設備配置', '盤點既有設備並保留維修空間，與廠務及 IT 確認配線架、走線與供電責任。'], ['維持既有設備運作', '辨識施工期間必須維持的系統，確認標示、搬遷步驟、停機時段與變更核准人。']],
      acceptance: [['檢查安裝及連線', '核對設備位置、線路標示及維修淨空。執行約定的導通或連線測試並記錄異常。'], ['交接機房資料', '與廠方核對機櫃配置圖、跳線表及設備位置。']],
      options: '請提供設備清單、機櫃圖及運作限制。配電、UPS、冷卻或設備搬遷是否包含，依報價確認。',
    },
    'environmental-monitoring-ahu': {
      title: '環境監測與 AHU', description: '確認量測項目、感測位置，以及數值或空調箱狀態異常時由誰處理。',
      scope: [['感測點位與告警', '確認溫度、濕度等量測項目、點位、告警門檻及通知負責人。'], ['AHU 介面', '盤點可取得的風機、濾網等訊號，確認僅讀取狀態或需控制介接，以及設備介面的責任歸屬。']],
      acceptance: [['驗證讀值與告警', '用約定的參考方式抽測讀值並模擬指定告警，查核歷史紀錄、時間戳記與通知路徑。'], ['驗證約定介面', '逐點檢查畫面及狀態。若包含控制，先約定安全測試條件及恢復正常運轉的步驟。']],
      options: '請提供 AHU 清單、控制介面及問題點。校正、整合、歷史紀錄及維護範圍依專案確認。',
    },
    'maintenance-support': {
      title: '維護與技術支援', description: '依設備現況、重複故障及生產時段，設定可執行的巡檢和維修範圍。',
      scope: [['設備盤點與現況', '確認涵蓋設備、故障紀錄及進場限制。維護前核對設備清冊及需建立的基準測試。'], ['巡檢與通報', '約定巡檢項目、頻率、紀錄方式、故障通報窗口、變更核准及備品責任。']],
      acceptance: [['核對服務紀錄', '記錄檢查結果、發現的故障、改善作業及待處理項目。依約於修復後驗證相關功能。'], ['確認後續安排', '區分需立即處理與可排程改善的項目，列明需另外確認的備品、變更及分工。']],
      options: '請提供設備清單、近期故障及可施工時段。巡檢、遠端支援、備品、維護範圍及回應條件依提案確認。',
    },
  },
  th: {
    'access-control': {
      title: 'ระบบควบคุมการเข้าออก', description: 'วางแผนการเข้าออกของพนักงาน ผู้มาติดต่อ และผู้รับเหมา พร้อมตกลงวิธีจัดการสิทธิ์และปัญหาหน้างาน',
      scope: [['ประตูและกลุ่มผู้ใช้', 'สำรวจชนิดประตู เส้นทางเข้าออก และอุปกรณ์เดิม กำหนดเครื่องอ่าน ตัวควบคุม กลอน อุปกรณ์ออกจากพื้นที่ และไฟเลี้ยงสำหรับแต่ละประตู'], ['สิทธิ์และการเชื่อมต่อ', 'ตกลงการออกและยกเลิกบัตร ตารางเวลา เหตุการณ์ประตู และผู้ดูแลข้อมูล ตรวจการเชื่อมต่อระบบแจ้งเตือนและทางออกฉุกเฉินกับผู้รับผิดชอบอาคาร']],
      acceptance: [['ทดสอบทีละประตู', 'ทดสอบสิทธิ์อนุญาตและปฏิเสธ การออกจากพื้นที่ การแจ้งเตือนที่ตั้งไว้ และการทำงานเมื่อไฟหรืออุปกรณ์ควบคุมขัดข้องตามที่ตกลง'], ['ส่งมอบและแจ้งปัญหา', 'ตรวจรายการประตู สิทธิ์ผู้ดูแล และบันทึกเหตุการณ์ พร้อมอธิบายวิธีออกบัตร ยกเลิกสิทธิ์ และแจ้งปัญหา']],
      options: 'ส่งแบบประตู เวลาที่ใช้งาน และความต้องการเรื่องบัตร ระบุการใช้อุปกรณ์เดิม การเชื่อมระบบ ไฟสำรอง และการบำรุงรักษาในใบเสนอราคา',
    },
    'lan-fiber': {
      title: 'ระบบ LAN และใยแก้วนำแสง', description: 'วางแนวสายทองแดงและใยแก้วระหว่างพื้นที่ทำงาน ตู้แร็ก และอาคาร พร้อมตกลงข้อกำหนดลิงก์และวิธีตรวจรับ',
      scope: [['แนวสายและจุดปลาย', 'สำรวจทางเดินสาย ระยะ พื้นที่ตู้ และสภาพแวดล้อม เลือกประเภทสายทองแดงหรือใยแก้วให้ตรงกับจุดเชื่อมต่อและการใช้งาน'], ['เข้าหัวสายและติดป้าย', 'ตกลงแผงกระจายสาย หัวต่อ รูปแบบป้าย ผู้รับผิดชอบการปิดช่องกันไฟ และช่วงเวลาสลับลิงก์ที่ใช้งานอยู่']],
      acceptance: [['ทดสอบตามรหัสสาย', 'ตรวจผลรับรองสายทองแดงหรือผลวัดการสูญเสียของใยแก้วตามที่ตกลง ระบุงานทดสอบระยะและเหตุการณ์ในสายเพิ่มในใบเสนอราคาหากต้องการ'], ['ส่งมอบข้อมูลสาย', 'ส่งรายการพอร์ต ตำแหน่งตู้ แนวสาย ผลทดสอบ และรายการที่ต้องติดตาม']],
      options: 'ส่งผังพื้นที่ จุดเชื่อมต่อ และลิงก์ที่หยุดไม่ได้ ระบุทางเดินสาย อุปกรณ์เครือข่าย และงานสลับระบบในใบเสนอราคา',
    },
    'wi-fi-network': {
      title: 'Wi-Fi และเครือข่าย', description: 'วางพื้นที่ครอบคลุมตามอุปกรณ์และการใช้งานจริง เช่น เครื่องสแกน เครื่องปลายทางในสายผลิต และอุปกรณ์พกพา',
      scope: [['พื้นที่ครอบคลุมและการใช้งาน', 'ระบุพื้นที่สำคัญ ชนิดอุปกรณ์ จำนวนผู้ใช้พร้อมกัน และเส้นทางเคลื่อนที่ ตรวจผลกระทบจากชั้นวาง เครื่องจักร และสินค้า'], ['เชื่อมต่อกับเครือข่าย', 'ตกลงตำแหน่งจุดกระจายสัญญาณ ลิงก์ขาขึ้น กำลังไฟ PoE และการแบ่งเครือข่าย รวมถึงผู้ดูแลการยืนยันตัวตนและเครือข่ายผู้มาติดต่อ']],
      acceptance: [['เดินทดสอบพื้นที่', 'ตรวจสัญญาณและการทำงานของอุปกรณ์ตามเกณฑ์ที่ตกลง ทดสอบการเปลี่ยนจุดเชื่อมต่อหรือแอปจริงบนอุปกรณ์ตัวแทนหากอยู่ในขอบเขต'], ['ส่งมอบข้อมูลระบบ', 'บันทึกตำแหน่งอุปกรณ์ ค่าที่เกี่ยวข้อง และผู้รับผิดชอบการดูแลและแก้ปัญหา']],
      options: 'ส่งผังอาคาร รายการอุปกรณ์ และพื้นที่ที่มีปัญหา ตกลงรูปแบบสำรวจ ค่าสมาชิก การดูแล และเกณฑ์ตรวจรับตามโครงการ',
    },
    'server-room': {
      title: 'งานระบบห้องเซิร์ฟเวอร์', description: 'วางผังตู้แร็ก แนวสาย และพื้นที่เข้าถึงอุปกรณ์ เพื่อให้ทีมหน้างานตรวจสอบ ซ่อมบำรุง และขยายระบบได้',
      scope: [['ผังตู้และอุปกรณ์', 'จัดทำรายการอุปกรณ์เดิมและเผื่อพื้นที่ซ่อมบำรุง ตกลงแผงกระจายสาย แนวสาย และผู้ดูแลไฟฟ้ากับทีมอาคารและ IT'], ['ทำงานรอบระบบเดิม', 'ระบุระบบที่ต้องทำงานต่อ กำหนดป้าย ขั้นตอนย้าย ช่วงหยุดระบบ และผู้อนุมัติการเปลี่ยนแปลง']],
      acceptance: [['ตรวจการติดตั้งและการเชื่อมต่อ', 'ตรวจตำแหน่งอุปกรณ์ รหัสสาย และพื้นที่เข้าซ่อม ทดสอบความต่อเนื่องหรือการเชื่อมต่อตามที่ตกลงและบันทึกข้อยกเว้น'], ['ส่งมอบเอกสารห้องระบบ', 'ทบทวนผังตู้ รายการสายแพตช์ และตำแหน่งอุปกรณ์กับทีมหน้างาน']],
      options: 'ส่งรายการอุปกรณ์ ผังตู้ และข้อจำกัดการเดินระบบ ระบุในใบเสนอราคาว่ารวมไฟฟ้า UPS ระบบทำความเย็น หรือการย้ายอุปกรณ์หรือไม่',
    },
    'environmental-monitoring-ahu': {
      title: 'ระบบติดตามสภาพแวดล้อมและ AHU', description: 'ตกลงสิ่งที่ต้องวัด จุดวัด และผู้รับผิดชอบเมื่อค่าหรือสถานะเครื่องส่งลมเปลี่ยนแปลง',
      scope: [['จุดวัดและการแจ้งเตือน', 'กำหนดค่าอุณหภูมิ ความชื้น หรือค่าอื่นที่ต้องวัด พร้อมตำแหน่งเซ็นเซอร์ เกณฑ์เตือน และผู้รับแจ้ง'], ['สัญญาณจาก AHU', 'ตรวจสัญญาณที่ใช้ได้ เช่น สถานะพัดลมหรือแผ่นกรอง ระบุว่าอ่านข้อมูลอย่างเดียวหรือรวมงานควบคุม และใครดูแลส่วนเชื่อมต่อ']],
      acceptance: [['ตรวจค่าที่วัดและการแจ้งเตือน', 'เปรียบเทียบค่าตัวอย่างด้วยวิธีอ้างอิงที่ตกลงและจำลองการแจ้งเตือน ตรวจประวัติ เวลา และช่องทางแจ้ง'], ['ตรวจส่วนเชื่อมต่อ', 'ตรวจแต่ละจุดและสถานะที่แสดง หากรวมการควบคุม ให้ตกลงเงื่อนไขทดสอบที่ปลอดภัยและขั้นตอนกลับสู่การทำงานปกติ']],
      options: 'ส่งรายการ AHU ข้อมูลตัวควบคุม และจุดที่มีปัญหา ตกลงการสอบเทียบ การเชื่อมระบบ ประวัติข้อมูล และขอบเขตบำรุงรักษา',
    },
    'maintenance-support': {
      title: 'บำรุงรักษาและสนับสนุนทางเทคนิค', description: 'กำหนดงานตรวจและซ่อมให้เหมาะกับสภาพอุปกรณ์ ปัญหาที่เกิดซ้ำ และช่วงเวลาเดินเครื่อง',
      scope: [['รายการและสภาพอุปกรณ์', 'ระบุระบบที่ครอบคลุม ปัญหาเดิม และข้อจำกัดการเข้าพื้นที่ ตกลงทะเบียนอุปกรณ์และการทดสอบเบื้องต้นก่อนเริ่มงาน'], ['การตรวจและการแจ้งปัญหา', 'กำหนดรายการตรวจ รอบงาน วิธีบันทึก ผู้รับแจ้ง ผู้อนุมัติการเปลี่ยนแปลง และผู้จัดหาอะไหล่']],
      acceptance: [['ตรวจบันทึกงานบริการ', 'บันทึกผลตรวจ ปัญหาที่พบ งานแก้ไข และรายการค้าง พร้อมทดสอบฟังก์ชันหลังซ่อมตามที่ตกลง'], ['กำหนดงานต่อเนื่อง', 'แยกปัญหาที่ต้องแก้ทันทีออกจากงานปรับปรุงที่จัดตารางได้ ระบุอะไหล่ งานเปลี่ยน และผู้รับผิดชอบที่ต้องยืนยันเพิ่ม']],
      options: 'ส่งรายการอุปกรณ์ ปัญหาล่าสุด และช่วงเวลาที่เข้าทำงานได้ ระบุรอบตรวจ การช่วยเหลือทางไกล อะไหล่ ขอบเขต และเงื่อนไขการตอบสนองในข้อเสนอ',
    },
  },
} satisfies Record<Locale, Record<AdditionalService, ServiceCopy>>;
