import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-flexbox-grid';
import ProgrammingContainer from './ProgrammingContainer';
import OrganizationContainer from './OrganizationContainer';
import EventContainer from './EventContainer';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/select/lib/css/blueprint-select.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import 'normalize.css/normalize.css';

import 'react-datasheet/lib/react-datasheet.css';
import '../assets/stylesheets/programming.css';

const AppContainer = () => (
  <Grid fluid>
    <OrganizationContainer />
    <EventContainer />
    <ProgrammingContainer />
  </Grid>
);

AppContainer.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = (/* dispatch */) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
