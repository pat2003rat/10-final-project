var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

class SessionForm extends React.Component {

    render() {
        return (
          <div>
            <div className = "col-md-8">
          <form className="form-vertical">
            <h2>Training Report</h2>
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

        )
    }
};

module.exports = {
    SessionForm
}
