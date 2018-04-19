var db = require("../models");
var articles = require("../models/Article.js");
var router = require("express").Router();

router.get("/", articles.headlines);

module.exports = router;