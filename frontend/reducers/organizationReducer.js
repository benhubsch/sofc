import IsEmail from 'isemail';
import _ from 'lodash';
import {
  ADD_CONTACTS,
  REMOVE_CONTACTS,
  ADD_EMAILS,
  REMOVE_EMAILS,
  SELECT_GROUP,
  FUNDCODE_CHANGE
} from '../actions/types';

const GROUPS = {
  'Duke Catholic Center': 1111111,
  'The Wild Ones': 2222222
};

const initialState = {
  contacts: [],
  emails: [],
  fundCode: '',
  group: null
};

const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

const validateEmails = values => {
  var emails = [];
  _(values).each(input => {
    if (IsEmail.validate(input)) {
      emails.push(input);
    }
  });
  return emails;
};

function organizationReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACTS:
      return { ...state, contacts: [...state.contacts, action.contacts] };
    case REMOVE_CONTACTS:
      const contacts = [...state.contacts];
      contacts.splice(action.dex, 1);
      return { ...state, contacts };
    case ADD_EMAILS:
      const validated = validateEmails(action.emails);
      return { ...state, emails: [...state.emails, validated] };
    case REMOVE_EMAILS:
      const emails = [...state.emails];
      emails.splice(action.dex, 1);
      return { ...state, emails };
    case SELECT_GROUP:
      return {
        ...state,
        group: action.group,
        fundCode: GROUPS[action.group.name].toString()
      };
    case FUNDCODE_CHANGE:
      const fundCode = action.fundCode;
      const last = fundCode.charAt(fundCode.length - 1);
      if (!isNumeric(last) && last !== '') {
        return state;
      }
      return { ...state, fundCode: fundCode.substring(0, 7) };
    default:
      return state;
  }
}

export default organizationReducer;
