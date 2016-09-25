var express = require('express');
var router = express.Router();

var users = require('./users');
var admin = require('./admin');
var api = require('./api');

router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

module.exports = function (app) {
    app.use('/', router);
    app.use('/users', users);
    app.use('/admin', admin);
    app.use('/api', api);
};
