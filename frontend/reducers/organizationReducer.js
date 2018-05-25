import {
  ADD_CONTACTS,
  REMOVE_CONTACTS,
  ADD_EMAILS,
  REMOVE_EMAILS,
  SELECT_GROUP,
  FUNDCODE_INPUT_CHANGE
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

const isNumeric = n => (!isNaN(parseFloat(n)) && isFinite(n));

function organizationReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACTS:
      return { ...state, contacts: state.contacts.slice().concat(action.contacts) };
    case REMOVE_CONTACTS:
      const contacts = [...state.contacts];
      contacts.splice(action.dex, 1);
      return { ...state, contacts };
    case ADD_EMAILS:
      return { ...state, emails: state.emails.slice().concat(action.emails) };
    case REMOVE_EMAILS:
      const emails = [...state.emails];
      emails.splice(action.dex, 1);
      return { ...state, emails };
    case SELECT_GROUP:
      return { ...state, group: action.group, fundCode: GROUPS[action.group.name].toString() };
    case FUNDCODE_INPUT_CHANGE:
      const input = action.input;
      const last = input.charAt(input.length - 1);
      if (!isNumeric(last) && last !== '') {
        return state;
      }
      return { ...state, fundCode: input.substring(0, 7) };
    default:
      return state;
  }
}

export default organizationReducer;
