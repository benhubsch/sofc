import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContacts, removeContacts } from '../../actions';
import { TagInput } from '@blueprintjs/core';

const PLACEHOLDER = 'Contact Person(s)';
const LEFT_ICON = 'people';

const Contacts = ({ contacts, handleAdd, handleRemove }) => {
  return (
    <TagInput
      onAdd={ handleAdd }
      onRemove={ handleRemove }
      values={ contacts }
      leftIcon={ LEFT_ICON }
      placeholder={ PLACEHOLDER }
      addOnBlur
      fill
    />
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
  handleAdd: PropTypes.func,
  handleRemove: PropTypes.func
};

const mapStateToProps = state => {
  return {
    contacts: state.organizationReducer.contacts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleAdd: values => dispatch(addContacts(values)),
    handleRemove: (value, dex) => dispatch(removeContacts(value, dex))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
