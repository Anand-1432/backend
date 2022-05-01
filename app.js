const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb://my-user:my_pwd@localhost:27017/mern").then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log('unable to connect');
    console.log(err);
});

const userSchema = new mongoose.Schema({
    name:String,
    lname:String
})

const User = mongoose.model('USER',userSchema);

app.get('/',(req,res)=>{
    res.send("hellow from anand");
});

app.get('/data',async(req,res)=>{
    const data = await User.find();
    res.send(data);
})

app.listen(8000,()=>{
    console.log('listening at port 8000');
})