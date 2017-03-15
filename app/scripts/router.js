// Third Party Libraries
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


var Login = require('./components/login.jsx').Login;
// var AddEdit = require('./components/addedit.jsx').AddEdit;
var Splash = require('./components/splash.jsx').Splash;
var UserAccount = require('./components/useraccount.jsx').UserAccount;
// var Videos = require('./components/videos.jsx').Videos;

var User = require('./models/user.js')
var parse = require('./parse.js');

//Controllers
var AppRouter = Backbone.Router.extend({
  routes:{
    "": 'index',
    "login/": "login",
    "userAccount/": "userAccount",
    "addEdit/": "addEdit",
    "videos/": "videos"

  },
  initialize: function(){
    parse.setup({
      BASE_API_URL: 'https://patrickratigan.herokuapp.com'
    });
},

// execute: function(callback, args, name){
//   var user = User.current();
//   if(!user && name != 'login'){
//     this.navigate('', {trigger: true});
//     return false;
//   }
//   if (user && name == "login"){
//     this.navigate('login/', {trigger:true});
//     return false;
//   }
//
//   return Backbone.Router.prototype.execute.apply(this, arguments);
// },

  index: function(){

    ReactDOM.render(
      React.createElement(Splash),
      document.getElementById("app")
    )
  },

  login: function(){
    ReactDOM.render(
      React.createElement(Login),
      document.getElementById("app")
    )
  },
  userAccount: function(){
    ReactDOM.render(
      React.createElement(UserAccount), //do i need id: here?//
      document.getElementById("app")
    )
  },
  addEdit: function(){
    ReactDOM.render(
      React.createElement(AddEdit),
      document.getElementById("app")
    )
  },
  videos: function(){
    ReactDOM.render(
      React.createElement(Videos),
      document.getElementById("app")
    )
  }
});

var appRouter = new AppRouter();

module.exports = appRouter;
