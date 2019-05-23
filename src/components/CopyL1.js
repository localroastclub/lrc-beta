import React from 'react';

const styles = {
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
};

const CopyL1 = () => {
  const bull = <span style={styles.bullet}>•</span>;
  return (
    <>
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
    </>
  )
};

export default CopyL1;