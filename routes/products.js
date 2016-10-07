var express = require('express');
var util = require('util');
var router = express.Router();

router.param('id', function (req, res, next, id) {
    if (id) {
        req.model = {
            name: util.format('test %d', id),
            id: id,
        };
    }
    
    next();
});

router
.route('/')

.get(function (req, res) {
    res.json({ message: 'This is products list API' });
})
.post(function (req, res) {
    res.json({ mesage: 'This is product create API'});
});

router
.route('/:id')

.get(function (req, res) {
    res.json({ message: 'This is product detail API' , detail: req.model});
})
.put(function (req, res) {
    res.json({ message: 'This is product update API' , detail: req.model});
})
.delete(function (req, res) {
    res.json({ message: 'This is product delete API' , detail: req.model});
});

module.exports = router;
