var http = require('http');
var PORT = 8081;

var server = http.createServer(function(req, res) {
	console.log(req.url);


	res.writeHead(200, {
		'content-Type': 'text/html'
	});

	var body = '<u><b>Barry Allen</b> </u>';

	//res.end(body);

	var gif = '<img src="https://media.giphy.com/media/l46CkZW9QmzLSS5KU/giphy.gif" >';
	
	res.end(gif);
});


server.listen(PORT, function() {
	console.log('Server Listening on %d', PORT);
});