import { EVENT_NAME_CHANGE, EVENT_DATE_CHANGE, START_TIME_CHANGE, END_TIME_CHANGE } from '../actions/types';

const initialState = {
  name: '',
  date: null,
  startTime: null,
  endTime: null
};

function eventReducer(state = initialState, action) {
  switch (action.type) {
    case EVENT_NAME_CHANGE:
      return { ...state, name: action.name };
    case EVENT_DATE_CHANGE:
      return { ...state, date: action.date };
    case START_TIME_CHANGE:
      return { ...state, date: action.startTime };
    case END_TIME_CHANGE:
      return { ...state, date: action.endTime };
    default:
      return state;
  }
}

export default eventReducer;
