import React from 'react';

const LargeCard = props => {
  const rowName = props.rowName === 'subheader' ? 'card-copy' : 'how-cards';
  return (
    <div className={rowName}>
      {props.item.image}
      <h3>{props.item.copy}</h3>
    </div>
  );
};

export default LargeCard;
