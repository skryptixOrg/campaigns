var express = require('express');
var router = express.Router();
var request = require('request');
var _ = require('lodash');
var multer = require('multer');
var couch = require('couchbase');
/*var csvTojson= require("csvtojson").Convertor;
var convertor= new csvTojson();*/
var bucket = (new couch.Cluster("http://localhost:8091")).openBucket("csvToUID");
var upload = multer({ dest: './public/csv/'});
var type = upload.single('csv');

router.post('/',type, function (req,res,next) {

    console.log("Testing\n " + req.file.originalname);
    console.log(req.file.path);
    var tmp_path = req.file.path;
    var target_path = '../uploads/' + req.file.originalname;
    console.log(target_path);

    /*var src = fs.createReadStream(tmp_path);
    console.log("src");
    var dest = fs.createWriteStream(target_path);
    console.log(dest);
    src.pipe(dest);
    src.on('end', function() { res.send('complete'); });
    src.on('error', function(err) { res.send('error'); });*/
    converter.fromFile("../csv/file.csv",function(err,result){

    });
    bucket.upsert('user1', jsonVersion, function (err, response){
        if (err) {
            console.log('Failed to save to Couchbase', err);
            return;
        } else {
            res.send('Saved to Couchbase!');
        }
    });

    res.send('ola')
});

module.exports = router;
