import React from 'react';
import './content.css'
import SubHeader from './SubHeader';
import CopyP1 from './CopyP1';
import CopyL1 from './CopyL1';
import Button from '@material-ui/core/Button';
import HowItWorks from './HowItWorks';
import CopyP2 from './CopyP2';
import { withStyles } from '@material-ui/styles';


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



const Content = () => {
  return (
    <div className="content">
      <div className="content-pane">
        <SubHeader />
        <CopyP1 />
        <CopyL1 />
        <OrderBtn>Join the Club</OrderBtn>
        <HowItWorks />
        <CopyP2 />
        <OrderBtn>Fresh Coffee</OrderBtn>
      </div>
    </div>
  )
}

export default Content;