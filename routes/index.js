var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

router.post('/', function(req, res) {
    var inputData = req.body.pokusaj
    res.render('results.ejs',{ data:inputData})
})

module.exports = router;
