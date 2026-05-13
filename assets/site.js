const LANGS = ['zh', 'en', 'th'];

const SHARED = {
  zh: {
    brandSub: '智慧製造與企業 AI 顧問',
    navSolutions: '解決方案',
    navIndustries: '適用產業',
    navOee: 'OEE 工具',
    navAbout: '關於 N/NPC',
    navContact: '聯絡我們',
    navCta: '預約診斷',
    solution1: '工廠績效與 MES',
    solution1Sub: 'MES、OEE、IoT 現場數據與產線可視化',
    solution2: 'AI 預測與最佳化',
    solution2Sub: 'PROFET AI、AI 預防維護、良率與需求預測',
    solution3: '企業流程數位化',
    solution3Sub: 'CRM、BizForm、KM 與跨部門流程',
    solution4: 'RTLS 即時定位與通訊',
    solution4Sub: 'Orion Go、LoRaWAN、BLE/BLT 與即時追蹤',
    footerTag: 'N/NPC 協助製造業與企業把現場、流程與 AI 串成可改善的營運系統。',
    privacy: '隱私權政策',
    terms: '服務條款',
  },
  en: {
    brandSub: 'Smart Manufacturing & Enterprise AI Consulting',
    navSolutions: 'Solutions',
    navIndustries: 'Industries',
    navOee: 'OEE Tool',
    navAbout: 'About N/NPC',
    navContact: 'Contact',
    navCta: 'Book Diagnosis',
    solution1: 'Factory Performance & MES',
    solution1Sub: 'MES, OEE, IoT field data, and production visibility',
    solution2: 'AI Prediction & Optimization',
    solution2Sub: 'PROFET AI, predictive maintenance, yield and demand forecasting',
    solution3: 'Enterprise Process Platforms',
    solution3Sub: 'CRM, BizForm, KM, and cross-department workflows',
    solution4: 'RTLS & Connectivity',
    solution4Sub: 'Orion Go, LoRaWAN, BLE/BLT, and real-time tracking',
    footerTag: 'N/NPC helps manufacturers and enterprises connect field operations, business processes, and AI into systems that can improve.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
  },
  th: {
    brandSub: 'ที่ปรึกษา Smart Manufacturing และ Enterprise AI',
    navSolutions: 'โซลูชัน',
    navIndustries: 'อุตสาหกรรม',
    navOee: 'เครื่องมือ OEE',
    navAbout: 'เกี่ยวกับ N/NPC',
    navContact: 'ติดต่อเรา',
    navCta: 'นัดวิเคราะห์',
    solution1: 'Factory Performance & MES',
    solution1Sub: 'MES, OEE, ข้อมูล IoT หน้างาน และการมองเห็นไลน์ผลิต',
    solution2: 'AI Prediction & Optimization',
    solution2Sub: 'PROFET AI, predictive maintenance, การพยากรณ์คุณภาพและความต้องการ',
    solution3: 'Enterprise Process Platforms',
    solution3Sub: 'CRM, BizForm, KM และเวิร์กโฟลว์ข้ามแผนก',
    solution4: 'RTLS & Connectivity',
    solution4Sub: 'Orion Go, LoRaWAN, BLE/BLT และการติดตามแบบเรียลไทม์',
    footerTag: 'N/NPC ช่วยเชื่อมหน้างาน กระบวนการ และ AI ให้กลายเป็นระบบปฏิบัติการที่ปรับปรุงได้จริง',
    privacy: 'นโยบายความเป็นส่วนตัว',
    terms: 'ข้อกำหนดการใช้บริการ',
  },
};

const PAGE = {
  home: {
    zh: {
      title: '訂單很多，不代表工廠真的有賺錢。',
      eyebrow: 'N/NPC Smart Operations',
      subtitle: 'N/NPC 協助製造業與企業從 MES、IoT 現場數據、OEE 分析，到 AI 預測、CRM、BizForm、KM 與 RTLS 即時定位，建立看得見、算得清、能持續改善的營運系統。',
      primary: '試算 OEE 漏利',
      secondary: '看解決方案',
      trust1N: 'MES + IoT', trust1T: '把現場資料接起來',
      trust2N: 'AI', trust2T: '預測異常與最佳化決策',
      trust3N: 'RTLS', trust3T: '掌握人、料、設備位置',
      visualTag: 'Live Operations View',
      metric1: '訂單毛利', metric1Sub: '接單時看起來很好',
      metric2: '換線等待', metric2Sub: '真正進產線才出現',
      metric3: '重工損失', metric3Sub: '沒有算進報價',
      metric4: '真實獲利', metric4Sub: '需要現場數據才看得清楚',
      orderTitle: '一張訂單從業務到產線，利潤常在中間消失。',
      orderText: 'N/NPC 的角色不是單賣系統，而是協助你把現場、流程、AI 與管理決策串起來。',
      lossTitle: '看不見的損失，通常不會自己說話。',
      lossSub: '工廠主常看到訂單很多、現場很忙、報表都有，但真正虧在哪裡，要進到產線數據才會清楚。',
      loss1: '接單時有毛利，生產時被換線吃掉', loss1p: '小批量、多變更、急單插單，會讓原本好看的訂單變薄。',
      loss2: '機台沒有壞，產量就是上不去', loss2p: '等待材料、等待人員、等待確認，常常比故障更傷。',
      loss3: '良率看起來還可以，重工沒有人算', loss3p: '報廢、返修與重測，如果沒有被量化，就會藏在日常裡。',
      solutionsTitle: 'N/NPC 把解決方案放回營運問題裡。',
      solutionsSub: '我們依現場需求選擇與整合原廠技術，主角是你的營運改善，不是產品型錄。',
      learn: '了解更多',
      methodTitle: '導入不是先買系統，而是先看清楚錢漏在哪裡。',
      methodSub: '第一版診斷會從 OEE、流程斷點、資料可用性與改善優先順序開始。',
      step1: '看現場', step1p: '確認產線、流程、資料來源與真正決策者在乎的數字。',
      step2: '算損失', step2p: '把等待、重工、效率、位置、流程延遲轉成可討論的金額。',
      step3: '選方案', step3p: '依需求導入 MES、IoT、AI、CRM、RTLS 或混合方案。',
      step4: '持續改善', step4p: '用報表、預警與顧問節奏，把改善變成日常管理。',
      ctaTitle: '先讓老闆看見一張訂單進產線後的真實利潤。',
      ctaText: '從 OEE 工具開始，或直接預約 N/NPC 進行產線與流程診斷。',
    },
    en: {
      title: 'A full order book does not always mean a profitable factory.',
      eyebrow: 'N/NPC Smart Operations',
      subtitle: 'N/NPC helps manufacturers and enterprises connect MES, IoT field data, OEE analysis, AI prediction, CRM, BizForm, KM, and RTLS into visible, measurable, and continuously improving operating systems.',
      primary: 'Calculate OEE Loss',
      secondary: 'View Solutions',
      trust1N: 'MES + IoT', trust1T: 'Connect shop-floor data',
      trust2N: 'AI', trust2T: 'Predict risk and optimize decisions',
      trust3N: 'RTLS', trust3T: 'Track people, assets, and movement',
      visualTag: 'Live Operations View',
      metric1: 'Order Margin', metric1Sub: 'Looks good at quotation',
      metric2: 'Changeover Loss', metric2Sub: 'Appears inside production',
      metric3: 'Rework Cost', metric3Sub: 'Often missing from the quote',
      metric4: 'Real Profit', metric4Sub: 'Needs field data to be clear',
      orderTitle: 'Profit often disappears between sales orders and production reality.',
      orderText: 'N/NPC does not simply sell systems. We connect operations, processes, AI, and management decisions.',
      lossTitle: 'Invisible losses rarely announce themselves.',
      lossSub: 'Orders may look full, the shop floor may look busy, and reports may exist, but real loss becomes visible only when production data is connected.',
      loss1: 'Gross margin gets consumed by changeovers', loss1p: 'Small batches, changes, and urgent orders can thin out profitable-looking orders.',
      loss2: 'Machines are not broken, but output stays low', loss2p: 'Waiting for material, people, and confirmation can hurt more than breakdowns.',
      loss3: 'Yield looks acceptable, but rework is not counted', loss3p: 'Scrap, repair, and retesting become daily background noise when not quantified.',
      solutionsTitle: 'N/NPC puts technology back into operating problems.',
      solutionsSub: 'We select and integrate original technologies based on your site needs. The focus is your improvement, not a product catalog.',
      learn: 'Learn more',
      methodTitle: 'Implementation starts by seeing where profit leaks, not by buying software.',
      methodSub: 'The first diagnosis looks at OEE, process gaps, data readiness, and improvement priorities.',
      step1: 'Observe the site', step1p: 'Confirm lines, workflows, data sources, and the numbers management cares about.',
      step2: 'Calculate loss', step2p: 'Turn waiting, rework, efficiency, location, and process delays into money.',
      step3: 'Select solutions', step3p: 'Introduce MES, IoT, AI, CRM, RTLS, or hybrid solutions based on need.',
      step4: 'Improve continuously', step4p: 'Use dashboards, alerts, and consulting cadence to make improvement routine.',
      ctaTitle: 'Start by showing the real profit of an order after it enters production.',
      ctaText: 'Use the OEE tool first, or book a production and process diagnosis with N/NPC.',
    },
    th: {
      title: 'ออเดอร์เยอะ ไม่ได้แปลว่าโรงงานกำไรดีเสมอไป',
      eyebrow: 'N/NPC Smart Operations',
      subtitle: 'N/NPC ช่วยโรงงานและองค์กรเชื่อม MES, ข้อมูล IoT หน้างาน, OEE, AI prediction, CRM, BizForm, KM และ RTLS ให้กลายเป็นระบบที่มองเห็น วัดผลได้ และปรับปรุงต่อเนื่อง',
      primary: 'คำนวณการรั่วไหล OEE',
      secondary: 'ดูโซลูชัน',
      trust1N: 'MES + IoT', trust1T: 'เชื่อมข้อมูลหน้างาน',
      trust2N: 'AI', trust2T: 'พยากรณ์ความเสี่ยงและเพิ่มประสิทธิภาพ',
      trust3N: 'RTLS', trust3T: 'ติดตามคน สินทรัพย์ และการเคลื่อนไหว',
      visualTag: 'Live Operations View',
      metric1: 'กำไรตามใบสั่ง', metric1Sub: 'ดูดีตอนรับออเดอร์',
      metric2: 'เวลารอเปลี่ยนงาน', metric2Sub: 'เกิดจริงในไลน์ผลิต',
      metric3: 'ต้นทุนงานแก้', metric3Sub: 'มักไม่อยู่ในใบเสนอราคา',
      metric4: 'กำไรจริง', metric4Sub: 'ต้องใช้ข้อมูลหน้างานจึงเห็นชัด',
      orderTitle: 'กำไรมักหายไประหว่างออเดอร์ขายกับความจริงในไลน์ผลิต',
      orderText: 'N/NPC ไม่ได้ขายระบบอย่างเดียว แต่ช่วยเชื่อมหน้างาน กระบวนการ AI และการตัดสินใจของผู้บริหาร',
      lossTitle: 'ความสูญเสียที่มองไม่เห็น มักไม่บอกตัวเอง',
      lossSub: 'ออเดอร์อาจดูเยอะ หน้างานอาจดูยุ่ง และมีรายงานทุกวัน แต่จะเห็นการรั่วไหลจริงเมื่อเชื่อมข้อมูลการผลิต',
      loss1: 'กำไรขั้นต้นถูกกินด้วยการเปลี่ยนงาน', loss1p: 'งานล็อตเล็ก งานเปลี่ยนบ่อย และงานด่วน ทำให้ออเดอร์ที่ดูดีมีกำไรบางลง',
      loss2: 'เครื่องไม่เสีย แต่ผลผลิตไม่ขึ้น', loss2p: 'การรอวัตถุดิบ คน หรือการยืนยัน อาจกระทบมากกว่าเครื่องเสีย',
      loss3: 'Yield ดูพอใช้ แต่งานแก้ไม่ได้ถูกนับ', loss3p: 'ของเสีย งานซ่อม และการตรวจซ้ำจะกลายเป็นเรื่องปกติถ้าไม่ถูกวัด',
      solutionsTitle: 'N/NPC วางเทคโนโลยีกลับเข้าไปในปัญหาการดำเนินงาน',
      solutionsSub: 'เราเลือกและบูรณาการเทคโนโลยีจากผู้พัฒนาตามความต้องการจริงของไซต์ จุดสำคัญคือการปรับปรุง ไม่ใช่แคตตาล็อกสินค้า',
      learn: 'ดูเพิ่มเติม',
      methodTitle: 'การเริ่มต้นไม่ใช่การซื้อระบบ แต่คือการเห็นว่ากำไรรั่วตรงไหน',
      methodSub: 'การวิเคราะห์แรกเริ่มจาก OEE ช่องว่างของกระบวนการ ความพร้อมของข้อมูล และลำดับความสำคัญ',
      step1: 'ดูหน้างาน', step1p: 'ตรวจสอบไลน์ กระบวนการ แหล่งข้อมูล และตัวเลขที่ผู้บริหารต้องใช้ตัดสินใจ',
      step2: 'คำนวณความสูญเสีย', step2p: 'เปลี่ยนเวลารอ งานแก้ ประสิทธิภาพ ตำแหน่ง และความล่าช้าเป็นมูลค่าเงิน',
      step3: 'เลือกโซลูชัน', step3p: 'นำ MES, IoT, AI, CRM, RTLS หรือโซลูชันแบบผสมมาใช้ตามความจำเป็น',
      step4: 'ปรับปรุงต่อเนื่อง', step4p: 'ใช้แดชบอร์ด การแจ้งเตือน และจังหวะที่ปรึกษาให้การปรับปรุงเป็นงานประจำ',
      ctaTitle: 'เริ่มจากการเห็นกำไรจริงของออเดอร์หลังเข้าไลน์ผลิต',
      ctaText: 'เริ่มด้วยเครื่องมือ OEE หรือ นัด N/NPC วิเคราะห์ไลน์ผลิตและกระบวนการ',
    },
  },
};

Object.assign(PAGE, window.NNPC_PAGE || {});

function getLang() {
  const saved = localStorage.getItem('nnpc_lang');
  if (LANGS.includes(saved)) return saved;
  const nav = (navigator.language || '').toLowerCase();
  if (nav.startsWith('th')) return 'th';
  if (nav.startsWith('zh')) return 'zh';
  return 'en';
}

function applyLang(lang) {
  localStorage.setItem('nnpc_lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-TW' : lang;
  document.body.classList.toggle('thai', lang === 'th');
  const pageKey = document.body.dataset.page || 'home';
  const dict = { ...SHARED[lang], ...(PAGE[pageKey]?.[lang] || {}) };
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function initNav() {
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
  document.querySelectorAll('.dropdown-btn').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      if (window.matchMedia('(max-width: 980px)').matches) {
        event.preventDefault();
        btn.closest('.dropdown').classList.toggle('open');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  applyLang(getLang());
});
