// const express= require('express');

import express from "express"
import { dirname } from "path";
import { fileURLToPath } from "url";
// create express app
const app=express();
const __filename= fileURLToPath (import.meta.url)
const __dirname= dirname(__filename);


// Define routes
app.get('/',(req, res)=>{ 
    // console.log(req.query, req.headers);
    res.send("how may i assist you?");

});

app.get ('/ping', (req, res)=> {
    console.log (req. query, req.headers);
    res.send("ping pong");
});
app.get('/file', (req, res)=>{
    console.log(__dirname);
    res.sendFile(__dirname+ "/index.html");
});


// listen for incoming requests
app.listen(4000, ()=>{
    console.log("Express app is running")
});