import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import GroupInfo from '../components/GroupInfo.js';

const AppContainer = () => {
  return (
    <GroupInfo />
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
