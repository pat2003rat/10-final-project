var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

class Splash extends React.Component {
  render (){
    return (
      <div id="container container-splash" >
        <div className="col-xs-12 col-md-4 ">
        </div>
        <div className="col-xs-12 col-md-4 col-text">
          <span>
            <h1 className = "centering-title-splash">Training Dean <img className ="logoimagesplash" src="./images/hatlogo.png" ></img> </h1>



              {/* <img className="logo" src="./images/logo.png"></img> */}
            </span>
        </div>

        <div className="col-xs-12 col-md-4  ">
        </div>

        <div className="imgContainer">
          <img className="splashimagesplash" src="./images/splash2.gif"></img>
        </div>

        <div className="container">
          <a href="#login/"> <button className="btn btn-danger loginbutton"> Login </button> </a>
          <div className = "row userstories" >
          <div className="col-xs-12 col-md-4 ">
              <div className = "backgroundusercolor" >
            <h2>Arsène Wenger</h2><img src="./images/arsene.jpg" ></img>
            <div className="text_backsplash">
            <p>It's silly to work hard the whole week and then spoil it by not preparing properly before the game.</p>
            </div>
          </div>
        </div>



          <div className="col-xs-12 col-md-4 ">
              <div className = "backgroundusercolor" >
            <h2>Gian Piero Ventura</h2><img src="./images/italian.jpg" ></img>
              <div className="text_backsplash">
            <p>Whenever I need to breezily inflict a tough training session on my athletes, I know I can trust Training Dean's patented technology with API infused brilliance. 100% user friendly, 110% understanding.</p>
            </div>
          </div>
          </div>
          <div className="col-xs-12 col-md-4">
                <div className = "backgroundusercolor" >
            <h2>Diego Maradona</h2><img src="./images/Maradona.jpg" ></img>
              <div className="text_backsplash">
            <p>Training Dean is the reason why people succeed. It is because of hard work. Luck has nothing to do with success.</p>
          </div>
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
