var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send("Ryan's Awesome Shop - Home Page");
});

module.exports = router;