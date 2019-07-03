import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './login.css';


const LoginBtn = withStyles({
  root: {
    background: '#e6b5da',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    width: '10vh',
    padding: '10px 30px',
    marginBottom: '10%',
  },
})(Button);

const Login = () => {
  return (
    <div className="login-container">
      <div className="inner-container">
        <h1>Login</h1>
        <form className="login-form" noValidate autoComplete="on">
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
          />
          <LoginBtn>Login</LoginBtn>
          Or
          <NavLink style={{ marginRight: '10px' }} to="/signup">
            {' '}
            sign up
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Login;