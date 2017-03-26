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
          <img className="splashimage" src="./images/splash2.gif"></img>
        </div>


        <div className="container">
          <div className = "row" >
          <div className = "well">
          <div className="col-md-4 ">
            <h1>Arsène Wenger</h1><img src="./images/arsene.jpg" ></img>
            <p>It's silly to work hard the whole week and then spoil it by not preparing properly before the game.</p>

          </div>

          <div className="col-md-4 ">
            <h1>Gian Piero Ventura</h1><img src="./images/italian.jpg" ></img>
            <p>Whenever I need to breezily inflict a tough training session on my athletes, I know I can trust Training Dean's patented technology with API infused brilliance. 100% user friendly, 110% understanding.</p>
            </div>
          <div className="col-md-4">
            <h1>Diego Maradona</h1><img src="./images/maradona.jpg" ></img>
            <p>Training Dean is the reason why people succeed. It is because of hard work. Luck has nothing to do with success.</p>

          </div>
        </div>
        </div>
      </div>
      </div>

    )
  };
}

module.exports = {
Splash
};
