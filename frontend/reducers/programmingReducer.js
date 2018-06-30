/* eslint-disable */
import mathjs from 'mathjs';
import _ from 'lodash';
import { CELLS_CHANGE, ROW_CHANGE } from '../actions/types';

import {
  buildGrid,
  addRow,
  removeRow
} from '../components/programming/GridUtils';
import { isNumeric } from './organizationReducer';

const initialState = {
  grid: buildGrid()
};

const getCellValue = cell => {
  if (!cell.value) {
    return 0.0;
  }
  if (isNumeric(cell.value)) {
    return parseFloat(cell.value);
  }
  return cell.value;
};

const isEquation = expr => expr.charAt(0) === '=';

const computeExpr = (expr, vars) => {
  let className = '';
  let evalString = expr;
  if (isEquation(expr)) {
    evalString = evalString.substring(1);
    className = 'equation';
  }

  try {
    let value = mathjs.eval(evalString, vars);
    if (typeof value === 'undefined') {
      value = '';
    }
    return { className, value: value.toString(), expr };
  } catch (e) {
    return { className: 'error', value: 'error', expr };
  }
};

const createUpdatedCell = (oldCell, expr, vars) =>
  _.assign({}, oldCell, computeExpr(expr.trim(), vars));

const isReference = (updatedCell, cell) =>
  'key' in cell &&
  isEquation(cell.expr) &&
  cell.expr.indexOf(updatedCell.key) > -1 &&
  cell.key !== updatedCell.key;

const updateTotals = (newGrid, col) => {
  const totalCell = newGrid[newGrid.length - 1][col];
  let total = 0.0;
  for (let row = 1; row < newGrid.length - 1; row += 1) {
    total += getCellValue(newGrid[row][col]);
  }
  totalCell.value = total;
};

const buildVars = newGrid => {
  const vars = {};
  _(newGrid)
    .flatten()
    .filter(cell => 'key' in cell)
    .each(cell => {
      vars[cell.key] = getCellValue(cell);
    });
  return vars;
};

const updateReferences = (newGrid, updatedCell) => {
  for (let r = 0; r < newGrid.length - 1; r += 1) {
    for (let c = 0; c < newGrid[r].length; c += 1) {
      const cell = newGrid[r][c];
      if (isReference(updatedCell, cell)) {
        newGrid[r][c] = cellUpdate(newGrid, cell, cell.expr);
      }
    }
  }
};

const cellUpdate = (newGrid, row, col, oldCell, expr) => {
  if (col === 0) {
    newGrid[row][col] = _.assign(oldCell, { value: expr, expr });
    return newGrid[row][col];
  }

  const vars = buildVars(newGrid);
  const updatedCell = createUpdatedCell(oldCell, expr, vars);
  newGrid[row][col] = updatedCell;
  updateReferences(newGrid, updatedCell);
  updateTotals(newGrid, col);
  return updatedCell;
};

const onCellsChanged = (oldGrid, changes) => {
  const newGrid = oldGrid.map(row => [...row]);
  changes.forEach(({ cell, row, col, value }) => {
    cellUpdate(newGrid, row, col, cell, value.trim());
  });
  return newGrid;
};

const adjustRows = (oldGrid, isAdd) => {
  let newGrid;
  if (isAdd) {
    newGrid = addRow(oldGrid);
  } else {
    newGrid = removeRow(oldGrid);
    updateTotals(newGrid, 1);
    updateTotals(newGrid, 2);
    updateTotals(newGrid, 3);
  }
  return newGrid;
};

const programmingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CELLS_CHANGE:
      return {
        ...state,
        grid: onCellsChanged(state.grid.map(row => [...row]), action.changes)
      };
    case ROW_CHANGE:
      return {
        ...state,
        grid: adjustRows(state.grid.map(row => [...row]), action.isAdd)
      };
    default:
      return state;
  }
};

export default programmingReducer;
