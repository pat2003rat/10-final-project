var $ = require('jquery');
var Backbone = require('backbone');


//require in where to store information..

var Youtube = Backbone.Model.extend({
  urlRoot: 'https://patrickratigan.herokuapp.com/classes/youtube',
});

var YoutubeCollection = Backbone.Collection.extend({
  model: Youtube,
  url: function(){
    return: 'https://patrickratigan.herokuapp.com/classes/youtube'
  },

  parse: function(data){
    return data.results;
  }
});

module.exports = {
  Youtube,
  YoutubeCollection
}
