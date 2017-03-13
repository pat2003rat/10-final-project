
var $ = require('jquery');

var apiUrl = 'http://api.wunderground.com/api/1a11b11566a747ab/conditions/q/SC/Inman.json'

$.get({
  url: apiUrl,
  dataType: 'jsonp'
}).done(function(data){
  console.log(data.current_observation.icon_url);
});

function setupAjax(loggedInUser){
  $.ajaxSetup({
      beforeSend: function(xhr){
        xhr.setRequestHeader("X-Parse-Application-Id", "tiygvl");
        xhr.setRequestHeader("X-Parse-REST-API-Key", "slumber");
        if(loggedInUser){
          xhr.setRequestHeader("X-Parse-Session-Token", loggedInUser.sessionToken);
        }
      }
  });
}

setupAjax();

var apiUrl = 'https://tiny-parse-server.herokuapp.com';

// $.get(apiUrl + '/Puppy').then(function(data){
//   console.log(data);
// });
//
// $.post(apiUrl + '/Puppy', {'name': 'Kepler'}).then(function(data){
//   console.log(data);
// });

$('#signup').on('submit', function(e){
  e.preventDefault();

  var username = $('#signup-email').val();
  var password = $('#signup-password').val();
  var user = {
    username: username,
    password: password
  };

  $.post(apiUrl + '/users', user).then(function(data){
    console.log(data);
  });

});

$('#login').on('submit', function(e){
  e.preventDefault();

  var username = $('#email-login').val();
  var password = $('#password-login').val();
  console.log(username);
  console.log(password);

  var url = apiUrl + '/login?username=' +
            encodeURIComponent(username) + '&' +
            'password=' + encodeURIComponent(password);

  console.log(url);

  $.get(url).then(function(data){
    console.log(data);
    var userData = JSON.stringify(data);
    localStorage.setItem('user', userData);
  });
});

var loggedInUser = localStorage.getItem('user');

if(loggedInUser){
  loggedInUser = JSON.parse(loggedInUser);
  loggedInUser.sessionToken;
  setupAjax(loggedInUser);

  $.get(apiUrl + '/users/me').then(function(data){
    console.log(data);
  })
}
