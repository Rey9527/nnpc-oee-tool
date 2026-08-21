const LANGS = ['zh', 'en', 'th'];

const SHARED = {
  zh: {
    brandSub: '智慧製造與企業 AI 顧問',
    navSolutions: '解決方案',
    navIndustries: '適用產業',
    navCases: '案例分析',
    navOee: '工具',
    navAbout: '關於 N/NPC',
    navContact: '聯絡我們',
    navCta: '預約診斷',
    solution1: '工廠績效與 MES',
    solution1Sub: 'MES、OEE、IoT 現場數據與產線可視化',
    solution2: 'AI 預測與最佳化',
    solution2Sub: 'PROFET AI、Smart Tag 機台健康、良率與需求預測',
    solution3: '企業流程數位化',
    solution3Sub: 'CRM、BizForm、KM 與跨部門流程',
    solution4: 'RTLS 即時定位與通訊',
    solution4Sub: 'RTLS、LoRaWAN、BLE/BLT 與即時追蹤',
    footerTag: 'N/NPC 協助製造業與企業把現場、流程與 AI 串成可改善的營運系統。',
    privacy: '隱私權政策',
    terms: '服務條款',
    certificateVerification: '證書查驗',
  },
  en: {
    brandSub: 'Smart Manufacturing & Enterprise AI Consulting',
    navSolutions: 'Solutions',
    navIndustries: 'Industries',
    navCases: 'Case Insights',
    navOee: 'Tools',
    navAbout: 'About N/NPC',
    navContact: 'Contact',
    navCta: 'Book Diagnosis',
    solution1: 'Factory Performance & MES',
    solution1Sub: 'MES, OEE, IoT field data, and production visibility',
    solution2: 'AI Prediction & Optimization',
    solution2Sub: 'PROFET AI, Smart Tag machine health, yield and demand forecasting',
    solution3: 'Enterprise Process Platforms',
    solution3Sub: 'CRM, BizForm, KM, and cross-department workflows',
    solution4: 'RTLS & Connectivity',
    solution4Sub: 'RTLS, LoRaWAN, BLE/BLT, and real-time tracking',
    footerTag: 'N/NPC helps manufacturers and enterprises connect field operations, business processes, and AI into systems that can improve.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    certificateVerification: 'Certificate Verification',
  },
  th: {
    brandSub: 'ที่ปรึกษา Smart Manufacturing และ Enterprise AI',
    navSolutions: 'โซลูชัน',
    navIndustries: 'อุตสาหกรรม',
    navCases: 'กรณีศึกษา',
    navOee: 'เครื่องมือ',
    navAbout: 'เกี่ยวกับ N/NPC',
    navContact: 'ติดต่อเรา',
    navCta: 'นัดวิเคราะห์',
    solution1: 'Factory Performance & MES',
    solution1Sub: 'MES, OEE, ข้อมูล IoT หน้างาน และการมองเห็นไลน์ผลิต',
    solution2: 'AI Prediction & Optimization',
    solution2Sub: 'PROFET AI, Smart Tag machine health, การพยากรณ์คุณภาพและความต้องการ',
    solution3: 'Enterprise Process Platforms',
    solution3Sub: 'CRM, BizForm, KM และเวิร์กโฟลว์ข้ามแผนก',
    solution4: 'RTLS & Connectivity',
    solution4Sub: 'RTLS, LoRaWAN, BLE/BLT และการติดตามแบบเรียลไทม์',
    footerTag: 'N/NPC ช่วยเชื่อมหน้างาน กระบวนการ และ AI ให้กลายเป็นระบบปฏิบัติการที่ปรับปรุงได้จริง',
    privacy: 'นโยบายความเป็นส่วนตัว',
    terms: 'ข้อกำหนดการใช้บริการ',
    certificateVerification: 'ตรวจสอบใบรับรอง',
  },
};

const PAGE = {
  home: {
    zh: {
      title: '<span>讓營運被看見。</span><span>把浪費變成利潤，</span><span class="hero-accent">創造新的數位收入。</span>',
      eyebrow: '智慧營運與企業 AI',
      subtitle: 'N/NPC 連接營運系統、現場資料與企業 AI，協助你降低成本、釋放產能，並把數位能力轉成新收入。',
      primary: '估算我的營運價值',
      secondary: '看解決方案',
      trust1N: '降低成本', trust1T: '減少停機、等待、重工與人工處理',
      trust2N: '釋放價值', trust2T: '提升產能、效率與資產使用率',
      trust3N: '創造收入', trust3T: '建立可供新應用接入的數位能力',
      visualTag: '營運價值視圖',
      metric1: '成本回收', metric1Sub: '停機、等待、重工與人工處理',
      metric2: '產能釋放', metric2Sub: '設備、人員與流程效率',
      metric3: '資產增值', metric3Sub: '空間、設備與資料使用率',
      metric4: '新收入潛力', metric4Sub: '數位服務與第三方應用接入',
      orderTitle: '數位化的終點不是 dashboard，而是更好的利潤結構。',
      orderText: 'N/NPC 連接現場、流程、AI 與管理決策，讓每一筆改善回到成本、產能與收入。',
      flowIntroEyebrow: 'How N/NPC Reads Operations',
      flowIntroTitle: '先把感覺變成證據，再決定要導入什麼。',
      flowIntro1: '看見損失', flowIntro1p: '從訂單、等待、重工與產線節奏找出利潤消失的位置。',
      flowIntro2: '接上訊號', flowIntro2p: '把機台、工單、品質、能耗、人料位置變成可用資料。',
      flowIntro3: '形成行動', flowIntro3p: '再選擇 MES、IoT、AI、RTLS 或流程平台，讓改善能被追蹤。',
      lossTitle: '看不見的不只是損失，也包括尚未被使用的價值。',
      lossSub: '設備、人員、流程、空間與資料每天都在產生訊號。沒有被連接時，它們只是成本；能被理解與管理後，才可能成為效率、產能與新服務。',
      loss1: '營運很忙，成本卻持續藏在等待裡', loss1p: '停機、找資料、找人找物、重工與重複輸入，會慢慢吃掉原本應有的利潤。',
      loss2: '資產都在使用，價值卻沒有被充分釋放', loss2p: '設備、人力、空間與資料缺乏共同視圖時，使用率與服務能力很難提升。',
      loss3: '系統完成上線，商業模式仍停在節省成本', loss3p: '當共用數位能力可以安全接入新應用，數位化才有機會從內部工具延伸成新服務。',
      fieldEyebrow: 'Field Signals',
      fieldTitle: '資料不是從報表開始，而是從現場訊號開始。',
      fieldText: 'N/NPC 會先協助判斷哪些資料值得接：機台狀態、震動與溫度、能耗、公用系統、工單與品質。當訊號被接起來，老闆看到的就不只是 dashboard，而是可以採取行動的營運事實。',
      fieldHero: '先把現場狀態變成資料層，再決定需要 MES、IoT、AI 或 RTLS。',
      field1: '設備訊號', field1p: '從現場控制與機台狀態開始，讓停機、等待與異常有依據。',
      field2: '健康基線', field2p: '用震動、溫濕度與 AI decay rate 找出正常形態與問題形態。',
      field3: '公用系統', field3p: '把能源、空壓、管線與環境資料納入產線決策。',
      flow1: '現場訊號', flow2: '可用資料', flow3: '管理決策', flow4: '改善行動',
      signal1t: '報價時賺錢，結案時沒感覺', signal1p: '真正的問題常不是價格，而是生產過程中沒有被看見的時間、重工與協調成本。',
      signal1a: '換線時間沒有進入成本', signal1b: '急單插單擠壓原排程', signal1c: '重工和重測被當成日常',
      signal2t: '現場每個人都很忙，瓶頸卻說不清楚', signal2p: '如果資料沒有連到工單、機台、人員和品質，忙碌只會變成感覺，無法變成改善。',
      signal2a: '停機原因靠人工回想', signal2b: '人料車位置不透明', signal2c: '異常處理沒有閉環',
      signal3t: '系統很多，但決策還是在 LINE 和 Excel', signal3p: '數位化不是把表單搬上雲端，而是讓責任、資料和決策可以被追蹤。',
      signal3a: '客戶資料散在個人手上', signal3b: '簽核流程看不到卡點', signal3c: '知識沒有沉澱成 SOP',
      solutionsTitle: 'N/NPC 把解決方案放回營運問題裡。',
      solutionsSub: '我們依現場需求選擇與整合原廠技術，主角是你的營運改善，不是產品型錄。',
      service1Tag: '現場資料',
      service2Tag: '預測',
      service1Best: '適合：停機、效率、良率、工單進度說不清楚',
      service2Best: '適合：已有資料，但預測、異常判斷、最佳化還做不起來',
      service3Best: '適合：客戶、簽核、表單、知識仍靠人工追蹤',
      service4Best: '適合：人、料、車、設備、工具位置不透明',
      learn: '了解更多',
      showcase1: '現場控制與設備訊號', showcase1p: '先確認資料從哪裡來，才知道系統要接什麼。',
      showcase2: 'AI 健康基線', showcase2p: '用震動、溫濕度與趨勢資料看出正常與異常形態。',
      showcase3: '公用系統與能耗', showcase3p: '把能源、空壓與環境變成生產決策的一部分。',
      spaceEyebrow: 'Digital Operations Environment',
      spaceTitle: '先改善營運，再把共用數位能力變成可以持續生長的平台。',
      spaceText: 'N/NPC 協助企業連接設備、人員、資產、流程、身份、位置與即時事件。當這些能力形成受治理的數位底座，新的應用便能更快接入，場域業主也能進一步發展平台服務與接入收入。',
      spaceCta: '討論數位營運空間',
      spaceStep1: '連接營運', spaceStep1p: '設備、人員、資產、流程與事件',
      spaceStep2: '建立數位底座', spaceStep2p: '一致的資料、身份、權限與 API',
      spaceStep3: '接入新應用', spaceStep3p: '降低第三方服務的導入成本',
      spaceStep4: '發展新收入', spaceStep4p: '平台接入與數位基礎設施服務',
      methodTitle: '導入不是先買系統，而是先確認價值從哪裡產生。',
      methodSub: '第一版診斷從營運問題、受影響對象、資料可用性與改善優先順序開始。',
      step1: '看現場', step1p: '確認產線、流程、資料來源與真正決策者在乎的數字。',
      step2: '算損失', step2p: '把等待、重工、效率、位置、流程延遲轉成可討論的金額。',
      step3: '選方案', step3p: '依需求導入 MES、IoT、AI、CRM、RTLS 或混合方案。',
      step4: '持續改善', step4p: '用報表、預警與顧問節奏，把改善變成日常管理。',
      labTitle: '用 AI 放大工程能力，但不放棄工程判斷。',
      labText: 'N/NPC 讓實習生與顧問團隊進行 AI-Augmented Engineering 實驗，用 AI 協助需求拆解、介面設計、資料結構、API 串接與 Web App 原型開發。這不是傳統軟體外包，也不是單純寫 prompt，而是訓練新一代工程人才用 AI 更快驗證真實營運問題。',
      labBtn: '與我們聊聊 AI 原型',
      lab1: 'AI-Augmented Engineering', lab1p: '用 AI 加速需求、架構、介面與程式開發。',
      lab2: 'AI-Powered Web App Development', lab2p: '快速把現場想法做成可測試的內部工具或原型。',
      lab3: 'Built with AI, verified by judgment', lab3p: '保留工程判斷、驗證習慣與現場問題意識。',
      ctaTitle: '先找出你的營運價值，應該從哪一個問題開始釋放。',
      ctaText: '告訴我們最想降低的成本、釋放的產能或發展的數位服務，N/NPC 會協助整理第一階段路線。',
    },
    en: {
      title: '<span>See operations clearly.</span><span>Turn waste into profit.</span><span class="hero-accent">Create new digital revenue.</span>',
      eyebrow: 'Smart Operations & Enterprise AI',
      subtitle: 'N/NPC connects operations, field data, and enterprise AI to reduce cost, release capacity, and turn digital capabilities into new revenue.',
      primary: 'Estimate My Operating Value',
      secondary: 'View Solutions',
      trust1N: 'Reduce cost', trust1T: 'Cut downtime, waiting, rework, and manual handling',
      trust2N: 'Release value', trust2T: 'Improve capacity, efficiency, and asset utilization',
      trust3N: 'Create revenue', trust3T: 'Build digital capabilities that new applications can access',
      visualTag: 'Operations Value View',
      metric1: 'Cost recovery', metric1Sub: 'Downtime, waiting, rework, and manual handling',
      metric2: 'Capacity released', metric2Sub: 'Equipment, people, and process efficiency',
      metric3: 'Asset value', metric3Sub: 'Space, equipment, and data utilization',
      metric4: 'New revenue potential', metric4Sub: 'Digital services and application access',
      orderTitle: 'The destination of digitalization is not a dashboard. It is a better profit structure.',
      orderText: 'N/NPC connects operations, processes, AI, and management decisions so improvement returns to cost, capacity, and revenue.',
      flowIntroEyebrow: 'How N/NPC Reads Operations',
      flowIntroTitle: 'Turn intuition into evidence before choosing what to implement.',
      flowIntro1: 'Find the loss', flowIntro1p: 'Locate where profit disappears through orders, waiting, rework, and production rhythm.',
      flowIntro2: 'Connect signals', flowIntro2p: 'Turn machines, work orders, quality, energy, and location into usable data.',
      flowIntro3: 'Drive action', flowIntro3p: 'Then select MES, IoT, AI, RTLS, or process platforms so improvement can be tracked.',
      lossTitle: 'What stays invisible is not only loss, but also unused value.',
      lossSub: 'Equipment, people, processes, spaces, and data produce signals every day. Disconnected, they remain cost. Understood and managed, they can become efficiency, capacity, and new services.',
      loss1: 'Operations stay busy while cost hides in waiting', loss1p: 'Downtime, searching, rework, and duplicate entry slowly consume the profit that should remain.',
      loss2: 'Assets are in use, but their value is not fully released', loss2p: 'Without a shared view of equipment, people, space, and data, utilization and service capacity are hard to improve.',
      loss3: 'Systems go live, but the business model stops at cost saving', loss3p: 'When shared digital capabilities can safely support new applications, internal tools can grow into new services.',
      fieldEyebrow: 'Field Signals',
      fieldTitle: 'Data does not start from reports. It starts from field signals.',
      fieldText: 'N/NPC first helps decide which data is worth connecting: machine status, vibration and temperature, energy, utilities, work orders, and quality. Once signals are connected, management sees not just dashboards, but operating facts that can drive action.',
      fieldHero: 'Turn field conditions into a data layer first, then decide whether MES, IoT, AI, or RTLS is needed.',
      field1: 'Equipment signals', field1p: 'Start with controls and machine status so downtime, waiting, and abnormalities have evidence.',
      field2: 'Health baseline', field2p: 'Use vibration, temperature, humidity, and AI decay-rate analysis to identify normal and abnormal patterns.',
      field3: 'Utility systems', field3p: 'Bring energy, compressed air, piping, and environment data into production decisions.',
      flow1: 'Field signals', flow2: 'Usable data', flow3: 'Management decision', flow4: 'Improvement action',
      signal1t: 'Profitable at quotation, unclear at closing', signal1p: 'The issue is often not price, but unseen time, rework, and coordination cost inside production.',
      signal1a: 'Changeover time is not costed', signal1b: 'Urgent orders disrupt the plan', signal1c: 'Rework and retesting become routine',
      signal2t: 'Everyone is busy, but the bottleneck is unclear', signal2p: 'Without connected work orders, machines, people, and quality data, busyness cannot become improvement.',
      signal2a: 'Downtime reasons rely on memory', signal2b: 'People, materials, and vehicles are opaque', signal2c: 'Abnormal handling has no closed loop',
      signal3t: 'Many systems exist, but decisions still happen in chat and Excel', signal3p: 'Digitalization is not moving forms online. It makes responsibility, data, and decisions traceable.',
      signal3a: 'Customer data stays with individuals', signal3b: 'Approval bottlenecks are invisible', signal3c: 'Knowledge does not become SOP',
      solutionsTitle: 'N/NPC puts technology back into operating problems.',
      solutionsSub: 'We select and integrate original technologies based on your site needs. The focus is your improvement, not a product catalog.',
      service1Tag: 'Shop-floor data',
      service2Tag: 'Prediction',
      service1Best: 'Best for: unclear downtime, efficiency, yield, and work order progress',
      service2Best: 'Best for: teams with data but weak prediction, anomaly judgment, or optimization',
      service3Best: 'Best for: customer, approval, form, and knowledge work still tracked manually',
      service4Best: 'Best for: opaque people, material, vehicle, equipment, and tool locations',
      learn: 'Learn more',
      showcase1: 'Field control and equipment signals', showcase1p: 'First confirm where data comes from, then decide what the system should connect.',
      showcase2: 'AI health baseline', showcase2p: 'Use vibration, temperature, humidity, and trend data to identify normal and abnormal patterns.',
      showcase3: 'Utilities and energy', showcase3p: 'Make energy, compressed air, and environment part of production decisions.',
      spaceEyebrow: 'Digital Operations Environment',
      spaceTitle: 'Improve operations first, then turn shared digital capabilities into a platform that keeps growing.',
      spaceText: 'N/NPC connects equipment, people, assets, processes, identities, locations, and real-time events. When these become a governed digital foundation, new applications can connect faster and site owners can develop platform services and access revenue.',
      spaceCta: 'Discuss a Digital Operations Environment',
      spaceStep1: 'Connect operations', spaceStep1p: 'Equipment, people, assets, processes, and events',
      spaceStep2: 'Build the foundation', spaceStep2p: 'Shared data, identity, permissions, and APIs',
      spaceStep3: 'Connect applications', spaceStep3p: 'Reduce the cost of third-party service adoption',
      spaceStep4: 'Develop new revenue', spaceStep4p: 'Platform access and digital infrastructure services',
      methodTitle: 'Implementation starts by confirming where value is created, not by buying software.',
      methodSub: 'The first diagnosis starts with operating problems, affected objects, data readiness, and improvement priorities.',
      step1: 'Observe the site', step1p: 'Confirm lines, workflows, data sources, and the numbers management cares about.',
      step2: 'Calculate loss', step2p: 'Turn waiting, rework, efficiency, location, and process delays into money.',
      step3: 'Select solutions', step3p: 'Introduce MES, IoT, AI, CRM, RTLS, or hybrid solutions based on need.',
      step4: 'Improve continuously', step4p: 'Use dashboards, alerts, and consulting cadence to make improvement routine.',
      labTitle: 'Use AI to amplify engineering capacity without giving up engineering judgment.',
      labText: 'N/NPC lets interns and consultants experiment with AI-Augmented Engineering, using AI to support requirement breakdown, interface design, data structure, API integration, and Web App prototyping. It is not traditional software outsourcing or prompt writing alone. It is a way to train new engineering talent to validate real operating problems faster with AI.',
      labBtn: 'Discuss an AI Prototype',
      lab1: 'AI-Augmented Engineering', lab1p: 'Use AI to accelerate requirements, architecture, UI, and code development.',
      lab2: 'AI-Powered Web App Development', lab2p: 'Turn field ideas into testable internal tools or prototypes faster.',
      lab3: 'Built with AI, verified by judgment', lab3p: 'Keep engineering judgment, validation habits, and awareness of real site problems.',
      ctaTitle: 'Find the operating problem where your value should be released first.',
      ctaText: 'Tell us which cost you want to reduce, capacity you want to release, or digital service you want to develop. N/NPC will help define the first-stage path.',
    },
    th: {
      title: '<span>มองเห็นทุกการดำเนินงาน</span><span>เปลี่ยนความสูญเสียเป็นกำไร</span><span class="hero-accent">สร้างรายได้ใหม่ด้วยดิจิทัล</span>',
      eyebrow: 'Smart Operations & Enterprise AI',
      subtitle: 'N/NPC เชื่อมระบบปฏิบัติการ ข้อมูลหน้างาน และ Enterprise AI เพื่อลดต้นทุน เพิ่มกำลังการผลิต และต่อยอดความสามารถดิจิทัลสู่รายได้ใหม่',
      primary: 'ประเมินมูลค่าการดำเนินงาน',
      secondary: 'ดูโซลูชัน',
      trust1N: 'ลดต้นทุน', trust1T: 'ลด downtime การรอ งานแก้ และงาน manual',
      trust2N: 'ปลดล็อกมูลค่า', trust2T: 'เพิ่มกำลังการผลิต ประสิทธิภาพ และการใช้สินทรัพย์',
      trust3N: 'สร้างรายได้', trust3T: 'สร้างความสามารถดิจิทัลที่รองรับ application ใหม่',
      visualTag: 'Operations Value View',
      metric1: 'ต้นทุนที่เรียกคืนได้', metric1Sub: 'Downtime การรอ งานแก้ และงาน manual',
      metric2: 'กำลังการผลิตที่เพิ่มขึ้น', metric2Sub: 'ประสิทธิภาพของเครื่องจักร คน และกระบวนการ',
      metric3: 'มูลค่าสินทรัพย์', metric3Sub: 'การใช้พื้นที่ อุปกรณ์ และข้อมูล',
      metric4: 'โอกาสรายได้ใหม่', metric4Sub: 'บริการดิจิทัลและการเชื่อม application',
      orderTitle: 'ปลายทางของ Digitalization ไม่ใช่ dashboard แต่คือโครงสร้างกำไรที่ดีขึ้น',
      orderText: 'N/NPC เชื่อมหน้างาน กระบวนการ AI และการตัดสินใจ เพื่อให้การปรับปรุงกลับมาเป็นต้นทุน กำลังการผลิต และรายได้',
      flowIntroEyebrow: 'How N/NPC Reads Operations',
      flowIntroTitle: 'เปลี่ยนความรู้สึกให้เป็นหลักฐาน ก่อนตัดสินใจว่าจะติดตั้งอะไร',
      flowIntro1: 'เห็นความสูญเสีย', flowIntro1p: 'หาให้เจอว่ากำไรหายตรงไหนจากออเดอร์ การรอ งานแก้ และจังหวะการผลิต',
      flowIntro2: 'เชื่อมสัญญาณ', flowIntro2p: 'เปลี่ยนเครื่องจักร work order คุณภาพ energy และตำแหน่งให้เป็นข้อมูลที่ใช้ได้',
      flowIntro3: 'ลงมือปรับปรุง', flowIntro3p: 'แล้วค่อยเลือก MES, IoT, AI, RTLS หรือ process platform เพื่อให้ติดตามผลได้',
      lossTitle: 'สิ่งที่มองไม่เห็นไม่ใช่แค่ความสูญเสีย แต่รวมถึงมูลค่าที่ยังไม่ถูกใช้',
      lossSub: 'เครื่องจักร คน กระบวนการ พื้นที่ และข้อมูลสร้างสัญญาณทุกวัน หากไม่เชื่อมกันก็ยังเป็นต้นทุน แต่เมื่อเข้าใจและบริหารได้ จะกลายเป็นประสิทธิภาพ กำลังการผลิต และบริการใหม่',
      loss1: 'งานดูยุ่ง แต่ต้นทุนยังซ่อนอยู่ในการรอ', loss1p: 'Downtime การค้นหา งานแก้ และการกรอกข้อมูลซ้ำค่อย ๆ กินกำไรที่ควรเหลืออยู่',
      loss2: 'สินทรัพย์ถูกใช้งาน แต่มูลค่ายังไม่ถูกปลดล็อกเต็มที่', loss2p: 'หากไม่มีภาพรวมของอุปกรณ์ คน พื้นที่ และข้อมูล จะเพิ่ม utilization และความสามารถบริการได้ยาก',
      loss3: 'ระบบขึ้นใช้งานแล้ว แต่โมเดลธุรกิจยังหยุดที่การลดต้นทุน', loss3p: 'เมื่อความสามารถดิจิทัลส่วนกลางรองรับ application ใหม่ได้อย่างปลอดภัย internal tools จึงต่อยอดเป็นบริการใหม่ได้',
      fieldEyebrow: 'Field Signals',
      fieldTitle: 'ข้อมูลไม่ได้เริ่มจากรายงาน แต่เริ่มจากสัญญาณหน้างาน',
      fieldText: 'N/NPC ช่วยดูว่าข้อมูลใดควรเชื่อมก่อน เช่น สถานะเครื่องจักร vibration และ temperature, energy, utility, work order และ quality เมื่อสัญญาณเหล่านี้เชื่อมกัน ผู้บริหารจะเห็นไม่ใช่แค่ dashboard แต่เห็น operating facts ที่นำไปลงมือได้',
      fieldHero: 'เปลี่ยนสภาพหน้างานเป็น data layer ก่อน แล้วค่อยตัดสินใจว่าจะใช้ MES, IoT, AI หรือ RTLS',
      field1: 'Equipment signals', field1p: 'เริ่มจาก control และสถานะเครื่อง เพื่อให้ downtime, waiting และ abnormal มีหลักฐาน',
      field2: 'Health baseline', field2p: 'ใช้ vibration, temperature, humidity และ AI decay-rate analysis หา pattern ปกติและ pattern ที่เป็นปัญหา',
      field3: 'Utility systems', field3p: 'นำข้อมูล energy, compressed air, piping และ environment เข้าไปอยู่ในการตัดสินใจของการผลิต',
      flow1: 'Field signals', flow2: 'Usable data', flow3: 'Management decision', flow4: 'Improvement action',
      signal1t: 'ดูมีกำไรตอนเสนอราคา แต่ไม่ชัดตอนปิดงาน', signal1p: 'ปัญหามักไม่ใช่ราคา แต่คือเวลา งานแก้ และต้นทุนประสานงานที่ไม่ถูกมองเห็นในไลน์ผลิต',
      signal1a: 'เวลาเปลี่ยนงานไม่ถูกนับเป็นต้นทุน', signal1b: 'งานด่วนรบกวนแผนเดิม', signal1c: 'งานแก้และตรวจซ้ำกลายเป็นเรื่องปกติ',
      signal2t: 'ทุกคนยุ่ง แต่ไม่รู้ว่าคอขวดอยู่ตรงไหน', signal2p: 'ถ้าข้อมูล work order เครื่อง คน และคุณภาพไม่เชื่อมกัน ความยุ่งจะไม่กลายเป็นการปรับปรุง',
      signal2a: 'เหตุผล downtime อาศัยความจำ', signal2b: 'ตำแหน่งคน วัตถุดิบ และรถไม่ชัดเจน', signal2c: 'การจัดการ abnormal ไม่มี closed loop',
      signal3t: 'มีหลายระบบ แต่การตัดสินใจยังอยู่ในแชตและ Excel', signal3p: 'Digitalization ไม่ใช่แค่เอาฟอร์มขึ้นออนไลน์ แต่ทำให้ความรับผิดชอบ ข้อมูล และการตัดสินใจติดตามได้',
      signal3a: 'ข้อมูลลูกค้าอยู่กับรายบุคคล', signal3b: 'ไม่เห็นคอขวดของ approval', signal3c: 'ความรู้ไม่กลายเป็น SOP',
      solutionsTitle: 'N/NPC วางเทคโนโลยีกลับเข้าไปในปัญหาการดำเนินงาน',
      solutionsSub: 'เราเลือกและบูรณาการเทคโนโลยีจากผู้พัฒนาตามความต้องการจริงของไซต์ จุดสำคัญคือการปรับปรุง ไม่ใช่แคตตาล็อกสินค้า',
      service1Tag: 'ข้อมูลหน้างาน',
      service2Tag: 'การพยากรณ์',
      service1Best: 'เหมาะกับ: downtime, efficiency, yield และความคืบหน้า work order ที่ยังไม่ชัดเจน',
      service2Best: 'เหมาะกับ: มีข้อมูลแล้ว แต่ยังทำ prediction, anomaly judgment หรือ optimization ได้ไม่ดี',
      service3Best: 'เหมาะกับ: customer, approval, form และ knowledge work ที่ยังต้องติดตามด้วยคน',
      service4Best: 'เหมาะกับ: ตำแหน่งคน วัตถุดิบ รถ อุปกรณ์ และเครื่องมือยังไม่โปร่งใส',
      learn: 'ดูเพิ่มเติม',
      showcase1: 'Field control และ equipment signals', showcase1p: 'ยืนยันก่อนว่าข้อมูลมาจากไหน จึงรู้ว่าระบบควรเชื่อมอะไร',
      showcase2: 'AI health baseline', showcase2p: 'ใช้ vibration, temperature, humidity และ trend data เพื่อดู pattern ปกติและผิดปกติ',
      showcase3: 'Utilities และ energy', showcase3p: 'นำ energy, compressed air และ environment เข้าไปอยู่ในการตัดสินใจผลิต',
      spaceEyebrow: 'Digital Operations Environment',
      spaceTitle: 'ปรับปรุงการดำเนินงานก่อน แล้วเปลี่ยนความสามารถดิจิทัลส่วนกลางให้เป็น platform ที่เติบโตต่อได้',
      spaceText: 'N/NPC เชื่อมเครื่องจักร คน สินทรัพย์ กระบวนการ identity ตำแหน่ง และ real-time events เมื่อสิ่งเหล่านี้กลายเป็น digital foundation ที่มี governance application ใหม่จะเชื่อมต่อได้เร็วขึ้น และเจ้าของพื้นที่สามารถพัฒนา platform services และรายได้จากการเชื่อมต่อ',
      spaceCta: 'ปรึกษาเรื่อง Digital Operations Environment',
      spaceStep1: 'เชื่อมการดำเนินงาน', spaceStep1p: 'เครื่องจักร คน สินทรัพย์ กระบวนการ และ events',
      spaceStep2: 'สร้าง Digital Foundation', spaceStep2p: 'ข้อมูล identity สิทธิ์ และ API ที่ใช้ร่วมกัน',
      spaceStep3: 'เชื่อม Application ใหม่', spaceStep3p: 'ลดต้นทุนการนำ third-party services มาใช้',
      spaceStep4: 'พัฒนารายได้ใหม่', spaceStep4p: 'Platform access และ digital infrastructure services',
      methodTitle: 'การเริ่มต้นไม่ใช่การซื้อระบบ แต่คือการยืนยันว่ามูลค่าเกิดจากตรงไหน',
      methodSub: 'การวิเคราะห์แรกเริ่มจากปัญหาการดำเนินงาน สิ่งที่ได้รับผลกระทบ ความพร้อมของข้อมูล และลำดับความสำคัญ',
      step1: 'ดูหน้างาน', step1p: 'ตรวจสอบไลน์ กระบวนการ แหล่งข้อมูล และตัวเลขที่ผู้บริหารต้องใช้ตัดสินใจ',
      step2: 'คำนวณความสูญเสีย', step2p: 'เปลี่ยนเวลารอ งานแก้ ประสิทธิภาพ ตำแหน่ง และความล่าช้าเป็นมูลค่าเงิน',
      step3: 'เลือกโซลูชัน', step3p: 'นำ MES, IoT, AI, CRM, RTLS หรือโซลูชันแบบผสมมาใช้ตามความจำเป็น',
      step4: 'ปรับปรุงต่อเนื่อง', step4p: 'ใช้แดชบอร์ด การแจ้งเตือน และจังหวะที่ปรึกษาให้การปรับปรุงเป็นงานประจำ',
      labTitle: 'ใช้ AI ขยายความสามารถด้าน engineering โดยไม่ทิ้ง judgment ของวิศวกร',
      labText: 'N/NPC ให้ intern และทีมที่ปรึกษาทดลอง AI-Augmented Engineering โดยใช้ AI ช่วยแยก requirement, ออกแบบ interface, วาง data structure, เชื่อม API และพัฒนา Web App prototype นี่ไม่ใช่ outsourcing แบบเดิม และไม่ใช่แค่เขียน prompt แต่คือการฝึก talent รุ่นใหม่ให้ใช้ AI ตรวจสอบปัญหา operation จริงได้เร็วขึ้น',
      labBtn: 'คุยเรื่อง AI Prototype',
      lab1: 'AI-Augmented Engineering', lab1p: 'ใช้ AI เร่ง requirement, architecture, UI และ code development',
      lab2: 'AI-Powered Web App Development', lab2p: 'เปลี่ยนไอเดียหน้างานเป็น internal tool หรือ prototype ที่ทดสอบได้เร็วขึ้น',
      lab3: 'Built with AI, verified by judgment', lab3p: 'ยังคง engineering judgment, validation habits และความเข้าใจปัญหาหน้างานจริง',
      ctaTitle: 'เริ่มจากปัญหาการดำเนินงานที่ควรปลดล็อกมูลค่าก่อน',
      ctaText: 'บอกเราว่าคุณต้องการลดต้นทุน เพิ่มกำลังการผลิต หรือพัฒนาบริการดิจิทัลแบบใด แล้ว N/NPC จะช่วยวางเส้นทางระยะแรก',
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
  document.dispatchEvent(new CustomEvent('nnpc:languagechange', { detail: { lang } }));
}

function initNav() {
  document.querySelectorAll('.footer-links').forEach((links) => {
    if (!links.querySelector('[href="/certificates/"]')) {
      const anchor = document.createElement('a');
      anchor.href = '/certificates/';
      anchor.dataset.i18n = 'certificateVerification';
      links.prepend(anchor);
    }
  });

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
