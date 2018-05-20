import React from 'react';
import { connect } from 'react-redux';
import ProgrammingSheet from '../components/ProgrammingSheet.js';
import { Grid } from 'react-flexbox-grid';

const AppContainer = () => {
  return (
    <Grid fluid>
      <div className={'container'}>
        <div className={'sheet-container'}>
          <ProgrammingSheet />
        </div>
      </div>
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
