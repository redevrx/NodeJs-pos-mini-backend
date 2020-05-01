const express = require("express");
const Product = require("../models/ProductModel");

const saveProduct = async (req, res) => {
  const product = new Product({
    productId: req.body.productId,
    productName: req.body.productName,
    bal: req.body.bal,
    unit: req.body.unit,
    price: req.body.price,
    image: "http://localhost:8082/file/"+ req.file.filename
  });

  const save = await product.save();
  res.send(save);
  console.log(save);
};

const editProduct = async (req, res) => {
  // const myFile = req.body.image
  //  //  mv() method places the file inside public directory
  //  myFile.mv(`${__dirname}/public/${myFile.name}`,function(err){
  //      if(err)
  //      {
  //         console.log(err)
  //         return res.status(500).send({ msg: "Error occured" })
  //      }
  //       // returing the response with file path and name
  //     return res.send({name: myFile.name, path: `/${myFile.name}`});
  //  })

  const product = new Product({
    _id: req.body._id,
    productId: req.body.productId,
    productName: req.body.productName,
    bal: req.body.bal,
    unit: req.body.unit,
    price: req.body.price,
    image: req.body.image,
  });

  const upData = product.toObject();

  await Product.update({ _id: req.body._id }, upData, (err, edit) => {
    if (!err) {
      res.send(edit);
      console.log(req.body.image);
    } else res.send(err);
    console.log(err + " :" + req.body.image);
  });
};

const editImage =  (req, res) => {
   Product.update(
    { _id: req.body._id },
    {
      image: "http://localhost:8082/file/" + req.file.filename,
    },
    (err, edit) => {
      if (!err) {
        res.send(edit);
        console.log("Edit Image Successfully...");
      } 
      else 
      {
        res.send(err);
      console.log(err + " :");
      }
    }
  );
};

const removeProduct = async (req, res) => {
  // const product = new Product({
  //     productId:req.body.productId,
  //     productName:req.body.productName,
  //     bal:req.body.bal,
  //     unit:req.body.unit,
  //     price:req.body.price,
  //     image:req.body.image

  // })

  await Product.deleteOne({ _id: req.params.id }, (err, result) => {
    if (!err) {
      res.send(result);
      console.log(result + req.params.id);
    } else res.send(err);
    console.log(err + req.params.id);
  });
};

const getData = async (req, res) => {
  await Product.find({}, function (err, result) {
    res.send(result);
    console.log(result);
  });
};

module.exports = {
  saveProduct,
  editProduct,
  removeProduct,
  getData,
  editImage,
};
