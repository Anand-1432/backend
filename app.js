const express = require('express');
const app = express();
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// dotenv.config();

// const port = process.env.PORT;
require('./db/connection');
const User = require('./db/user');


app.get('/',(req,res)=>{
    res.send("hellow from anand");
});

app.get('/data',async(req,res)=>{
    const data = await User.find();
    res.send(data);
})

app.listen(8000,()=>{
    console.log(`listening at port ${8000}`);
})