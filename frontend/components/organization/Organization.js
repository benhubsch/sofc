import React, { Component, Fragment } from 'react';
import GroupName from './GroupName.js';
import Contacts from './Contacts.js';
import EmailBox from './EmailBox.js';
import FundCode from './FundCode.js';
import { Row, Col } from 'react-flexbox-grid';

export default class Organization extends Component {
  render() {
    return (
      <Fragment>
        <Row around="xs">
          <Col md={3}>
            <GroupName />
          </Col>
          <Col md={3}>
            <Contacts />
          </Col>
        </Row>
        <Row around="xs">
          <Col md={3}>
            <EmailBox />
          </Col>
          <Col md={3}>
            <FundCode />
          </Col>
        </Row>
      </Fragment>
    );
  }
}
