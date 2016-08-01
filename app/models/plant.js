var db = require('../services/db');
var User = require('./user');

module.exports = db.Model.extend({
  tableName: 'plants',
  hasTimestamps: true,
  user: function() {
    return this.belongsTo(User);
  },
  toString: function() {
    return [
      "ID: ", this.id, ", ",
      "name: ", this.attributes.name, ", ",
      "common name: ", this.attributes.commonName, ", ",
      "family: ", this.attributes.family, ", ",
      "coordinates: ", this.attributes.coordinates, ", ",
      "photoUrl: ", this.attributes.photoUrl, ", ",
      "type: ", this.attributes.type, ", "
    ].join("");
});
