import {
  EVENT_NAME_CHANGE,
  EVENT_DATE_CHANGE,
  START_TIME_CHANGE,
  END_TIME_CHANGE,
  UNDERGRAD_CHANGE,
  GRADUATE_CHANGE,
  EVENT_LOCATION_CHANGE,
  EVENT_AUDIENCE_CHANGE
} from '../actions/types';

const initialState = {
  name: '',
  date: null,
  startTime: null,
  endTime: null,
  undergrads: '',
  graduates: '',
  location: '',
  audience: ''
};

function eventReducer(state = initialState, action) {
  switch (action.type) {
    case EVENT_NAME_CHANGE:
      return { ...state, name: action.name };
    case EVENT_DATE_CHANGE:
      return { ...state, date: action.date };
    case START_TIME_CHANGE:
      return { ...state, startTime: action.startTime };
    case END_TIME_CHANGE:
      return { ...state, endTime: action.endTime };
    case UNDERGRAD_CHANGE:
      return { ...state, undergrads: action.undergrads };
    case GRADUATE_CHANGE:
      return { ...state, graduates: action.graduates };
    case EVENT_LOCATION_CHANGE:
      return { ...state, location: action.location };
    case EVENT_AUDIENCE_CHANGE:
      return { ...state, audience: action.audience };
    default:
      return state;
  }
}

export default eventReducer;
