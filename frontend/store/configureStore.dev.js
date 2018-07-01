import { createStore, compose, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import rootReducer from '../reducers/rootReducer';
import DevTools from '../containers/DevTools';

const socket = io('http://localhost:3000');
const socketIoMiddleware = createSocketIoMiddleware(socket, () => true);

export default function configureStore(initialState) {
  return applyMiddleware(socketIoMiddleware)(createStore)(
    rootReducer,
    initialState,
    compose(DevTools.instrument())
  );
}
