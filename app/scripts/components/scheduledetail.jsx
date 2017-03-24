var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');
var Header = require('./layouts/header.jsx').Header;
var ScheduleModel = require('../models/schedulemodel.js').ScheduleModel;
var ScheduleCollection = require('../models/schedulemodel.js').ScheduleCollection;
var moment = require('moment');

class ScheduleDetail extends React.Component {
  constructor(props) {
    super(props)
    var scheduleCollection = new ScheduleCollection();
    scheduleCollection.fetch().then(() => {
      var thisModel = scheduleCollection.get(this.props.scheduleId);
      this.setState({collection: scheduleCollection});
      this.setState({model: thisModel});
    })
    this.state = {
      collection: scheduleCollection
    }
  }
  render() {
    // console.log('date time', this.state.model.get('date').iso);
    return (
      <div>
        <Header />
        <div className = "wellsessionform">
          <div>
            <p>{this.state.model ? moment( this.state.model.get('date').iso ).format('dddd, LL, h:mm:ss a') : ""}</p>
            <p>{this.state.model ? this.state.model.get('description') : ""}</p>
            <button type="submit" className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = {
  ScheduleDetail
}
