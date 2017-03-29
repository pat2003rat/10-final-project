var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

var User = require('../models/user').User;

class Login extends React.Component {
  constructor(props){
    super(props);
    this.user = new User();
    this.handleUsername= this.handleUsername.bind(this);
    this.handlePassword= this.handlePassword.bind(this);
    this.handleLogin= this.handleLogin.bind(this);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsername(e) {
    this.setState({username: e.target.value});      //this is the value the user just typed in
  }

  handlePassword(e) {
    this.setState({password: e.target.value});
  }

  handleLogin(e) {
    e.preventDefault();
    User.login(this.state, function() {
        Backbone.history.navigate('userAccount/', { trigger: true} );
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Training Dean</h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 login">
            <div className="col-md-4">
              <h1>Please Login</h1>
              <form id="login" onSubmit={this.handleLogin}>
                <div className="form-group">
                  <label htmlFor="email-login">Email address</label>
                  <input onChange={this.handleUsername} value={this.state.username} className="form-control" name="email" id="email-login" type="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                  <label htmlFor="password-login">Password</label>
                  <input onChange={this.handlePassword} value={this.state.password} className="form-control" name="password" id="password-login" type="password" placeholder="Password"/>
                </div>
                <input className="btn btn-warning" type="submit" value="Log Me In!"/>
              </form>
            </div>

            <div className="col-md-4 juggler">
              <img className="splashimage" src="./images/splash1.gif"></img>
            </div>
            <SignUp />
          </div>
          </div>
        </div>
      </div>
    )
  }
}

class SignUp extends React.Component {
  constructor(props){
    super(props);

    this.handleUsername= this.handleUsername.bind(this);
    this.handlePassword= this.handlePassword.bind(this);
    this.handleSignup= this.handleSignup.bind(this);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsername(e) {
    this.setState({username: e.target.value});      //this is the value the user just typed in
  }

  handlePassword(e) {
    this.setState({password: e.target.value});
  }

  handleSignup(e){
    e.preventDefault();

    var user = new User(this.state);

    user.save().then(function(data){

      localStorage.setItem('user', JSON.stringify(data));
      Backbone.history.navigate('userAccount/', { trigger: true })
    });
  }

  render() {
    return (
      <div>
        <div className="col-md-4">
          <h1>Sign Up!</h1 >
          <form onSubmit={this.handleSignup} id="signup">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input onChange={this.handleUsername} id="signup-email" className="form-control" type="email" name="email" placeholder="Email" required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Password</label>
              <input onChange={this.handlePassword} id="signup-password" className="form-control" type="password" name="password" placeholder="Password" required/>
            </div>
            <input className="btn btn-danger" type="submit" value="Sign Me Up!"/>
          </form>
         </div>
      </div>

    )
  }
}

  module.exports = {
    Login
  };
