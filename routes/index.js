var express = require('express');
var router = express.Router();
const request = require('request');
global.port = 0;


global.prodData = [];


router.get('/',function(req,res) {
  console.log("hello world");
  res.render('port');
});




router.post('/main', function(req, response, next) {
  console.log("hello");
  port = req.body.port;
  console.log(port);
  var prodList = [];
  var url1 = 'http://den-vm-eng142.rocketsoftware.com:7171/Xdemo/Products?max=20';
  var url2 = 'http://den-vm-eng142.rocketsoftware.com:' + port + '/Xdemo/Products?max=20';
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
