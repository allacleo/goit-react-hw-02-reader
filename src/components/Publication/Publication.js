/*eslint-disable*/

import React from 'react';
import propTypes from 'prop-types';
import style from '../Reader.module.css';

const Publication = ({ publication, publicationIdx }) => (
  <article className={style.publication}>
    <h2>
      {' '}
      {publicationIdx}. {publication.title}
    </h2>
    <p>{publication.text}</p>
  </article>
);

Publication.propTypes = {
  publication: propTypes.shape({
    title: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
  }).isRequired,
  publicationIdx: propTypes.number.isRequired,
};

export default Publication;
