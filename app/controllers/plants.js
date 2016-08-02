module.exports = (function() {
  var User = require('../models/user');
  var Plant = require('../models/plant');

  var newAction = function(req, res, sessionInfo) {
    User.fetchAll().then(function(data) {
      sessionInfo.users = data.map(function(user) {
        return { id: user.id, name: user.attributes.name };
      });

      res.render('plants/new', sessionInfo);
    });

  };

  var createAction = function(req, res, sessionInfo) {
    Plant.forge({
      name: req.body.name,
      commonName: req.body.commonName,
      family: req.body.family,
      coordinates: req.body.coordinates,
      photoUrl: req.body.photoUrl,
      type: req.body.type
    }).save().tap(function(plant) {
      console.log("Created plant: " + plant.id);
    }).then(function() {
      res.redirect('/plants');
    });
  };

  var indexAction = function(req, res, sessionInfo) {
    Plant.fetchAll({
      withRelated: ['customer']
    }).then(function(data) {
      sessionInfo.plants = data.map(function(plant) {
        return { id: plant.id,
          name: plant.attributes.name,
          commonName: plant.attributes.commonName,
          family: plant.attributes.family,
          coordinates: plant.attributes.coordinates,
          photoUrl: plant.attributes.photoUrl,
          type: plant.attributes.type,
          user: {
            name: plant.related('user').attributes.name
          }
        };
      });

      res.render('plants/index', sessionInfo);
    });
  };

  return {
    indexAction: indexAction,
    newAction: newAction,
    createAction: createAction
  };

}());


