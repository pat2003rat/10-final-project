var $ = require('jquery');
var Backbone = require('backbone');

var parse = require('../parse');

var SessionForm = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: function(){
    return parse.BASE_API_URL + '/sessionForm';
  }

},{

date: function()

},{

time: function()

},{

description: function()

},{

video: function()

},{

}
});


module.exports = SessionForm;
