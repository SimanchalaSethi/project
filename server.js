const express = require('express');
const app = express();
app.get('/',(req, res)=>{
    res.send('Hello World.')
})
//service 2
app.get("/service2",(req, res)=>{
    res.send('This is from service2').status(200);
})
const port = 5001;
app.listen(port,()=>{
console.log("server running port number 5001")
})