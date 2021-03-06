const path = require('path');
const express = require('express');
const app = express();

require('./db/connection');
const User = require('./db/user');

app.use(express.static(path.join(__dirname,"./client")));

app.get('/',(req,res)=>{
    res.send("hellow from anand sahi he");
});

app.get('/data',async(req,res)=>{
    const data = await User.find();
    res.send(data);
})

app.listen(8000,()=>{
    console.log(`listening at port ${8000}`);
})