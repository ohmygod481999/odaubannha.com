import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import ListWrapper from './ListWrapper';

const sortOptions = {
  created_at_asc: 'created_at:ASC',
  created_at_desc: 'created_at:DESC',
};

const SortList = ({ onClick, selectedItem }) => {
  return (
    <ListWrapper>
      {Object.keys(sortOptions).map(item => {
        return (
          <ListItem
            key={item}
            label={item}
            value={sortOptions[item]}
            onClick={onClick}
            selectedItem={selectedItem}
          />
        );
      })}
    </ListWrapper>
  );
};

SortList.defaultProps = {
  onClick: () => {},
  selectedItem: null,
};

SortList.propTypes = {
  onClick: PropTypes.func,
  selectedItem: PropTypes.string,
};

export default SortList;
