var $ = require('jquery');
var Backbone = require('backbone');

var parse = require('../parse');

var SessionModel = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: function(){
    return parse.BASE_API_URL + '/Session';
  }
});

var SessionCollection = Backbone.Collection.extend({
  model: SessionModel,
  url: parse.BASE_API_URL + '/Session'
});

module.exports = {SessionModel, SessionCollection};
