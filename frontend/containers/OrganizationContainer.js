import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  selectGroup,
  addContacts,
  removeContacts,
  addEmails,
  removeEmails,
  fundCodeChange
} from '../actions';
import GroupName from '../components/organization/GroupName.js';
import Contacts from '../components/organization/Contacts.js';
import EmailBox from '../components/organization/EmailBox.js';
import FundCode from '../components/organization/FundCode.js';
import { Row, Col } from 'react-flexbox-grid';

const OrganizationContainer = ({
  contacts,
  emails,
  fundCode,
  handleItemSelect,
  handleContactsAdd,
  handleContactsRemove,
  handleEmailsAdd,
  handleEmailsRemove,
  handleFundCodeChange
}) => (
  <Fragment>
    <Row around="xs">
      <Col md={3}>
        <GroupName handleItemSelect={handleItemSelect} />
      </Col>
      <Col md={3}>
        <Contacts
          contacts={contacts}
          handleContactsAdd={handleContactsAdd}
          handleContactsRemove={handleContactsRemove}
        />
      </Col>
    </Row>
    <Row around="xs">
      <Col md={3}>
        <EmailBox
          emails={emails}
          handleEmailsAdd={handleEmailsAdd}
          handleEmailsRemove={handleEmailsRemove}
        />
      </Col>
      <Col md={3}>
        <FundCode
          fundCode={fundCode}
          handleFundCodeChange={handleFundCodeChange}
        />
      </Col>
    </Row>
  </Fragment>
);

OrganizationContainer.propTypes = {
  contacts: PropTypes.array,
  handleItemSelect: PropTypes.func,
  handleContactsAdd: PropTypes.func,
  handleContactsRemove: PropTypes.func,
  emails: PropTypes.array,
  handleEmailsAdd: PropTypes.func,
  handleEmailsRemove: PropTypes.func,
  fundCode: PropTypes.string,
  handleFundCodeChange: PropTypes.func
};

const mapStateToProps = state => {
  return {
    contacts: state.organizationReducer.contacts,
    emails: state.organizationReducer.emails,
    fundCode: state.organizationReducer.fundCode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleItemSelect: group => dispatch(selectGroup(group)),
    handleContactsAdd: values => dispatch(addContacts(values)),
    handleContactsRemove: (value, dex) => dispatch(removeContacts(value, dex)),
    handleEmailsAdd: values => dispatch(addEmails(values)),
    handleEmailsRemove: (value, dex) => dispatch(removeEmails(value, dex)),
    handleFundCodeChange: event => dispatch(fundCodeChange(event.target.value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  OrganizationContainer
);
