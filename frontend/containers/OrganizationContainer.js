import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import GroupName from '../components/organization/GroupName.js';
import Contacts from '../components/organization/Contacts.js';
import EmailBox from '../components/organization/EmailBox.js';
import FundCode from '../components/organization/FundCode.js';
import { Row, Col } from 'react-flexbox-grid';

const OrganizationContainer = () => {
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
};

OrganizationContainer.propTypes = {
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationContainer);
