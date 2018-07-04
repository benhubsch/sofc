import React from 'react';
import PropTypes from 'prop-types';
import { NumericInput } from '@blueprintjs/core';

const PLACEHOLDER = 'Attendees';

const Attendees = ({ attendees, handleAttendeeChange }) => (
  <NumericInput
    className="pt-fill"
    onValueChange={handleAttendeeChange}
    value={attendees}
    placeholder={PLACEHOLDER}
    selectAllOnFocus
    allowNumericCharactersOnly
  />
);

Attendees.propTypes = {
  attendees: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  handleAttendeeChange: PropTypes.func.isRequired
};

export default Attendees;
