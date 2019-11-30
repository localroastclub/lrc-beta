import React from 'react';
import Axios from 'axios';
import _ from 'lodash';
import { AuthContext } from '../../contexts/AuthContext';
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
  const { dispatch } = React.useContext(AuthContext);
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
      username: '',
      email: data.email,
      password: data.password
    })
      .then(res => {
        console.log('res???', res.data);
        try {
          setData({
            ...data,
            isSubmitting: false
          });
          return res.data.key;
        } catch (e) {
          // do nothing?
        }
        console.log('here is the response!', res.data);
      })
      .then(token => {
        console.log('what is token?', token);
        dispatch({
          type: 'LOGIN',
          payload: { user: data.email, token }
        });
      })
      .catch(err => {
        const errorMsg = [];
        if (typeof err.response.data === 'object') {
          _.forEach(err.response.data, e => {
            errorMsg.push(e[0]);
          });
        } else {
          errorMsg.push('Ooops something went wrong');
        }
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: errorMsg
        });
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
          className="login-form"
          name="login-form"
          noValidate
          autoComplete="on"
          method="POST"
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
            {data.isSubmitting ? 'Loading...' : 'Login'}
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
