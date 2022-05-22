const express = require("express");

const app = express();

const port = 9090;

app.get('/',(req, res,next)=>{
   
     res.send(`<h1> hello world </h1>
     <h2>can send the html code as well</h6>
     <h3>{ Name: prathyusha,  Course: Full Stack Web Developer} </h3>`);
    

    res.end()
})
app.get("/user",(req,res,next)=>{
    console.log(req.query);
    res.send("hey user");
})

app.get("/admin/:data",(req,res,next)=>{
    const paramdata=req.params.data;
    res.send(paramdata);
})





app.listen(port) 




