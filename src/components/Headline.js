import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Background from '../coffeebeans.jpg';

const HeaderBox = withStyles({
  root: {
    backgroundImage: `url(${Background})`,
    borderRadius: 3,
    border: 0,
    color: 'white',
    minHeight: '60vh',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px #686868',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Paper);

const Headline = () => {
  return(
    <Grid
      container={true}
      alignItems="stretch"
      style={{width: '100% !important'}}

    >
      <Grid item xs={12}>
        <HeaderBox>
          <Grid 
            container={true}
            justify="center"
            alignItems="flex-start"
            spacing={24}
          >
            <Grid item={true}>
              <HeaderLeft/>
            </Grid>
            <Grid item={true}>
              <HeaderRight/>
            </Grid>
          </Grid>
        </HeaderBox>
      </Grid>
    </Grid>
  )
}

export default Headline;