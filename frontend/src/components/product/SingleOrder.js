import React from 'react';

// here set up the default of one option, 12 oz, no 4 oz
// allow subsequent options to be 4 oz (the top one should never be able to be removed)
// have a + icon at the bottom to add another line
// this should update something temporary, it's not their cart yet, but it shoud be tied to the users session
// it should also be mappable, so when the user clicks the plus, we get another element in the state array
// it can then be updated or removed. If the user navigates away from the page, we want it to stay in local storage

// once the user clicks add to cart reset this page...
// what if user has one 12oz in cart and wants to update order by adding one 4 oz?
// we can either grab from the existing in cart data, or we can allow them to only edit on that cart page

const SingleOrder = () => {
  return <div></div>;
};

export default SingleOrder;
