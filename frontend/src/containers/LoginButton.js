import React from 'react';
import Axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

const LoginBtn = withStyles({
  root: {
    color: '#ffffff',
    fontFamily: 'Actor',
    textDecoration: 'none'
  }
})(Button);

const LoginButton = props => {
  const isAuthenticated = props.isAuthenticated;
  const { dispatch } = React.useContext(AuthContext);

  const handleLogout = event => {
    event.preventDefault();
    console.log('we are logging out....');
    Axios.post('http://localhost:8000/rest-auth/logout/')
      .then(res => {
        console.log('here is the response', res.status);
        if (res.status === 200) {
          dispatch({
            type: 'LOGOUT'
          });
        }
      })
      .catch(err => {
        console.log('error!', err);
        // const errorMsg = [];
        // _.forEach(err.response.data, e => {
        //   errorMsg.push(e[0]);
        // });
        // setData({
        //   ...data,
        //   errorMessage: errorMsg
        // });
      });
  };

  return (
    <>
      {isAuthenticated ? (
        <LoginBtn color="inherit" onClick={handleLogout}>
          Logout
        </LoginBtn>
      ) : (
        <LoginBtn color="inherit">Login</LoginBtn>
      )}
    </>
  );
};

export default LoginButton;
