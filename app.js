const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("hellow from anand");
});

app.listen(8000,()=>{
    console.log('listening at port 8000');
})