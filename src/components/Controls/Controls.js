/*eslint-disable*/

import React from 'react';
import propTypes from 'prop-types';

import style from '../Reader.module.css';

const Controls = ({
  onDecrement,
  onIncrement,
  publicationIdx,
  itemsLength,
}) => (
  <section className={style.controls}>
    <button
      type="button"
      className={style.button}
      onClick={onDecrement}
      disabled={publicationIdx === 0}
    >
      Назад
    </button>
    <button
      type="button"
      className={style.button}
      onClick={onIncrement}
      disabled={publicationIdx === itemsLength - 1}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onDecrement: propTypes.func.isRequired,
  onIncrement: propTypes.func.isRequired,
  publicationIdx: propTypes.number.isRequired,
  itemsLength: propTypes.number.isRequired,
};

export default Controls;
