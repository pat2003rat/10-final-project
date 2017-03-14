var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
    }
  });

require('./router');

$(function(){
  Backbone.history.start()
});

var apiUrl = 'http://api.wunderground.com/api/1a11b11566a747ab/conditions/q/SC/Inman.json'


$.get({
  url: apiUrl,
  dataType: 'jsonp'
}, function(data){
  console.log(data.current_observation.icon_url);
})
