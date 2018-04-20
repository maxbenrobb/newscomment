var cheerio = require("cheerio");
var request = require("request");
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var app = express();
// var scrape = require("./assets/js/scrape.js")
var apiroutes = require("./routes/api_route.js");
var htmlroutes = require("./routes/html_route.js");

//var db = require("./models")

var databaseUrl = "scraper";
var savedDB = ["savedData"];

app.use(express.static('public'));

mongoose.connect("mongodb://localhost:27017/newsdb")
var db = mongoose.connection;
db.on("error", function(error) {
    console.log("Database Error: ", error);
});

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get("/", function(req, res) {
    res.render('home');
});

app.listen(3000, function() {
    console.log("App running on port 3000!");
})

// scrape();