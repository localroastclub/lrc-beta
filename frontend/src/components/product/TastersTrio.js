import React from 'react';
import RoastList from './RoastList';
import './subscription.css';

// here I only want to render three options, limited
// on the choose your own, I want to make it one required, but not limit
// on the single purchase page, I want it to be like the choose your own adventure, but have logic separating the cart
// that is we need to identify when it is

// roastItems here should probably be stateful
// Let's make it into the three 'default' items, then allow the child components to change that state

const TastersTrio = () => {
  const [roastItems, setRoastItems] = React.useState([
    { roaster: "Barrett's", roastType: 'Light', beanStatus: 'Whole' },
    { roaster: "Mozart's", roastType: 'Dark', beanStatus: 'Whole' },
    { roaster: 'Little City', roastType: 'Medium', beanStatus: 'Whole' }
  ]);

  return (
    <div className="subscription-container">
      <div className="inner-sub-container">
        <RoastList roastItems={roastItems} />
      </div>
    </div>
  );
};

export default TastersTrio;
