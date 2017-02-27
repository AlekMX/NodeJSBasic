var http = require('http');
var url = require('url');

var insertion = require('./insertion.js');

http.createServer(
    function(request,response){
    var urlPath = url.parse(decodeURI(request.url), true);
    console.log('path: ',urlPath);
    response.writeHead(200,{'Content-Type': 'text/html'});
    var array = [5,2,4,6,1,3];
    insertion.sort(array);
    response.end(array.toString());
    }
).listen(8081);


