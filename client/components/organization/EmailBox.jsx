import React from 'react';
import PropTypes from 'prop-types';
import { TagInput } from '@blueprintjs/core';

const PLACEHOLDER = 'Type contact email(s).';
const LEFT_ICON = 'envelope';

const EmailBox = ({ emails, handleEmailsAdd, handleEmailsRemove }) => (
  <TagInput
    onAdd={handleEmailsAdd}
    onRemove={handleEmailsRemove}
    values={emails}
    leftIcon={LEFT_ICON}
    placeholder={PLACEHOLDER}
    addOnBlur
    fill
  />
);

EmailBox.propTypes = {
  emails: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleEmailsAdd: PropTypes.func.isRequired,
  handleEmailsRemove: PropTypes.func.isRequired
};

export default EmailBox;
