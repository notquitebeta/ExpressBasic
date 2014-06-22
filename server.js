#! /usr/bin/env node --harmony

var port = 3000,
    appName = 'BasicExpress',
    log = require('npmlog'),
    express = require('express'),
    passport = require('passport'),
    app = express();

app.use(express.logger('dev'));
app.use(express.cookieParser());

// app.set('views', __dirname+'/views');  // default
app.engine('html', require('ejs').renderFile); // render html using ejs

app.get('/', function(req,res){
  res.render('index.html');
});

app.listen(port, function(){
  console.log('running '+appName+' on port '+port+'.');
});