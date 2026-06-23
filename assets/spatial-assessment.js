(function () {
  const LANGS = ['zh', 'en', 'th'];
  const data = {
    zh: {
      backTools: '← 工具中心', title: '空間服務需求診斷',
      intro: '用幾個簡單問題整理場域、使用規模與預期成果。此工具不顯示價格，提交後由 N/NPC 顧問進一步確認技術範圍。',
      step1Title: '您想解決什麼問題？', step1Hint: '可複選，只需選擇最接近的使用情境。',
      step2Title: '使用場域與規模', step2Hint: '選擇區間即可，不需要精確數字。',
      step3Title: '聯絡資訊與補充說明', step3Hint: '請留下可供後續確認需求的資訊。',
      next: '下一步', back: '上一步', submit: '提交需求', sending: '送出中…',
      company: '公司／單位名稱 *', contact: '聯絡人 *', email: '電子郵件 *', phone: '電話',
      notes: '目前遇到的問題或期待成果', notesPlaceholder: '例如：希望在大型廠區追蹤巡檢人員，並保存異常事件前後的移動軌跡。',
      chooseNeed: '請至少選擇一項需求。', required: '請填寫公司／單位、聯絡人與有效的電子郵件。',
      error: '目前無法送出，請稍後再試或寄信至 info@nnpc.ai。',
      summary: '需求摘要', sceneText: '場域', stageText: '導入階段', scaleText: '規模', timelineText: '預計時程', accuracyText: '精度需求',
      successEyebrow: 'Assessment Received', successTitle: '需求已完成記錄',
      successText: 'N/NPC 已收到你的使用情境與規模，後續將由專人確認技術範圍、導入方式與下一步。',
      successBack: '返回工具中心',
      privacyNote: '提交即表示您同意 N/NPC 使用這些資料聯絡並釐清本次需求。', privacyLink: '隱私權政策',
      disclaimer: '本工具僅用於初步需求釐清，不構成正式報價、定位精度保證或服務承諾。',
      needs: [
        ['位置顯示','顯示人員或設備位置','在平面圖或地圖上查看目前位置。'],
        ['軌跡紀錄','查看移動軌跡','保存歷史路徑、停留點與移動紀錄。'],
        ['路線導航','導航或路線引導','引導人員、車輛或機器抵達目的地。'],
        ['派遣管理','派遣與任務管理','依距離、位置或狀態分派工作。'],
        ['地點搜尋','搜尋地址或地點','輸入名稱或地址，快速找到目標位置。'],
        ['空間分析','場域或地理分析','分析面積、環境、風險或選址條件。'],
        ['裝置管理','遠端管理設備','查看設備狀態、更新與異常訊息。'],
        ['尚未確定','尚未確定','先描述場景，由我們協助判斷。']
      ],
      fields: [
        ['scene','主要使用場域',['室內','戶外','室內與戶外']],
        ['stage','導入階段',['概念驗證','小規模試行','正式營運','既有系統擴充']],
        ['sites','場域數量',['1 個','2–5 個','6–20 個','21 個以上']],
        ['assets','人員／設備數量',['1–10','11–50','51–200','201–1,000','1,001 以上']],
        ['users','每月使用人數',['1–50','51–500','501–5,000','5,001 以上']],
        ['frequency','位置更新頻率',['每日少量更新','每 1–2 小時','每 15 分鐘','接近即時']],
        ['timeline','預計導入時間',['三個月內','三至六個月','六至十二個月','尚未確定']],
        ['accuracy','預期定位精度',['知道在哪一區即可','約數公尺','需要精準點位','尚未確定']]
      ]
    },
    en: {
      backTools: '← Tool Center', title: 'Spatial Service Assessment',
      intro: 'Answer a few questions about your site, scale, and expected outcome. No pricing is shown; an N/NPC consultant will confirm the technical scope.',
      step1Title: 'What do you want to solve?', step1Hint: 'Select all that apply.',
      step2Title: 'Site and scale', step2Hint: 'Ranges are enough; exact figures are not required.',
      step3Title: 'Contact and context', step3Hint: 'Leave details for follow-up clarification.',
      next: 'Next', back: 'Back', submit: 'Submit Assessment', sending: 'Submitting…',
      company: 'Company / organization *', contact: 'Contact person *', email: 'Email *', phone: 'Phone',
      notes: 'Current problem or expected outcome', notesPlaceholder: 'Example: Track inspection staff across a large site and retain movement history around abnormal events.',
      chooseNeed: 'Please select at least one requirement.', required: 'Please enter company, contact person, and a valid email.',
      error: 'Unable to submit right now. Please try again or email info@nnpc.ai.',
      summary: 'Requirement summary', sceneText: 'Site', stageText: 'Stage', scaleText: 'Scale', timelineText: 'Timeline', accuracyText: 'Accuracy',
      successEyebrow: 'Assessment Received', successTitle: 'Your requirements were recorded',
      successText: 'N/NPC has received your use case and scale. A consultant will follow up to confirm technical scope and next steps.',
      successBack: 'Back to Tool Center',
      privacyNote: 'By submitting, you agree that N/NPC may use this information to contact you and clarify this request.', privacyLink: 'Privacy Policy',
      disclaimer: 'This tool is for initial requirement clarification and does not constitute a quotation, accuracy guarantee, or service commitment.',
      needs: [
        ['Location display','Show people or asset locations','View current positions on a floor plan or map.'],
        ['Movement history','Review movement history','Keep paths, stops, and historical movement records.'],
        ['Navigation','Navigation or route guidance','Guide people, vehicles, or machines to a destination.'],
        ['Dispatch','Dispatch and task management','Assign work using distance, location, or status.'],
        ['Place search','Search addresses or places','Find target locations by name or address.'],
        ['Spatial analysis','Site or geographic analysis','Analyze area, environment, risk, or site conditions.'],
        ['Device management','Remote device management','Monitor device status, updates, and alerts.'],
        ['Not sure','Not sure yet','Describe the scenario and let us help classify it.']
      ],
      fields: [
        ['scene','Primary environment',['Indoor','Outdoor','Indoor and outdoor']],
        ['stage','Implementation stage',['Proof of concept','Small pilot','Production operation','Existing system expansion']],
        ['sites','Number of sites',['1','2–5','6–20','21+']],
        ['assets','People / assets',['1–10','11–50','51–200','201–1,000','1,001+']],
        ['users','Monthly users',['1–50','51–500','501–5,000','5,001+']],
        ['frequency','Location update frequency',['A few times daily','Every 1–2 hours','Every 15 minutes','Near real time']],
        ['timeline','Expected timeline',['Within 3 months','3–6 months','6–12 months','Not decided']],
        ['accuracy','Expected accuracy',['Zone level','A few meters','Precise point','Not decided']]
      ]
    },
    th: {
      backTools: '← ศูนย์เครื่องมือ', title: 'แบบประเมินบริการเชิงพื้นที่',
      intro: 'ตอบคำถามสั้น ๆ เกี่ยวกับพื้นที่ ขนาดการใช้งาน และผลลัพธ์ที่คาดหวัง หน้านี้ไม่แสดงราคา ที่ปรึกษา N/NPC จะยืนยันขอบเขตทางเทคนิคภายหลัง',
      step1Title: 'ต้องการแก้ปัญหาอะไร?', step1Hint: 'เลือกได้มากกว่าหนึ่งข้อ',
      step2Title: 'พื้นที่และขนาดการใช้งาน', step2Hint: 'เลือกเป็นช่วงได้ ไม่จำเป็นต้องใช้ตัวเลขที่แม่นยำ',
      step3Title: 'ข้อมูลติดต่อและรายละเอียด', step3Hint: 'กรอกข้อมูลเพื่อให้เราติดต่อกลับและยืนยันความต้องการ',
      next: 'ถัดไป', back: 'ย้อนกลับ', submit: 'ส่งแบบประเมิน', sending: 'กำลังส่ง…',
      company: 'บริษัท / องค์กร *', contact: 'ผู้ติดต่อ *', email: 'อีเมล *', phone: 'โทรศัพท์',
      notes: 'ปัญหาปัจจุบันหรือผลลัพธ์ที่คาดหวัง', notesPlaceholder: 'ตัวอย่าง: ต้องการติดตามพนักงานตรวจสอบในพื้นที่ขนาดใหญ่ และเก็บประวัติการเคลื่อนไหวก่อนและหลังเหตุผิดปกติ',
      chooseNeed: 'กรุณาเลือกอย่างน้อยหนึ่งความต้องการ', required: 'กรุณากรอกบริษัท ผู้ติดต่อ และอีเมลที่ถูกต้อง',
      error: 'ขณะนี้ไม่สามารถส่งได้ กรุณาลองใหม่หรือส่งอีเมลไปที่ info@nnpc.ai',
      summary: 'สรุปความต้องการ', sceneText: 'พื้นที่', stageText: 'ขั้นตอน', scaleText: 'ขนาด', timelineText: 'ระยะเวลา', accuracyText: 'ความแม่นยำ',
      successEyebrow: 'Assessment Received', successTitle: 'บันทึกความต้องการเรียบร้อยแล้ว',
      successText: 'N/NPC ได้รับรูปแบบการใช้งานและขนาดของคุณแล้ว ที่ปรึกษาจะติดต่อเพื่อยืนยันขอบเขตทางเทคนิคและขั้นตอนต่อไป',
      successBack: 'กลับศูนย์เครื่องมือ',
      privacyNote: 'เมื่อส่งแบบประเมิน คุณยินยอมให้ N/NPC ใช้ข้อมูลนี้เพื่อติดต่อและชี้แจงความต้องการครั้งนี้', privacyLink: 'นโยบายความเป็นส่วนตัว',
      disclaimer: 'เครื่องมือนี้ใช้สำหรับการวิเคราะห์ความต้องการเบื้องต้นเท่านั้น ไม่ใช่ใบเสนอราคา การรับประกันความแม่นยำ หรือข้อผูกพันในการให้บริการ',
      needs: [
        ['แสดงตำแหน่ง','แสดงตำแหน่งคนหรืออุปกรณ์','ดูตำแหน่งปัจจุบันบนแผนผังหรือแผนที่'],
        ['ประวัติการเคลื่อนที่','ดูเส้นทางย้อนหลัง','บันทึกเส้นทาง จุดหยุด และประวัติการเคลื่อนที่'],
        ['นำทาง','การนำทางหรือแนะนำเส้นทาง','นำทางคน รถ หรือเครื่องจักรไปยังจุดหมาย'],
        ['มอบหมายงาน','การจัดส่งและมอบหมายงาน','มอบหมายงานตามระยะทาง ตำแหน่ง หรือสถานะ'],
        ['ค้นหาสถานที่','ค้นหาที่อยู่หรือสถานที่','ค้นหาตำแหน่งด้วยชื่อหรือที่อยู่'],
        ['วิเคราะห์พื้นที่','วิเคราะห์พื้นที่หรือภูมิศาสตร์','วิเคราะห์พื้นที่ สภาพแวดล้อม ความเสี่ยง หรือเงื่อนไขทำเล'],
        ['จัดการอุปกรณ์','จัดการอุปกรณ์ระยะไกล','ดูสถานะ การอัปเดต และการแจ้งเตือนของอุปกรณ์'],
        ['ยังไม่แน่ใจ','ยังไม่แน่ใจ','อธิบายสถานการณ์ แล้วให้เราช่วยวิเคราะห์']
      ],
      fields: [
        ['scene','พื้นที่ใช้งานหลัก',['ภายในอาคาร','ภายนอกอาคาร','ทั้งภายในและภายนอก']],
        ['stage','ขั้นตอนการนำไปใช้',['Proof of concept','ทดลองขนาดเล็ก','ใช้งานจริง','ขยายระบบเดิม']],
        ['sites','จำนวนพื้นที่',['1','2–5','6–20','21+']],
        ['assets','จำนวนคน / อุปกรณ์',['1–10','11–50','51–200','201–1,000','1,001+']],
        ['users','ผู้ใช้ต่อเดือน',['1–50','51–500','501–5,000','5,001+']],
        ['frequency','ความถี่ในการอัปเดตตำแหน่ง',['ไม่กี่ครั้งต่อวัน','ทุก 1–2 ชั่วโมง','ทุก 15 นาที','ใกล้เคียง real time']],
        ['timeline','ระยะเวลาที่คาดว่าจะเริ่ม',['ภายใน 3 เดือน','3–6 เดือน','6–12 เดือน','ยังไม่กำหนด']],
        ['accuracy','ความแม่นยำที่ต้องการ',['ระดับโซน','ประมาณไม่กี่เมตร','ตำแหน่งแม่นยำ','ยังไม่กำหนด']]
      ]
    }
  };

  let lang = localStorage.getItem('nnpc_lang');
  if (!LANGS.includes(lang)) {
    const nav = (navigator.language || '').toLowerCase();
    lang = nav.startsWith('th') ? 'th' : nav.startsWith('zh') ? 'zh' : 'en';
  }

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const esc = (value) => String(value || '').replace(/[&<>"']/g, (char) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[char]));

  function render(langCode) {
    lang = langCode;
    localStorage.setItem('nnpc_lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : lang;
    document.body.classList.toggle('thai', lang === 'th');
    const t = data[lang];
    const text = {
      '#backTools':t.backTools,'#pageTitle':t.title,'#pageIntro':t.intro,
      '#step1Title':t.step1Title,'#step1Hint':t.step1Hint,'#step2Title':t.step2Title,'#step2Hint':t.step2Hint,
      '#step3Title':t.step3Title,'#step3Hint':t.step3Hint,'#next1':t.next,'#next2':t.next,'#back2':t.back,'#back3':t.back,
      '#submitButton':t.submit,'#companyLabel':t.company,'#contactLabel':t.contact,'#emailLabel':t.email,'#phoneLabel':t.phone,
      '#notesLabel':t.notes,'#successEyebrow':t.successEyebrow,'#successTitle':t.successTitle,'#successText':t.successText,
      '#successBack':t.successBack,'#privacyNote':t.privacyNote,'#privacyLink':t.privacyLink,'#disclaimer':t.disclaimer
    };
    Object.entries(text).forEach(([selector, value]) => { const el = $(selector); if (el) el.textContent = value; });
    $('#notes').placeholder = t.notesPlaceholder;
    $$('.lang-btn').forEach((button) => button.classList.toggle('active', button.dataset.lang === lang));
    $('#needOptions').innerHTML = t.needs.map(([value,title,hint]) => `<label class="assessment-option"><input type="checkbox" name="needs" value="${esc(value)}"><span><strong>${esc(title)}</strong><small>${esc(hint)}</small></span></label>`).join('');
    $('#scaleFields').innerHTML = t.fields.map(([name,label,options]) => `<label><span>${esc(label)}</span><select name="${name}">${options.map((option) => `<option value="${esc(option)}">${esc(option)}</option>`).join('')}</select></label>`).join('');
  }

  function goStep(step) {
    if (step === 2 && !$$('[name="needs"]:checked').length) {
      $('#formMessage').textContent = data[lang].chooseNeed;
      return;
    }
    $('#formMessage').textContent = '';
    $$('[data-step]').forEach((panel) => panel.classList.toggle('hidden', Number(panel.dataset.step) !== step));
    $$('.assessment-progress span').forEach((bar, index) => bar.classList.toggle('active', index < step));
    if (step === 3) updateSummary();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function values() {
    const form = new FormData($('#assessmentForm'));
    return {
      needs: form.getAll('needs'),
      scene: form.get('scene'), stage: form.get('stage'), sites: form.get('sites'), assets: form.get('assets'),
      users: form.get('users'), frequency: form.get('frequency'), timeline: form.get('timeline'), accuracy: form.get('accuracy'),
      company: String(form.get('company') || '').trim(), contact: String(form.get('contact') || '').trim(),
      email: String(form.get('email') || '').trim(), phone: String(form.get('phone') || '').trim(),
      notes: String(form.get('notes') || '').trim(), website: String(form.get('website') || '').trim()
    };
  }

  function updateSummary() {
    const d = values();
    const t = data[lang];
    $('#assessmentSummary').innerHTML = `<strong>${esc(t.summary)}</strong><div class="summary-tags">${d.needs.map((item) => `<span>${esc(item)}</span>`).join('')}</div><p>${esc(t.sceneText)}：${esc(d.scene)} · ${esc(t.stageText)}：${esc(d.stage)} · ${esc(t.timelineText)}：${esc(d.timeline)} · ${esc(t.accuracyText)}：${esc(d.accuracy)}</p>`;
  }

  async function submit(event) {
    event.preventDefault();
    const d = values();
    const t = data[lang];
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email);
    if (!d.needs.length) return goStep(1);
    if (!d.company || !d.contact || !validEmail) {
      $('#formMessage').textContent = t.required;
      return;
    }
    const button = $('#submitButton');
    button.disabled = true;
    button.textContent = t.sending;
    $('#formMessage').textContent = '';
    try {
      const response = await fetch('/api/spatial/submit', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(d) });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) throw new Error(result.message || 'Submission failed');
      $('#assessmentForm').classList.add('hidden');
      $('.assessment-progress').classList.add('hidden');
      $('#successPanel').classList.remove('hidden');
      $('#successSummary').innerHTML = `<strong>${esc(d.company)}</strong><p>${d.needs.map(esc).join('、')}<br>${esc(t.sceneText)}：${esc(d.scene)} · ${esc(t.timelineText)}：${esc(d.timeline)}</p>`;
      window.scrollTo({ top: 0, behavior:'smooth' });
    } catch (err) {
      $('#formMessage').textContent = t.error;
    } finally {
      button.disabled = false;
      button.textContent = t.submit;
    }
  }

  $$('.lang-btn').forEach((button) => button.addEventListener('click', () => render(button.dataset.lang)));
  $$('[data-next]').forEach((button) => button.addEventListener('click', () => goStep(Number(button.dataset.next))));
  $$('[data-prev]').forEach((button) => button.addEventListener('click', () => goStep(Number(button.dataset.prev))));
  $('#assessmentForm').addEventListener('submit', submit);
  render(lang);
})();
