var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

class Splash extends React.Component {
  render (){
    return (
      <div id="container" >
        <span><h1>Be your own<img src="./images/logo.png"></img></h1></span>
          <a href="#login/"> <button className="btn btn-primary"> Login </button> </a>

        <div className="imgContainer">

            <img className="splashimage" src="./images/splash1.gif"></img>
        </div>
      </div>
    )
  };
}

module.exports = {
Splash
};
