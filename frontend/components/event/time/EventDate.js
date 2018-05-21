import React, { Component } from 'react';
import moment from 'moment';
import { DateInput } from '@blueprintjs/datetime';

const MONTH_DAY_YEAR = 'MM/DD/YYYY';

export default class EventDate extends Component {
  constructor(props) {
    super(props);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.state = {
      date: null
    };
  }

  handleDateChange(date) {
    this.setState({ date });
  }

  render() {
    return (
      <DateInput
        formatDate={date => moment(date).format(MONTH_DAY_YEAR)}
        parseDate={input => moment(input, MONTH_DAY_YEAR).toDate()}
        placeholder={'Event Date'}
        onChange={this.handleDateChange}
        minDate={new Date()}
        maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
      />
    );
  }
}
