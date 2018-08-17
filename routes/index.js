var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});
router.get('/main.ejs', function(req, res, next) {
    res.render('main.ejs')
})

/*
router.get('/homePage',isAuthenticated(),function (req, res) {
    res.render('homePage.ejs')
})
*/

router.post('/', function(req, res) {

});

function isAuthenticated (req, res, next) {

}

module.exports = router;

