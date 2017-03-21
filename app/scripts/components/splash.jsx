var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

class Splash extends React.Component {
  render (){
    return (
      <div className = "container">
        <div className = "row">
          <a href="#login/"> <button className="btn btn-primary"> Login </button> </a>
          <div className = "well">
            <span><h1><img src="./images/logo.png"></img></h1></span>
          </div>
        </div>
      </div>
    )
  }
};

module.exports = {
Splash
};
