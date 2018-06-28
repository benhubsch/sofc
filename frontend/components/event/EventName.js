import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { eventNameChange } from '../../actions';
import { InputGroup } from '@blueprintjs/core';

const PLACEHOLDER = 'Event Name';

const EventName = ({ name, handleChange }) => (
  <InputGroup
    className="pt-fill"
    onChange={handleChange}
    value={name}
    placeholder={PLACEHOLDER}
  />
);

EventName.propTypes = {
  name: PropTypes.String,
  handleChange: PropTypes.func
};

const mapStateToProps = state => {
  return {
    name: state.eventReducer.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => dispatch(eventNameChange(event.target.value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventName);
