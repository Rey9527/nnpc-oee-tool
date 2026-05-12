const { handleOptions, json } = require('../../lib/oee-common');

module.exports = function handler(req, res) {
  if (handleOptions(req, res)) return;
  return json(res, 200, { ok: true, method: req.method });
};
