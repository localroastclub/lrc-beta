import React from 'react';
// here I only want to render three options, limited
// on the choose your own, I want to make it one required, but not limit
// on the single purchase page, I want it to be like the choose your own adventure, but have logic separating the cart
// that is we need to identify when it is

const roasterList = [
  "Barrett's",
  'Little City',
  'Casa Brasil',
  'Greater Goods',
  'Trianon',
  "Mozart's"
];
const roast = ['Light', 'Medium', 'Dark', 'Espresso', 'Decaf'];
const beanStatus = ['Whole', 'Ground'];

// roastItems here should probably be stateful
// Let's make it into the three 'default' items, then allow the child components to change that state
const roastItems = [1, 2, 3];

const TastersTrio = () => {
  return (
    <div>
      <RoastList
        roastItems={roastItems}
        roasterList={roasterList}
        roast={roast}
        beanStatus={beanStatus}
      />
    </div>
  );
};

export default TastersTrio;
