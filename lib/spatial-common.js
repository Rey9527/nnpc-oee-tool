const AIRTABLE_API = 'https://api.airtable.com/v0';

const FIELD = {
  assessmentId: process.env.AIRTABLE_SPATIAL_FIELD_ID || 'Assessment ID',
  createdAt: process.env.AIRTABLE_SPATIAL_FIELD_CREATED_AT || 'Created At',
  company: process.env.AIRTABLE_SPATIAL_FIELD_COMPANY || 'Company',
  contact: process.env.AIRTABLE_SPATIAL_FIELD_CONTACT || 'Contact',
  email: process.env.AIRTABLE_SPATIAL_FIELD_EMAIL || 'Email',
  phone: process.env.AIRTABLE_SPATIAL_FIELD_PHONE || 'Phone',
  needs: process.env.AIRTABLE_SPATIAL_FIELD_NEEDS || 'Needs',
  scene: process.env.AIRTABLE_SPATIAL_FIELD_SCENE || 'Scene',
  stage: process.env.AIRTABLE_SPATIAL_FIELD_STAGE || 'Stage',
  sites: process.env.AIRTABLE_SPATIAL_FIELD_SITES || 'Sites',
  assets: process.env.AIRTABLE_SPATIAL_FIELD_ASSETS || 'People / Assets',
  users: process.env.AIRTABLE_SPATIAL_FIELD_USERS || 'Monthly Users',
  frequency: process.env.AIRTABLE_SPATIAL_FIELD_FREQUENCY || 'Update Frequency',
  timeline: process.env.AIRTABLE_SPATIAL_FIELD_TIMELINE || 'Timeline',
  accuracy: process.env.AIRTABLE_SPATIAL_FIELD_ACCURACY || 'Accuracy',
  notes: process.env.AIRTABLE_SPATIAL_FIELD_NOTES || 'Notes',
  status: process.env.AIRTABLE_SPATIAL_FIELD_STATUS || 'Status',
};

function requireEnv(name) {
  const value = String(process.env[name] || '').trim();
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function tableRef() {
  return String(process.env.AIRTABLE_SPATIAL_TABLE_ID || process.env.AIRTABLE_SPATIAL_TABLE_NAME || 'Spatial Assessments').trim();
}

function airtableConfigured() {
  return Boolean(process.env.AIRTABLE_TOKEN && process.env.AIRTABLE_BASE_ID && tableRef());
}

function airtableUrl(path, params) {
  const base = requireEnv('AIRTABLE_BASE_ID');
  const url = new URL(`${AIRTABLE_API}/${base}/${encodeURIComponent(tableRef())}${path || ''}`);
  Object.entries(params || {}).forEach(([key, value]) => url.searchParams.set(key, value));
  return url;
}

async function airtableFetch(path, options, params) {
  if (!airtableConfigured()) {
    throw new Error('Spatial Airtable table is not configured');
  }
  const response = await fetch(airtableUrl(path, params), {
    ...options,
    headers: {
      Authorization: `Bearer ${requireEnv('AIRTABLE_TOKEN')}`,
      'Content-Type': 'application/json',
      ...(options && options.headers),
    },
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    const detail = body.error?.message || body.error?.type || `Airtable request failed: ${response.status}`;
    if (/invalid permissions|model was not found|required permissions/i.test(detail)) {
      throw new Error(`Airtable 權限或 Spatial Assessments 表設定錯誤。請確認 token 可讀寫目前 Base，且 AIRTABLE_SPATIAL_TABLE_ID / NAME="${tableRef()}" 正確。原始錯誤：${detail}`);
    }
    throw new Error(detail);
  }
  return body;
}

function clean(value, max = 300) {
  return String(value || '').trim().slice(0, max);
}

function normalizeNeeds(value) {
  if (Array.isArray(value)) return value.map((item) => clean(item, 80)).filter(Boolean).slice(0, 12);
  return String(value || '').split(/[、,\n]/).map((item) => clean(item, 80)).filter(Boolean).slice(0, 12);
}

function makeAssessmentId() {
  return `RTLS-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Date.now().toString(36).toUpperCase()}`;
}

function sanitizeAssessment(data) {
  const email = clean(data.email).toLowerCase();
  const company = clean(data.company);
  const contact = clean(data.contact);
  if (!company || !contact || !email || !email.includes('@')) {
    throw new Error('Missing required contact fields');
  }
  return {
    assessment_id: clean(data.assessment_id) || makeAssessmentId(),
    created_at: clean(data.created_at) || new Date().toISOString(),
    company,
    contact,
    email,
    phone: clean(data.phone),
    needs: normalizeNeeds(data.needs),
    scene: clean(data.scene),
    stage: clean(data.stage),
    sites: clean(data.sites),
    assets: clean(data.assets),
    users: clean(data.users),
    frequency: clean(data.frequency),
    timeline: clean(data.timeline),
    accuracy: clean(data.accuracy),
    notes: clean(data.notes, 3000),
    status: clean(data.status) || 'New',
  };
}

function airtableFields(record) {
  return {
    [FIELD.assessmentId]: record.assessment_id,
    [FIELD.createdAt]: record.created_at,
    [FIELD.company]: record.company,
    [FIELD.contact]: record.contact,
    [FIELD.email]: record.email,
    [FIELD.phone]: record.phone,
    [FIELD.needs]: record.needs.join('、'),
    [FIELD.scene]: record.scene,
    [FIELD.stage]: record.stage,
    [FIELD.sites]: record.sites,
    [FIELD.assets]: record.assets,
    [FIELD.users]: record.users,
    [FIELD.frequency]: record.frequency,
    [FIELD.timeline]: record.timeline,
    [FIELD.accuracy]: record.accuracy,
    [FIELD.notes]: record.notes,
    [FIELD.status]: record.status,
  };
}

function fromAirtable(record) {
  const fields = record?.fields || {};
  return {
    record_id: record?.id || '',
    assessment_id: fields[FIELD.assessmentId] || '',
    created_at: fields[FIELD.createdAt] || record?.createdTime || '',
    company: fields[FIELD.company] || '',
    contact: fields[FIELD.contact] || '',
    email: fields[FIELD.email] || '',
    phone: fields[FIELD.phone] || '',
    needs: normalizeNeeds(fields[FIELD.needs]),
    scene: fields[FIELD.scene] || '',
    stage: fields[FIELD.stage] || '',
    sites: fields[FIELD.sites] || '',
    assets: fields[FIELD.assets] || '',
    users: fields[FIELD.users] || '',
    frequency: fields[FIELD.frequency] || '',
    timeline: fields[FIELD.timeline] || '',
    accuracy: fields[FIELD.accuracy] || '',
    notes: fields[FIELD.notes] || '',
    status: fields[FIELD.status] || 'New',
  };
}

function rangeNumber(value, fallback = 1) {
  const numbers = String(value || '').replace(/,/g, '').match(/\d+/g);
  if (!numbers || !numbers.length) return fallback;
  if (numbers.length === 1) return Number(numbers[0]);
  return Math.round((Number(numbers[0]) + Number(numbers[1])) / 2);
}

function includesAny(needs, terms) {
  const text = needs.join('|').toLowerCase();
  return terms.some((term) => text.includes(term.toLowerCase()));
}

function classify(record) {
  const assets = rangeNumber(record.assets, 10);
  const users = rangeNumber(record.users, 25);
  const sites = rangeNumber(record.sites, 1);
  const scale = assets <= 30 && users <= 250 && sites <= 3
    ? 'Small'
    : assets <= 600 && users <= 2500 && sites <= 10 ? 'Medium' : 'Large';
  const types = [];
  if (includesAny(record.needs, ['位置','軌跡','導航','派遣','location','movement','navigation','dispatch','ตำแหน่ง','เส้นทาง','มอบหมาย'])) types.push('Location & movement');
  if (includesAny(record.needs, ['搜尋','search','ค้นหา'])) types.push('Place search');
  if (includesAny(record.needs, ['分析','analysis','วิเคราะห์'])) types.push('Spatial analysis');
  if (includesAny(record.needs, ['裝置','device','อุปกรณ์'])) types.push('Device operations');
  if (!types.length) types.push('Consultant review');
  return { scale, types };
}

function estimateAssessment(record) {
  const assets = rangeNumber(record.assets, 10);
  const users = rangeNumber(record.users, 25);
  const sites = rangeNumber(record.sites, 1);
  const classification = classify(record);
  const days = 30;
  const stage = String(record.stage || '').toLowerCase();
  const interactionsPerUser = /concept|概念|proof/.test(stage) ? 12 : /pilot|試行|ทดลอง/.test(stage) ? 35 : 80;
  const mapEvents = users * interactionsPerUser;
  const searchEvents = includesAny(record.needs, ['搜尋','search','ค้นหา']) ? mapEvents * 0.25 : 0;
  const routeEvents = includesAny(record.needs, ['導航','派遣','navigation','dispatch','นำทาง','มอบหมาย']) ? assets * days * 1.5 : 0;

  function tierCost(usage, free, tiers) {
    let left = Math.max(0, usage - free);
    let previous = free;
    let cost = 0;
    for (const [cap, rate] of tiers) {
      if (left <= 0) break;
      const width = cap === Infinity ? left : Math.max(0, cap - previous);
      const quantity = Math.min(left, width);
      cost += quantity / 1000 * rate;
      left -= quantity;
      previous = cap;
    }
    return cost;
  }

  const mapUsd =
    tierCost(mapEvents, 10000, [[100000,7],[500000,5.6],[1000000,4.2],[5000000,2.1],[Infinity,.53]]) +
    tierCost(searchEvents, 10000, [[100000,5],[500000,4],[1000000,3],[5000000,1.5],[Infinity,.38]]) +
    tierCost(routeEvents, 10000, [[100000,5],[500000,4],[1000000,3],[5000000,1.5],[Infinity,.38]]);

  const frequency = rangeNumber(record.frequency, 1);
  const messages = assets * days * frequency;
  const deviceUsd =
    (includesAny(record.needs, ['裝置','device','อุปกรณ์']) ? assets * 0.1 : 0) +
    messages * 0.00015 +
    (includesAny(record.needs, ['位置','軌跡','導航','派遣','location','movement','navigation','dispatch','ตำแหน่ง','เส้นทาง','มอบหมาย']) ? messages * 0.0015 : 0);

  let analysisUsd = 0;
  if (includesAny(record.needs, ['分析','analysis','วิเคราะห์'])) {
    const seats = sites <= 3 ? 2 : sites <= 10 ? 5 : 10;
    analysisUsd = seats * (sites > 10 ? 150 : 75);
  }

  const fx = Number(process.env.SPATIAL_USD_TWD_RATE || 32.5);
  const mapCost = mapUsd * fx;
  const deviceCost = deviceUsd * fx;
  const analysisCost = analysisUsd * fx;
  const platformCost = mapCost + deviceCost + analysisCost;
  const accuracy = String(record.accuracy || '').toLowerCase();
  const complexity =
    record.needs.length * 6000 +
    sites * 2500 +
    (/精準|precise|แม่นยำ/.test(accuracy) ? 80000 : /公尺|meters|เมตร/.test(accuracy) ? 30000 : 10000) +
    (/existing|擴充|ขยาย/.test(stage) ? 60000 : 0);
  const setupFee = Math.max(80000, Math.round(complexity / 1000) * 1000);
  const opsBase = classification.scale === 'Small' ? 18000 : classification.scale === 'Medium' ? 45000 : 90000;
  const monthlyInternal = platformCost + opsBase;
  const suggestedMonthly = Math.ceil((monthlyInternal / 0.55) / 1000) * 1000;
  return {
    classification,
    usage: { map_events: mapEvents, search_events: searchEvents, route_events: routeEvents, messages },
    map_cost: Math.round(mapCost),
    device_cost: Math.round(deviceCost),
    analysis_cost: Math.round(analysisCost),
    platform_cost: Math.round(platformCost),
    operations_cost: opsBase,
    monthly_internal: Math.round(monthlyInternal),
    suggested_monthly: suggestedMonthly,
    setup_fee: setupFee,
    first_year: suggestedMonthly * 12 + setupFee,
  };
}

async function createAssessment(data) {
  const record = sanitizeAssessment(data);
  const body = await airtableFetch('', {
    method: 'POST',
    body: JSON.stringify({ fields: airtableFields(record) }),
  });
  return fromAirtable(body);
}

async function listAssessments() {
  const body = await airtableFetch('', { method: 'GET' }, {
    pageSize: '100',
    'sort[0][field]': FIELD.createdAt,
    'sort[0][direction]': 'desc',
  });
  return (body.records || []).map((record) => {
    const assessment = fromAirtable(record);
    return { ...assessment, estimate: estimateAssessment(assessment) };
  });
}

async function updateAssessmentStatus(recordId, status) {
  const safeStatus = clean(status, 40) || 'New';
  const body = await airtableFetch(`/${encodeURIComponent(recordId)}`, {
    method: 'PATCH',
    body: JSON.stringify({ fields: { [FIELD.status]: safeStatus } }),
  });
  const assessment = fromAirtable(body);
  return { ...assessment, estimate: estimateAssessment(assessment) };
}

async function deleteAssessment(recordId) {
  await airtableFetch(`/${encodeURIComponent(recordId)}`, { method: 'DELETE' });
  return { record_id: recordId };
}

function requireSpatialAdmin(req) {
  const configured = String(process.env.SPATIAL_ADMIN_TOKEN || process.env.CERT_ADMIN_TOKEN || '').trim();
  const provided = String(req.headers.authorization || '').replace(/^Bearer\s+/i, '').trim();
  if (!configured || provided !== configured) throw new Error('Authentication required');
}

module.exports = {
  airtableConfigured,
  createAssessment,
  deleteAssessment,
  estimateAssessment,
  listAssessments,
  requireSpatialAdmin,
  sanitizeAssessment,
  updateAssessmentStatus,
};
