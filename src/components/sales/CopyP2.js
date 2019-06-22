import React from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  p: {
    padding: '2rem'
  }
}


const CopyP2 = () => {
  return(
    <Grid
      container
      alignContent="center"
      justify="center"
    >
      <Grid container justify="center" wrap="wrap">
        <Grid item xs="auto">
          <h2>
            You wouldn’t buy stale bread at a grocery store
          </h2>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={9} style={styles.p}>
        <p>
        So why have we come to treat coffee this way? Coffee is roasted with a shelf life-- the best flavors are obtained within one month of roasting. Yet most grocery stores don’t even include a roast date on their coffees. It’s no wonder we’re taught to drown our coffee with sugar and cream. Why not replace those calories with a delicious breakfast, and enjoy your coffee guilt-free?

        </p>
      </Grid>
    </Grid>
  )
};

export default CopyP2;