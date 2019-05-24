import React from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(1.2)',
  },
};

const CopyL1 = () => {
  const bull = <span style={styles.bullet}>•</span>;
  return (
    <Grid container justify="center" wrap="wrap">
    <Grid item xs="auto">
      <ul>
        {bull} Gourmet coffees exclusive to the Club
      </ul>
      <ul>
        {bull} Keeping it local with coffee roasted only in Austin
      </ul>
      <ul>
        {bull} 7 craft roasters and growing
      </ul>
      <ul>
        {bull} 100+ types of premium coffee
      </ul>
      <ul>
        {bull} Full 12-oz bags for variety
      </ul>
      <ul>
        {bull} 5-lb bags for large groups
      </ul>
    </Grid>
    </Grid>
  )
};

export default CopyL1;