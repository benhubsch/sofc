import { combineReducers } from 'redux';
import organizationReducer from './organizationReducer';
import eventReducer from './eventReducer';

const rootReducer = combineReducers({
  organizationReducer,
  eventReducer
});

export default rootReducer;
