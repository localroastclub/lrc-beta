import React from 'react';
import CopyP1 from './CopyP1';
import CopyL1 from './CopyL1';
import CopyL2 from './CopyL2';
import OrderButton from './OrderButton';
import Grid from '@material-ui/core/Grid';




const Paragraph1 = () => {
  return (
    <div>
      <Grid container={true} spacing={16} alignItems="center">
          <Grid item xs={12}>
            <CopyP1 />
          </Grid>
          <Grid container={true} justify="space-evenly" wrap="wrap">
            <Grid item xs={12} sm={6} lg="auto" xl="auto">
              <CopyL1 />
            </Grid>
            <Grid item xs={12} sm={6} lg="auto" xl="auto">
              <CopyL2 />
            </Grid>
          </Grid>
          <Grid container justify="center" wrap="wrap">
          <Grid item xs={12} lg="auto">
            <OrderButton />
          </Grid>
          </Grid>
      </Grid>
    </div>
  )
};

export default Paragraph1;