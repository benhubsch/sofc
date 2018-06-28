import * as types from './types';

export const addContacts = contacts => ({
  type: types.ADD_CONTACTS,
  contacts
});

export const removeContacts = (value, dex) => ({
  type: types.REMOVE_CONTACTS,
  value,
  dex
});

export const addEmails = emails => ({
  type: types.ADD_EMAILS,
  emails
});

export const removeEmails = (value, dex) => ({
  type: types.REMOVE_EMAILS,
  value,
  dex
});

export const selectGroup = group => ({
  type: types.SELECT_GROUP,
  group
});

export const fundCodeChange = input => ({
  type: types.FUNDCODE_INPUT_CHANGE,
  input
});

export const eventNameChange = input => ({
  type: types.EVENT_NAME_CHANGE,
  input
});
