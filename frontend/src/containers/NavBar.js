import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    background: 'black',
    height: '12vh',
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  logo: {
    maxHeight: '12vh',
    maxWidth: '12vh',
    flexGrow: 1
  }
};

const logo = 'https://lrcimages.s3.us-east-2.amazonaws.com/lrc-color.png';

function NavBar(props) {
  const { classes } = props;
  return (
    <div className="nav">
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <Link to="/">
              <img className={classes.logo} src={logo} alt="Local Roast Club" />
            </Link>
          </Typography>
          <Link to="/login">
            <LoginButton />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
