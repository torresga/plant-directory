var express = require("express");
var path = require("path");
var routes = require("./routes/index");

var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", routes);

//app.get('/', function(req, res) {
 // res.send("Hello World");
//});

app.use(express.static("public"));

app.listen(3000, function(){
  console.log("Listening on port 3000");
});

module.exports = app;
