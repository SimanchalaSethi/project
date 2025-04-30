const express = require('express');
const app = express();
app.get('/',(req, res)=>{
    res.send('Hello World.')
})
//service 1
app.get('/service1',(req, res)=>{
    res.send('This is from service1').status(200);
})
//service 2
app.get("/service2",(req, res)=>{
    res.send('This is from service2').status(200);
})
//service3
app.get("/service3", (req, res)=>{
    res.send("This is from service3").status(200);
})
const port = 5001;
app.listen(port,()=>{
console.log("server running port number 5001")
})