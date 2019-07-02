var express = require('express');
var router = express.Router();
const request = require('request');





/* GET home page. */
router.get('/', function(req, response, next) {  
  var prodList = [];
  request('http://den-vm-eng142.rocketsoftware.com:7171/Xdemo/Products?max=20', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
      body.Products.forEach(el => { 
        prodList.push(el);
      });
    response.render('index',{prodList:prodList});
    console.log(prodList[0].rating);

  }).auth('agorovoy@rs.com','admin',true);
  
});

module.exports = router;
