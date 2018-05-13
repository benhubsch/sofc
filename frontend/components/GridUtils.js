import _ from 'lodash';

const HEADERS = ['', 'Requested', 'Granted', 'Spent'];
const NUM_ROWS = 10;
const START_CAPITALS_ASCII = 65;
const TOTAL = 'Total';

export const buildGrid = () => {
  var grid = [];
  createHeader(grid);
  createRows(grid);
  createTotals(grid);
  return grid;
};

export const addRow = (oldGrid) => {
  const grid = oldGrid.map(row => [...row]);
  var row = createRow(grid.length - 1);
  grid.splice(grid.length - 1, 0, row);

  for (var col = 1; col < HEADERS.length; col++) {
    grid[grid.length - 1][col].expr += '+' + getKey(grid.length - 2, col);
  }
  return grid;
};

const createTotals = (grid) => {
  var totals = [{ readOnly: true, value: TOTAL }];
  for (var col = 1; col < HEADERS.length; col++) {
    const expr = '=' + getTotalExpr(NUM_ROWS, 1, col);
    totals.push({ readOnly: true, value: '0.0', expr, className: 'equation' });
  }
  grid.push(totals);
};

const createRows = (grid) => {
  for (let r = 1; r <= NUM_ROWS; r++) {
    grid.push(createRow(r));
  }
};

const createHeader = (grid) => {
  grid.push(HEADERS.map((header) => {
    return { readOnly: true, value: header };
  }));
};

const getTotalExpr = (maxRows, r, c) => {
  if (r >= maxRows) {
    return getKey(r, c);
  }
  return getKey(r, c) + '+' + getTotalExpr(maxRows, r + 1, c);
};

const getKey = (r, c) => {
  return String.fromCharCode(START_CAPITALS_ASCII + c) + r.toString();
};

const createRow = (r) => {
  const row = Array(HEADERS.length).fill().map((cell, c) => {
    return { key: getKey(r, c), value: '', expr: '' };
  });
  row[0] = _.assign(row[0], { readOnly: true });
  return row;
};
