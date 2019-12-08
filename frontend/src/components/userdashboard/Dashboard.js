import React from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import DashboardBtn from './DashboardBtn';
import OrderItems from './OrderItems';
import './dashboard.css';

// const LoginBtn = withStyles({
//   root: {
//     background: '#e6b5da',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'black',
//     height: 48,
//     width: '10vh',
//     padding: '10px 30px',
//     marginBottom: '10%'
//   }
// })(Button);
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

const Login = () => {
  const { dispatch } = React.useContext(AuthContext);
  const initialState = {
    email: '',
    username: '',
    name: 'Blah',
    orderItems: orderItems,
    shipDate: 'December 2, 2019',
    totalPrice: 3000
  };

  const [userData, setUserData] = React.useState(initialState);

  return (
    <div className="dashboard-container">
      <div className="inner-container">
        <h2>Hey there {userData.name}!</h2>
        <div>Your next order is scheduled for {userData.shipDate}</div>
        <div className="order-box">
          <OrderItems orderItems={userData.orderItems} />
          <div className="order-total-box">
            <div className="button-cell">
              <DashboardBtn ctaText={'Freeze Subscription'} />
              <DashboardBtn ctaText={'Cancel Subscription'} />
            </div>
            <div id="order-total">Order Total: ${userData.totalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// in here add a place to change order
// add place to pause order (then allow user to select the duration)
// add on cards the currently selected qty as a dropdown
// add a place on the cards to update qty or remove item
