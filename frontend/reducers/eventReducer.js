import {
  EVENT_NAME_CHANGE,
  EVENT_DATE_CHANGE,
  START_TIME_CHANGE,
  END_TIME_CHANGE,
  UNDERGRAD_CHANGE,
  GRADUATE_CHANGE
} from '../actions/types';

const initialState = {
  name: '',
  date: null,
  startTime: null,
  endTime: null,
  undergrads: '',
  graduates: ''
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
    case UNDERGRAD_CHANGE:
      return { ...state, undergrads: action.undergrads };
    case GRADUATE_CHANGE:
      return { ...state, graduates: action.graduates };
    default:
      return state;
  }
}

export default eventReducer;
