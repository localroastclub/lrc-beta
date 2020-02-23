import React from 'react';
import _ from 'lodash';
import ItemCard from './ItemCard';

const OrderItems = props => {
  return (
    <div>
      {_.map(props.orderItems, (item, key) => (
        <ItemCard item={item} key={key} />
      ))}
    </div>
  );
};

export default OrderItems;
