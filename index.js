const { request } = require("express");
const express= require("express");
const cors=require("cors");
const app=express();


app.use(cors());
//const home =require("home.html");

const port=process.env.PORT || 5500;


app.get("/",(request,res)=>{
    res.send("hii");
});

app.get("/home",(request,res)=>{
    res.sendFile(__dirname + "/home.html");
});

app.listen(port,()=>{
    console.log("hi me live");
});
