import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProgrammingSheet from '../components/programming/ProgrammingSheet';
import { cellsChange, rowChange } from '../actions';

const ProgrammingContainer = ({
  grid,
  handleCellsChanged,
  handleRowChange
}) => (
  <ProgrammingSheet
    grid={grid}
    handleCellsChanged={handleCellsChanged}
    handleRowChange={handleRowChange}
  />
);

ProgrammingContainer.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.instanceOf(Object)))
    .isRequired,
  handleCellsChanged: PropTypes.func.isRequired,
  handleRowChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  grid: state.programmingReducer.grid
});

const mapDispatchToProps = dispatch => ({
  handleCellsChanged: cells => dispatch(cellsChange(cells)),
  handleRowChange: isAdd => dispatch(rowChange(isAdd))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgrammingContainer);
