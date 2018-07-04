import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProgrammingSheet from '../components/programming/ProgrammingSheet';
import { cellsChange, rowChange } from '../actions';

const ProgrammingContainer = ({
  sheet,
  handleCellsChanged,
  handleRowChange
}) => (
  <ProgrammingSheet
    sheet={sheet}
    handleCellsChanged={handleCellsChanged}
    handleRowChange={handleRowChange}
  />
);

ProgrammingContainer.propTypes = {
  sheet: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.instanceOf(Object)))
    .isRequired,
  handleCellsChanged: PropTypes.func.isRequired,
  handleRowChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  sheet: state.programmingReducer.sheet
});

const mapDispatchToProps = dispatch => ({
  handleCellsChanged: cells => dispatch(cellsChange(cells)),
  handleRowChange: isAdd => dispatch(rowChange(isAdd))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgrammingContainer);
