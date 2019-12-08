import React from 'react';
import _ from 'lodash';
import SubscriptionCard from './SubscriptionCard';

const options = [
  {
    name: 'Tasters trio',
    description:
      "Best option for dabblers. You get three 4oz bags that you can opt to choose or let us send you our favorites. Don't know what you like yet? We recommend starting here.",
    price: 2000,
    image: ''
  },
  {
    name: 'Coffee of the month',
    description: "Local Roast Club's choice 12oz bag.",
    price: 2000,
    image: ''
  },
  {
    name: 'Choose your own adventure',
    description:
      'For full households who want to explore a little more. You have full control over the quantity and roasts. One 12oz bag order required with the option to add more 12 oz or 4 oz.',
    price: 'Varies',
    image: ''
  }
];

const SubscriptionTypes = () => {
  return (
    <div>
      {_.map(options, (item, key) => {
        return <SubscriptionCard item={item} key={key} />;
      })}
    </div>
  );
};

export default SubscriptionTypes;
