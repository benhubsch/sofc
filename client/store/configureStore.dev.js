import { createStore, compose, applyMiddleware } from 'redux';
import io from 'socket.io-client';
import axios from 'axios';
import rootReducer from '../reducers/rootReducer';
import DevTools from '../containers/DevTools';
import { setId } from '../actions';

const createSocketIoMiddleware = socket => {
  const emitBound = socket.emit.bind(socket);
  return ({ dispatch }) => {
    socket.on('action', dispatch);
    return next => action => {
      if (action && action.type && !action.isEmitted) {
        emitBound('action', action);
      }
      return next(action);
    };
  };
};
const socket = io('http://localhost:3000');
const socketIoMiddleware = createSocketIoMiddleware(socket);

const writeToPostgres = ({ dispatch, getState }) => next => async action => {
  next(action);
  const state = getState();
  if (!action.isEmitted) {
    // const res = await axios.post('/api/sheet', {
    //   ...state.programmingReducer,
    //   action
    // });
    const res = await axios.post('/api/organization', {
      ...state.organizationReducer,
      action
    });
    dispatch(setId(res.data.id)); // going to set every ID indiscriminately
  }
};

export default initialState =>
  applyMiddleware(writeToPostgres, socketIoMiddleware)(createStore)(
    rootReducer,
    initialState,
    compose(DevTools.instrument())
  );
