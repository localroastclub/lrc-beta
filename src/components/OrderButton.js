import React from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const OrderBtn = withStyles({
  root: {
    background: 'linear-gradient(30deg, #e6b5da 50%, #f5f733 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    padding: '0 30px',
  },
})(Button);

const OrderButton = () => {
  return(
    <OrderBtn>Join the Club</OrderBtn>
  ) 
}

export default OrderButton;