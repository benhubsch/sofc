import { createStore, compose, applyMiddleware } from 'redux';
import io from 'socket.io-client';
import axios from 'axios';
import rootReducer from '../reducers/rootReducer';
import DevTools from '../containers/DevTools';

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

const writeToPostgres = ({ getState }) => next => action => {
  next(action);
  if (!action.isEmitted && action.type === 'CELLS_CHANGE') {
    axios
      .post('/api/test', {
        data: getState().programmingReducer.grid
      })
      .then(res => console.log(res.data.id));
  }
};

export default initialState =>
  applyMiddleware(writeToPostgres, socketIoMiddleware)(createStore)(
    rootReducer,
    initialState,
    compose(DevTools.instrument())
  );
