import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ id, name, email }) => {
  return (
    <div className="grow bg-light-green br3 pa3 ma2 dib">
      <img role="presentation" src={`//robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};
export default Card;