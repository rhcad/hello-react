import React from 'react';
import Other from './components/Other';
import SearchResults from './components/SearchResults';

var results = [
  { id: 1, name: 'A', price_min: 1, price_max: 2 },
  { id: 2, name: 'B', price_min: 1.5, price_max: 4 },
  { id: 3, name: 'C', price_min: 2, price_max: 3.1 },
  { id: 4, name: 'D', price_min: 1, price_max: 5 },
];

require('react-dom').render(
  <div>
    <Other/>
    <SearchResults results={results}/>
  </div>,
  document.getElementById('root')
);
