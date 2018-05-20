import React from 'react';
import { connect } from 'react-redux';
import Event from '../components/event/Event.js';
import { Grid } from 'react-flexbox-grid';

const AppContainer = () => {
  return (
    <Grid fluid>
      <Event />
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
