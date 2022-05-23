import React, { useContext, useEffect, useState } from 'react'

import { fetchData } from '../api/demodata';
import { customSortData, parseColumnNames, parseData } from '../helper/helper';

const ColumnContext = React.createContext();
const RowContext = React.createContext();

export const TableContextProvider = ({ children }) => {
  const [columnData, setColumnData] = useState([]);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const data = fetchData();
    const parsedData = parseData(data);
    const sortedData = customSortData(parsedData);
    const columns = parseColumnNames(sortedData);

    setColumnData(columns);
    setRowData(sortedData);
  }, []);

  return (
    <ColumnContext.Provider value={columnData}>
      <RowContext.Provider value={rowData}>
        {children}
      </RowContext.Provider>
    </ColumnContext.Provider>
  )
};

export const useColumnContext = () => {
  const context = useContext(ColumnContext);

  if (context === undefined) {
    throw new Error("useColumnContext was used outside of its Provider");
  }

  return context;
};

export const useRowContext = () => {
  const context = useContext(RowContext);

  if (context === undefined) {
    throw new Error("useRowContext was used outside of its Provider");
  }

  return context;
};