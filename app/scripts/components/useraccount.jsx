var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');
var Wunderground = require('../models/wunderground').Wunderground;

class UserAccount extends React.Component {
  constructor(props){
    super(props);
    var weather = new Wunderground;
    weather.fetch().then(()=>{
      console.log(weather);
      this.setState({weather})
    })
    this.state = {
      weather
  };
}
    render(){
      return (
        <div className="container">
          <div className="title text-center">
            <h1>Training Dean</h1>
          </div>
          <div id="pagewrap">
            <header>
      		    <h2>Welcome to your Training Sessions</h2>
      	    </header>
      	    <section id="content">
              <div className="col-md-5">
      		      <h2>Schedule</h2>
              </div>
      	    </section>
            <section id="middle">
              <div className="col-md-2 text-center">
                <h2>Weather</h2>
                <span><a href={this.state.weather.get('ob_url')}>Forecast</a></span>
          <span><img src={this.state.weather.get('icon_url')}/></span>
              </div>
            </section>
          <div className="col-md-5 text-center">
            <aside id="sidebar">
      		    <h2>Videos</h2>
      	    </aside>
          </div>
        </div>
      </div>
      )
    }
};

module.exports = {
UserAccount
};
