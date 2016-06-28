import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class Standings extends React.Component {

    generateList = () => {}

    render() {
      return(
        <Table>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Ranking</TableHeaderColumn>
              <TableHeaderColumn>Team</TableHeaderColumn>
              <TableHeaderColumn>Win</TableHeaderColumn>
              <TableHeaderColumn>Lose</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>9</TableRowColumn>
              <TableRowColumn>1</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>Randal White</TableRowColumn>
              <TableRowColumn>8</TableRowColumn>
              <TableRowColumn>2</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>3</TableRowColumn>
              <TableRowColumn>Stephanie Sanders</TableRowColumn>
              <TableRowColumn>4</TableRowColumn>
              <TableRowColumn>6</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>4</TableRowColumn>
              <TableRowColumn>Steve Brown</TableRowColumn>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>9</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      ); 
    }
  }

export default Standings;
