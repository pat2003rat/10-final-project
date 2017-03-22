var React = require('react');
var Backbone = require('backbone');

var User = require('../../models/user.js').User;

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    var user = new User();
    // console.log(user);
    return(
      <div className="container">
        <div className="row">
          <div className="well">
              <img className="logo" src="./images/logo.png" ></img>
              <span className="links"><a href="#login/">Login</a></span>
              <span className="links"><a href="#login/">Log Out</a></span>
              <span className="links"><a href="#sessionform/">Create A Session</a></span>
              <span className="links"><a href="#userAccount/">{user.get('name') + "'s"} Account</a></span>
          </div>
        </div>
      </div>
    )
  }

}
module.exports = {
  Header
};
