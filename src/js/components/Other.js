import React from 'react';
import Hello from './Hello';

export default class Other extends React.Component {
  render() {
    return (
      <Hello messageText={"Other"}/>
    );
  }
}
