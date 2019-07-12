var express = require('express');
var router = express.Router();
const request = require('request');
global.prodData = [];





/* GET home page. */
router.get('/', function(req, response, next) {  
  var prodList = [];
  request('http://den-vm-eng142.rocketsoftware.com:7171/Xdemo/Products?max=20', { json: true }, (err, res, body) => {
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
