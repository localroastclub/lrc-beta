import React from 'react';
import Bean from '../../images/bean.svg';

const styles = {
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(1.2)'
  }
};

const CopyL2 = () => {
  const bull = <img src={Bean} style={{ width: '30px', height: '30px' }} />;
  return (
    <div className="copy-l2">
      <h2>Still not sure if a coffee subscription is right for you?</h2>
      <div className="col-list">
        <div className="col-1">
          <ul>
            {bull} We offer a 4 oz Sampler option of our favorite roasts to help
            you get started
          </ul>
          <ul>{bull} Going on vacation? You can pause or cancel at any time</ul>
          <ul>
            {bull} Whether you want the freshest flavor or easy brewing, we
            offer both whole and ground beans
          </ul>
        </div>
        <div className="col-2">
          <ul>
            {bull} We don’t gouge you at shipping, the cost is already included
            in your order price
          </ul>
          <ul>
            {bull} You’re going to buy coffee anyway, why not something you
            enjoy drinking?
          </ul>
          <ul>
            {bull} Your time is valuable. Why drive around town for the best
            beans when you can have them come to you?
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CopyL2;
