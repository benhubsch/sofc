import React from 'react';
import PropTypes from 'prop-types';
import { TimePicker } from '@blueprintjs/datetime';

const Time = ({ handleTimeChange }) => (
  <TimePicker useAmPm selectAllOnFocus onChange={handleTimeChange} />
);

Time.propTypes = {
  handleTimeChange: PropTypes.func.isRequired
};

export default Time;
