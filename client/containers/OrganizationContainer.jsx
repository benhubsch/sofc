import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import {
  selectGroup,
  addContacts,
  removeContacts,
  addEmails,
  removeEmails,
  fundCodeChange
} from '../actions';
import GroupName from '../components/organization/GroupName';
import Contacts from '../components/organization/Contacts';
import EmailBox from '../components/organization/EmailBox';
import FundCode from '../components/organization/FundCode';

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
  contacts: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleItemSelect: PropTypes.func.isRequired,
  handleContactsAdd: PropTypes.func.isRequired,
  handleContactsRemove: PropTypes.func.isRequired,
  emails: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleEmailsAdd: PropTypes.func.isRequired,
  handleEmailsRemove: PropTypes.func.isRequired,
  fundCode: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  handleFundCodeChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contacts: state.organizationReducer.contacts,
  emails: state.organizationReducer.emails,
  fundCode: state.organizationReducer.fundCode
});

const mapDispatchToProps = dispatch => ({
  handleItemSelect: group => dispatch(selectGroup(group)),
  handleContactsAdd: values => dispatch(addContacts(values)),
  handleContactsRemove: (value, dex) => dispatch(removeContacts(value, dex)),
  handleEmailsAdd: values => dispatch(addEmails(values)),
  handleEmailsRemove: (value, dex) => dispatch(removeEmails(value, dex)),
  handleFundCodeChange: fundCode => dispatch(fundCodeChange(fundCode))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationContainer);
