import React, { Component } from 'react';
import { InputGroup } from '@blueprintjs/core';

const PLACEHOLDER = 'Attendees';

export default class Attendees extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.isNumeric = this.isNumeric.bind(this);
    this.state = {
      value: null
    };
  }

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  handleChange(event) {
    const input = event.target.value;
    const last = input.charAt(input.length - 1);
    if (!this.isNumeric(last) && last !== '') {
      this.setState({ value: this.state.value });
      return;
    }
    this.setState({ value: input });
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
