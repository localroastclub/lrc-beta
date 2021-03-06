import React from 'react';
import _ from 'lodash';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LocalCafe from '@material-ui/icons/LocalCafe';
import RoomService from '@material-ui/icons/RoomService';
import Edit from '@material-ui/icons/Edit';
import MediaCard from './MediaCard';

const StyledCard = withStyles({
  root: {
    background: '#FFF',
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: '37vh',
    width: '30vh',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  }
})(Card);

const CardText = withStyles({
  root: {
    height: '20vh',
    maxWidth: '30vh',
    textAlign: 'center'
  }
})(CardContent);

const OrderIcon = withStyles({
  root: {
    color: '#e6b5da',
    width: '4rem',
    height: '4rem'
  }
})(Edit);

const BellIcon = withStyles({
  root: {
    color: 'cornflowerblue',
    width: '4rem',
    height: '4rem'
  }
})(RoomService);

const MugIcon = withStyles({
  root: {
    color: '#e6b5da',
    width: '4rem',
    height: '4rem'
  }
})(LocalCafe);

const copyList = [
  {
    image: '/images/signup.jpg',
    header: 'Step 1',
    copy: 'Sign up and select your preference of Roast, Bean, and Roaster'
  },
  {
    image: '/images/coffee-roast.jpg',
    header: 'Step 2',
    copy: 'Orders are roasted to order on the 1st or 3rd Monday each month'
  },
  {
    image: '/images/delivery.jpg',
    header: 'Step 3',
    copy: 'Fresh premium coffee is delivered to your door once every month'
  }
];

const HowItWorks = () => {
  return (
    <div className='how-container'>
      <h2>How It Works</h2>
      <div className='how-it-works'>
        {_.map(copyList, (item, key) => {
          return <MediaCard item={item} rowName={'how'} key={key} />;
        })}
      </div>
    </div>
    //   <div className="how-cards">
    //     <StyledCard className="card-copy">
    //       <CardText>
    //         <h3>
    //         Step 1
    //         </h3>
    //         <OrderIcon />
    //         <p>Sign up and select your preference of Roast, Bean, and Roaster</p>
    //       </CardText>
    //     </StyledCard>

    //     <StyledCard className="card-copy">
    //       <CardText>
    //         <h3>
    //           Step 2
    //         </h3>
    //         <BellIcon />
    //         <p>Orders are roasted to order on the 1st or 3rd Monday each month</p>
    //       </CardText>
    //     </StyledCard>

    //     <StyledCard className="card-copy">
    //       <CardText>
    //         <h3>
    //           Step 3
    //         </h3>
    //         <MugIcon />
    //         <p>Fresh premium coffee is delivered to your door once every month</p>
    //       </CardText>
    //     </StyledCard>
    //   </div>
    // </div>
  );
};

export default HowItWorks;
