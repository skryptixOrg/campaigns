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
var User = require('../models/user');
User.methods(['get', 'post', 'put', 'delete']);
User.register(router, '/users');
router.get('/users', function (req, res) {
});
router.post('/validateUser', function (req, res) {
    User.findOne(
        {
            'user_name': req.body["user_name"],
            user_password: req.body.password
        }, function (err, user) {
            if (err) return console.log(err);
            console.log(user);
            if(user !== null)
                res.send(user);
            else {
                res.status(404);
                res.send();
            }
        });
});
module.exports = router;