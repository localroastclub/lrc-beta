import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import ItemCard from './ItemCard';
import DashboardBtn from './DashboardBtn';

const OrderItems = props => {
  return (
    <div>
      <div className='order-items-header'>
        <h4>Your upcoming order:</h4>
        <Link to='/subscribe'>
          <DashboardBtn ctaText={'Update Subscription'} />
        </Link>
      </div>
      {_.map(props.orderItems, (item, key) => (
        <ItemCard item={item} key={key} />
      ))}
    </div>
  );
};

export default OrderItems;
