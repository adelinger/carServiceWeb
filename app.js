var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var admin = require('firebase-admin');
var serviceAccount = require('./carserviceapp-5132f-firebase-adminsdk-43li4-5b205f52ca.json')

var firebaseAdmin = admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
    databaseURL:'https://carserviceapp-5132f.firebaseio.com'
});

var http = require("http");
var url = require("url");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/plain"});
    var params = url.parse(request.url,true).query;


   var payload = {
        notification: {
            title: "Obavijest o narudžbi",
            body: "Promijenjen je status zahtjeva broj" + ''+params.number2+''
        }
    }
    var  options = {
        priority:"high"
    }

    admin.messaging().sendToDevice(''+ params.number1 + '', payload, options).then(function (response) {
    }).catch(function (error) {
        console.log(error)
    })
    response.write('Poslano!')
    response.end();
}).listen(10001);



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
