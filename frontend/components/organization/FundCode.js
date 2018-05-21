import React, { Component } from 'react';
import { InputGroup } from '@blueprintjs/core';

const PLACEHOLDER = 'Fund Code';

export default class FundCode extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.isNumeric = this.isNumeric.bind(this);
    this.state = {
      value: ''
    };
  }

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  handleChange(event) {
    const input = event.target.value;
    const last = input.charAt(input.length - 1);
    if (!this.isNumeric(last) && last !== '') {
      console.log('setting state to', this.state.value);
      console.log('last', last);
      this.setState({ value: this.state.value });
      return;
    }
    this.setState({ value: input.substring(0, 7) });
  }

  render() {
    return (
      <InputGroup
        className="pt-fill"
        onChange={this.handleChange}
        value={this.state.value}
        placeholder={PLACEHOLDER}
      />
    );
  }
}
