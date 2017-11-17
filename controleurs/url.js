var mongoose = require('mongoose');
//var Video = require('../models/user');
module.exports.controller = function(app) {

/**
 * la route pour l'accueil
 */
  app.get('/', function(req, res) {
      // any logic goes here
      res.render('accueil');
  });

/**
 * url courte
 */
  app.get('/:court', function(req, res) {
      // any logic goes here
      res.render('url/court');
  });

/**
 * nouvelle url
 */
  app.get('/nouvelle', function(req, res) {
      // any logic goes here
      res.render('url/nouvelle');
  });

}
