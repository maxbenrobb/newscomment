var cheerio = require("cheerio");
var request = require("request");
var express = require("express");
var handlebars = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var app = express();
var scrape = require("./scrape/scrape.js")
var apiroutes = require("./routes/api_route.js");
var htmlroutes = require("./routes/html_route.js");

//var db = require("./models")

var databaseUrl = "scraper";
var savedDB = ["savedData"];

mongoose.connect("mongodb://localhost:27017/newsdb")
var db = mongoose.connection;
db.on("error", function(error) {
    console.log("Database Error: ", error);
});

app.get("/", function(req, res) {
    res.send("Hello World");
});

app.listen(3000, function() {
    console.log("App running on port 3000!");
})

scrape();