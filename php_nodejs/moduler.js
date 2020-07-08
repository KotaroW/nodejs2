var http = require("http");
var url = require ("url");

http.createServer ((req, res) => {
    const QUERY_PATH = 'path';
    const QUERY_FUNC = 'func';
    
    var retval = null;
    
    var query = url.parse(req.url, true).query;
    
    if (query) {
        var modulePath  = query[QUERY_PATH];
        var funcName    = query[QUERY_FUNC];
        
        if (modulePath && funcName) {
            try {
                var module = require(modulePath);
                retval = module[funcName];
            } catch (err) {
                console.log(err.code);
            }
        }
        
        res.writeHead(200, { "Content-Type" : "text/plain"});
        res.end(retval);
        
    }
    
}).listen(8080);
