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
import LrcButton from '../LrcButton';

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
            <LrcButton className="order-btn" ctaText={'Join the Club'} />
          </div>
          <HowItWorks />
          <CopyP2 />
          <div className="button">
            <LrcButton ctaText={'Fresh Coffee'} />
          </div>
          <CopyL2 />
          <ReviewLg />
          <Reviews />
          <div className="button bottom-btn">
            <LrcButton className="order-btn" ctaText={'Join the Club'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
