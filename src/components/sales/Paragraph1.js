import React from 'react';
import CopyP1 from './CopyP1';
import CopyL1 from './CopyL1';
import OrderButton from './OrderButton';
import Grid from '@material-ui/core/Grid';

const styles = {
  space: {
    
  },
  p: {
    boxSizing: 'border-box',
    flexGrow: 1
  }
}


const Paragraph1 = () => {
  return (
    <div>
      <Grid container={true} alignItems="center" style={styles.p}>
          <Grid item>
            <CopyP1 />
          </Grid>
          <Grid container={true} justify="space-around" wrap="wrap">
            <Grid item style={styles.space}>
              <CopyL1 />
            </Grid>
          </Grid>
          <Grid container justify="center" wrap="wrap">
          <Grid item xs="auto" lg="auto">
            <OrderButton />
          </Grid>
          </Grid>
      </Grid>
    </div>
  )
};

export default Paragraph1;