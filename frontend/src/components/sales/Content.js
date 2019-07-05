import React from 'react';
import './content.css';
import Header from './Header';
import SubHeader from './SubHeader';
import CopyP1 from './CopyP1';
import CopyL1 from './CopyL1';
import Button from '@material-ui/core/Button';
import HowItWorks from './HowItWorks';
import CopyP2 from './CopyP2';
import CopyL2 from './CopyL2';
import { withStyles } from '@material-ui/styles';
import ReviewLg from './ReviewLg';
import Reviews from './Reviews';

const OrderBtn = withStyles({
  root: {
    background: '#e6b5da',
    '&:hover': {
      background: 'linear-gradient(30deg, #e6b5da 40%, #f5f733 60%)'
    },
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    padding: '0 30px'
  }
})(Button);

const Content = () => {
  return (
    <>
      <Header />
      <div className="content">
        <div className="content-pane">
          <SubHeader />
          <CopyP1 />
          <CopyL1 />
          <div className="button">
            <OrderBtn className="order-btn">Join the Club</OrderBtn>
          </div>
          <HowItWorks />
          <CopyP2 />
          <div className="button">
            <OrderBtn>Fresh Coffee</OrderBtn>
          </div>
          <CopyL2 />
          <ReviewLg />
          <Reviews />
          <div className="button bottom-btn">
            <OrderBtn className="order-btn">Join the Club</OrderBtn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
