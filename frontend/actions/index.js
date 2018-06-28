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

export const fundCodeChange = fundCode => ({
  type: types.FUNDCODE_CHANGE,
  fundCode
});

export const eventNameChange = name => ({
  type: types.EVENT_NAME_CHANGE,
  name
});

export const eventDateChange = date => ({
  type: types.EVENT_DATE_CHANGE,
  date
});
