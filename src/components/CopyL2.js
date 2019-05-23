import React from 'react';

const styles = {
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
};

const CopyL2 = () => {
  const bull = <span style={styles.bullet}>•</span>;
  return (
    <>
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
    </>
    
  )
};

export default CopyL2;