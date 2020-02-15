import React from 'react';
import _ from 'lodash';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Explore from '@material-ui/icons/Explore';
import Commute from '@material-ui/icons/Commute';
import StoreMallDirectory from '@material-ui/icons/StoreMallDirectory';
import LargeCard from './LargeCard';
import MediaCard from './MediaCard';

const StyledCard = withStyles({
  root: {
    display: 'flex',
    background: '#FFF',
    // borderRadius: 3,
    // border: 0,
    color: 'black',
    height: '45vh',
    width: '25vw',
    padding: '0 30px'
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
})(Card);

const CardText = withStyles({
  root: {
    height: '20vh',
    maxWidth: '30vh',
    textAlign: 'center',
    marginTop: '10%',
    marginBotton: '10%'
  }
})(CardContent);

const DiscoverIcon = withStyles({
  root: {
    color: 'cornflowerblue',
    width: '4rem',
    height: '4rem'
  }
})(Explore);

const TrafficIcon = withStyles({
  root: {
    color: '#e6b5da',
    width: '4rem',
    height: '4rem'
  }
})(Commute);

const BusinessIcon = withStyles({
  root: {
    color: 'cornflowerblue',
    width: '4rem',
    height: '4rem'
  }
})(StoreMallDirectory);

const copyList = [
  {
    image: '/images/coffee-selection.jpg',
    alt: 'Coffee Selection',
    copy: 'Expand your palette and discover new roasts each month'
  },
  {
    image: '/images/traffic.jpeg',
    alt: 'Traffic',
    copy: 'Free up time from traffic and crowded grocery stores'
  },
  {
    image: '/images/coffee.jpg',
    alt: 'Premium Coffee',
    copy: 'Enjoy premium flavors while supporting your local businesses'
  }
];

const SubHeader = () => {
  return (
    <div className='subheader'>
      {_.map(copyList, (item, key) => {
        return <MediaCard item={item} rowName={'subheader'} key={key} />;
      })}
    </div>
    // <StyledCard className="card-copy">
    //   <CardText>
    //     <DiscoverIcon />
    //     <h3>Expand your palette and discover new roasts each month</h3>
    //   </CardText>
    // </StyledCard>

    // <StyledCard className="card-copy">
    //   <CardText>
    //     <TrafficIcon />
    //     <h3>Free up time from traffic and crowded grocery stores</h3>
    //   </CardText>
    // </StyledCard>

    // <StyledCard className="card-copy">
    //   <CardText>
    //     <BusinessIcon />
    //     <h3>Enjoy premium flavors while supporting your local businesses</h3>
    //   </CardText>
    // </StyledCard>
    // </div>
  );
};

export default SubHeader;
