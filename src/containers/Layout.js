import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import NavBar from './NavBar';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
    overflow: 'hidden'
  },
});


function Layout(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <NavBar />
      {props.children}
    </div>
  );
}

export default withStyles(styles)(Layout);
