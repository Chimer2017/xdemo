var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:num', function(req, response, next) {  
  var prodList = [];
  var num = req.params.num;
  if (num > 100) {
    num = 100;
  }
  var URL = 'http://den-vm-eng142.rocketsoftware.com:7171/Xdemo/Products?max=' + num;
  console.log(URL);
  request(URL, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
      body.Products.forEach(el => { 
        prodList.push(el);
      });
    prodData = prodList;
    response.send(prodList);
    //response.render('index',{prodList:prodList});
  }).auth('agorovoy@rs.com','admin',true);
  
});





module.exports = router;
