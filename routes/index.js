var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});
router.get('/main.ejs', function(req, res, next) {
    res.render('main.ejs')
})
router.get('/orderView.ejs', function(req, res, next) {
    res.render('orderView.ejs')
})
router.get('/userInfo.ejs', function(req, res, next) {
    res.render('userInfo.ejs')
})

router.post('/', function(req, res) {

});


module.exports = router;

