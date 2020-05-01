const Sale = require("../models/SaleModel");
const express = require("express");
const db2 = require('../utils/db2')

const saveSale =  (req, res) => {
//   const sale = new Sale({
//     tranId: req.body.tranId,
//     total: req.body.total,
//     change: req.body.change,
//     details: req.body.details,
//   });

//   const save = await sale.save();
db2.connection(()=>{
   db2.get().collection('sales').insertOne(req.body , (err,result)=>{
       if(err) throw console(err)
       console.log(result)
       res.send(result)
   })
})
//   res.send(save);
//   console.log(save);
};

const getSales = (req,res) => {
db2.connection(()=>{
    db2.get().collection('sales').find({}).toArray((err,result)=>{
        if(err)
        {
            res.send(err) 
            console.log(err)
        }
        else
        {
            console.log(result)
            res.json({sales:result})
        }
    })
})
}

module.exports = { saveSale ,getSales};
