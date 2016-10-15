var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var proxy = require('./routes/proxy');
var upload = require('./routes/upload');
var api = require('./routes/api');
var startCampaign = require('./routes/startCampaign')
var app = express();
var schedule = require('node-schedule');
mongoose.connect('mongodb://localhost/campaigns_db');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api);
app.use('/getCampaigns', routes);
app.use('/users', users);
app.use('/call', proxy);
app.use('/upload', upload);
app.use('/startCampaign', startCampaign);
app.get('/test', function () {
    console.log("here");
    //console.log(Date.now());
    var startTime = new Date(Date.now());
    //var endTime = new Date(now.getTime() + 5000);
    console.log(startTime);
    var j = schedule.scheduleJob({start: startTime, rule: '1 * * * *'}, function () {
        var endTime = new Date(Date.now());
        console.log('Time for tea!' + endTime);
    });
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

console.log('Server running');
module.exports = app;
