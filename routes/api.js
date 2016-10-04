/**
 * Created by gandharva.rb on 01/10/16.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var mongoose = require('mongoose');
var _ = require('lodash');
var multer = require('multer');
var campaigns = require('../models/campaigns');
campaigns.methods(['get', 'post', 'put', 'delete']);
campaigns.register(router, '/campaigns');
router.get('/campaigns', function (req, res) {

});
var upload = multer({dest: '../public/csv/'});
var type = upload.single('csv');
var files = require('../models/files');
files.methods(['get', 'delete']);
files.register(router, '/files');
router.get('/files', function (req, res) {
});

var Schema = mongoose.Schema;
var schema = new Schema({
    file: {
        data: Buffer,
        contentType: String
    },
    fileType: String,
    userId: {
        type: String,
        required: true
    }
});
var File = require('mongoose').model("Files");

router.post('/files', function (req, res) {
    /*console.log("hello");
    console.log("Testing\n " + req.file.originalname);
    console.log(req.file.path);
    var tmp_path = req.file.path;
    var target_path = '../uploads/' + req.file.originalname;
    console.error('removed old docs');
    // store an img in binary in mongo
    var file = new File;
    file.file.data = fs.readFileSync(tmp_path);
    console.log(file.file.data);
    file.file.contentType = req.file.mimetype;
    file.fileType = req.file.mimetype;
    file.userId = "abcdwer";
    File.create(file, function (err, small) {
        if (err) {
            res.status(500);
            return console.error(err);
        }
        // saved!
        console.log("done");
        res.send()
    });*/
    //a.save();
    res.send(200);
});
module.exports = router;