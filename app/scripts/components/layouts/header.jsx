var React = require('react');
var Backbone = require('backbone');

var User = require('../../models/user.js').User;

class Header extends React.Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout(){
    User.logout();
    Backbone.history.navigate('', {trigger: true });
  }


  render(){
    var user = new User();
    return(
      <div className="container">
        <div className="row">
          <div className="well">
            <img className="logo" src="./images/logo.png" ></img>
              <span className="links" onClick={this.logout}>Log Out</span>
              <span className="links"><a href="#scheduleform/">Create A Schedule</a></span>
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
