import React from 'react'
import './App.css'

import { getColumnLabel } from './helper/helper';
import { TableContextProvider, useColumnContext, useRowContext } from './contexts/TableContextProvider';

const App = () => {
  return (
    <div className="app">
      <TableContextProvider>
        <Table />
      </TableContextProvider>
    </div>
  )
};

const Table = () => {
  return (
    <table>
      <TableHeader />
      <TableBody />
    </table>
  )
};

const TableHeader = () => {
  const columns = useColumnContext();

  return (
    <thead>
      <tr>
        {columns.map((column, i) => <th key={i}>{getColumnLabel(column)}</th>)}
      </tr>
    </thead>
  )
};

const TableBody = () => {
  const rows = useRowContext();

  return (
    <tbody>
      {rows.map((row, i) => <TableRow key={i} {...row} />)}
    </tbody>
  )
};

const TableRow = React.memo((rowProps) => {
  return (
    <tr>
      {Object.values(rowProps).map((value, i) => <td key={i}>{value}</td>)}
    </tr>
  )
});

export default App;