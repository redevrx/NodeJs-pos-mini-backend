const express = require("express");
const rounter = express.Router();
const verifyToken = require("../controller/VerityToken");
const userManager = require("../controller/Usermanager");
const saleManager = require('../controller/SaleManager')
const productManager = require("../controller/ProductManager");
const multer = require("multer");



rounter.get("/", verifyToken, (req, res) => {
  res.status(400).send("Redev System POS...");
});

//user login and register

//user login
rounter.post("/user/login", userManager.login);

//user register
rounter.post("/user/register", userManager.register);

//user request data
rounter.get("/user/info", verifyToken, userManager.getUserInfo);

// image /

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now()+".png");
  },
});
var upload = multer({ storage: storage });

// action product
//get data
rounter.get("/product/get", productManager.getData);

//save
rounter.post("/product/add", verifyToken, upload.single('file') , productManager.saveProduct);

//edit
rounter.put(
  "/product/edit",
  verifyToken,
  productManager.editProduct
);

//edit image
rounter.put(
  "/product/edit/image",
  verifyToken,
  upload.single("file"),
  productManager.editImage
);


//remove
rounter.delete(
  "/product/remove/:id",
  verifyToken,
  productManager.removeProduct
);



// sale management 

//save order details
rounter.post('/product/sale/saleProduct',verifyToken,saleManager.saveSale)

//get history sales
rounter.get('/product/sale/get',verifyToken,saleManager.getSales)
module.exports = rounter;
