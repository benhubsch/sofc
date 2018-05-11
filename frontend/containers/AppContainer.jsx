import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';

const AppContainer = ({ name }) => (
  <div>
    <Title name={name} />
  </div>
);

AppContainer.propTypes = {
  name: PropTypes.string
};

const mapStateToProps = state => ({
  name: state.name
});

const mapDispatchToProps = (/* dispatch */) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);
