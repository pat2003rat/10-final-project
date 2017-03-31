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
    var current = User.current();
    console.log('hey',current)
    return(
      <div className="container-fluid">
        <div className="row">
          <div className = "well header-top" >
              <span className="links" onClick={this.logout}>Log Out</span>
              <span className="links"><a href="#scheduleform/">Create A Schedule</a></span>
              <span className="links"><a href="#userAccount/"> Home </a></span>
          </div>
        </div>
      </div>
    )
  }

}
module.exports = {
  Header
};
