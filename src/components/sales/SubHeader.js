import React from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const StyledCard = withStyles({
  root: {
    background: '#FFF',
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: '25vh',
    width: '30vh',
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
    <div className="subheader">
      <StyledCard className="card-copy">
        <CardText>
          <h3>
            Expand your palette and discover new roasts each month
          </h3>
        </CardText>
      </StyledCard>

      <StyledCard className="card-copy">
        <CardText>
          <h3>
            Free up time from traffic and crowded grocery stores
          </h3>
        </CardText>
      </StyledCard>

      <StyledCard className="card-copy">
        <CardText>
          <h3>
            Enjoy premium flavors while supporting your local businesses
          </h3>
        </CardText>
      </StyledCard>
    </div>
  )
}

export default SubHeader;