import React from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const Btn = withStyles({
  root: {
    background: '#f18f36',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(90, 90, 27, 0.3)',
    color: 'black',
    height: 48,
    width: 150,
    padding: '0 30px',
    fontFamily: 'Lato'
  }
})(Button);

const DashboardBtn = props => {
  return (
    <>
      <Btn style={props.style}>{props.ctaText}</Btn>
    </>
  );
};

export default DashboardBtn;
