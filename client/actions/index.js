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

export const fundcodeChange = fundcode => ({
  type: types.FUNDCODE_CHANGE,
  fundcode
});

export const eventNameChange = name => ({
  type: types.EVENT_NAME_CHANGE,
  name
});

export const eventDateChange = date => ({
  type: types.EVENT_DATE_CHANGE,
  date
});

export const startTimeChange = startTime => ({
  type: types.START_TIME_CHANGE,
  startTime
});

export const endTimeChange = endTime => ({
  type: types.END_TIME_CHANGE,
  endTime
});

export const undergradChange = undergrads => ({
  type: types.UNDERGRAD_CHANGE,
  undergrads
});

export const graduateChange = graduates => ({
  type: types.GRADUATE_CHANGE,
  graduates
});

export const locationChange = location => ({
  type: types.EVENT_LOCATION_CHANGE,
  location
});

export const audienceChange = audience => ({
  type: types.EVENT_AUDIENCE_CHANGE,
  audience
});

export const cellsChange = changes => ({
  type: types.CELLS_CHANGE,
  changes
});

export const rowChange = isAdd => ({
  type: types.ROW_CHANGE,
  isAdd
});

export const setId = id => ({
  type: types.SET_ID,
  id
});
