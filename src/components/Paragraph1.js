import React from 'react';
import CopyP1 from './CopyP1';
import CopyL1 from './CopyL1';
import CopyL2 from './CopyL2';
import Grid from '@material-ui/core/Grid';

const styles = {
  marginLeft: "14%",
  marginRight: "14%",
  alignItems: "center",
  justify: "center"
}


const Paragraph1 = () => {
  return (
    <div style={styles}>
      <Grid container spacing={24}>
          <Grid item xs={12}>
            <CopyP1 />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CopyL1 />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CopyL2 />
          </Grid>
      </Grid>
    </div>
  )
};

export default Paragraph1;