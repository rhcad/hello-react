import React, {Component} from 'react';

export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { text: props.messageText, count: 0 };
  }

  handleAddTick() {
    this.setState({ count: this.state.count + 1 });
  }

  handleSubtract = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <p>Hello from: {this.props.messageText}. Clicked {this.state.count} times.</p>
        <span className="btn-test"
              onClick={this.handleAddTick.bind(this)}>Add tick via bind</span>
        <span className="btn-test"
              onClick={this.handleSubtract}>Subtract via auto bind</span>
      </div>
    );
  }
}
