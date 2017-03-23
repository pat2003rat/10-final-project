var $ = require('jquery');
var Backbone = require('backbone');

var parse = require('../parse').parse;
var ParseModel = require('../parse').ParseModel;
var ParseCollection = require('../parse').ParseCollection;

var ScheduleModel = ParseModel.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://patrickratigan.herokuapp.com/classes/Schedule'
});

var ScheduleCollection = ParseCollection.extend({
  model: ScheduleModel,
  baseUrl: 'https://patrickratigan.herokuapp.com/classes/Schedule'
});

module.exports = {
  ScheduleModel,
  ScheduleCollection
};
