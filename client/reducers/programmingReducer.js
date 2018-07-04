/* eslint-disable */
import mathjs from 'mathjs';
import _ from 'lodash';
import isNumeric from 'validator/lib/isNumeric';
import { CELLS_CHANGE, ROW_CHANGE, SET_ID } from '../actions/types';

import {
  buildSheet,
  addRow,
  removeRow
} from '../components/programming/SheetUtils';

const initialState = {
  id: null,
  sheet: buildSheet()
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

const updateTotals = (newSheet, col) => {
  const totalCell = newSheet[newSheet.length - 1][col];
  let total = 0.0;
  for (let row = 1; row < newSheet.length - 1; row += 1) {
    total += getCellValue(newSheet[row][col]);
  }
  totalCell.value = total;
};

const buildVars = newSheet => {
  const vars = {};
  _(newSheet)
    .flatten()
    .filter(cell => 'key' in cell)
    .each(cell => {
      vars[cell.key] = getCellValue(cell);
    });
  return vars;
};

const updateReferences = (newSheet, updatedCell) => {
  for (let r = 0; r < newSheet.length - 1; r += 1) {
    for (let c = 0; c < newSheet[r].length; c += 1) {
      const cell = newSheet[r][c];
      if (isReference(updatedCell, cell)) {
        newSheet[r][c] = cellUpdate(newSheet, cell, cell.expr);
      }
    }
  }
};

const cellUpdate = (newSheet, row, col, oldCell, expr) => {
  if (col === 0) {
    newSheet[row][col] = _.assign(oldCell, { value: expr, expr });
    return newSheet[row][col];
  }

  const vars = buildVars(newSheet);
  const updatedCell = createUpdatedCell(oldCell, expr, vars);
  newSheet[row][col] = updatedCell;
  updateReferences(newSheet, updatedCell);
  updateTotals(newSheet, col);
  return updatedCell;
};

const onCellsChanged = (oldSheet, changes) => {
  const newSheet = oldSheet.map(row => [...row]);
  changes.forEach(({ cell, row, col, value }) => {
    cellUpdate(newSheet, row, col, cell, value.trim());
  });
  return newSheet;
};

const adjustRows = (oldSheet, isAdd) => {
  let newSheet;
  if (isAdd) {
    newSheet = addRow(oldSheet);
  } else {
    newSheet = removeRow(oldSheet);
    updateTotals(newSheet, 1);
    updateTotals(newSheet, 2);
    updateTotals(newSheet, 3);
  }
  return newSheet;
};

const programmingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ID:
      console.log('SETTING', action);
      return { ...state, id: action.id };
    case CELLS_CHANGE:
      return {
        ...state,
        sheet: onCellsChanged(state.sheet.map(row => [...row]), action.changes)
      };
    case ROW_CHANGE:
      return {
        ...state,
        sheet: adjustRows(state.sheet.map(row => [...row]), action.isAdd)
      };
    default:
      return state;
  }
};

export default programmingReducer;
