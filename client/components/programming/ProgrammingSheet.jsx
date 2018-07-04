/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import DataSheet from 'react-datasheet';
import classNames from 'classnames';
import isNumeric from 'validator/lib/isNumeric';

const format = (cell, i, j) => {
  if (isNumeric(String(cell.value)) && i > 0 && j > 0) {
    const decimal = Number.parseFloat(cell.value)
      .toFixed(2)
      .toString();
    if (decimal < 0) {
      return `${decimal.slice(0, 1)}$${decimal.slice(1)}`;
    }
    return `$${decimal.toString()}`;
  }
  return cell.value;
};

const cellRenderer = cellProps => {
  const margin = cellProps.cell.margin ? 'margin' : null;
  const left = cellProps.cell.left ? 'left' : null;
  return (
    <td
      className={classNames(cellProps.className, margin, left)}
      onMouseDown={cellProps.onMouseDown}
      onMouseOver={cellProps.onMouseOver}
      onFocus={cellProps.onMouseOver}
      onDoubleClick={cellProps.onDoubleClick}
    >
      {cellProps.children}
    </td>
  );
};

const ProgrammingSheet = ({ grid, handleCellsChanged, handleRowChange }) => (
  <div className="container">
    <div className="sheet-container">
      <a href="#" onClick={() => handleRowChange(true)}>
        Add Rows
      </a>
      <a href="#" onClick={() => handleRowChange(false)}>
        Remove Rows
      </a>
      <DataSheet
        data={grid}
        valueRenderer={format}
        dataRenderer={cell => cell.expr}
        onCellsChanged={handleCellsChanged}
        cellRenderer={cellRenderer}
      />
    </div>
  </div>
);

ProgrammingSheet.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.instanceOf(Object)))
    .isRequired,
  handleCellsChanged: PropTypes.func.isRequired
};

export default ProgrammingSheet;
