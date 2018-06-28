import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup } from '@blueprintjs/core';

const PLACEHOLDER = 'Event Name';

const EventName = ({ name, handleNameChange }) => (
  <InputGroup
    className="pt-fill"
    onChange={handleNameChange}
    value={name}
    placeholder={PLACEHOLDER}
  />
);

EventName.propTypes = {
  name: PropTypes.string,
  handleNameChange: PropTypes.func
};

export default EventName;
