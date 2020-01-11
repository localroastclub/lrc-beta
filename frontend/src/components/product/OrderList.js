import React from 'react';
import _ from 'lodash';
import ItemCard from './ItemCard';

const OrderList = props => {
  return (
    <div>
      <h4>Review Your Order:</h4>
      {_.map(props.orderItems, (item, key) => (
        <ItemCard item={item} selection={props.selection} key={key} />
      ))}
    </div>
  );
};

export default OrderList;
