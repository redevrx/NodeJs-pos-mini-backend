const mongoose = require("mongoose");
const env = require("dotenv");

//config env
env.config()

const conn  = mongoose.connect(process.env.DB_URL,{ useNewUrlParser: false },function(err, db){
  if (!err) {
    console.log("connect DB Successfully...");
  }
});
mongoose.Promise = global.Promise;

module.exports = conn