var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

class AddEdit extends React.Component {
  render (){
    return (
      <div className = "container">
        <div className = "row">
          <a href="#login/"> <button className="btn btn-primary"> Login </button> </a>
          <div> Add Edit Screen </div>
      </div>
    </div>
    )
  }
};

module.exports = {
AddEdit
};
