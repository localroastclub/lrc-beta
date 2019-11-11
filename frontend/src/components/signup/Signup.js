import React from 'react';
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
    errorMEssage: null
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
    Axios.post('http://localhost:8000/rest-auth/signup/', {
      name: event.name,
      username: event.email,
      password: event.password
    }).then(res => {
      console.log('here is the response!', res.body);
    });
  };

  return (
    <div className="signup-container">
      <div className="inner-container">
        <h1>Sign Up</h1>
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
          <SignupBtn
            onClick={() => {
              document.forms['signup-form'].submit();
            }}
          >
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
