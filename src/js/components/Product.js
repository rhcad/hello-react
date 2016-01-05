// Example from http://stackoverflow.com/questions/33512017/

import React, {PropTypes} from 'react';

export default class Product extends React.Component {
  static propTypes = {
    key: PropTypes.number,
    maxPrice: PropTypes.number,
    minPrice: PropTypes.number,
    name: PropTypes.string
  };

  render() {
    return (
      <p>Key: {this.props.key} Name: {this.props.name},
        Price: {this.props.minPrice}~{this.props.maxPrice}</p>
    );
  }
}
