// Third Party Libraries
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


var Login = require('./components/login.jsx').Login;



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
      BASE_API_URL: 'https://patrickratigan.herokuapp.com/'
    });

  index: function(){
    ReactDOM.render(
      React.createElement(Splash),
      document.getElementById("app");
    )
  },

  login: function(){
    ReactDOM.render(
      React.createElement(Login),
      document.getElementById("app");
    )
  },
  userAccount: function(){
    ReactDOM.render(
      React.createElement(UserAccount),
      document.getElementById("app");
    )
  },
  addEdit: function(){
    ReactDOM.render(
      React.createElement(AddEdit),
      document.getElementById("app");
    )
  },
  videos: function(){
    ReactDOM.render(
      React.createElement(Videos),
      document.getElementById("app");
    )
  },

var appRouter = new AppRouter();

module.exports = appRouter;
