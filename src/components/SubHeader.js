import React from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const StyledCard = withStyles({
  root: {
    background: '#FFF',
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: '20vh',
    maxWidth: '30vh',
    minWidth: '30vh',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
})(Card);

const CardText = withStyles({
  root: {
    height: '20vh',
    maxWidth: '30vh',
  }
})(CardContent)



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
            alignItems="center"
            spacing={40}
          >
            <Grid item={true}>
              <StyledCard>
                <CardText>
                  <h3>
                    Expand your palette and discover new roasts each month
                  </h3>
                </CardText>
              </StyledCard>
            </Grid>
            <Grid item={true}>
              <StyledCard>
                <CardText>
                  <h3>
                    Free up time from traffic and crowded grocery stores
                  </h3>
                </CardText>
              </StyledCard>
            </Grid>
            <Grid item={true}>
              <StyledCard>
                <CardText>
                  <h3>
                    Enjoy premium flavors while supporting your local businesses
                  </h3>
                </CardText>
              </StyledCard>
            </Grid>
          </Grid>
      </Grid>
    </Grid>
  )
}

export default SubHeader;