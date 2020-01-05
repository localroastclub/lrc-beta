import React, { useEffect } from 'react';
import OrderList from './OrderList';
import './subscription.css';

const ConfirmOrder = () => {
  // grab the options from localStorage
  const [orderItems, setOrderItems] = React.useState([]);

  useEffect(() => {
    let items;
    const subscriptionChoice = localStorage.getItem('subscriptionChoice');
    if (subscriptionChoice === 'Tasters trio') {
      items = JSON.parse(localStorage.getItem('orderTrio'));
    } else if (subscriptionChoice === 'Choose your own adventure') {
      items = JSON.parse(localStorage.getItem('orderChoice'));
    } else {
      // coffee of the month
    }
    setOrderItems(items);
  }, []);

  return (
    <div className="subscription-container">
      <div className="inner-sub-container">
        <OrderList orderItems={orderItems} />
      </div>
    </div>
  );
};

export default ConfirmOrder;
