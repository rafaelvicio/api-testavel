var http = require('http');
var app = require('./config/express');
require('./config/database')('localhost/api-testavel');

http.createServer(app).listen(3000, function(){
  console.log('Servidor iniciado...')
});
