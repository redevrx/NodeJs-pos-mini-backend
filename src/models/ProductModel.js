const productSchema = require('mongoose')

const product = new productSchema.Schema({
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
})

module.exports = productSchema.model('product',product ,'product')