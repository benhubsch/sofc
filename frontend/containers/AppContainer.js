import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import EmailBox from '../components/EmailBox.js';

const AppContainer = () => {
  return (
    <EmailBox />
  );
};

AppContainer.propTypes = {
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
