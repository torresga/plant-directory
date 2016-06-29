var db = require('../../db');

module.exports = db.Model.extend({
  tableName: 'plants',
  hasTimestamps: true,
});
