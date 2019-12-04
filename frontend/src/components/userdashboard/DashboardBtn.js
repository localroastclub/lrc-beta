import React from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const Btn = withStyles({
  root: {
    background: '#e6b5da',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    width: 150,
    marginRight: '2vw',
    padding: '0 30px'
  }
})(Button);

const DashboardBtn = props => {
  return (
    <>
      <Btn>{props.ctaText}</Btn>
    </>
  );
};

export default DashboardBtn;
