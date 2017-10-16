#Import a module
http = require('http');
server = require('./server.js');

#Declare an HTTP server
http.createServer(server.logic).listen(8888, '127.0.0.1');
