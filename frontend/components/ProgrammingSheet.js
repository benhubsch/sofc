import React from 'react';
import _ from 'lodash';
import mathjs from 'mathjs';
import DataSheet from 'react-datasheet';
import { Map, List, fromJS } from 'immutable';
import 'react-datasheet/lib/react-datasheet.css';

const HEADERS = ['', 'Requested', 'Granted', 'Spent'];
const NUM_ROWS = 10;

export default class ProgrammingSheet extends React.Component {

  constructor(props) {
    super(props);
    this.onCellsChanged = this.onCellsChanged.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.format = this.format.bind(this);
    this.state = {
      grid: this.buildGrid()
    };
  }

  buildGrid() {
    var grid = [];
    grid.push(HEADERS.map((header) => {
      return { readOnly: true, value: header };
    }));

    for (let r = 1; r <= NUM_ROWS; r++) {
      grid.push(this.addRow(r));
    }

    var totals = [{ readOnly: true, value: 'Total' }];
    for (var col = 1; col < HEADERS.length; col++) {
      const expr = '=' + this.getTotalExpression(NUM_ROWS, 1, col);
      totals.push({ readOnly: true, value: '0.0', expr, className: 'equation' });
    }
    grid.push(totals);
    return grid;
  }

  addRow(r) {
    const row = Array(HEADERS.length).fill().map((cell, c) => {
      return { key: this.getKey(r, c), value: '', expr: '' };
    });
    row[0] = _.assign(row[0], { readOnly: true });
    return row;
  }

  getTotalExpression(maxRows, r, c) {
    if (r >= maxRows) {
      return this.getKey(r, c);
    }
    return this.getKey(r, c) + '+' + this.getTotalExpression(maxRows, r + 1, c);
  }

  getKey(r, c) {
    return String.fromCharCode(65 + c) + r.toString();
  }

  computeExpr(expr, vars) {
    let className = '';
    let evalString = expr;
    if (this.isEquation(expr)) {
      evalString = evalString.substring(1);
      className = 'equation';
    }

    try {
      var value = mathjs.eval(evalString, vars);
      if (typeof value === 'undefined') {
        value = '';
      }
      return { className, value: value.toString(), expr };
    } catch (e) {
      return { className: 'error', value: 'error', expr };
    }
  }

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  // This is an ugly implementation, but it allows an error to be thrown from mathjs.eval
  // on chained bad expressions. I thought that would be better than having NaN pop up,
  // which isn't readable to non-technical people.
  buildVars(grid) {
    var vars = {};
    for (var r = 0; r < grid.length; r++) {
      for (var c = 0; c < grid[r].length; c++) {
        const cell = grid[r][c];
        vars[cell.key] = this.getCellValue(cell);
      }
    }
    return vars;
  }

  getCellValue(cell) {
    if (!cell.value) {
      return 0.0;
    } else if (this.isNumeric(cell.value)) {
      return parseFloat(cell.value);
    }
    return cell.value;
  }

  calcUpdatedCell(oldCell, expr, vars) {
    return _.assign({}, oldCell, this.computeExpr(expr.trim(), vars));
  }

  updateReferences(grid, updatedCell) {
    for (var r = 1; r < grid.length - 1; r++) {
      for (var c = 1; c < grid[r].length; c++) {
        const cell = grid[r][c];
        if (this.isEquation(cell.expr) && cell.expr.indexOf(updatedCell.key) > -1 && cell.key !== updatedCell.key) {
          grid[r][c] = this.cellUpdate(grid, cell, cell.expr);
        }
      }
    }
  }

  isEquation(expr) {
    return expr.charAt(0) === '=';
  }

  updateTotals(grid, col) {
    var totalCell = grid[grid.length - 1][col];
    grid[grid.length - 1][col] = this.calcUpdatedCell(totalCell, totalCell.expr, this.buildVars(grid));
  }

  cellUpdate(grid, row, col, oldCell, expr) {
    const vars = this.buildVars(grid);
    const updatedCell = this.calcUpdatedCell(oldCell, expr, vars);
    grid[row][col] = updatedCell;
    this.updateReferences(grid, updatedCell);
    this.updateTotals(grid, col);
    return updatedCell;
  }

  onCellsChanged(changes) {
    const grid = this.state.grid.map(row => [...row]);
    changes.forEach(({ cell, row, col, value }) => {
      this.cellUpdate(grid, row, col, cell, value.trim());
    });
    this.setState({ grid });
  }

  format(cell, i, j) {
    if (this.isNumeric(cell.value) && i > 0 && j > 0) {
      var decimal = parseFloat(cell.value).toFixed(2);
      return '$' + decimal.toString();
    }
    return cell.value;
  }

  handleClick() {
    const grid = this.state.grid.map(row => [...row]);
    var row = this.addRow(grid.length - 1);
    grid.splice(grid.length - 1, 0, row);
    console.log('grid', grid);

    for (var col = 1; col < HEADERS.length; col++) {
      console.log('before', grid[grid.length - 1][col].expr);
      grid[grid.length - 1][col].expr += '+' + this.getKey(grid.length - 2, col);
      console.log('after', grid[grid.length - 1][col].expr);
    }
    this.setState({ grid });
  }

  render() {
    return (
      <div>
        <DataSheet
          data={this.state.grid}
          valueRenderer={this.format}
          dataRenderer={(cell) => cell.expr}
          onCellsChanged={this.onCellsChanged}
        />
        <a href="#" onClick={this.handleClick}>
          Click me
        </a>
      </div>
    );
  }

}
