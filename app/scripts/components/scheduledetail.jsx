var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');
var Header = require('./layouts/header.jsx').Header;
var ScheduleModel = require('../models/schedulemodel.js').ScheduleModel;
var ScheduleCollection = require('../models/schedulemodel.js').ScheduleCollection;
var moment = require('moment');

var scheduleCollection = new ScheduleCollection();
var schedulemodel = new ScheduleModel();

class ScheduleDetail extends React.Component {
  constructor(props) {
    super(props)

    this.deleteScheduleModel = this.deleteScheduleModel.bind(this);

    scheduleCollection.fetch().then(() => {
      var thisModel = scheduleCollection.get(this.props.scheduleId);
      this.setState({collection: scheduleCollection});
      this.setState({model: thisModel});
    })
    this.state = {
      collection: scheduleCollection
    }
  }
  deleteScheduleModel(e){
    e.preventDefault();
    var model = this.state.model;
    model.destroy().then(()=>{
      Backbone.history.navigate('userAccount/', { trigger: true} );
    });
  }
  render() {
    return (
      <div>
        <Header />
        <div className = "col-md-12">
          <div className = "col-md-4 wellsessionform">
            <p>{this.state.model ? moment( this.state.model.get('date').iso ).format('dddd, LL, h:mm a') : ""}</p>
            <p>{this.state.model ? this.state.model.get('description') : ""}</p>
            <a onClick={(e) => {this.deleteScheduleModel(e)}} className="btn btn-danger">Delete Schedule</a>
          </div>

      <div className = "col-md-4">

      </div>
      <div className = "col-md-4">
        Weather
      </div>
    </div>
    </div>
    )
  }
}

module.exports = {
  ScheduleDetail
}
