var db = require("./db");

var User = require('./app/models/user');
var Plant = require('./app/models/plant');

User.fetchAll().then(function(data){
  console.log("\nThere were " + data.length + " people in the database: \n");
  data.forEach(function(user) {
    attr = user.attributes;
    console.log([attr.name, attr.email].join(": "));
  });
}).catch(function(err){
  console.log(err);
});

Plant.fetchAll().then(function(data){
  console.log("\nThere were " + data.length + " plants in the database: \n");
  data.forEach(function(plant) {
    attr = plant.attributes;
    console.log("name: " + attr.name);
    console.log("common name: " + attr.commonName);
    console.log("family: " + attr.family);
    console.log("type: " + attr.type);
    console.log("\n-------------------\n");
  });
}).catch(function(err) {
  console.log(err);
});

