var $ = require('jquery');
var Backbone = require('backbone');

var parse = {
  BASE_API_URL: '',

  initialize: function(config){
    config = config || {};

    // console.log('config', config);
    if(config.BASE_API_URL){
      this.BASE_API_URL = config.BASE_API_URL;
    }

    $.ajaxSetup({
      beforeSend: function(xhr){
        xhr.setRequestHeader("X-Parse-Application-Id", "patrick");
        xhr.setRequestHeader("X-Parse-REST-API-Key", "gunner");

        if (config.scheduleId) {
          xhr.setRequestHeader("X-Parse-Schedule-Token", config.scheduleId)
        }
      }
    });
  },

  deinitialize: function(){
    $.ajaxSetup({
      beforeSend: function(xhr){
        xhr.setRequestHeader("X-Parse-Application-Id", null);
        xhr.setRequestHeader("X-Parse-REST-API-Key", null);
        xhr.setRequestHeader("X-Parse-Schedule-Token", null);
      }
    })
  }
}

var ParseModel = Backbone.Model.extend({
  idAttribute: 'objectId',
  sync: function(){
    var User = require('./models/user').User;

    var user = new User();

    if(user){
      parse.initialize({scheduleId: user.get('scheduleToken')});
    }else{
      parse.initialize();
    }

    var xhr = Backbone.Model.prototype.sync.apply(this, arguments);

    parse.deinitialize();

    return xhr;
  },
  save: function(key, val, options){
    delete this.attributes.createdAt;
    delete this.attributes.updatedAt;

    return Backbone.Model.prototype.save.apply(this, arguments);
  },
  setPointer: function(field, parseClass, objectId){
    var pointerObject = {
      "__type": "Pointer",
      "className": parseClass,
      "objectId": objectId
    };

    this.set(field, pointerObject);

    return this;
  }
});

var ParseCollection = Backbone.Collection.extend({
  whereClause: {},
  sync: function(){
    var User = require('./models/user').User;
    var user = User.current();

    if(user){
      parse.initialize({scheduleId: user.get('scheduleToken')});
    }else{
      parse.initialize();
    }

    var xhr = Backbone.Collection.prototype.sync.apply(this, arguments);

    parse.deinitialize();

    return xhr;
  },
  parseWhere: function(field, value, objectId){
    if(objectId){
      value = {
        field: field,
        className: value,
        objectId: objectId,
        '__type': 'Pointer'
      };
    }
    this.whereClause[field] = value;

    return this;
  },
  url: function(){
    var url = this.baseUrl;

    if(Object.keys(this.whereClause).length > 0){
      url += '?where=' + JSON.stringify(this.whereClause);
      this.whereClause = {};
    }

    return url;
  },
  parse: function(data){
    return data.results;
  }
});

var ParseFile = ParseModel.extend({
  urlRoot: function(){
    return 'https://patrickratigan.herokuapp.com/files' + this.get('name');
  }
})

module.exports = {
  parse,
  ParseModel,
  ParseCollection,
  ParseFile
}
