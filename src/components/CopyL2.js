import React from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(1.2)',
  },
};

const CopyL2 = () => {
  const bull = <span style={styles.bullet}>•</span>;
  return (
    <Grid container justify="center" wrap="wrap">
    <Grid item xs="auto">
      <ul>
        {bull} Local delivery within 2 days
      </ul>
      <ul>
        {bull} Free delivery anywhere in the continental USA
      </ul>
      <ul>
        {bull} A clear conscience with Fair Trade and organic beans
      </ul>
      <ul>
        {bull} A set-and-relax subscription service
      </ul>
      <ul>
        {bull} Peace of mind knowing we’re finding delicious coffee for you every month
      </ul>
    </Grid>
    </Grid>
    
  )
};

export default CopyL2;