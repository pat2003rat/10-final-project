var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');


class SessionForm extends React.Component {
  render(){
    return (


<form className="form-horizontal">
  <fieldset>
    <legend>Legend</legend>
    <div className="form-group">
      <label htmlFor="inputEmail" className="col-lg-2 control-label">Email </label>
      <div className="col-lg-10">
        <input className="form-control" id="inputEmail" placeholder="Email" type="text" />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="inputPassword" className="col-lg-2 control-label">Password</label>
      <div className="col-lg-10">
        <input className="form-control" id="inputPassword" placeholder="Password" type="password" />
        <div className="checkbox">
          <label>
            <input type="checkbox" /> Checkbox
          </label>
        </div>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="textArea" className="col-lg-2 control-label">Textarea</label>
      <div className="col-lg-10">
        <textarea className="form-control" rows="3" id="textArea"></textarea>
        <span className="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
      </div>
    </div>
    <div className="form-group">
      <label className="col-lg-2 control-label">Radios</label>
      <div className="col-lg-10">
        <div className="radio">
          <label>
            <input name="optionsRadios" id="optionsRadios1" value="option1" checked="" type="radio" />
            Option one is this
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="optionsRadios" id="optionsRadios2" value="option2" type="radio" />
            Option two can be something else
          </label>
        </div>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="select" className="col-lg-2 control-label">Selects</label>
      <div className="col-lg-10">
        <select className="form-control" id="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <select multiple="" className="form-control" >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </div>
    <div className="form-group">
      <div className="col-lg-10 col-lg-offset-2">
        <button type="reset" className="btn btn-default">Cancel</button>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </div>
  </fieldset>
</form>

)
}
};
