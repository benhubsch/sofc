import { EVENT_NAME_CHANGE, EVENT_DATE_CHANGE } from '../actions/types';

const initialState = {
  name: '',
  date: new Date()
};

function eventReducer(state = initialState, action) {
  switch (action.type) {
    case EVENT_NAME_CHANGE:
      console.log('ACTION', action.name);
      return { ...state, name: action.name };
    case EVENT_DATE_CHANGE:
      console.log(action.date);
      return { ...state, date: action.date };
    default:
      return state;
  }
}

export default eventReducer;
