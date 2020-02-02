import React from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountButton from './AccountButton';
import { ReactComponent as LrcLogo } from '../lrclogo.svg';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'black',
    height: '15vh',
    flexGrow: 1
  },
  menuButton: {
    display: 'none',
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.down(768)]: {
      display: 'inline'
    }
  },
  grow: {
    // flexGrow: 1
  },
  links: {
    margin: '2vw',
    flexGrow: 2
  },
  item: {
    marginLeft: '1.25vw',
    marginRight: '1.25vw',
    [theme.breakpoints.down(768)]: {
      display: 'none'
    }
  },
  logo: {
    height: '100px',
    width: '100px',
    flexGrow: 1,
    background: 'url(../lrclogo.svg)'
  }
}));

// const logo = 'https://lrcimages.s3.us-east-2.amazonaws.com/lrc-color.png';

function NavBar(props) {
  const classes = useStyles();
  let isAuthenticated = localStorage.getItem('isMember') === 'true';

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
              <LrcLogo className={classes.logo} alt="Local Roast Club" />
            </Link>
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.links}>
            <span className={classes.item}>
              <Link to="subscribe">Subscriptions</Link>
            </span>
            <span className={classes.item}>Shop</span>
          </Typography>
          <AccountButton />
          {isAuthenticated ? (
            <LoginButton isAuthenticated={isAuthenticated} />
          ) : (
            <Link to="/login">
              <LoginButton isAuthenticated={isAuthenticated} />
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
