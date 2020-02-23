import React from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import OrderItems from './OrderItems';
import './cart.css';

const orderItems = [
  {
    roaster: 'Little City',
    roastType: 'Dark',
    bean: 'Whole',
    origin: 'Single Origin',
    imageUrl:
      'https://www.localroastclub.com/v/vspfiles/assets/images/little-city-logo.png'
  },
  {
    roaster: 'Trianon',
    roastType: 'Medium',
    bean: 'Whole',
    origin: 'Blend',
    imageUrl:
      'https://www.localroastclub.com/v/vspfiles/assets/images/trianon%20logo.jpeg'
  },
  {
    roaster: 'Casa Brazil',
    roastType: 'Espresso',
    bean: 'Whole',
    origin: 'Single Origin',
    imageUrl:
      'https://www.localroastclub.com/v/vspfiles/assets/images/casa-brasil-coffees-logo.png'
  }
];

const Cart = () => {
  const { dispatch } = React.useContext(AuthContext);
  const initialState = {
    email: '',
    username: '',
    name: 'Blah',
    orderItems: orderItems,
    shipDate: '',
    totalPrice: (30.0).toFixed(2)
  };

  const [userData, setUserData] = React.useState(initialState);

  return (
    <div className='dashboard-container'>
      <div className='inner-container'>
        <h2>Cart</h2>
        <div className='order-box'>
          <OrderItems orderItems={userData.orderItems} />
          <div className='order-total-box'>
            <div className='button-cell'>{/* removed dashboardBtn */}</div>
            <div id='order-total'>Order Total: ${userData.totalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
