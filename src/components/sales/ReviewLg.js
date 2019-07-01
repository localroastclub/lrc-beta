import React from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const ReviewCard = withStyles({
  root: {
    background: '#e6b5da',
    opacity: 0.5,
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: '55vh',
    width: '55vh',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
})(Card);

const CardText = withStyles({
  root: {
    height: '20vh',
    maxWidth: '30vh',
    textAlign: 'center'
  }
})(CardContent)

const ReviewLg = () => {
  return (
    <div>
      <ReviewCard>
      </ReviewCard>
    </div>
  );
};

export default ReviewLg;