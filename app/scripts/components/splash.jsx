var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

class Splash extends React.Component {
  render (){
    return (
      <div id="container" >
        <a href="#login/"> <button className="btn btn-primary"> Login </button> </a>
        <span><h1><img src="./images/logo.png"></img></h1></span>
        <div className="imgContainer">
            <img className="image" src="./images/splash1.gif"></img>
            <img className="image" src="./images/splash2.gif"></img>
            <img className="image" src="https://media.giphy.com/media/Irqe12yuXROuI/giphy.gif"></img>
        </div>
      </div>
    )
  };
}

module.exports = {
Splash
};
