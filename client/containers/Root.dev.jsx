import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import AppContainer from './AppContainer';
import DevTools from './DevTools';

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <div>
        <AppContainer />
        <DevTools />
      </div>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired // eslint-disable-line
};
