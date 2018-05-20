import React, { Component, Fragment } from 'react';
import GroupInfo from './GroupInfo.js';
import Contacts from './Contacts.js';
import EmailBox from './EmailBox.js';
import FundCode from './FundCode.js';
import { Row, Col } from 'react-flexbox-grid';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/select/lib/css/blueprint-select.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'normalize.css/normalize.css';

export default class Organization extends Component {
  render() {
    return (
      <Fragment>
        <Row around="xs">
          <Col md={3}>
            <GroupInfo />
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
