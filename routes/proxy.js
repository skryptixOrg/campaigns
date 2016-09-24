var express = require('express');
var router = express.Router();
var request = require('request');
var _ = require('lodash');
var csv = require('./csv');
var couch = require('couchbase');
var parseString = require('xml2js').parseString;
var bucket = (new couch.Cluster("http://localhost:8091")).openBucket("bucketName");

router.get('/', function (req, res, next) {
    var exotelSid = "skryptix",
        exoteltoken = "5b93c05441578f7aa28e014bcb630cf67f070a9f";
    var url = "https://" + exotelSid + ":" + exoteltoken + "@twilix.exotel.in/v1/Accounts/" + exotelSid + "/Calls/connect";
    _.each(csv.csv, function (item) {
        request({
            url: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/javascript',
            },
            form: {
                From: item,
                CallerId: "08030474093",
                Url: "http://my.exotel.in/exoml/start/100989",
                CallType: "trans"
            }
        }, function (error, response, body) {
            if (error) {
                console.log(error);
            } else {
                parseString(body, function (err, result) {
                    console.dir(result);
                });
                /*bucket.insert("call-details", { To: , shoeSize: 13}, function(error, result) {
                 if(error)
                 console.log(error);
                 else
                 console.log(result);
                 });*/
            }
        });
    });
    res.send('yay');
});

module.exports = router;
