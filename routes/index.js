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
router.get('/work.ejs', function(req, res, next) {
    res.render('work.ejs')
})

router.post('/', function(req, res) {

});
router.post('/orderView.ejs', function(req, res) {
res.render('main.ejs')
});


module.exports = router;

