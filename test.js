var https = require('https');
var fs = require('fs');
var options = {
     key: fs.readFileSync('/etc/letsencrypt/live/sinespera.io/privkey.pem'),
     cert: fs.readFileSync('/etc/letsencrypt/live/sinespera.io/fullchain.pem'),
     ca: fs.readFileSync('/etc/letsencrypt/live/sinespera.io/chain.pem')
}
var server = https.createServer(options, handlerFunction);
server.listen(8080, '127.0.0.1');