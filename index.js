"use strict";

var express = require('express');
var app = express();

var shortener = require(__dirname + '/app/controller/shortener.js').url_shortener;

// variables d'environnement
app.set('port', process.env.PORT || 3000 );
app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
	res.render('index', {
		siteTitle: 'projets API',
    pageTitle: 'défi fcc - url shortener',
    pageID: 'index'
	});
});

app.get('/*', function(req, res) {
    var url = shortener(req.params[0]);
    console.log(req.params[0]);
    res.json(url);
});


var server = app.listen(app.get('port'), function() {
  console.log("le serveur est à l'écoute sur le port " + app.get('port'));
});


