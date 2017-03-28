var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');
var Wunderground = require('../models/wunderground').Wunderground;
var Header = require('./layouts/header.jsx').Header;
var ScheduleCollection = require('../models/schedulemodel.js').ScheduleCollection;
var moment = require('moment')
var SchedulePicCollection = require('../models/schedulepic.js').SchedulePicCollection;
var SchedulePic = require('../models/schedulepic.js').SchedulePic;
var ParseFile = require('../parse').ParseFile;

// var schedule = new Schedule;

class UserAccount extends React.Component {
  constructor(props){
    super(props);
    var weather = new Wunderground;
    // weather.fetch().then(()=>{
    //   console.log(this.state.weather);
    //   this.setState({weather})
    // })
    var schedulePicCollection = new SchedulePicCollection();


    var scheduleCollection = new ScheduleCollection();
    scheduleCollection.fetch().then(() => {
      this.setState({collection: scheduleCollection});
    })
    this.state = {
      weather: weather,
      collection: scheduleCollection
    };
  }

  deleteImage(objectId) {
    schedulePicCollection.remove(objectId).then( (response) => {
      console.log('remove image response', response);
    })
  }

  render(){

    // var schedulePicCollection = new SchedulePicCollection();
    // var schedulePics = schedulePicCollection.map( (schedulePic) => {
    //   return (
        // <div>
        //   <h3>{schedulepic.get('name')}</h3>
        //   <img src={schedulePic.get('pic').url} alt={schedulePic.get('pic').name}/>
        //   <button onClick={ this.deleteImage( schedulePic.get('objectId')) }>Delete</button>
        // </div>
    //   )
    // })


    var schedules = this.state.collection.map(function(schedule) {
      var scheduleTime = schedule.get('time');
      var scheduleTimeNumber = Number(scheduleTime);
      var scheduleId = schedule.get('objectId')

      return(
        <li key={schedule.cid}>
          <a href={"#scheduledetail/" + scheduleId }>{ moment(schedule.get('date').iso ).format('dddd, LL h:mm a')}</a>
          {/* {schedule.get('description')} */}
        </li>
      )
    })

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
                  <a href="#scheduleform/"><button type="Add" className="btn btn-danger">Add Session</button></a>
                    <div className="form-group">
                  <img src={this.state.preview} />
                    </div>
                  {/* // <button type="submit" className="btn btn-primary">Edit</button> */}
                    </div>
      	    </section>
            <section id="middle">
              <div className="col-md-6 text-center">
                <h2>Today's Weather</h2>
                <span><a href={this.state.weather.get('ob_url')}>Forecast</a></span>
                <br></br>
                  <span><img src={this.state.weather.get('icon_url')}/></span>
                <p>Temperature <span>{this.state.weather.get('temp_f')}</span></p>
                <p>Relative Humidity <span>{this.state.weather.get('relative_humidity')}</span></p>
              </div>
            </section>
          <div className="col-md-5 text-center">
          </div>
        <UploadForm />
        </div>
      </div>
      )
    }
}

class UploadForm extends React.Component{
  constructor(props){
    super(props);

    this.deleteSchedulePic = this.deleteSchedulePic.bind(this);
    this.handlePicChange = this.handlePicChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);

    this.state = {
      name: '',
      pic: {
        name: '',
        url: ''
      },
      preview: null
    };
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  deleteSchedulePic(e){
    var objectId = this.state.model.get('objectId')
    e.preventDefault()
    this.state.model.destroy();
    Backbone.history.navigate('userAccount/', { trigger: true} );
  }

  handlePicChange(e){
    var file = e.target.files[0];
    this.setState({pic: file});
    console.log(file);
    var reader = new FileReader();
    reader.onloadend = () => {
      this.setState({preview: reader.result});
    }
    reader.readAsDataURL(file);
  }
  handleSubmit(e){
    e.preventDefault();
    var pic = this.state.pic;
    var fileUpload = new ParseFile(pic);
    fileUpload.save({}, {
      data: pic
    }).then((response)=>{
      var imageUrl = response.url;
      var schedulePic = new SchedulePic();
      schedulePic.set({
        name: this.state.name,
        pic: {
          name: this.state.pic.name,
          url: imageUrl
        }
      });
      schedulePic.save().then( (data) => {
        console.log('returned data:', data);
        console.log('model instandce:', schedulePic);
        console.log('pic stuff:', schedulePic.get('pic'));
        // Backbone.history.navigate('detail/', {trigger: true});
      });
    });

  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <h1> Image </h1>
          <input onChange={this.handleNameChange} type="text" placeholder="Picture Name"/>
          <input onChange={this.handlePicChange} type="file"/>
          <img src={this.state.preview} />
          <input className="btn btn-danger" type="submit" value="Upload"/>
        </form>
      </div>

    )
  }
}

module.exports = {
UserAccount,
};
