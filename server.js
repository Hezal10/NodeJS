var http = require('http')
var a = 10;
var b = 20;
var c =a + b;
var msg = "";
if(c==30){
    msg = "Sum is 30";
}else{
    msg ="Sum is not 30";
}
http.createServer(function(req,res){
    res.write("<b>Hello Node jS</b>")
    res.write(`A value is ${a} <br/> B value is ${b}`)
    res.end(`<b><br/>${msg}</b>`)
}).listen(8000);
console.log("server is started on http://127.0.0.1:8000")
