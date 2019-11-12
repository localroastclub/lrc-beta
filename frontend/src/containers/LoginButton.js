import React from 'react';
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
  return (
    <>
      {isAuthenticated ? (
        <LoginBtn color="inherit">Logout</LoginBtn>
      ) : (
        <LoginBtn color="inherit">Login</LoginBtn>
      )}
    </>
  );
};

export default LoginButton;
