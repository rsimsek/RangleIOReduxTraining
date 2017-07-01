import React from "react";
import PropTypes from 'prop-types';

const SearchBox = props => {
  const { onSearchChange } = props;
  return (
    <div className="pa2">
      <input className="pa2" type="search" placeholder="search Robots..." onChange={
        onSearchChange
      } />
    </div>
  );
};

SearchBox.propTypes = { onSearchChange: PropTypes.func.isRequired };

export default SearchBox