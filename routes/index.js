var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/results", function(req, res) {
  res.render("results");
});

router.get("/plant", function(req, res) {
  res.render("plant");
});

module.exports = router;

