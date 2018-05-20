import React from 'react';
import { connect } from 'react-redux';
import Organization from '../components/organization/Organization.js';
import { Grid } from 'react-flexbox-grid';

const AppContainer = () => {
  return (
    <Grid fluid>
      <Organization />
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
