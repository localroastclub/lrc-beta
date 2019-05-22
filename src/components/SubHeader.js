import React from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

const StyledCard = withStyles({
  root: {
    background: '#FFF',
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: '40vh',
    maxWidth: '30vh',
    minWidth: '30vh',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Card);



const SubHeader = () => {
  return(
    <Grid
      container={true}
      alignItems="center"
    >
      <Grid item xs={12}>
          <Grid 
            container={true}
            justify="center"
            alignItems="flex-start"
            spacing={24}
          >
            <Grid item={true}>
              <StyledCard>
                Expand your palette and discover new roasts each month
              </StyledCard>
            </Grid>
            <Grid item={true}>
              <StyledCard>
                Free up time from traffic and crowded grocery stores
              </StyledCard>
            </Grid>
            <Grid item={true}>
              <StyledCard>
                Enjoy premium flavors while supporting your local businesses
              </StyledCard>
            </Grid>
          </Grid>
      </Grid>
    </Grid>
  )
}

export default SubHeader;