import React from 'react';
import PropTypes from 'prop-types';
import { TagInput } from '@blueprintjs/core';

const PLACEHOLDER = 'Type contact email(s).';
const LEFT_ICON = 'envelope';

const EmailBox = ({ emails, handleEmailsAdd, handleEmailsRemove }) => {
  return (
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
};

EmailBox.propTypes = {
  emails: PropTypes.array,
  handleEmailsAdd: PropTypes.func,
  handleEmailsRemove: PropTypes.func
};

export default EmailBox;
