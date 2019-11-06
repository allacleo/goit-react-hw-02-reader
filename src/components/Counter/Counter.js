/*eslint-disable */
import React from 'react';
import propTypes from 'prop-types';

const Counter = ({ publicationIdx, itemsLength }) => (
  <p className={styleMedia.counter}>
    {publicationIdx}/{itemsLength}
  </p>
);

Counter.propTypes = {
  publicationIdx: propTypes.number.isRequired,
  itemsLength: propTypes.number.isRequired,
};

export default Counter;
