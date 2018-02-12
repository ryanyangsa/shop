var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send("Ryan's Awesome Shop - Admin Page");
});

module.exports = router;