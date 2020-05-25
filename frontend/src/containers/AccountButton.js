import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const useStyles = makeStyles((theme) => ({
  accountBtn: {
    width: '4.5vw',
    height: '4.5vh',
    [theme.breakpoints.down(768)]: {
      width: '35px',
      height: '35px',
    },
  },
}));

const AccountIcon = withStyles({})(AccountBoxIcon);

const AccountButton = () => {
  const classes = useStyles();
  const isAuthenticated = localStorage.getItem('isMember') === 'true';
  const { dispatch } = React.useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AccountBoxIcon
        aria-controls='account-menu'
        aria-haspopup='true'
        className={classes.accountBtn}
        onClick={handleClick}
      />
      <Menu
        id='account-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {isAuthenticated ? (
          <div>
            <MenuItem onClick={handleClose}>Account</MenuItem>
            <Link to='/cart'>
              <MenuItem onClick={handleClose}>Cart</MenuItem>
            </Link>
            <Link to='/dashboard'>
              <MenuItem onClick={handleClose}>My Subscription</MenuItem>
            </Link>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </div>
        ) : (
          <div>
            <Link to='/cart'>
              <MenuItem onClick={handleClose}>Cart</MenuItem>
            </Link>
            <Link to='/dashboard'>
              <MenuItem onClick={handleClose}>Subscription</MenuItem>
            </Link>
            <Link to='/login'>
              <MenuItem onClick={handleClose}>Login</MenuItem>
            </Link>
            <Link to='/signup'>
              <MenuItem onClick={handleClose}>Sign up</MenuItem>
            </Link>
          </div>
        )}
      </Menu>
    </div>
  );
};

export default AccountButton;
