import React, { useEffect } from 'react';
import Axios from 'axios';
import _ from 'lodash';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './signup.css';

const SignupBtn = withStyles({
  root: {
    background: '#e6b5da',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    width: '10vh',
    padding: '10px 30px',
    marginBottom: '10%'
  }
})(Button);

const Signup = props => {
  const email = _.get(props, 'location.state.email');
  const name = _.get(props, 'location.state.name');
  const initialState = {
    name: name ? name : '',
    email: email ? email : '',
    password: '',
    confirmPassword: '',
    isSubmitting: false,
    errorMessage: null
  };
  const [data, setData] = React.useState(initialState);
  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true
    });
    console.log('what is data?', data);
    Axios.post('http://localhost:8000/rest-auth/registration/', {
      email: data.email,
      password1: data.password,
      password2: data.confirmPassword
    })
      .then(res => {
        console.log('here is the response!', res.data);
        // on success send them to their new user dashboard
      })
      .catch(err => {
        const errorMsg = [];
        _.forEach(err.response.data, e => {
          errorMsg.push(e[0]);
        });
        setData({
          ...data,
          errorMessage: errorMsg
        });
      });
  };

  useEffect(() => {
    // if error message
  }, [data.errorMessage]);

  return (
    <div className="signup-container">
      <div className="inner-container">
        <h1>Sign Up</h1>
        {data.errorMessage
          ? _.map(data.errorMessage, (msg, index) => {
              return (
                <li className="error-message" key={index}>
                  {msg}
                </li>
              );
            })
          : null}
        <form
          className="signup-form"
          name="signup-form"
          noValidate
          autoComplete="on"
          onSubmit={handleFormSubmit}
        >
          <TextField
            id="outlined-name"
            label="Name"
            name="name"
            value={data.name}
            onChange={handleInputChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            autoComplete="email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            name="password"
            onChange={handleInputChange}
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-password-verify-input"
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            onChange={handleInputChange}
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
          />
          <SignupBtn type="submit" value="Submit">
            Signup
          </SignupBtn>
          Or
          <NavLink style={{ marginRight: '10px' }} to="/login">
            {' '}
            Login
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Signup;
