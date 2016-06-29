var db = require('../../db.js');
module.exports = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
}); //finish this 
