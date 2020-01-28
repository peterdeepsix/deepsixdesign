import React from 'react';
import { navigate } from 'gatsby';
import { handleLogin, isLoggedIn } from 'src/services/auth';

class LoginComponent extends React.Component {
  state = {
    username: ``,
    password: ``,
  };
  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    handleLogin(this.state);
  };
  render() {
    if (isLoggedIn()) {
      navigate(`/predictions`);
    }
    return (
      <>
        <h1>Log in</h1>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event);
            navigate(`/predictions`);
          }}
        >
          <label>
            Username
            <input
              type="text"
              name="username"
              onChange={this.handleUpdate}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
          </label>
          <input type="submit" value="Log In" />
        </form>
      </>
    );
  }
}
export default LoginComponent;
