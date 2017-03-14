var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');



class Login extend React.Component {
  render() {
    return (
    <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Training Dean</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Please Login</h1>

            <form id="login">
              <div className="form-group">
                <label htmlFor="email-login">Email address</label>
                <input className="form-control" name="email" id="email-login" type="email" placeholder="email" />
              </div>

              <div className="form-group">
                <label htmlFor="password-login">Password</label>
                <input className="form-control" name="password" id="password-login" type="password" placeholder="Password Please" />
              </div>

              <input className="btn btn-primary" type="submit" value="Beam Me Up!" />
            </form>
          </div>

          <div className="col-md-6">
            <h1>No Account? Sign Up!</h1>

            <form id="signup">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="signup-email" className="form-control" type="text" name="email" placeholder="Email Address" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Password</label>
                <input id="signup-password" className="form-control" type="password" name="password" placeholder="Don't Share This!" />
              </div>

              <input className="btn btn-primary" type="submit" value="Sign Up!" />
            </form>
          </div>
        </div>
      </div> -->

    )
  };

  module.exports = {
    Login
  };
