import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Headline from './components/Headline';
import SubHeader from './components/SubHeader';
import Paragraph1 from './components/Paragraph1';
import HowItWorks from './components/HowItWorks';
import CopyP2 from './components/CopyP2';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
    overflow: 'hidden'
  },
});


function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid
        container={true}
        direction='column'
        justify='flex-start'
        alignItems='stretch'
      >
        <Grid item={true} xs={12}>
          <NavBar />
        </Grid>

        <Grid
        container={true}
        alignItems="center"
        alignContent="space-between"
        spacing={40}
        >
          <Grid item={true} xs={12}>
            <Headline />
          </Grid>
          <Grid item={true} xs={12}>  
            <SubHeader />
          </Grid>
          <Grid item={true} xs={12}>
            <Paragraph1 />
          </Grid>
          <Grid item={true} xs={12}>
            <HowItWorks />
          </Grid>
          <Grid item={true} xs={12}>
            <CopyP2 />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

// export default App;
export default withStyles(styles)(App);
