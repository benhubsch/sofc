import React from 'react';
import { connect } from 'react-redux';
import ProgrammingSheet from '../components/programming/ProgrammingSheet.js';
import OrganizationContainer from './OrganizationContainer';
import EventContainer from './EventContainer';
import { Grid } from 'react-flexbox-grid';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/select/lib/css/blueprint-select.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import 'normalize.css/normalize.css';

import 'react-datasheet/lib/react-datasheet.css';
import '../assets/stylesheets/programming.css';

const AppContainer = () => {
  return (
    <Grid fluid>
      <OrganizationContainer />
      <EventContainer />
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
