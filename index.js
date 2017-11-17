"use strict";
/*
var app = require('express')();

app.get("/*", function(req, res) {
    
    var url = req.params[0];
    console.log(url); // http://www.google.com

});

app.listen(3000);

// from freecodecamp forum
*/
/*
 * le code :
 */

var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');

var url_shortener = require('./public/js/url_shortener.js').url_shortener;

// accéder à la base de données 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb');

// variables d'environnement
app.set('port', process.env.PORT || 3000 );
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/*
// appeler dynamiquement les routes (dans le dossier 'controleur')
fs.readdirSync('./controleurs').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      var route = require('./controleurs/' + file);
      route.controleur(app);
  }
});
*/


app.get('/', function(requete, reponse) {
	reponse.render('index', {
		siteTitle: 'url_shortener',
    pageTitle: 'défi fcc - url shortener',
    pageID: 'index'
	});
});

app.get('/:court', function(requete, reponse) {
  var url = url_shortener(requete.params[0]);
  reponse.json(date);
});


var server = app.listen(app.get('port'), function() {
  console.log("le serveur est à l'écoute sur le port " + app.get('port'));
});
