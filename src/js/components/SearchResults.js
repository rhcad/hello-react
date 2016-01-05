// Example from http://stackoverflow.com/questions/33512017/

import React, {PropTypes} from 'react';
import Product from './Product';

class SearchResults extends React.Component {

  static propTypes = {
    results: PropTypes.arrayOf(PropTypes.object)
  };
  static defaultProps = {
    results: []
  };

  constructor(props) {
    super(props);
    this.state = {results: props.results};
  }

  render() {
    let main;

    if (this.props && this.props.results && this.props.results.length) {
      let products = this.props.results.map(function(product) {
        return (
          <Product
            imageUrl={product.image_url_large}
            key={product.id}
            maxPrice={product.price_max}
            minPrice={product.price_min}
            name={product.name}
            />
        );
      }, this);

      main = (
        <section id="results">
          <ul id="todo-list">
            {products}
          </ul>
        </section>
      );
    }

    return (
      <div>
        <header id="header">
          <h1>Search Results</h1>
        </header>
        {main}
      </div>
    );
  }

}

export default SearchResults;
