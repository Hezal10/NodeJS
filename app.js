const express = require ('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/',(req,res)=> {
    res.send('Hello World!')
})
app.get('/home',(req,res) => {
    res.sendFile(__dirname + "/home.html")
})
app.get('/about',(req,res) => {
    res.sendFile(__dirname + "/about.html")
})
app.get('/contact',(req,res) => {
    res.sendFile(__dirname + "/contact.html")
})
app.get('/process',(req,res)=>{
    var a  = req.query.txt1;
    var b  = req.query.txt2;
    var c = parseInt(a) + parseInt(b);
    res.send(`A value is ${a}<br/> B value is ${b} <br/> Sum is ${c}`)
})
app.listen(port,()=>{
  console.log(`Exapmle app listing on port ${port}`)
})