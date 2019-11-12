import React from 'react';
import Axios from 'axios';
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
    marginBottom: '10%'
  }
})(Button);

const Login = () => {
  const initialState = {
    email: '',
    username: '',
    password: '',
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
    console.log('we are submitting....');
    setData({
      ...data,
      isSubmitting: true
    });
    Axios.post('http://localhost:8000/rest-auth/login/', {
      email: data.email,
      // username: data.username,
      password: data.password
    }).then(res => {
      console.log('here is the response!', res.body);
    });
  };
  // const [loading, setLoading] = React.useCallback(false);
  // const { error, showError } = useErrorHandler(null); // this is for custom hook

  // const logout = () => {
  //   localStorage.removeItem('user');
  //   localStorage.removeItem('expirationDate');
  // };

  // const checkAuthTimeout = expirationDate => {
  //   return dispatch => {
  //     setTimeout(() => {
  //       dispatch(logout());
  //     }, expirationTime * 1000);
  //   };
  // };

  // const authLogin = (username, password) => {
  //   return dispatch => {
  //     dispatch(authStart());
  //     axios
  //       .post('http://localhost:8000/rest-auth/login/', {
  //         username: username,
  //         password: password
  //       })
  //       .then(res => {
  //         const token = res.data.key;
  //         const expirationDate = new Date(new Date().getTime() + 3600 * 1000); // gives one hour in the future
  //         localStorage.setItem('token', token);
  //         localStorage.setItem('expirationDate', expirationDate);
  //         dispatch(authSuccess(token));
  //         dispatch(checkAuthTimeout(3600));
  //       })
  //       .catch(err => {
  //         dispatch(authFail(err));
  //       });
  //   };
  // };

  return (
    <div className="login-container">
      <div className="inner-container">
        <h1>Login</h1>
        <form
          className="login-form"
          name="login-form"
          noValidate
          autoComplete="on"
          onSubmit={handleFormSubmit}
        >
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            value={data.email}
            onChange={handleInputChange}
          />
          {/* <TextField
            id="standard-required"
            label="Required"
            type="username"
            name="username"
            autoComplete="username"
            margin="normal"
            variant="outlined"
            value={data.username}
            onChange={handleInputChange}
          /> */}
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            value={data.password}
            onChange={handleInputChange}
          />
          <LoginBtn type="submit" value="Submit">
            Login
          </LoginBtn>
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
