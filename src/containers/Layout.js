import React from 'react';
import '../content.css';
import { withStyles } from '@material-ui/core/styles';

import NavBar from './NavBar';
import Header from '../components/sales/Header';

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

// export default App;
export default withStyles(styles)(Layout);
