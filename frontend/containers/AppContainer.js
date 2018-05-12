import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import ProgrammingSheet from '../components/ProgrammingSheet';

const AppContainer = ({ name }) => {
  return (
    {/* <Title name={ name } /> */}
    <div className={'container'}>
      <div className={'sheet-container'}>
        <ProgrammingSheet />
      </div>
    </div>
  );
};

AppContainer.propTypes = {
  name: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    name: state.name
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
