import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

const StyledCard = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    opacity: 0.5,
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: '40vh',
    maxWidth: '55vh',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Card);

const HeaderBox = withStyles({
  root: {
    backgroundColor: '#FFF',
    borderRadius: 3,
    border: 0,
    color: 'white',
    minHeight: '40vh',
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