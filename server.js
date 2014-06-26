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

// var oneDay = 86400000;
// app.use(express.static(__dirname + '/views', { maxAge: oneDay }));

app.use(express.static(__dirname + '/views'));


app.get('/', function(req,res){
  res.render('index.html');
});

app.get('/time', function(req,res){
  formatDate(res);
});

app.listen(port, function(){
  console.log('running '+appName+' on port '+port+'.');
});

function formatDate(res) {
    var now = new Date(),
        weekday = [],
        month = [];
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var dHash = {};
    dHash["toString"] = now.toString();
    dHash["getDate"] = now.getDate();
    dHash["getDay"] = now.getDay();
    dHash["getDayOfTheWeek"] = weekday[now.getDay()];
    dHash["getFullYear"] = now.getFullYear();
    dHash["getHours"] = now.getHours();
    dHash["getMilliseconds"] = now.getMilliseconds();
    dHash["getMinutes"] = now.getMinutes();
    dHash["getMonth"] = now.getMonth();
    dHash["getMonthOfTheYear"] = month[now.getMonth()];
    dHash["getSeconds"] = now.getSeconds();
    dHash["getTime"] = now.getTime();
    dHash["getTimezoneOffset"] = now.getTimezoneOffset();
    dHash["getUTCDate"] = now.getUTCDate();
    dHash["getUTCDay"] = now.getUTCDay();
    dHash["getUTCFullYear"] = now.getUTCFullYear();
    dHash["getUTCHours"] = now.getUTCHours();
    dHash["getUTCMilliseconds"] = now.getUTCMilliseconds();
    dHash["getUTCMinutes"] = now.getUTCMinutes();
    dHash["getUTCMonth"] = now.getUTCMonth();
    dHash["getUTCSeconds"] = now.getUTCSeconds();
    dHash["getYear"] = now.getYear();
    // dHash["setDate"] = now.setDate();
    // dHash["setFullYear"] = now.setFullYear();
    // dHash["setHours"] = now.setHours();
    // dHash["setMilliseconds"] = now.setMilliseconds();
    // dHash["setMinutes"] = now.setMinutes();
    // dHash["setMonth"] = now.setMonth();
    // dHash["setSeconds"] = now.setSeconds();
    // dHash["setTime"] = now.setTime();
    // dHash["setUTCDate"] = now.setUTCDate();
    // dHash["setUTCFullYear"] = now.setUTCFullYear();
    // dHash["setUTCHours"] = now.setUTCHours();
    // dHash["setUTCMilliseconds"] = now.setUTCMilliseconds();
    // dHash["setUTCMinutes"] = now.setUTCMinutes();
    // dHash["setUTCMonth"] = now.setUTCMonth();
    // dHash["setUTCSeconds"] = now.setUTCSeconds();
    // dHash["setYear"] = now.setYear();
    // dHash["toDateString"] = now.toDateString();
    // dHash["toGMTString"] = now.toGMTString();
    // // dHash["toISOString"] = now.toISOString();
    // dHash["toJSON"] = now.toJSON();
    // dHash["toLocaleDateString"] = now.toLocaleDateString();
    // // dHash["toLocaleFormat"] = now.toLocaleFormat();
    // dHash["toLocaleString"] = now.toLocaleString();
    // dHash["toLocaleTimeString"] = now.toLocaleTimeString();
    // // dHash["toSource"] = now.toSource();
    // dHash["toString"] = now.toString();
    // dHash["toTimeString"] = now.toTimeString();
    // dHash["toUTCString"] = now.toUTCString();
    // dHash["valueOf"] = now.valueOf();
//  " + y + " : now' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    res.jsonp(dHash);
}