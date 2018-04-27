var db = require("../models");
var articles = require("../models/Article.js");
var router = require("express").Router();
var scrape = require("../scrape/scrape.js");

router.post("/scrape", function(req, res) {
    res.json(scrape)

});

console.log(scrape);

module.exports = router;