import React from 'react';
import RoastList from './RoastList';
import './subscription.css';

// here set up the default of one option, 12 oz, no 4 oz
// have a + icon at the bottom to add another line
// this should update something temporary, it's not their cart yet, but it shoud be tied to the users session
// it should also be mappable, so when the user clicks the plus, we get another element in the state array
// it can then be updated or removed. If the user navigates away from the page, we want it to stay in local storage

const ChooseYourAdventure = () => {
  return (
    <div className="subscription-container">
      <div className="inner-sub-container">
        <RoastList roastItems={roastItems} tastersTrio={true} />
      </div>
    </div>
  );
};

export default ChooseYourAdventure;
