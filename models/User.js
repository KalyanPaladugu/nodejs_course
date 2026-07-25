const mongoose = require('mongoose');


// Schema design for signup
const signupSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const User = mongoose.model('User', signupSchema);
module.exports = User;