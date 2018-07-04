import React from 'react';
import PropTypes from 'prop-types';
import { TagInput } from '@blueprintjs/core';

const PLACEHOLDER = 'Contact Person(s)';
const LEFT_ICON = 'people';

const Contacts = ({ contacts, handleContactsAdd, handleContactsRemove }) => (
  <TagInput
    onAdd={handleContactsAdd}
    onRemove={handleContactsRemove}
    values={contacts}
    leftIcon={LEFT_ICON}
    placeholder={PLACEHOLDER}
    addOnBlur
    fill
  />
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleContactsAdd: PropTypes.func.isRequired,
  handleContactsRemove: PropTypes.func.isRequired
};

export default Contacts;
