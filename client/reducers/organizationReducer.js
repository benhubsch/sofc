import IsEmail from 'isemail';
import _ from 'lodash';
import {
  ADD_CONTACTS,
  REMOVE_CONTACTS,
  ADD_EMAILS,
  REMOVE_EMAILS,
  SELECT_GROUP,
  FUNDCODE_CHANGE,
  SET_ID
} from '../actions/types';

const GROUPS = {
  'Duke Catholic Center': 1111111,
  'The Wild Ones': 2222222
};

const initialState = {
  id: null,
  contacts: [],
  emails: [],
  fundcode: '',
  name: ''
};

const validateEmails = values => {
  const emails = [];
  _(values).each(input => {
    if (IsEmail.validate(input)) {
      emails.push(input);
    }
  });
  return emails;
};

const organizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ID:
      return { ...state, id: action.id };
    case ADD_CONTACTS:
      return { ...state, contacts: [...state.contacts, action.contacts] };
    case REMOVE_CONTACTS: {
      const contacts = [...state.contacts];
      contacts.splice(action.dex, 1);
      return { ...state, contacts };
    }
    case ADD_EMAILS: {
      const validated = validateEmails(action.emails);
      return { ...state, emails: [...state.emails, validated] };
    }
    case REMOVE_EMAILS: {
      const emails = [...state.emails];
      emails.splice(action.dex, 1);
      return { ...state, emails };
    }
    case SELECT_GROUP:
      return {
        ...state,
        name: action.group,
        fundcode: GROUPS[action.group.name]
      };
    case FUNDCODE_CHANGE:
      return { ...state, fundcode: action.fundcode };
    default:
      return state;
  }
};

export default organizationReducer;
