import React from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

const StyledCard = withStyles({
  root: {
    background: '#FFF',
    opacity: 0.5,
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: '40vh',
    maxWidth: '55vh',
    minWidth: '30vh',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Card);

const PaperGrid = withStyles({
  root: {
    backgroundColor: '#FFF',
    borderRadius: 3,
    border: 0,
    color: 'white',
    minHeight: '40vh',
    padding: '0 30px',
    boxShadow: 0,
  },
  label: {
    textTransform: 'capitalize',
  },
})(Paper);

const SubHeader = () => {
  return(
    <Grid
      container={true}
      alignItems="center"
    >
      <Grid item xs={12}>
        <PaperGrid>
          <Grid 
            container={true}
            justify="center"
            alignItems="flex-start"
            spacing={24}
          >
            <Grid item={true}>
              <StyledCard/>
            </Grid>
            <Grid item={true}>
              <StyledCard/>
            </Grid>
            <Grid item={true}>
              <StyledCard/>
            </Grid>
          </Grid>
        </PaperGrid>
      </Grid>
    </Grid>
  )
}

export default SubHeader;