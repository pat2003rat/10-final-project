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
              <div className="container-fluid">

       <div className="column-center">
         <img src="./images/splash1.gif"></img>
       <div className="column-left"></div>
         <img src="./images/splash2.gif"></img>
       <div className="column-right"></div>
        <img src="./images/splash3.gif"></img>
        <img src="./images/splash4.gif"></img>



       </div>
    </div>
          </div>
        </div>
      </div>
    )
  }
};

module.exports = {
Splash
};
