/**
 * Created by gandharva.rb on 11/10/16.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var _ = require('lodash');
var multer = require('multer');
var upload = multer({dest: './public/csv/'});
var type = upload.single('csv');
var fs = require('fs');
var mongoose = require('mongoose');
var File = require('../models/files');
var parseString = require('xml2js').parseString;
router.post('/', type, function (req, res, next) {
    var tmp_path = req.file.path;
    var target_path = '../uploads/' + req.file.originalname;
    var file = new File;
    file.file.data = fs.readFileSync(tmp_path);
    //console.log(file.file.data);
    file.file.contentType = req.file.mimetype;
    file.fileType = req.file.mimetype;
    file.userId = req.body.userId;
    File.create(file, function (err, small) {
        if (err) {
            res.status(403);
            return res.send(err);
        }
        req.fileData = small;
        next();
    });
});
var startCampaign = function (req, res, next) {
    var r = req.fileData.file.data.toString();
    r = r.replace(/\r\n/g, ",").split(',');
    r.splice(r.length - 1, 1);
    req.csv = r;
    console.log(r);
    next();
};
router.post('/', startCampaign);
router.post('/', function (req, res, next) {
    var exotelSid = "skryptix",
        exoteltoken = "5b93c05441578f7aa28e014bcb630cf67f070a9f";
    var url = "https://" + exotelSid + ":" + exoteltoken + "@twilix.exotel.in/v1/Accounts/" + exotelSid + "/Calls/connect";
    _.each(req.csv, function (item) {
        request({
            url: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/javascript'
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
            }
        });
    });
    res.send('yay');
});
module.exports = router;
