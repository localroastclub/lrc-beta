import React from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LocalCafe from '@material-ui/icons/LocalCafe';
import RoomService from '@material-ui/icons/RoomService';
import Edit from '@material-ui/icons/Edit';



const StyledCard = withStyles({
  root: {
    background: '#FFF',
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: '40vh',
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

const OrderIcon = withStyles({
  root: {
    color: '#e6b5da',
    width: '4rem',
    height: '4rem',
  }
})(Edit);

const BellIcon = withStyles({
  root: {
    color: '#e6b5da',
    width: '4rem',
    height: '4rem',
  }
})(RoomService);

const MugIcon = withStyles({
  root: {
    color: '#e6b5da',
    width: '4rem',
    height: '4rem',
  }
})(LocalCafe);





const HowItWorks = () => {
  return(
    <div className="how-it-works">
    <h2>
      How It Works
    </h2>
      <div className="how-cards">
        <StyledCard className="card-copy">
          <CardText>
            <h3>
            Step 1
            </h3>
            <OrderIcon />
            <p>Sign up and select your preference of Roast, Bean, and Roaster</p>
          </CardText>
        </StyledCard>

        <StyledCard className="card-copy">
          <CardText>
            <h3>
              Step 2
            </h3>
            <BellIcon />
            <p>Orders are roasted to order on the 1st or 3rd Monday each month</p>
          </CardText>
        </StyledCard>

        <StyledCard className="card-copy">
          <CardText>
            <h3>
              Step 3
            </h3>
            <MugIcon />
            <p>Fresh premium coffee is delivered to your door once every month</p>
          </CardText>
        </StyledCard>
      </div>
    </div>
  )
}

export default HowItWorks;