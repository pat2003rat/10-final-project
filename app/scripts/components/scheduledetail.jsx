var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');
var Header = require('./layouts/header.jsx').Header;
var ScheduleModel = require('../models/schedulemodel.js').ScheduleModel;
var ScheduleCollection = require('../models/schedulemodel.js').ScheduleCollection;

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
    return (
      <div>
        Schedule Detail for {this.props.scheduleId}
        <Header />
        <div className = "wellsessionform">
        <div>
          <p>{this.state.model ? this.state.model.get('date').iso : ""}</p>
          <p>{this.state.model ? this.state.model.get('description') : ""}</p>
        </div>
      </div>
      </div>
    )
  }
}

module.exports = {
  ScheduleDetail
}
