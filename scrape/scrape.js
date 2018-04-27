var cheerio = require("cheerio");
var request = require("request");
var models = require("../models")

console.log("\n***********************************\n" +
"Grabbing every article\n" +
"from r/Reddit News:" +
"\n***********************************\n");

var data = function() {
        request("https://www.reddit.com/r/news/", function(error, response, html) {
        var $ = cheerio.load(html);
        var results = [];

        $("p.title").each(function(i, element) {
            var headline = $(element).text().trim();
            $("#articles").text("headline");
            var link = $(element).children().attr("href");
            //var summary = $(element).children(".summary").attr();

            results = ({
                headline: headline,
                //summary: summary,
                link: link
            });
            models.Article.create(results)
            .then(function(newsdb) {
            console.log(newsdb);
            })
            .catch(function(err) {
                return console.log(err);
            });
        });

        // document.getElementById("articles").innerHTML=results;
    });
};
module.exports = data;