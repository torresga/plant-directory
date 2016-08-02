(function() {

  var pug = require('pug');
  var express = require('express');
  var bodyParser = require('body-parser');

  var app = express();

  var User = require('./app/models/user');

  app.set('view engine', 'pug');
  app.set('views', './app/views');
  app.use(express.static('public'));
  app.use(bodyParser.urlencoded({extended: true}));

  var sessionInfo = {
    current_user: null
  }

  var session = function(req, res, cb) {
    req.sessionInfo = sessionInfo;
    cb();
  };

  // routes
  app.get('/', function(req, res) {
    res.render('index', sessionInfo);
  });

  app.post('/sessions', function(req, res) {
    res.redirect(201, '/');
  });

  var plantsController = require('./app/controllers/plants');

  app.get('/plants/new', function(req, res) {
    plantsController.newAction(req, res, sessionInfo);
  });

  app.post('/plants', function(req, res) {
    plantsController.createAction(req, res, sessionInfo);
  });

  app.get('/plants', function(req, res) {
    plantsController.indexAction(req, res, sessionInfo);
  });

  console.log("App is listening on localhost:4000");
  app.listen(4000);

}());
