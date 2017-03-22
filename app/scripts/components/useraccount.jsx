var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');
var Wunderground = require('../models/wunderground').Wunderground;
var Header = require('./layouts/header.jsx').Header;
var SessionCollection = require('../models/sessionmodel.js').SessionCollection;


// var session = new Session;

class UserAccount extends React.Component {
  constructor(props){
    super(props);
    var weather = new Wunderground;
    // weather.fetch().then(()=>{
    //   console.log(weather);
    //   this.setState({weather})
    // })
    var sessionCollection = new SessionCollection();
    sessionCollection.fetch().then(() => {
      this.setState({collection: sessionCollection});
      console.log(this.state.collection);
    })
    this.state = {
      weather: weather,
      collection: sessionCollection
    };
  }
    render(){
      // var sessionModels = this.state.collection.map((sessionModel) => {
      //   return (
      //     // sessionModel
      //   )
      // })
      return (
        <div className="container">
          <Header />
          <div className="title text-center">
            <h1>Training Dean</h1>
          </div>
          <div id="pagewrap">
            <header>

      		    <h2>Welcome 'name' to your Training Sessions</h2>
      	    </header>
      	    <section id="content">
              <div className="col-md-6">
      		      <h2>Schedule</h2>
                  <button type="Add" className="btn btn-danger"><a href="#sessionform/">Add</a></button>
                  <button type="submit" className="btn btn-primary">Edit</button>
              </div>
      	    </section>
            <section id="middle">
              <div className="col-md-6 text-center">
                <h2>Weather</h2>
                <span><a href={this.state.weather.get('ob_url')}>Forecast</a></span>
          <span><img src={this.state.weather.get('icon_url')}/></span>
              </div>
            </section>
          <div className="col-md-5 text-center">

          </div>
        </div>
      </div>
      )
    }
};

module.exports = {
UserAccount
};
