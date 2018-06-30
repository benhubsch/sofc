import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import { InputGroup } from '@blueprintjs/core';
import {
  eventNameChange,
  eventDateChange,
  startTimeChange,
  endTimeChange,
  undergradChange,
  graduateChange,
  locationChange,
  audienceChange
} from '../actions';
import EventName from '../components/event/EventName';
import Attendees from '../components/event/Attendees';
import EventDate from '../components/event/time/EventDate';
import Time from '../components/event/time/Time';

const EventContainer = ({
  name,
  undergrads,
  graduates,
  handleNameChange,
  handleDateChange,
  handleStartTimeChange,
  handleEndTimeChange,
  handleUndergradChange,
  handleGraduateChange,
  handleLocationChange,
  handleAudienceChange
}) => (
  <Fragment>
    <Row around="xs">
      <Col md={3}>
        <EventName name={name} handleNameChange={handleNameChange} />
      </Col>
    </Row>
    <Row around="xs">
      <Col md={3}>
        <EventDate handleDateChange={handleDateChange} />
      </Col>
      <Col md={3}>
        <Time handleTimeChange={handleStartTimeChange} />
      </Col>
      <Col md={3}>
        <Time handleTimeChange={handleEndTimeChange} />
      </Col>
    </Row>
    <Row around="xs">
      <Col md={3}>
        <InputGroup
          className="pt-fill"
          placeholder="Event Location"
          onChange={handleLocationChange}
        />
      </Col>
      <Col md={3}>
        <Attendees
          attendees={undergrads}
          handleAttendeeChange={handleUndergradChange}
        />
      </Col>
      <Col md={3}>
        <Attendees
          attendees={graduates}
          handleAttendeeChange={handleGraduateChange}
        />
      </Col>
    </Row>
    <Row around="xs">
      <InputGroup
        className="pt-fill"
        placeholder="Target audience (undergraduate, graduate, Durham community, etc.)"
        onChange={handleAudienceChange}
      />
    </Row>
  </Fragment>
);

EventContainer.propTypes = {
  name: PropTypes.string.isRequired,
  undergrads: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  graduates: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  handleStartTimeChange: PropTypes.func.isRequired,
  handleEndTimeChange: PropTypes.func.isRequired,
  handleUndergradChange: PropTypes.func.isRequired,
  handleGraduateChange: PropTypes.func.isRequired,
  handleLocationChange: PropTypes.func.isRequired,
  handleAudienceChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  name: state.eventReducer.name,
  undergrads: state.eventReducer.undergrads,
  graduates: state.eventReducer.graduates
});

const mapDispatchToProps = dispatch => ({
  handleNameChange: event => dispatch(eventNameChange(event.target.value)),
  handleDateChange: date => dispatch(eventDateChange(date)),
  handleStartTimeChange: startTime => dispatch(startTimeChange(startTime)),
  handleEndTimeChange: endTime => dispatch(endTimeChange(endTime)),
  handleUndergradChange: undergrads => dispatch(undergradChange(undergrads)),
  handleGraduateChange: graduates => dispatch(graduateChange(graduates)),
  handleLocationChange: event => dispatch(locationChange(event.target.value)),
  handleAudienceChange: event => dispatch(audienceChange(event.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventContainer);
