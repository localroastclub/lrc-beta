import React from 'react';
import Axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  loginBtn: {
    [theme.breakpoints.down(768)]: {
      display: 'none',
    },
  },
}));

const LoginBtn = withStyles({
  root: {
    color: '#ffffff',
    fontFamily: 'Lato',
    fontSize: 16,
    textDecoration: 'none',
  },
})(Button);

const LoginButton = (props) => {
  const classes = useStyles();
  const isAuthenticated = localStorage.getItem('isMember') === 'true';
  const { dispatch } = React.useContext(AuthContext);

  const handleLogout = (event) => {
    event.preventDefault();
    console.log('we are logging out....');
    Axios.post('http://localhost:8000/rest-auth/logout/')
      .then((res) => {
        console.log('here is the response', res.status);
        if (res.status === 200) {
          return dispatch({
            type: 'LOGOUT',
          });
        }
      })
      .then(() => {
        console.log('in the sencond then', props);
        window.location.href = '/';
      })
      .catch((err) => {
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
        <LoginBtn
          color='inherit'
          className={classes.loginBtn}
          onClick={handleLogout}
        >
          Logout
        </LoginBtn>
      ) : (
        <LoginBtn color='inherit'>Login</LoginBtn>
      )}
    </>
  );
};

export default LoginButton;
