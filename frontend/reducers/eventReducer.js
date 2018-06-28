import { EVENT_NAME_CHANGE } from '../actions/types';

const initialState = {
  name: ''
};

function eventReducer(state = initialState, action) {
  switch (action.type) {
    case EVENT_NAME_CHANGE:
      return { ...state, name: action.input };
    default:
      return state;
  }
}

export default eventReducer;
