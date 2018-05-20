import React, { Component } from 'react';
import { InputGroup } from '@blueprintjs/core';

const PLACEHOLDER = 'Event Name';

export default class EventName extends Component {
  render() {
    return (
      <InputGroup
        className="pt-fill"
        placeholder={PLACEHOLDER}
      />
    );
  }
}
