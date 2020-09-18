import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
      username: "",
      password: ""
    },
    error: ""
};

handleChange = event => {
    this.setState({
        credentials: {
            ...this.state.credentials,
            [ event.target.name ]: event.target.value
        },
        error: ""
    });
};

login = event => {
    event.preventDefault();

    axiosWithAuth()
        .post( "/api/login", this.state.credentials )
        .then( response => {
            localStorage.setItem( "token", response.data.payload );
            this.props.history.push( "/protected" );
        })
        .catch( err => {
            this.setState({
                error: err.response.data.error
            });
        });
};

  render() {
    return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={this.login}>
        <div>
          <label htmlFor='username'><strong>Username: </strong></label>
          <input
            type="text"
            name="username"
            id='username'
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='password'><strong>Password: </strong></label>
          <input
            type="password"
            name="password"
            id='password'
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
        </div>
        <button>Log in</button>
      </form>
        <p style={{ color: "red" }}>{this.state.error}</p>
    </>
  );
};
  }
  

export default Login;
