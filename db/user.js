const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    lname:String
})

const User = mongoose.model('USER',userSchema);

module.exports = User;