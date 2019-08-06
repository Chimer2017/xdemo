var express = require('express');
var router = express.Router();
const request = require('request');
const config = require('../config');

router.get('/:num', function(req, response, next) {  
  var prodList = [];
  var num = req.params.num;
  if (num > 100) {
    num = 100;
  }
  var URL = config.mvis.baseEndPointURL + config.mvis.port + '/Xdemo/Products?max=' + num;
  console.log(URL);
  request(URL, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
      body.Products.forEach(el => { 
        prodList.push(el);
      });
    prodData = prodList;
    response.send(prodList);
  }).auth('agorovoy@rs.com','admin',true);
  
});

router.get('/prodID/:prodID',function(req,response){
  var prodList = [];
  var id = req.params.prodID;
  console.log(id);
  var URL = config.mvis.baseEndPointURL + config.mvis.port + '/Xdemo/Products/' + id ;
  request(URL, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    response.send(body);
  }).auth('agorovoy@rs.com','admin',true);
});


router.get('/filter/:query',function(req,response){
  var searchQuery = req.params.query;
  var prodList = [];
  var URL = config.mvis.baseEndPointURL + config.mvis.port + '/Xdemo/Products?select=' + searchQuery;
  console.log(URL);
  request(URL, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.Products.forEach(el => { 
      prodList.push(el);
    });
    prodData = prodList;
    response.send(prodList);
    }).auth('agorovoy@rs.com','admin',true);
});




module.exports = router;
