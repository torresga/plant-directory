var db = require("./db.js");

var User = require('./app/models/user');
var Plant = require('./app/models/plant');
var prompt = require('prompt');

prompt.start();

prompt.get(['email', 'name', 'password'], function(err, result) {
  var data = {
    email: result.email,
    name: result.name,
    password: result.password
   };

User.forge(data).save().then(function(u) {
  console.log('User saved!\n');
  console.log('E-mail: ' + u.get('email'));
  console.log('Name: ' + u.get('name'));
  console.log('Password: ' + u.get('password'));
});
});

