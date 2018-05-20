import React, { Component, Fragment } from 'react';
import EventName from './EventName.js';
import Attendees from './Attendees.js';
import EventDate from './time/EventDate.js';
import Time from './time/Time.js';
import { Row, Col } from 'react-flexbox-grid';
import { InputGroup } from '@blueprintjs/core';

export default class Event extends Component {
  render() {
    return (
      <Fragment>
        <Row around="xs">
          <Col md={3}>
            <EventName />
          </Col>
        </Row>
        <Row around="xs">
          <Col md={3}>
            <EventDate />
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
            <InputGroup
              className="pt-fill"
              placeholder={'Event Location'}
            />
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
            placeholder={'Target audience (undergraduate, graduate, Durham community, etc.)'}
          />
        </Row>
      </Fragment>
    );
  }
}
