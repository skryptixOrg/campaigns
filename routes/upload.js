var express = require('express');
var router = express.Router();
var request = require('request');
var _ = require('lodash');
var multer = require('multer');
var upload = multer({dest: './public/csv/'});
var type = upload.single('csv');
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    file: {
        data: Buffer,
        contentType: String
    },
    fileType:String,
    userId: {
        type: String,
        required: true
    }
});

// connect to mongo
//mongoose.connect('localhost', 'testing_storeImg');
var File = mongoose.model('File', schema);

router.post('/', type, function (req, res, next) {
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
    file.fileType= req.file.mimetype;
    file.userId= "abcdwer";
    File.create(file, function (err, small) {
        if (err){
            res.status(500);
            return console.error(err);
        }
        // saved!
        console.log("done");
    });
    //a.save();

});
module.exports = router;
