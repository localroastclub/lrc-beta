import React from 'react';
import _ from 'lodash';
import ItemCard from './ItemCard';

const OrderItems = props => {
  return (
    <div>
      <h4>Your upcoming order:</h4>
      {_.map(props.orderItems, (item, key) => (
        <ItemCard item={item} key={key} />
      ))}
    </div>
  );
};

export default OrderItems;
