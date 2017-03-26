var $ = require('jquery');
var Backbone = require('backbone');

var Youtube = Backbone.Model.extend({
  urlRoot: 'https://patrickratigan.herokuapp.com/classes/youtube',
});

var YoutubeCollection = Backbone.Collection.extend({
  model: Youtube,
  url: function(){
    return 'https://patrickratigan.herokuapp.com/classes/youtube'
  },

  parse: function(data){
    return data.obj.snippet.description;
  }
});

module.exports = {
  Youtube,
  YoutubeCollection
}
