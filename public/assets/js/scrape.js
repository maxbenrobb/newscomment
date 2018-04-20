var cheerio = require("cheerio");
var request = require("request");

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

            results.push({
                headline: headline,
                //summary: summary,
                link: link
            });

        });
        console.log(results);
    });
};
module.exports = data;