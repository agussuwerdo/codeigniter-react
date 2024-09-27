import React, { useState } from 'react';
import DataTable, { TableProps } from 'react-data-table-component';

interface MyTableProps<T> extends TableProps<T> {
  columns: Array<any>; // Array of column definitions
  data: Array<T>; // Array of row data
  loading?: boolean; // New loading prop to control skeleton display
  headerElement?: React.ReactNode;
}

// ErrorBoundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong while rendering the table.</div>;
    }
    return this.props.children;
  }
}

const customStyles = {
  header: {
    style: {
      className: 'bg-gray-100 text-gray-900 font-bold',
    },
  },
  rows: {
    style: {
      className: 'hover:bg-gray-50 text-gray-800',
    },
  },
  headCells: {
    style: {
      className:
        'px-4 py-2 text-left text-gray-600 uppercase tracking-wider bg-gray-200',
    },
  },
  cells: {
    style: {
      className: 'px-4 py-2 text-sm text-gray-700',
    },
  },
  pagination: {
    style: {
      className:
        'bg-white border-t border-gray-200 px-4 py-2 flex items-center justify-between',
    },
  },
};

const MyTable = <T extends { [key: string]: any }>({
  columns,
  data,
  loading,
  headerElement,
  ...rest
}: MyTableProps<T>): JSX.Element => {
  // Search state
  const [searchText, setSearchText] = useState('');

  // Create dynamic skeleton rows based on the number of columns
  const skeletonRows = Array(5)
    .fill({})
    .map((_, idx) => {
      const skeletonRow: { [key: string]: JSX.Element } = {};

      columns.forEach((col: any, index: number) => {
        skeletonRow[`col-${index}`] = (
          <div className="h-4 bg-slate-300 dark:bg-gray-700 rounded animate-pulse w-full" />
        );
      });

      return skeletonRow as T;
    });

  // Filter the data based on the searchText
  let filteredData = data.filter((row) =>
    columns.some((col: any) => {
      const value = col.selector ? col.selector(row) : '';
      return (
        value &&
        value.toString().toLowerCase().includes(searchText.toLowerCase())
      );
    }),
  );

  // Add row numbering directly in filteredData
  filteredData = filteredData.map((row, index) => ({
    ...row,
    rowNumber: index + 1, // Add rowNumber field dynamically
  }));

  // Add row numbering column to the beginning
  const numberedColumns = [
    {
      name: '#',
      selector: (row: T) => row.rowNumber, // Use rowNumber field
      width: '50px',
      sortable: false,
    },
    ...columns,
  ];

  // Dynamically adjust columns for skeleton display
  const skeletonColumns = numberedColumns.map((column: any) => ({
    ...column,
    cell: (row: T) =>
      loading ? (
        <div className="h-4 bg-slate-300 dark:bg-gray-700 rounded animate-pulse w-full" />
      ) : column.cell ? (
        column.cell(row)
      ) : column.selector ? (
        column.selector(row)
      ) : (
        <div />
      ),
  }));

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between items-center mb-4 text-xl font-semibold text-black dark:text-white">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full max-w-xs rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        />
        {headerElement}
      </div>

      <div className="overflow-x-auto">
        <ErrorBoundary>
          <DataTable
            className="dataTable rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
            columns={skeletonColumns}
            data={loading ? skeletonRows : filteredData}
            customStyles={customStyles}
            pagination
            {...rest} // Pass any additional props to DataTable
          />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default MyTable;
