var express = require('express');
var router = express.Router();
var products = require('./products');

router.get('/', function (req, res, next) {
    res.json({ message: 'Welcome to the autos API on earth!' });
    next();
});

router.use('/products', products);

module.exports = router;
