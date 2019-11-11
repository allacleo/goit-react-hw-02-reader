/*eslint-disable */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import style from './Reader.module.css';

import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';

export default class Reader extends Component {
  static propTypes = {
    // publicationIdx: propTypes.number,
    items: propTypes.arrayOf(propTypes.object.isRequired).isRequired,
  };

  static defaultProps = {
    publicationIdx: 0,
  };

  state = {
    publicationIdx: this.props.publicationIdx,
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      publicationIdx: prevState.publicationIdx - 1,
    }));
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      publicationIdx: prevState.publicationIdx + 1,
    }));
  };

  render() {
    const { publicationIdx } = this.state;
    const { items } = this.props;

    return (
      <div className={style.reader}>
        <Controls
          publicationIdx={publicationIdx}
          itemsLength={items.length}
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
        <Counter
          publicationIdx={publicationIdx + 1}
          itemsLength={items.length}
        />
        <Publication
          publication={items[publicationIdx]}
          publicationIdx={publicationIdx + 1}
        />
      </div>
    );
  }
}
