var express = require('express');
var router = express.Router();
const request = require('request');
const config = require('../config');

global.prodData = [];

router.get('/', function(req, response, next) {
  console.log("hello");
  port = req.body.port;
  console.log(port);
  var prodList = [];
  var url2 = config.mvis.baseEndPointURL + config.mvis.port + '/Xdemo/Products?max=20';
  request(url2, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
      body.Products.forEach(el => { 
        prodList.push(el);
      });
    prodData = prodList;
    response.render('index2',{prodList:prodList});
  }).auth('agorovoy@rs.com','admin',true);
});



router.get('/test',function(req,res) {
  res.render('test');
});

module.exports = router;
