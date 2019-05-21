import React from 'react';
import NavBar from './components/NavBar';
import Headline from './components/Headline';
import SubHeader from './components/SubHeader';
import Grid from '@material-ui/core/Grid';


function App() {
  return (
    <Grid
      container={true}
      alignItems="center"
      alignContent="space-between"
      spacing={24}
    >
      <Grid item={true} xs={12}>
        <NavBar />
      </Grid>
      <Grid item={true} xs={12}>
        <Headline />
      </Grid>
      <Grid item={true} xs={12}>  
        <SubHeader />
      </Grid>
    </Grid>
  );
}

export default App;
