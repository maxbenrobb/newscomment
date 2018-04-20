var db = require("../models");
var articles = require("../models/Article.js");
var router = require("express").Router();

router.get("/", function(req, res) {
    res.send(articles.headlines)
});


module.exports = router;