import { combineReducers } from 'redux';
import organizationReducer from './organizationReducer';
import eventReducer from './eventReducer';
import programmingReducer from './programmingReducer';

const rootReducer = combineReducers({
  organizationReducer,
  eventReducer,
  programmingReducer
});

export default rootReducer;
