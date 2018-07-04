import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import io from 'socket.io-client';
import rootReducer from '../reducers/rootReducer';

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

export default initialState =>
  applyMiddleware(thunkMiddleware, socketIoMiddleware)(createStore)(
    rootReducer,
    initialState
  );
