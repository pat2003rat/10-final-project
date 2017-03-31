var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');
var Header = require('./layouts/header.jsx').Header;
var ScheduleModel = require('../models/schedulemodel.js').ScheduleModel;
var ScheduleCollection = require('../models/schedulemodel.js').ScheduleCollection;


var parse = require('../parse');

class ScheduleForm extends React.Component {
  constructor(props){
    super(props);
    this.handleDate = this.handleDate.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleVideo = this.handleVideo.bind(this);
    this.handleScheduleForm = this.handleScheduleForm.bind(this);

    this.state = {
      date: '',
      time: '',
      description: '',
      video: ''
    }
  }

  handleDate(e) {
    this.setState({date: e.target.value });
  }

  handleTime(e) {
    this.setState({time: e.target.value});
  }

  handleDescription(e) {
    this.setState({description: e.target.value});
  }

  handleVideo(e){
    this.setState({video: e.target.value});
  }

  handleScheduleForm(e){
    e.preventDefault();

    var newDate = new Date(this.state.date + ' ' + this.state.time);

    var dateParse = {
      "__type" : "Date",
      "iso" : newDate
    };

    var scheduleCollection = new ScheduleCollection();
    var scheduleModel = new ScheduleModel({
      date: dateParse,
      description: this.state.description
    })

    scheduleCollection.create(scheduleModel);

    Backbone.history.navigate('userAccount/', { trigger: true });
  }

  render() {
      return (
        <div className="container-fluid">
          <Header />
          <img className="clipboard" src="./images/clipboard.png" alt="" />
          <div className = "clipboardpositioning-fluid">
            <div className = "row">

            <div className = "col-xs-12 col-md-6">
              <form className="form-vertical" onSubmit={this.handleScheduleForm}>
                <h1>Training Report</h1>
                <br></br>
                <div className="form-group">
                  <div className = "col-xs-12" >
                    <label htmlFor="input" className="col-md-6 datescheduleform">Date</label>
                    <input onChange={this.handleDate} id="inputDate" placeholder="Date" type="date"/>
                  </div>
                </div>
                <div className="form-group">
                  <div className = "col-xs-12" >
                    <label htmlFor="inputTime" className="col-md-6 timescheduleform">Time</label>
                    <input onChange={this.handleTime} id="inputTime" placeholder="Time" type="time"/>
                  </div>
                </div>
                <div className="form-group">
                  <div className = "col-xs-12" >
                    <label htmlFor="textArea" className="col-md-6 trainingdescriptionscheduleform">Training Description</label>
                    <textarea onChange={this.handleDescription} rows="9"  id="inputDescription" placeholder="Training breakdown here"></textarea>
                  </div>
                </div>

            <div className="form-group">
              <div className="col-xs-12 col-md-6">
                <div className ="buttonsform">
                <button type="submit" className="btn btn-danger"> Submit </button>
                <button type="cancel" className="btn btn-primary"> Cancel Create Session </button>
              </div>
              </div>
            </div>
              </form>
            </div>
        </div>
      </div>
    </div>
    )
  }
};

module.exports = {
  ScheduleForm
}
