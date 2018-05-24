import { ADD_CONTACTS, REMOVE_CONTACTS } from '../actions/types';

const initialState = {
  contacts: [],
  emails: [],
  fundCode: '',
  name: ''
};

function organizationReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACTS:
      return { ...state, contacts: state.contacts.slice().concat(action.contacts) };
    case REMOVE_CONTACTS:
      const contacts = [...state.contacts];
      contacts.splice(action.dex, 1);
      return { ...state, contacts };
    default:
      return state;
  }
}

export default organizationReducer;
