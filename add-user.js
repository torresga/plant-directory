var db = require("./db.js");

var User = require('./app/models/user');
var Plant = require('./app/models/plant');


var user = new User();
console.log(user);

user.set({
  'email': 'blah.taylor@mydomain.com',
  'name': 'blah',
  'password': ''
});

user.save().then(function(user) {
  console.log('User has been saved', user.toJSON());
});
