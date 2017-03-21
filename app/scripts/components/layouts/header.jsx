var React = require('react');
var Backbone = require('backbone');

class Header extends React.Component {
  // constructor (props){
  //   super (props);
  render(){


  return(
    <div className="container">
      <div className="row">
        <div className="well">
            <img className="logo" src="./images/logo.png" ></img>
            <span className="links"><a href="#login/">Login</a></span>
            <span className="links"><a href="#userAccount/">My Account</a></span>
            <span className="links"><a href="#sessionform/">Edit Sessions</a></span>
            <span className="links"><a href="#login/">Log Out</a></span>
        </div>
      </div>
    </div>
  )
}
};

module.exports = {
  Header
};
