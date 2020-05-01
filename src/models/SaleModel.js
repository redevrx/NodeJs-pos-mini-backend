const mongoose = require('mongoose')

const sale = new mongoose.Schema({
    tranId:{
        type:String,
        max:100,
        min:10,
        require:true
    },
    total:
    {
        type:String,
        max:50,
        max:2,
        require:true
    },
    change:{
        type:String,
        max:50,
        min:2,
        require:true
    },

        details:{
            _id:{
                type:String,
                max:100,
                max:20
            },
            productId:{
                type:String,
                require:true,
                max:255,
                min:4
            },
            productName:{
                type:String,
                require:true,
                max:255,
                min:4
            },
            bal:{
                type:String,
                require:true,
                max:255,
                min:4
            },
            unit:{
                type:String,
                require:true,
                max:255,
                min:4
            },
            price:{
                type:String,
                require:true,
                max:255,
                min:4
            },
            image:{
                type:String,
                require:true,
                max:100,
                min:4
            }
        }
    
})

module.exports = mongoose.model('sale',sale,'sale')