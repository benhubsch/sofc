import { createStore, compose } from 'redux';
import rootReducer from '../reducers/combiner';
import DevTools from '../containers/DevTools';

export function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      DevTools.instrument()
    )
  );
}
