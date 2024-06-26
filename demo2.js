var http = require("http")
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'})
    res.end("Hello <br/> world");
}).listen(3000);
console.log("server is started on http://127.0.0.1:3000")