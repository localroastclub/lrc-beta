import React from 'react';

const styles = {
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(1.2)',
  },
};

const CopyL1 = () => {
  const bull = <span style={styles.bullet}>•</span>;
  return (
    <div className="col-list">
      <div className="col-1">
        <ul>
          {bull} Gourmet coffees exclusive to the Club
        </ul>
        <ul>
          {bull} Keeping it local with coffee roasted only in Austin
        </ul>
        <ul>
          {bull} 7 craft roasters and growing
        </ul>
        <ul>
          {bull} 100+ types of premium coffee
        </ul>
        <ul>
          {bull} Full 12-oz bags for variety
        </ul>
        <ul>
          {bull} 5-lb bags for large groups
        </ul>
      </div>
      <div className="col-2">
      <ul>
          {bull} Local delivery within 2 days
        </ul>
        <ul>
          {bull} Free delivery anywhere in the continental USA
        </ul>
        <ul>
          {bull} A clear conscience with Fair Trade and organic beans
        </ul>
        <ul>
          {bull} A set-and-relax subscription service
        </ul>
        <ul>
          {bull} Peace of mind knowing we’re finding delicious coffee for you every month
        </ul>
      </div>
    </div>
  )
};

export default CopyL1;