var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');


class SessionForm extends React.Component {
    render() {
        return (

          <div>
            <img className="clipboard" src="./images/clipboard.png" alt="" />
          <div className = "clipboardpositioning">

            <div className = "col-md-5">
              <form className="form-vertical">
              <h1>Training Report</h1>
              <br></br>
                <div className="form-group">
                <label htmlFor="input" className="col-md-6">Date
                </label>
                  <input className="form-control" id="inputDate" placeholder="Date" type="text"/>
              </div>
              <div className="form-group">
                <label htmlFor="inputTime" className="col-md-6">Time</label>
                <input className="form-control" id="inputTime" placeholder="Time" type="time"/>

              </div>
              <div className="form-group">
                <label htmlFor="textArea" className="col-md-6">Training Description</label>
                <textarea className="form-control" rows="3" id="inputDescription" placeholder="Training breakdown here"></textarea>
              </div>
              <div className="form-group">
                <label className="col-md-6">Videos</label>
              </div>
              <div className="form-group">
                <label htmlFor="select" className="col-md-6"></label>
                <select className="form-control" id="videos">
                  <option>Goalkeeping</option>
                  <option>Finishing</option>
                  <option>Fitness</option>
                  <option>Defending</option>
                  <option>Set Pieces</option>
                </select>
              </div>
              <div className="form-group">
                <div className="col-md-6">
                  <button type="cancel" className="btn btn-primary">Cancel</button>
                  <button type="clear" className="btn btn-warning">Clear Form</button>
                  <button type="submit" className="btn btn-danger">Submit</button>
                </div>
              </div>
          </form>
          </div>
          </div>
          </div>

        )
    }
};

module.exports = {
    SessionForm
}
