import React from 'react';
import _ from 'lodash';
import ItemCard from './ItemCard';
import DashboardBtn from './DashboardBtn';

const OrderItems = props => {
  return (
    <div>
      <div className='order-items-header'>
        <h4>Your upcoming order:</h4>
        <DashboardBtn ctaText={'Update Subscription'} />
      </div>
      {_.map(props.orderItems, (item, key) => (
        <ItemCard item={item} key={key} />
      ))}
    </div>
  );
};

export default OrderItems;
