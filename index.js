var app = require('express')();

app.get("/*", function(req, res) {
    
    var url = req.params[0];
    console.log(url); // http://www.google.com

});

app.listen(3000);

// from freecodecamp forum