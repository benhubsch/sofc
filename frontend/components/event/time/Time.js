import React, { Component } from 'react';
import { TimePicker } from '@blueprintjs/datetime';


export default class StartTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null
    };
  }

  render() {
    return (
      <TimePicker
        useAmPm
        selectAllOnFocus
        defaultValue={new Date()}
      />
    );
  }
}