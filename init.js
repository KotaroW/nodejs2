// custom modules
var pagebuilder = require("./custom_modules/pagebuilder");
var pages        = require("./custom_modules/pages");
var components  = require("./custom_modules/pagecomponents");


// node.js modules
var http    = require("http");
var url     = require("url");


http.createServer((req, res) => {
    var pathname = url.parse(req.url, true).pathname;
    var filename = pathname.replace(/\//g, "");
    filename = filename.toLowerCase();
    
    var page = pages[filename];
    var status = 404;
    var contents = "<p>404 Not Found</p>";
    
    if (page) {
        var builder = new pagebuilder.PageBuilder(page, components);
        status = 200;
        contents = builder.buildPage();
    }
    
    res.writeHead(status, { "Content-Type" : "text/html" });
    res.end(contents);
    
    
}).listen(8080);