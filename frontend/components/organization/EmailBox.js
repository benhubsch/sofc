import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEmails, removeEmails } from '../../actions';
import _ from 'lodash';
import IsEmail from 'isemail';
import { TagInput } from '@blueprintjs/core';

const PLACEHOLDER = 'Type contact email(s).';
const LEFT_ICON = 'envelope';

const validateEmails = values => {
  var emails = [];
  _(values).each(input => {
    if (IsEmail.validate(input)) {
      emails.push(input);
    }
  });
  return emails;
};

const EmailBox = ({ emails, handleAdd, handleRemove }) => {
  return (
    <TagInput
      onAdd={ handleAdd }
      onRemove={ handleRemove }
      values={ emails }
      leftIcon={ LEFT_ICON }
      placeholder={ PLACEHOLDER }
      addOnBlur
      fill
    />
  );
};

EmailBox.propTypes = {
  emails: PropTypes.array,
  handleAdd: PropTypes.func,
  handleRemove: PropTypes.func
};

const mapStateToProps = state => {
  return {
    emails: state.organizationReducer.emails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleAdd: values => dispatch(addEmails(validateEmails(values))),
    handleRemove: (value, dex) => dispatch(removeEmails(value, dex))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailBox);
