var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');
var Wunderground = require('../models/wunderground').Wunderground;
var Header = require('./layouts/header.jsx').Header;
var ScheduleCollection = require('../models/schedulemodel.js').ScheduleCollection;
var moment = require('moment')


// var schedule = new Schedule;

class UserAccount extends React.Component {
  constructor(props){
    super(props);
    var weather = new Wunderground;
    // weather.fetch().then(()=>{
    //   console.log(weather);
    //   this.setState({weather})
    // })
    var scheduleCollection = new ScheduleCollection();
    scheduleCollection.fetch().then(() => {
      this.setState({collection: scheduleCollection});
    })
    this.state = {
      weather: weather,
      collection: scheduleCollection
    };
  }
  render(){
    var schedules = this.state.collection.map(function(schedule) {
      var scheduleId = schedule.get('objectId')
      return(
        <li key={schedule.cid}>
          <a href={"#scheduledetail/" + scheduleId }>{moment(schedule.get('date').iso).format('LLLL')}</a>
          {/* {schedule.get('description')} */}
        </li>

      )
    })
      //
      // var scheduleModels = this.state.collection.map((scheduleModel) => {
      //   return (
      //     scheduleModel
      //   )
      // })
      return (
        <div className="container">
          <Header />
          <div className="title text-center">
          </div>
          <div id="pagewrap">
            <header>
      		    <h2>Welcome to your Training Schedule</h2>
      	    </header>
      	    <section id="content">
              <div className="col-md-6">
      		      <h2>Schedule</h2>
                  <ul>
                    <div className="wellSessions">
                    { schedules }
                    </div>
                  </ul>
                  <button type="Add" className="btn btn-danger"><a href="#scheduleform/">Add</a></button>
                  {/* // <button type="submit" className="btn btn-primary">Edit</button> */}
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
