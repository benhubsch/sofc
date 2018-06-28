import React from 'react';
import PropTypes from 'prop-types';
import { TagInput } from '@blueprintjs/core';

const PLACEHOLDER = 'Contact Person(s)';
const LEFT_ICON = 'people';

const Contacts = ({ contacts, handleContactsAdd, handleContactsRemove }) => (
  <TagInput
    onAdd={ handleContactsAdd }
    onRemove={ handleContactsRemove }
    values={ contacts }
    leftIcon={ LEFT_ICON }
    placeholder={ PLACEHOLDER }
    addOnBlur
    fill
  />
);

Contacts.propTypes = {
  contacts: PropTypes.array,
  handleContactsAdd: PropTypes.func,
  handleContactsRemove: PropTypes.func
};

export default Contacts;
