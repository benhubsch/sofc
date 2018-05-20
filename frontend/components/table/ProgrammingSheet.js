import React, { Component, Fragment } from 'react';
import { Table, Column, EditableCell } from '@blueprintjs/table';
import { Button } from '@blueprintjs/core';

const NUM_ROWS = 10;

export default class ProgrammingSheet extends Component {
  constructor(props) {
    super(props);
    this.cellRenderer = this.cellRenderer.bind(this);
    this.cellRendererItems = this.cellRendererItems.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      numRows: NUM_ROWS
      // grid: this.initGrid()
    };
  }

  // initGrid() {
  //   for (let i = 0; i < NUM_ROWS; i++) {
  //
  //   }
  // }

  cellRenderer(rowIndex, colIndex) {
    // <EditableCell
    //             value={`$${(rowIndex * 10).toFixed(2)}`}
    //             intent={this.state.cellIntent[dataKey]}
    //             onCancel={this.cellValidator(rowIndex, columnIndex)}
    //             onChange={this.cellValidator(rowIndex, columnIndex)}
    //             onConfirm={this.cellSetter(rowIndex, columnIndex)}
    //         />
    return <EditableCell value={`$${(rowIndex * 10).toFixed(2)}`} />;
  }

  cellRendererItems() {
    return <EditableCell value="" />;
  }

  handleClick() {
    this.setState({ numRows: this.state.numRows + 1 });
  }

  render() {
    return (
      <Fragment>
        <Button onClick={this.handleClick} />
        <Table enableGhostCells numRows={this.state.numRows} >
          <Column name="" cellRenderer={this.cellRendererItems} />
          <Column name="Amount Requested" cellRenderer={this.cellRenderer} />
          <Column name="Amount Granted" cellRenderer={this.cellRenderer} />
          <Column name="Amount Spent" cellRenderer={this.cellRenderer} />
        </Table>
      </Fragment>
    );
  }
}
