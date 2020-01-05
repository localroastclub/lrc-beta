import React from 'react';
import AddCircle from '@material-ui/icons/AddCircle';
import RoastList from './RoastList';
import './subscription.css';

// here set up the default of one option, 12 oz, no 4 oz
// have a + icon at the bottom to add another line
// this should update something temporary, it's not their cart yet, but it shoud be tied to the users session
// it should also be mappable, so when the user clicks the plus, we get another element in the state array
// it can then be updated or removed. If the user navigates away from the page, we want it to stay in local storage

const ChooseYourAdventure = () => {
  const [roastItems, setRoastItems] = React.useState([
    { roaster: '', roast: '', bean: '', origin: '', size: '12 oz' }
  ]);

  const addItem = () => {
    setRoastItems([
      ...roastItems,
      { roaster: '', roast: '', bean: '', origin: '', size: '' }
    ]);
  };

  const removeItem = index => {
    console.log('');
    roastItems.splice(index, 1);
    setRoastItems([...roastItems]);
  };

  useEffect(() => {
    console.log('setting localStorage');
    localStorage.setItem('orderChoice', JSON.stringify(roastItems));
  }, [roastItems]);

  return (
    <div className="subscription-container">
      <div className="inner-sub-container">
        <RoastList
          roastItems={roastItems}
          customSelection={true}
          removeItem={removeItem}
        />
        <div className="plus">
          <AddCircle id="plus" style={{ fontSize: 40 }} onClick={addItem} />
        </div>
      </div>
    </div>
  );
};

export default ChooseYourAdventure;
