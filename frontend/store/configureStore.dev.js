import { createStore, compose, applyMiddleware } from 'redux';
// import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
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

export default function configureStore(initialState) {
  return applyMiddleware(socketIoMiddleware)(createStore)(
    rootReducer,
    initialState,
    compose(DevTools.instrument())
  );
}
