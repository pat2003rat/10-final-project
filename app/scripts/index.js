var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

// $.ajaxSetup({
//   beforeSend: function(xhr){
//     xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
//     }
//   });

require('./router');

$(function(){
  Backbone.history.start()
});



// create a backbone model...

 var apiUrl2 = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCTIcYdo-4uX8PxXmAJi4aoA&order=viewCount&q=goalkeeper&key=AIzaSyCidEIvUwufNW7-irKd9df0ceTyetzjLME'

$.get({
  url: apiUrl2,
  dataType: 'jsonp'
}).done(function(data){
  // console.log(data.items)
  // // Show all objects
  // data.items.forEach( function(obj) {
  //   console.log(obj.snippet.description);
  // })
  // // Show the first object
  // data.items[0].snippet.description;
  // SHow the first 5
  for (var i = 0; i < 5; i++) {
    console.log(data.items[i].snippet.description)
  }
});
