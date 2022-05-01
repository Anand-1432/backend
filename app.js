const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb://my-user:my_pwd@localhost:27017/mern").then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log('unable to connect');
    console.log(err);
})

app.get('/',(req,res)=>{
    res.send("hellow from anand");
});

app.listen(8000,()=>{
    console.log('listening at port 8000');
})