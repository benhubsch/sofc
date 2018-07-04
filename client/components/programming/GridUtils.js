const HEADERS = ['', 'Requested', 'Granted', 'Spent'];
const NUM_ROWS = 10;
const START_CAPITALS_ASCII = 65;
const TOTAL = 'Total';

const getKey = (r, c) =>
  String.fromCharCode(START_CAPITALS_ASCII + c) + r.toString();

const buildNewRow = r => {
  const row = Array(HEADERS.length)
    .fill()
    .map((cell, c) => {
      const left = c === 0;
      return { key: getKey(r, c), value: '', expr: '', margin: left, left };
    });
  return row;
};

const initRows = grid => {
  for (let r = 1; r <= NUM_ROWS; r += 1) {
    grid.push(buildNewRow(r));
  }
};

const createHeader = grid => {
  grid.push(
    HEADERS.map((header, dex) => {
      const left = dex === 0;
      return { readOnly: true, value: header, margin: true, left };
    })
  );
};

const createTotals = grid => {
  const totals = [{ readOnly: true, value: TOTAL, margin: true, left: false }];
  for (let col = 1; col < HEADERS.length; col += 1) {
    totals.push({
      readOnly: true,
      value: '0.0',
      className: 'equation',
      margin: true
    });
  }
  grid.push(totals);
};

export const buildGrid = () => {
  const grid = [];
  createHeader(grid);
  initRows(grid);
  createTotals(grid);
  return grid;
};

export const addRow = oldGrid => {
  const grid = oldGrid.map(row => [...row]);
  const row = buildNewRow(grid.length - 1);
  grid.splice(grid.length - 1, 0, row);

  return grid;
};

export const removeRow = oldGrid => {
  const grid = oldGrid.map(row => [...row]);
  if (grid.length > 3) {
    grid.splice(grid.length - 2, 1);
  }
  return grid;
};
