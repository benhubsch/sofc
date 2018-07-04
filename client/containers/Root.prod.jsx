import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import AppContainer from './AppContainer';

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired // eslint-disable-line
};
