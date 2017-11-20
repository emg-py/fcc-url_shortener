var validUrl = require('valid-url');

module.exports.url_shortener = function (urls) {
	if (!isNaN(JSON.stringify(urls))) {
		console.log('shortener.   ' + urls);
		return urls;
	} else if (validUrl.isUri(urls)) {
		console.log('url à traiter' + urls);
		return urls;
	} else {
		console.log('url invalide - reprendre');
	}
};