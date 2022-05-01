const mongoose = require('mongoose');

mongoose.connect("mongodb://my-user:my_pwd@localhost:27017/mern").then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log('unable to connect');
    console.log(err);
});