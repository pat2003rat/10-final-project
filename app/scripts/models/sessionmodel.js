var $ = require('jquery');
var Backbone = require('backbone');

var parse = require('../parse').parse;
var ParseModel = require('../parse').ParseModel;
var ParseCollection = require('../parse').ParseCollection;

var SessionModel = ParseModel.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://patrickratigan.herokuapp.com/classes/Schedule'
});

var SessionCollection = ParseCollection.extend({
  model: SessionModel,
  baseUrl: 'https://patrickratigan.herokuapp.com/classes/Schedule'
});

module.exports = {
  SessionModel,
  SessionCollection
};
