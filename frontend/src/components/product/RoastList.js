import React from 'react';
import _ from 'lodash';
import RoastListItem from './RoastListItem';

const RoastList = props => {
  return (
    <div>
      {_.map(props.roastItems, (item, key) => {
        return (
          <RoastListItem
            item={item}
            index={key + 1}
            key={key}
            customSelection={props.customSelection}
            tastersTrio={props.tastersTrio}
            removeItem={props.removeItem}
          />
        );
      })}
    </div>
  );
};

export default RoastList;
