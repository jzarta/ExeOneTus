var http = require('http');
var PORT = 7000;

var server = http.createServer(function(req, res) {
	console.log(req.url);

	res.writeHead(200, {
		'content-Type': 'text/html'
	});

	var body = '<u><b>Every dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.</b> </u>';

	res.end(body);
});

server.listen(PORT, function() {
	console.log('Server Listening on %d', PORT);
});