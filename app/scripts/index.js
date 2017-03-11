
var $ = require('jquery');

var apiUrl = 'http://api.wunderground.com/api/1a11b11566a747ab/conditions/q/SC/Inman.json'

$.get({
  url: apiUrl,
  dataType: 'jsonp'
}).done(function(data){
  console.log(data.current_observation.icon_url);
});
