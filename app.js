const express = require("express");
const bodyParser = require("body-parser");
const core = require("cors");
const app = express();
const router = require("./src/router/index");
const path = require('path')

app.use(core());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const https = require('https')
const fs = require('fs')


// // create https server 
// const httpsOption ={
//   cert: fs.readFileSync(path.join(__dirname,'ssl','server.crt')),
//   key:fs.readFileSync(path.join(__dirname,'ssl','server.key'))
// }

app.get('/',(req,res)=>{
  res.send('API REDEV.COM')
})

app.use('/file', express.static('public/images/uploads'));

// app.use(express.static("public/images/uploads"))
//setting port server
app.set("port", process.env.PORT || 8082);

//use router
app.use("/pos/api/v1", router);

//starting server
// https.createServer(httpsOption , app)
// .listen(app.get('port',function(){
//   console.log("starting server nodeJs");
// }))
app.listen(app.get("port"), () => {
  console.log("starting server nodeJs");
});


// #  server {
//   #     listen       8090;
//   #     server_name  api.redev.com;
//   #     location ~ ^/ {
//   #         proxy_pass http://localhost:8082;
//   #          proxy_http_version 1.1;
//   #          proxy_set_header Upgrade $http_upgrade;
//   #          proxy_set_header Connection 'upgrade';
//   #          proxy_set_header Host $host;
//   #          proxy_cache_bypass $http_upgrade;
//   #     }
//   #     error_page   500 502 503 504  /50x.html;
//   #     location = /50x.html {
//   #         root   html;
//   #     }
//   # }
