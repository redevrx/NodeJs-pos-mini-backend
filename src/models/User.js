const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        max:255,
        min:6
    },
    lastName:{
        type:String,
        require:true,
        max:255,
        min:6
    },
    email:{
        type:String,
        require:true,
        max:255,
        min:6
    },
    password:{
        type:String,
        required:true,
        max:1024,
        min:6
    }
})

module.exports = mongoose.model('pos',userSchema,'users')