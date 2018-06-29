import React, { Component } from 'react';
import _ from 'lodash';
import mathjs from 'mathjs';
import DataSheet from 'react-datasheet';
import classNames from 'classnames';
import { buildGrid, addRow, removeRow } from './GridUtils';

export default class ProgrammingSheet extends Component {
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
      let value = mathjs.eval(evalString, vars);
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
    const vars = {};
    _(grid)
      .flatten()
      .filter(cell => 'key' in cell)
      .each(cell => {
        vars[cell.key] = this.getCellValue(cell);
      });
    return vars;
  }

  getCellValue(cell) {
    if (!cell.value) {
      return 0.0;
    }
    if (this.isNumeric(cell.value)) {
      return parseFloat(cell.value);
    }
    return cell.value;
  }

  createUpdatedCell(oldCell, expr, vars) {
    return _.assign({}, oldCell, this.computeExpr(expr.trim(), vars));
  }

  updateReferences(grid, updatedCell) {
    for (let r = 0; r < grid.length - 1; r++) {
      for (let c = 0; c < grid[r].length; c++) {
        const cell = grid[r][c];
        if (this.isReference(updatedCell, cell)) {
          grid[r][c] = this.cellUpdate(grid, cell, cell.expr);
        }
      }
    }
  }

  isReference(updatedCell, cell) {
    return (
      'key' in cell &&
      this.isEquation(cell.expr) &&
      cell.expr.indexOf(updatedCell.key) > -1 &&
      cell.key !== updatedCell.key
    );
  }

  isEquation(expr) {
    return expr.charAt(0) === '=';
  }

  updateTotals(grid, col) {
    const totalCell = grid[grid.length - 1][col];
    let total = 0.0;
    for (let row = 1; row < grid.length - 1; row++) {
      total += this.getCellValue(grid[row][col]);
    }
    totalCell.value = total;
  }

  cellUpdate(grid, row, col, oldCell, expr) {
    if (col === 0) {
      grid[row][col] = _.assign(oldCell, { value: expr, expr });
      return grid[row][col];
    }

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
      const decimal = parseFloat(cell.value)
        .toFixed(2)
        .toString();
      if (decimal < 0) {
        return `${decimal.slice(0, 1)}$${decimal.slice(1)}`;
      }
      return `$${decimal.toString()}`;
    }
    return cell.value;
  }

  handleClick(isAdd) {
    let grid;
    if (isAdd) {
      grid = addRow(this.state.grid);
    } else {
      grid = removeRow(this.state.grid);
      this.updateTotals(grid, 1);
      this.updateTotals(grid, 2);
      this.updateTotals(grid, 3);
    }
    this.setState({ grid });
  }

  cellRenderer(props) {
    const margin = props.cell.margin ? 'margin' : null;
    const left = props.cell.left ? 'left' : null;
    return (
      <td
        className={classNames(props.className, margin, left)}
        onMouseDown={props.onMouseDown}
        onMouseOver={props.onMouseOver}
        onDoubleClick={props.onDoubleClick}
      >
        {props.children}
      </td>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="sheet-container">
          <a href="#" onClick={() => this.handleClick(true)}>
            Add Rows
          </a>
          <a href="#" onClick={() => this.handleClick(false)}>
            Remove Rows
          </a>
          <DataSheet
            data={this.state.grid}
            valueRenderer={this.format}
            dataRenderer={cell => cell.expr}
            onCellsChanged={this.onCellsChanged}
            cellRenderer={this.cellRenderer}
          />
        </div>
      </div>
    );
  }
}
