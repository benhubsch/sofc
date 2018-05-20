import React from 'react';
import { connect } from 'react-redux';
import ProgrammingSheet from '../components/sheet/ProgrammingSheet.js';
import { Grid } from 'react-flexbox-grid';

const AppContainer = () => {
  return (
    <Grid fluid>
      <ProgrammingSheet />
    </Grid>
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
