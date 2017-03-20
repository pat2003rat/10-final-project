var $ = require('jquery');
var Backbone = require('backbone');

var parse = require('../parse');

var SessionForm = Backbone.Model.extend({
  idAttribute: 'objectId'
});


module.exports = SessionForm;
