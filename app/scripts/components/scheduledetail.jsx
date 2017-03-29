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
    this.editScheduleModel = this.editScheduleModel.bind(this);
    this.editMode = this.editMode.bind(this);
    this.setDescription = this.setDescription.bind(this);

    scheduleCollection.fetch().then(() => {
      var thisModel = scheduleCollection.get(this.props.scheduleId);
      this.setState({collection: scheduleCollection});
      this.setState({model: thisModel});
    })
    this.state = {
      collection: scheduleCollection,
      isEditing: false,
      description: ''
    }
  }
  deleteScheduleModel(e){
    e.preventDefault();
    var model = this.state.model;
    model.destroy().then(()=>{
      Backbone.history.navigate('userAccount/', { trigger: true} );
    });
  }

  editScheduleModel(e){
    e.preventDefault();
    var model = this.state.model;
    model.save().then(()=>{
      this.setState({model})
      Backbone.history.navigate('#userAccount/', { trigger: true} );
    });
  }

  editMode() {
    if (this.state.isEditing === true) {
      this.setState({isEditing: false});
    } else {
      this.setState({isEditing: true});
    }
  }

  setDate(e) {
    this.setState({'date': e.target.value});
  }

  setDescription(e) {
    var model = this.state.model;
    model.set({description: e.target.value})
    this.setState({model});
  }

  setTime(e) {
    this.setState({time: e.target.value});
  }

  render() {
    return (
      <div>
        <Header />
        <div className = "col-md-12">
          { this.state.isEditing ? (
            <div className = "col-md-4 wellsessionform">
              <input type="date" value={this.state.model ? moment( this.state.model.get('date').iso ).format('yyyy-MM-dd, h:mm a') : ""} onChange={this.setDate}></input>
              <input type="text" value={this.state.model ? this.state.model.get('description') : ""} onChange={this.setDescription}></input>
              <a onClick={(e) => {this.editScheduleModel(e)}} className="btn btn-info">Save Edit</a>
              <a onClick={this.editMode} className="btn btn-danger">Cancel Edit</a>
            </div>
          ) : (
            <div className = "col-md-4 wellsessionform">
              <p>{this.state.model ? moment( this.state.model.get('date').iso ).format('dddd, LL, h:mm a') : ""}</p>
              <p>{this.state.model ? this.state.model.get('description') : ""}</p>
              <a onClick={(e) => {this.deleteScheduleModel(e)}} className="btn btn-danger">Delete Schedule</a>
              <a onClick={this.editMode} className="btn btn-info">Edit Schedule</a>
              <a href="#userAccount/"><button type="Cancel" className="btn btn-primary">Cancel</button></a>

            </div>
          )}
        </div>
      </div>
    )
  }
}

module.exports = {
  ScheduleDetail
}
