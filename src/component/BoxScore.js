import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class BoxScore extends React.Component {
    constructor(props) {
        super(props);

        this.styles= {
        };

    }

    render() {
      const {} = this.props;

      return (
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Player</TableHeaderColumn>
              <TableHeaderColumn>FGM-A</TableHeaderColumn>
              <TableHeaderColumn>3PM-A</TableHeaderColumn>
              <TableHeaderColumn>FPM-A</TableHeaderColumn>
              <TableHeaderColumn>Rebound</TableHeaderColumn>
              <TableHeaderColumn>Assist</TableHeaderColumn>
              <TableHeaderColumn>Steal</TableHeaderColumn>
              <TableHeaderColumn>Turnover</TableHeaderColumn>
              <TableHeaderColumn>Blocks</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>9-24</TableRowColumn>
              <TableRowColumn>1-4</TableRowColumn>
              <TableRowColumn>8-10</TableRowColumn>
              <TableRowColumn>10</TableRowColumn>
              <TableRowColumn>11</TableRowColumn>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>1</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Randal White</TableRowColumn>
              <TableRowColumn>9-24</TableRowColumn>
              <TableRowColumn>1-4</TableRowColumn>
              <TableRowColumn>8-10</TableRowColumn>
              <TableRowColumn>10</TableRowColumn>
              <TableRowColumn>11</TableRowColumn>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>1</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Stephanie Sanders</TableRowColumn>
              <TableRowColumn>9-24</TableRowColumn>
              <TableRowColumn>1-4</TableRowColumn>
              <TableRowColumn>8-10</TableRowColumn>
              <TableRowColumn>10</TableRowColumn>
              <TableRowColumn>11</TableRowColumn>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>1</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Steve Brown</TableRowColumn>
              <TableRowColumn>9-24</TableRowColumn>
              <TableRowColumn>1-4</TableRowColumn>
              <TableRowColumn>8-10</TableRowColumn>
              <TableRowColumn>10</TableRowColumn>
              <TableRowColumn>11</TableRowColumn>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>1</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      );
    }
}

export default BoxScore;
