var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.rend('index', {title: "WritingPrompts"});
});

module.exports = router; 