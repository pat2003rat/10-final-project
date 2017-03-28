var $ = require('jquery');
var Backbone = require('backbone');

var parse = require('../parse').parse;
var ParseModel = require('../parse').ParseModel;
var ParseCollection = require('../parse').ParseCollection;

var SchedulePic = ParseModel.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://patrickratigan.herokuapp.com/classes/image'
});

var SchedulePicCollection = ParseCollection.extend({
  model: SchedulePic,
  baseUrl: 'https://patrickratigan.herokuapp.com/classes/image'
});

module.exports = {
  SchedulePicCollection,
  SchedulePic
};
