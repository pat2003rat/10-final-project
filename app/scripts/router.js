// Third Party Libraries
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


var Login = require('./components/login.jsx').Login;
// var AddEdit = require('./components/addedit.jsx').AddEdit;
var Splash = require('./components/splash.jsx').Splash;
// var UserAccount = require('./components/useraccount.jsx').UserAccount;
// var Videos = require('./components/videos.jsx').Videos;

var setup = require('./setup.js');

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
    setup.setup({
      BASE_API_URL: 'https://patrickratigan.herokuapp.com/'
    });
},
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
      React.createElement(UserAccount),
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
