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
    weather.fetch().then(()=>{
      console.log(this.state.weather);
      this.setState({weather})
    })
    // var schedulePicCollection = new SchedulePicCollection();


    var scheduleCollection = new ScheduleCollection();
    scheduleCollection.fetch().then(() => {
      this.setState({ scheduleCollection });
    });


    this.state = {
      weather: weather,
      scheduleCollection

    };
  }

  render(){

    var schedulePicCollection = new SchedulePicCollection();
    var schedulePics = schedulePicCollection.map( (schedulePic) => {
      return (
        <div>
          <h3>{schedulepic.get('name')}</h3>
          <img src={schedulePic.get('pic').url} alt={schedulePic.get('pic').name}/>
          <button onClick={ this.deleteImage( schedulePic.get('objectId')) }>Delete</button>
        </div>
      )
    })


    var scheduleCollection = this.state.scheduleCollection;
    var schedules = scheduleCollection.map((schedule) => {

        return(
          <li key={schedule.cid}>
            <a href={"#scheduledetail/" + schedule.get('objectId') }>{ moment(schedule.get('date').iso ).format('dddd, LL h:mm a')}</a>
          </li>
      )
    });

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
                    <UploadForm />

                    </div>
                  {/* // <button type="submit" className="btn btn-primary">Edit</button> */}
                    </div>
      	    </section>
            <section id="middle">
              <div className="col-md-6 text-center">
                <h1>Today's Weather</h1>
                <span><a href={this.state.weather.get('ob_url')}>Forecast</a></span>
                <br></br>
                  <span><img src={this.state.weather.get('icon_url')}/></span>
                <p>Temperature <span>{this.state.weather.get('temp_f')}</span></p>
                <p>Relative Humidity <span>{this.state.weather.get('relative_humidity')}</span></p>
              </div>
            </section>
          <div className="col-md-5 text-center">
          </div>
        </div>
      </div>
      )
    }
}

class UploadForm extends React.Component{
  constructor(props){
    super(props);

    var schedulePicCollection = new SchedulePicCollection();

    this.state = {
      name: '',
      pic: {
        name: '',
        url: ''
      },
      preview: null,
      schedulePicCollection
    };

    schedulePicCollection.fetch().then(()=> {
      this.setState({ schedulePicCollection })
    });

    this.deleteImage = this.deleteImage.bind(this);
    this.deleteSchedulePic = this.deleteSchedulePic.bind(this);
    this.handlePicChange = this.handlePicChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  componentDidMount() {

  }

  deleteImage(objectId) {
    schedulePicCollection.remove(objectId).then( (response) => {
      console.log('remove image response', response);
    })
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  deleteSchedulePic(model){
    console.log(this.state);
    var schedulePicCollection = this.state.schedulePicCollection;
    schedulePicCollection.remove(model);
    this.setState({ schedulePicCollection })
    model.destroy();
  }

  handlePicChange(e){
    var file = e.target.files[0];
    this.setState({pic: file});

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
      schedulePic.save().then( () => {
        var schedulePicCollection = this.state.schedulePicCollection;
        schedulePicCollection.add(schedulePic);
        this.setState({ schedulePicCollection: schedulePicCollection, preview: null });
      });
    });
  }

  render(){
    var images =this.state.schedulePicCollection.map((image)=>{
      return (
        <div key={image.cid}>
          <h3>{image.get('name')}</h3>
          <a href={image.get('pic').url}><img src={image.get('pic').url} /></a>
          <a onClick={(e) => {this.deleteSchedulePic(image)}} className="btn btn-info">Delete Image</a>
        </div>
      )
    });
    return (
      <div>
        <div className = "col-md-">
        <form onSubmit={this.handleSubmit} >
          <h2> Schedule uploads </h2>
          <input onChange={this.handleNameChange} value={this.state.name} type="text" placeholder="Picture Name"/>
          <input onChange={this.handlePicChange} type="file"/>

          { this.state.preview ? (
            <img src={this.state.preview} />
          ) : (
            <span></span>
          )}
          <img src={this.state.preview} />
          <input className="btn btn-danger" type="submit" value="Upload"/>
          { images }
        </form>
        </div>
      </div>
    )
  }
}

module.exports = {
UserAccount,
};
