var db = require('../services/db.js');
module.exports = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  plants: function() {
    return this.hasMany("Plant");
  }
}); 
