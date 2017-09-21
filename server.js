var http = require('http');
var app = require('./config/express');
require('./config/database')('apitestavel:apitestavel@ds141514.mlab.com:41514/api-testavel');

http.createServer(app).listen(3000, function(){
  console.log('Servidor iniciado...')
});
