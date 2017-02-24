var http = require('http');
var path = require('path');
var url = require('url');
var fs = require('fs');

http.createServer(
    function(request,response){
    //var lookup = path.basename(decodeURI(request.url));
    var urlPath = url.parse(decodeURI(request.url), true);
    console.log('path: ',urlPath);
    console.log('dirname', path.dirname(decodeURI(request.url)));
	getResponse(response,urlPath);
    }
).listen(8080);


function getResponse(response, pathObj){
    var pages = [
	//{route:'', output: getHomepage('html/index.html')},
	{route:'/', output: 'Hello World'},
	{route:'/about', output:'AlekMX team'},
	{route:'/about/alekmx', output:'AlekMX personal page'},
	{route:'/page', output: function() {return 'Here\'s '+this.route;}},
	{route:'/test', output: function() {return 'Test site \n Here\'s '+this.route;}},
    ];
    pages.forEach(function(page){
	
	console.log('searchedPath',pathObj.pathname);
	console.log('queries',pathObj.query);
	if(page.route === pathObj.pathname){
	    response.writeHead(200,{'Content-Type': 'text/html'});
	    response.end(typeof page.output=== 'function' ? page.output() : page.output);
	}
    });
    if(!response.finished){
	response.writeHead(404);
	response.end('Page not Found!');
    }
}

function checkFile(){
}


function getHomepage(file){
    //fs.exists(file)
}
