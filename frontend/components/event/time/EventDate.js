import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DateInput } from '@blueprintjs/datetime';

const MONTH_DAY_YEAR = 'MM/DD/YYYY';

const EventDate = ({ handleDateChange }) => (
  <DateInput
    formatDate={date => moment(date).format(MONTH_DAY_YEAR)}
    parseDate={input => moment(input, MONTH_DAY_YEAR).toDate()}
    placeholder={'Event Date'}
    onChange={handleDateChange}
    minDate={new Date()}
    maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
  />
);

EventDate.propTypes = {
  handleDateChange: PropTypes.func
};

export default EventDate;
