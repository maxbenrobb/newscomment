var models = require("../models");
var data = require("../scrape/data");

module.exports =  {
    headlines: function(req, res) {
        return data().then(function(dbArticle) {
            return models.Articles.create(dbArticle)
        })
        .then(function(something) {
            console.log(something.length);
        })
        .catch(function(error) {
            console.log("scrape complete");
        });
    }
}