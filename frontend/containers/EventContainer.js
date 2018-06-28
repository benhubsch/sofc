import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  eventNameChange,
  eventDateChange
} from '../actions';
import EventName from '../components/event/EventName.js';
import Attendees from '../components/event/Attendees.js';
import EventDate from '../components/event/time/EventDate.js';
import Time from '../components/event/time/Time.js';
import { Row, Col } from 'react-flexbox-grid';
import { InputGroup } from '@blueprintjs/core';

const EventContainer = ({ name, handleNameChange, handleDateChange }) => (
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
        <Time />
      </Col>
      <Col md={3}>
        <Time />
      </Col>
    </Row>
    <Row around="xs">
      <Col md={3}>
        <InputGroup className="pt-fill" placeholder={'Event Location'} />
      </Col>
      <Col md={3}>
        <Attendees />
      </Col>
      <Col md={3}>
        <Attendees />
      </Col>
    </Row>
    <Row around="xs">
      <InputGroup
        className="pt-fill"
        placeholder={
          'Target audience (undergraduate, graduate, Durham community, etc.)'
        }
      />
    </Row>
  </Fragment>
);

EventContainer.propTypes = {
  name: PropTypes.string,
  handleNameChange: PropTypes.func,
  handleDateChange: PropTypes.func
};

const mapStateToProps = state => {
  return {
    name: state.eventReducer.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleNameChange: event => dispatch(eventNameChange(event.target.value)),
    handleDateChange: date => dispatch(eventDateChange(date))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  EventContainer
);

