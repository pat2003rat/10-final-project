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
    //   console.log(this.state.weather);
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
      var scheduleTime = schedule.get('time');
      var scheduleTimeNumber = Number(scheduleTime);
      var scheduleId = schedule.get('objectId')
      // console.log('schedule time', scheduleTime);
      // console.log('schedule time type', scheduleTimeNumber);
      return(
        <li key={schedule.cid}>
          <a href={"#scheduledetail/" + scheduleId }>{ moment(schedule.get('date').iso ).format('dddd, LL h:mm a')}</a>


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
                    <div className="wellSessions">
                      <ul className="schedulelisting">
                        { schedules }
                      </ul>
                    </div>
                  <button type="Add" className="btn btn-danger"><a href="#scheduleform/">Add</a></button>
                  {/* // <button type="submit" className="btn btn-primary">Edit</button> */}
              </div>
      	    </section>
            <section id="middle">
              <div className="col-md-6 text-center">
                <h2>Today's Weather</h2>
                <span><a href={this.state.weather.get('ob_url')}>Forecast</a></span>
                <p>Temperature<span>{this.state.weather.get('temp_f')}</span></p>
                <p>Relative Humidity<span>{this.state.weather.get('relative_humidity')}</span></p>
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
