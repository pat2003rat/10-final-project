var $ = require('jquery');
var Backbone = require('backbone');

var parse = require('../parse');
var ParseModel = require('../parse').ParseModel;

var User = ParseModel.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://patrickratigan.herokuapp.com/users'
  },{
  login: function(credentials, callback){
    var url = 'https://patrickratigan.herokuapp.com' + '/login?' + $.param(credentials);
    parse.parse.initialize();
    $.get(url).then(data => {
      var newUser = new User(data);
      var store = this.store;
      store(newUser);
      callback(newUser);
    });
    
  },
  signup: function(credentials){
    var newUser= new User(credentials);
    var store = this.store;
    newUser.save().then(() => {
      store(newUser);
    });
    return newUser;
  },
  store: function(user){
    localStorage.setItem('user', JSON.stringify(user.toJSON()));
  },

  current: function(){
    var user = localStorage.getItem('user');

    if(!user){
      return false;
    }
    var currentUser = new User(JSON.parse(user));

    if (!currentUser.get('scheduleToken')){
      return false;
    }

    return currentUser;
  }
});

module.exports = {
  User
}
