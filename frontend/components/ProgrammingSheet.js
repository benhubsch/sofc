import React from 'react';
import _ from 'lodash';
import mathjs from 'mathjs';
import DataSheet from 'react-datasheet';
import { buildGrid, addRow } from './GridUtils.js';
import 'react-datasheet/lib/react-datasheet.css';

export default class ProgrammingSheet extends React.Component {

  constructor(props) {
    super(props);
    this.onCellsChanged = this.onCellsChanged.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.format = this.format.bind(this);
    this.state = {
      grid: buildGrid()
    };
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

  buildVars(grid) {
    var vars = {};
    _(grid).flatten().filter(cell => 'key' in cell).each(cell => {
      vars[cell.key] = this.getCellValue(cell);
    });
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

  createUpdatedCell(oldCell, expr, vars) {
    return _.assign({}, oldCell, this.computeExpr(expr.trim(), vars));
  }

  updateReferences(grid, updatedCell) {
    for (var r = 0; r < grid.length - 1; r++) {
      for (var c = 0; c < grid[r].length; c++) {
        const cell = grid[r][c];
        if (this.isReference(updatedCell, cell)) {
          grid[r][c] = this.cellUpdate(grid, cell, cell.expr);
        }
      }
    }
  }

  isReference(updatedCell, cell) {
    return 'key' in cell &&
      this.isEquation(cell.expr) &&
      cell.expr.indexOf(updatedCell.key) > -1 &&
      cell.key !== updatedCell.key;
  }

  isEquation(expr) {
    return expr.charAt(0) === '=';
  }

  updateTotals(grid, col) {
    var totalCell = grid[grid.length - 1][col];
    grid[grid.length - 1][col] = this.createUpdatedCell(totalCell, totalCell.expr, this.buildVars(grid));
  }

  cellUpdate(grid, row, col, oldCell, expr) {
    const vars = this.buildVars(grid);
    const updatedCell = this.createUpdatedCell(oldCell, expr, vars);
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
    const grid = addRow(this.state.grid);
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
