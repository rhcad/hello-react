import React, {Component} from 'react';

export default class Hello extends Component {
  render() {
    return (
      <div>Hello from: {this.props.messageText}</div>
    );
  }
}
