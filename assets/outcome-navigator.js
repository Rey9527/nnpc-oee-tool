(() => {
  const LANGS = ['zh', 'en', 'th'];
  const OUTCOME_IDS = ['waste', 'profit', 'speed', 'quality', 'labor', 'visibility'];
  const CONSTRAINT_IDS = ['production', 'budget', 'fragmented-data', 'limited-it', 'privacy', 'phased'];

  const COPY = {
    zh: {
      eyebrow: 'NNPC Outcome Navigator',
      title: '先選想改善的成果，再告訴我們導入時最擔心什麼。',
      intro: '不必先懂 AI、IoT 或 MES。從你的營運目標與實際顧慮開始，N/NPC 會整理適合的起點。',
      outcomeTitle: '你最想改善什麼？', constraintTitle: '導入時，你最擔心什麼？',
      chooseOutcome: '選擇想改善的成果', chooseConstraint: '選擇最在意的導入顧慮',
      show: '查看 N/NPC 為我設計的建議', resultTitle: 'N/NPC 為你設計的建議',
      phase: '第一階段目標', confirm: '需要先確認', expansion: '可能擴充路徑',
      meeting: '預約方案診斷', related: '查看相關解決方案', edit: '重新選擇', apply: '更新建議',
      core: '推薦核心能力', approach: '建議導入方式', match: 'N/NPC 依照你的目標與導入顧慮，建議從以下組合開始。',
      outcomes: {
        waste: '減少浪費與異常支出', profit: '提升產能與利潤', speed: '縮短交期與回應時間',
        quality: '提升品質與可追溯性', labor: '降低人力依賴與管理負擔', visibility: '提高安全、合規與營運可視性'
      },
      constraints: {
        production: '不能影響現場生產', budget: '預算有限，不能一次大投入', fragmentedData: '現有資料不完整、系統很分散',
        limitedIt: 'IT 人力有限，不能增加維運負擔', privacy: '資料不能外流', phased: '必須逐步導入、先看到成果'
      },
      contactPrefix: '我已完成 NNPC Outcome Navigator，希望進一步討論：',
      labels: { outcome: '希望改善', constraint: '導入顧慮', start: '建議起點' }
    },
    en: {
      eyebrow: 'NNPC Outcome Navigator',
      title: 'Choose the result you want, then tell us what concerns you most about implementation.',
      intro: 'You do not need to choose AI, IoT, or MES first. Start with your operating goal and practical concern; N/NPC will define a suitable starting point.',
      outcomeTitle: 'What do you most want to improve?', constraintTitle: 'What concerns you most about implementation?',
      chooseOutcome: 'Choose an outcome', chooseConstraint: 'Choose your main implementation concern',
      show: 'Show my N/NPC recommendation', resultTitle: 'Your N/NPC Recommendation',
      phase: 'Phase 1 objective', confirm: 'What to confirm', expansion: 'Expansion path',
      meeting: 'Book a Solution Review', related: 'View related solutions', edit: 'Change selections', apply: 'Update recommendation',
      core: 'Recommended capability', approach: 'Implementation approach', match: 'Based on your goal and implementation concern, N/NPC recommends starting with this combination.',
      outcomes: {
        waste: 'Reduce waste and abnormal cost', profit: 'Increase capacity and profit', speed: 'Shorten lead time and response time',
        quality: 'Improve quality and traceability', labor: 'Reduce labor dependency and management burden', visibility: 'Improve safety, compliance, and visibility'
      },
      constraints: {
        production: 'Do not disrupt production', budget: 'Limited budget; avoid a large upfront investment', fragmentedData: 'Data is incomplete and systems are fragmented',
        limitedIt: 'Limited IT capacity; avoid added maintenance', privacy: 'Data cannot leave the organization', phased: 'Start small and show results first'
      },
      contactPrefix: 'I completed the NNPC Outcome Navigator and would like to discuss:',
      labels: { outcome: 'Outcome', constraint: 'Implementation concern', start: 'Starting point' }
    },
    th: {
      eyebrow: 'NNPC Outcome Navigator',
      title: 'เลือกผลลัพธ์ที่ต้องการ แล้วบอกเราว่ากังวลอะไรที่สุดเมื่อต้องนำระบบไปใช้',
      intro: 'ไม่จำเป็นต้องเลือก AI, IoT หรือ MES ก่อน เริ่มจากเป้าหมายและข้อกังวลจริง แล้ว N/NPC จะจัดจุดเริ่มต้นที่เหมาะสมให้',
      outcomeTitle: 'คุณต้องการปรับปรุงอะไรมากที่สุด?', constraintTitle: 'เมื่อนำระบบไปใช้ คุณกังวลเรื่องใดที่สุด?',
      chooseOutcome: 'เลือกผลลัพธ์', chooseConstraint: 'เลือกข้อกังวลหลักในการนำไปใช้',
      show: 'ดูคำแนะนำที่ N/NPC ออกแบบให้', resultTitle: 'คำแนะนำจาก N/NPC สำหรับคุณ',
      phase: 'เป้าหมายระยะแรก', confirm: 'สิ่งที่ต้องยืนยัน', expansion: 'เส้นทางการขยาย',
      meeting: 'นัดวิเคราะห์โซลูชัน', related: 'ดูโซลูชันที่เกี่ยวข้อง', edit: 'เลือกใหม่', apply: 'อัปเดตคำแนะนำ',
      core: 'ความสามารถหลักที่แนะนำ', approach: 'แนวทางการนำไปใช้', match: 'N/NPC แนะนำให้เริ่มจากชุดนี้ตามเป้าหมายและข้อกังวลในการนำระบบไปใช้ของคุณ',
      outcomes: {
        waste: 'ลดความสูญเสียและค่าใช้จ่ายผิดปกติ', profit: 'เพิ่มกำลังการผลิตและกำไร', speed: 'ลด lead time และเวลาตอบสนอง',
        quality: 'เพิ่มคุณภาพและ traceability', labor: 'ลดการพึ่งพาแรงงานและภาระบริหาร', visibility: 'เพิ่มความปลอดภัย compliance และ visibility'
      },
      constraints: {
        production: 'ห้ามกระทบการผลิตหน้างาน', budget: 'งบจำกัด ไม่ลงทุนก้อนใหญ่ครั้งเดียว', fragmentedData: 'ข้อมูลไม่ครบและระบบกระจัดกระจาย',
        limitedIt: 'ทีม IT จำกัด ห้ามเพิ่มภาระดูแล', privacy: 'ข้อมูลห้ามออกนอกองค์กร', phased: 'ต้องเริ่มทีละขั้นและเห็นผลก่อน'
      },
      contactPrefix: 'ฉันทำ NNPC Outcome Navigator แล้ว และต้องการปรึกษาเพิ่มเติม:',
      labels: { outcome: 'ผลลัพธ์', constraint: 'ข้อกังวลในการนำไปใช้', start: 'จุดเริ่มต้น' }
    }
  };

  const ROUTES = {
    zh: {
      waste: { start:'營運損失可視化', objective:'先找出等待、停機、重工與異常支出的主要來源。', confirm:['目前可取得的工單、設備與成本資料','最常發生、金額最高的異常情境'], steps:['損失盤點','現場資料蒐集','即時看板'], expansion:'延伸至設備、能源與異常告警分析。', link:'/solutions/factory-performance-mes/', topic:0 },
      profit: { start:'產能與利潤基線', objective:'建立產能、瓶頸與訂單利潤的共同視圖。', confirm:['產能限制與排程規則','訂單、設備、人力和品質資料的關聯'], steps:['價值基線','營運視圖','瓶頸分析'], expansion:'延伸至 MES、WMS 與 AI 營運最佳化。', link:'/solutions/factory-performance-mes/', topic:0 },
      speed: { start:'交期與流程斷點盤點', objective:'先讓工單、物料與跨部門等待時間可追蹤。', confirm:['交期延誤最常卡住的流程','現有簽核、庫存與工單系統'], steps:['流程盤點','資料整合','延遲預警'], expansion:'延伸至 APS、WMS 與跨部門自動化。', link:'/solutions/enterprise-process-platforms/', topic:2 },
      quality: { start:'品質資料結構化', objective:'把缺陷、參數、批次與改善行動連成可追溯資料。', confirm:['缺陷分類與品質判定方式','可連結的製程、設備與人員資料'], steps:['品質定義','資料結構化','異常分析'], expansion:'延伸至 AI 品質預測、知識庫與改善建議。', link:'/solutions/ai-prediction-optimization/', topic:1 },
      labor: { start:'高負擔流程與知識盤點', objective:'先找出重複輸入、人工追蹤與依賴少數專家的工作。', confirm:['耗時最高且重複的管理工作','SOP、表單、知識與權限來源'], steps:['工作盤點','知識整理','流程助手'], expansion:'延伸至 RAG、內部 AI 助手與流程自動化。', link:'/solutions/enterprise-process-platforms/', topic:2 },
      visibility: { start:'場域可視性 POC', objective:'先選一個高價值場域，讓人員、資產或事件可被看見。', confirm:['需要追蹤的對象與關鍵事件','場域圖、覆蓋範圍與既有網路條件'], steps:['場域盤點','事件可視化','單點 POC'], expansion:'延伸至 RTLS、派工、安全與空間營運看板。', link:'/solutions/rtls-connectivity/', topic:3 }
    },
    en: {
      waste: { start:'Operational loss visibility', objective:'Identify the main sources of waiting, downtime, rework, and abnormal cost.', confirm:['Available work-order, equipment, and cost data','The most frequent and highest-value abnormal scenarios'], steps:['Loss baseline','Field data capture','Live operations view'], expansion:'Expand into equipment, energy, and anomaly alerts.', link:'/solutions/factory-performance-mes/', topic:0 },
      profit: { start:'Capacity and profit baseline', objective:'Create a shared view of capacity, bottlenecks, and order profitability.', confirm:['Capacity constraints and scheduling rules','Links across order, equipment, labor, and quality data'], steps:['Value baseline','Operations view','Bottleneck analysis'], expansion:'Expand into MES, WMS, and AI operations optimization.', link:'/solutions/factory-performance-mes/', topic:0 },
      speed: { start:'Lead-time and process-gap review', objective:'Make work orders, materials, and cross-team waiting time traceable.', confirm:['Where delivery delays most often occur','Current approval, inventory, and work-order systems'], steps:['Process review','Data connection','Delay alerts'], expansion:'Expand into APS, WMS, and cross-team automation.', link:'/solutions/enterprise-process-platforms/', topic:2 },
      quality: { start:'Structured quality data', objective:'Connect defects, parameters, batches, and improvement actions for traceability.', confirm:['Defect categories and quality decisions','Available process, equipment, and operator data'], steps:['Quality definition','Data structure','Anomaly analysis'], expansion:'Expand into AI quality prediction, knowledge, and recommendations.', link:'/solutions/ai-prediction-optimization/', topic:1 },
      labor: { start:'High-burden workflow and knowledge review', objective:'Find repeated input, manual follow-up, and work dependent on a few experts.', confirm:['The most repetitive and time-consuming work','Sources of SOPs, forms, knowledge, and access rules'], steps:['Work review','Knowledge structure','Workflow assistant'], expansion:'Expand into RAG, internal AI assistants, and automation.', link:'/solutions/enterprise-process-platforms/', topic:2 },
      visibility: { start:'Site visibility POC', objective:'Start with one high-value site and make people, assets, or events visible.', confirm:['Objects and critical events to track','Site plans, coverage, and network conditions'], steps:['Site review','Event visibility','Focused POC'], expansion:'Expand into RTLS, dispatch, safety, and spatial operations.', link:'/solutions/rtls-connectivity/', topic:3 }
    },
    th: {
      waste: { start:'มองเห็นความสูญเสียในการดำเนินงาน', objective:'หาแหล่งหลักของการรอ downtime งานแก้ และค่าใช้จ่ายผิดปกติ', confirm:['ข้อมูล work order เครื่องจักร และต้นทุนที่มีอยู่','เหตุการณ์ผิดปกติที่เกิดบ่อยและมีมูลค่าสูง'], steps:['Loss baseline','Field data capture','Live operations view'], expansion:'ขยายสู่ equipment, energy และ anomaly alerts', link:'/solutions/factory-performance-mes/', topic:0 },
      profit: { start:'เส้นฐานกำลังการผลิตและกำไร', objective:'สร้างภาพร่วมของกำลังการผลิต bottleneck และกำไรต่อออเดอร์', confirm:['ข้อจำกัดกำลังการผลิตและกติกาการจัดตาราง','ความเชื่อมโยงของ order, equipment, labor และ quality data'], steps:['เส้นฐานมูลค่า','มุมมองการดำเนินงาน','วิเคราะห์ bottleneck'], expansion:'ขยายสู่ MES, WMS และ AI operations optimization', link:'/solutions/factory-performance-mes/', topic:0 },
      speed: { start:'ทบทวน lead time และ process gaps', objective:'ทำให้ work order วัตถุดิบ และเวลารอข้ามทีมติดตามได้', confirm:['จุดที่ delivery delay เกิดบ่อย','ระบบ approval, inventory และ work order ปัจจุบัน'], steps:['Process review','Data connection','Delay alerts'], expansion:'ขยายสู่ APS, WMS และ cross-team automation', link:'/solutions/enterprise-process-platforms/', topic:2 },
      quality: { start:'จัดโครงสร้างข้อมูลคุณภาพ', objective:'เชื่อม defect, parameter, batch และ improvement action ให้ traceable', confirm:['หมวด defect และวิธีตัดสิน quality','ข้อมูล process, equipment และ operator ที่เชื่อมได้'], steps:['Quality definition','Data structure','Anomaly analysis'], expansion:'ขยายสู่ AI quality prediction, knowledge และ recommendations', link:'/solutions/ai-prediction-optimization/', topic:1 },
      labor: { start:'ทบทวน workflow และ knowledge ที่มีภาระสูง', objective:'หางานกรอกซ้ำ งานตามด้วยคน และงานที่พึ่งผู้เชี่ยวชาญไม่กี่คน', confirm:['งานที่ซ้ำและใช้เวลาสูงสุด','แหล่ง SOP, form, knowledge และ access rules'], steps:['Work review','Knowledge structure','Workflow assistant'], expansion:'ขยายสู่ RAG, internal AI assistants และ automation', link:'/solutions/enterprise-process-platforms/', topic:2 },
      visibility: { start:'POC การมองเห็นพื้นที่', objective:'เริ่มจากไซต์มูลค่าสูงหนึ่งแห่ง และทำให้คน asset หรือ event มองเห็นได้', confirm:['สิ่งที่ต้องติดตามและ critical events','ผังพื้นที่ coverage และ network conditions'], steps:['ทบทวนพื้นที่','มองเห็นเหตุการณ์','POC แบบเจาะจง'], expansion:'ขยายสู่ RTLS, dispatch, safety และ spatial operations', link:'/solutions/rtls-connectivity/', topic:3 }
    }
  };

  const CONSTRAINTS = {
    zh: {
      production:{ approach:'旁路蒐集＋影子運行', modifier:'採旁路資料蒐集與影子運行，不先改變現場作業。', confirm:'可安全讀取訊號而不控制設備的介面', final:'無干擾驗證' },
      budget:{ approach:'單一場景小型 POC', modifier:'限定單一流程或場域，先證明一個可量化成果。', confirm:'可接受的 POC 範圍與投資上限', final:'小範圍 POC' },
      'fragmented-data':{ approach:'最小資料整合層', modifier:'先建立最小資料索引，不要求一次整併所有系統。', confirm:'各系統資料擁有者與可用介面', final:'最小整合層' },
      'limited-it':{ approach:'低維運託管架構', modifier:'採低維運、標準介面與可由 N/NPC 協助管理的架構。', confirm:'內部 IT 可承擔的維運與權限範圍', final:'低維運部署' },
      privacy:{ approach:'私有或混合部署', modifier:'以私有或混合部署為前提，先定義資料邊界與權限。', confirm:'資料分類、存放位置與外部連線政策', final:'私有環境驗證' },
      phased:{ approach:'分階段驗收與擴充', modifier:'把成果拆成可驗收里程碑，每階段可獨立產生價值。', confirm:'第一個可在短週期驗證的成功指標', final:'分階段擴充' }
    },
    en: {
      production:{ approach:'Passive capture + shadow operation', modifier:'Use passive capture and shadow operation before changing field work.', confirm:'Interfaces that can safely read signals without controlling equipment', final:'Non-disruptive validation' },
      budget:{ approach:'Focused single-scenario POC', modifier:'Limit the first scope to one workflow or site and prove one measurable result.', confirm:'Acceptable POC scope and investment ceiling', final:'Focused POC' },
      'fragmented-data':{ approach:'Minimum data integration layer', modifier:'Build a minimum data index without replacing every system at once.', confirm:'Data owners and available interfaces across systems', final:'Minimum integration layer' },
      'limited-it':{ approach:'Low-maintenance managed architecture', modifier:'Use standard interfaces and a low-maintenance managed architecture.', confirm:'IT capacity for access, ownership, and maintenance', final:'Low-maintenance deployment' },
      privacy:{ approach:'Private or hybrid deployment', modifier:'Assume private or hybrid deployment and define data boundaries first.', confirm:'Data classification, storage location, and external access policy', final:'Private environment validation' },
      phased:{ approach:'Phased validation and expansion', modifier:'Split value into independently measurable milestones.', confirm:'The first success metric that can be validated quickly', final:'Phased expansion' }
    },
    th: {
      production:{ approach:'Passive capture + shadow operation', modifier:'ใช้ passive capture และ shadow operation ก่อนเปลี่ยนงานหน้างาน', confirm:'interface ที่อ่าน signal ได้โดยไม่ควบคุม equipment', final:'ทดสอบโดยไม่รบกวนการผลิต' },
      budget:{ approach:'POC ขนาดเล็กในหนึ่งสถานการณ์', modifier:'จำกัดระยะแรกไว้ที่ workflow หรือ site เดียว และพิสูจน์ผลลัพธ์หนึ่งข้อ', confirm:'ขอบเขต POC และเพดานการลงทุน', final:'Focused POC' },
      'fragmented-data':{ approach:'Minimum data integration layer', modifier:'สร้าง minimum data index โดยไม่ต้องแทนที่ทุกระบบพร้อมกัน', confirm:'data owner และ interface ที่ใช้ได้ของแต่ละระบบ', final:'Minimum integration layer' },
      'limited-it':{ approach:'Managed architecture ที่ดูแลง่าย', modifier:'ใช้ standard interface และ managed architecture ที่ดูแลง่าย', confirm:'ขอบเขตที่ทีม IT รับผิดชอบด้าน access และ maintenance ได้', final:'Low-maintenance deployment' },
      privacy:{ approach:'Private หรือ hybrid deployment', modifier:'ใช้ private หรือ hybrid deployment และกำหนด data boundary ก่อน', confirm:'data classification, storage location และ external access policy', final:'Private environment validation' },
      phased:{ approach:'ตรวจรับและขยายผลเป็นระยะ', modifier:'แบ่ง value เป็น milestone ที่วัดผลและส่งมอบแยกกันได้', confirm:'success metric แรกที่ตรวจสอบได้ในระยะสั้น', final:'Phased expansion' }
    }
  };

  const currentLang = () => {
    const saved = localStorage.getItem('nnpc_lang');
    return LANGS.includes(saved) ? saved : 'en';
  };
  const normalizeConstraintKey = (id) => id === 'fragmented-data' ? 'fragmentedData' : id === 'limited-it' ? 'limitedIt' : id;
  const params = () => new URLSearchParams(window.location.search);
  const valid = (value, values) => values.includes(value) ? value : '';

  function selectionFromUrl() {
    const query = params();
    return {
      outcome: valid(query.get('outcome'), OUTCOME_IDS),
      constraint: valid(query.get('constraint'), CONSTRAINT_IDS)
    };
  }

  function optionButtons(items, group, selected, labels) {
    return items.map((id) => `<button class="outcome-option${selected === id ? ' selected' : ''}" type="button" data-group="${group}" data-value="${id}" aria-pressed="${selected === id}"><span>${labels[id] || labels[normalizeConstraintKey(id)]}</span><i aria-hidden="true"></i></button>`).join('');
  }

  function compactMarkup(copy, state) {
    const ready = state.outcome && state.constraint;
    const href = ready ? `/solutions/?outcome=${state.outcome}&constraint=${state.constraint}#outcome-navigator` : '#';
    return `<div class="outcome-navigator compact">
      <div class="navigator-intro"><div class="eyebrow">${copy.eyebrow}</div><h2>${copy.title}</h2><p>${copy.intro}</p></div>
      <div class="navigator-quick-grid">
        <fieldset><legend><b>01</b>${copy.outcomeTitle}</legend><div class="outcome-option-grid">${optionButtons(OUTCOME_IDS, 'outcome', state.outcome, copy.outcomes)}</div></fieldset>
        <fieldset><legend><b>02</b>${copy.constraintTitle}</legend><div class="outcome-option-grid">${optionButtons(CONSTRAINT_IDS, 'constraint', state.constraint, copy.constraints)}</div></fieldset>
        <a class="btn primary navigator-go${ready ? '' : ' disabled'}" data-nav-go href="${href}" aria-disabled="${!ready}">${copy.show}</a>
      </div>
    </div>`;
  }

  function resultMarkup(copy, lang, state) {
    if (!state.outcome || !state.constraint) return '';
    const route = ROUTES[lang][state.outcome];
    const constraint = CONSTRAINTS[lang][state.constraint];
    const steps = [...route.steps, constraint.final];
    const contact = `/contact/?outcome=${state.outcome}&constraint=${state.constraint}`;
    return `<div class="navigator-selection-summary">
      <div><small>${copy.labels.outcome}</small><strong>${copy.outcomes[state.outcome]}</strong></div>
      <div><small>${copy.labels.constraint}</small><strong>${copy.constraints[normalizeConstraintKey(state.constraint)]}</strong></div>
      <button class="btn secondary" type="button" data-nav-edit>${copy.edit}</button>
    </div>
    <section class="navigator-result" aria-live="polite">
      <div class="navigator-result-head"><span>${copy.resultTitle}</span><h3>${route.start}</h3><p>${copy.match}</p></div>
      <div class="navigator-recommendation-pair">
        <div><small>${copy.core}</small><strong>${route.start}</strong></div>
        <div><small>${copy.approach}</small><strong>${constraint.approach}</strong></div>
      </div>
      <div class="navigator-path">${steps.map((step, index) => `<div><b>${index + 1}</b><span>${step}</span></div>`).join('')}</div>
      <div class="navigator-result-grid">
        <div><strong>${copy.phase}</strong><p>${route.objective} ${constraint.modifier}</p></div>
        <div><strong>${copy.confirm}</strong><ul><li>${route.confirm[0]}</li><li>${route.confirm[1]}</li><li>${constraint.confirm}</li></ul></div>
        <div><strong>${copy.expansion}</strong><p>${route.expansion}</p></div>
      </div>
      <div class="navigator-actions"><a class="btn primary" href="${contact}">${copy.meeting}</a><a class="btn secondary" href="${route.link}">${copy.related}</a></div>
    </section>`;
  }

  function fullMarkup(copy, lang, state) {
    const ready = state.outcome && state.constraint;
    if (ready && !state.editing) {
      return `<div class="outcome-navigator full result-first">${resultMarkup(copy, lang, state)}</div>`;
    }
    return `<div class="outcome-navigator full">
      <div class="navigator-intro"><div class="eyebrow">${copy.eyebrow}</div><h2>${copy.title}</h2><p>${copy.intro}</p></div>
      <div class="navigator-choices">
        <fieldset><legend><b>01</b>${copy.outcomeTitle}</legend><div class="outcome-option-grid">${optionButtons(OUTCOME_IDS, 'outcome', state.outcome, copy.outcomes)}</div></fieldset>
        <fieldset><legend><b>02</b>${copy.constraintTitle}</legend><div class="outcome-option-grid">${optionButtons(CONSTRAINT_IDS, 'constraint', state.constraint, copy.constraints)}</div></fieldset>
      </div>
      ${ready ? `<div class="navigator-apply"><button class="btn primary" type="button" data-nav-apply>${copy.apply}</button></div>` : ''}
    </div>`;
  }

  function updateUrl(state) {
    if (!state.outcome || !state.constraint || !document.querySelector('[data-mode="full"]')) return;
    const url = new URL(window.location.href);
    url.searchParams.set('outcome', state.outcome);
    url.searchParams.set('constraint', state.constraint);
    url.hash = 'outcome-navigator';
    history.replaceState({}, '', url);
  }

  function bindNavigator(root, state) {
    root.querySelectorAll('.outcome-option').forEach((button) => {
      button.addEventListener('click', () => {
        state[button.dataset.group] = button.dataset.value;
        updateUrl(state);
        renderRoot(root, state);
      });
    });
    root.querySelector('[data-nav-edit]')?.addEventListener('click', () => {
      state.editing = true;
      renderRoot(root, state);
    });
    root.querySelector('[data-nav-apply]')?.addEventListener('click', () => {
      state.editing = false;
      updateUrl(state);
      renderRoot(root, state);
    });
  }

  function renderRoot(root, state) {
    const lang = currentLang();
    const copy = COPY[lang];
    root.innerHTML = root.dataset.mode === 'full' ? fullMarkup(copy, lang, state) : compactMarkup(copy, state);
    bindNavigator(root, state);
  }

  function prefillContact() {
    if (document.body.dataset.page !== 'contact') return;
    const state = selectionFromUrl();
    if (!state.outcome || !state.constraint) return;
    const lang = currentLang();
    const copy = COPY[lang];
    const route = ROUTES[lang][state.outcome];
    const textarea = document.querySelector('textarea[name="message"]');
    if (!textarea || (textarea.value && !textarea.dataset.navigatorPrefill)) return;
    textarea.value = `${copy.contactPrefix}\n${copy.labels.outcome}: ${copy.outcomes[state.outcome]}\n${copy.labels.constraint}: ${copy.constraints[normalizeConstraintKey(state.constraint)]}\n${copy.labels.start}: ${route.start}`;
    textarea.dataset.navigatorPrefill = '1';
    const topic = document.querySelector('select[name="topic"]');
    if (topic) topic.selectedIndex = route.topic;
  }

  function init() {
    const initial = selectionFromUrl();
    document.querySelectorAll('[data-outcome-navigator]').forEach((root) => {
      const state = { ...initial, editing: root.dataset.mode === 'full' && !(initial.outcome && initial.constraint) };
      root._navigatorState = state;
      renderRoot(root, state);
      if (root.dataset.mode === 'full' && initial.outcome && initial.constraint && window.location.hash === '#outcome-navigator') {
        const focusResult = () => window.setTimeout(() => root.scrollIntoView({ block: 'start' }), 240);
        if (document.readyState === 'complete') focusResult();
        else window.addEventListener('load', focusResult, { once: true });
      }
    });
    prefillContact();
  }

  document.addEventListener('DOMContentLoaded', init);
  document.addEventListener('nnpc:languagechange', () => {
    document.querySelectorAll('[data-outcome-navigator]').forEach((root) => renderRoot(root, root._navigatorState || selectionFromUrl()));
    prefillContact();
  });
})();
