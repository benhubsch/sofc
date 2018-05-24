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
