import React from 'react';
import _ from 'lodash';
import RoastListItem from './RoastListItem';

const RoastList = props => {
  return (
    <div>
      <h4>Your upcoming order:</h4>
      {_.map(props.RoastItems, (item, key) => (
        <RoastListItem item={item} key={key} />
      ))}
    </div>
  );
};

export default RoastList;
