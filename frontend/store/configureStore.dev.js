import { createStore, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import DevTools from '../containers/DevTools';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, compose(DevTools.instrument()));
}
