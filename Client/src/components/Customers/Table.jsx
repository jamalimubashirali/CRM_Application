import React from 'react';
import { useTable } from 'react-table';

// Table Column Names
const columns = [
  {
    Header: 'ID',
    accessor: '_id',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Phone',
    accessor: 'phone',
  },
  {
    Header : 'Company',
    accessor : 'company'
  },
  {
    Header: 'Actions',
    Cell: ({ row }) => (
      <div className="flex space-x-2">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    ),
  },
];

// Table Component
const ReactTableComponent = ({data}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <div className="overflow-x-auto">
      <table
        {...getTableProps()}
        className="min-w-full table-auto border-collapse text-sm"
      >
        <thead className="bg-gray-100">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className="px-4 py-2 text-left font-semibold text-gray-600"
                  key={column.id}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id} className="hover:bg-gray-50">
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    className="px-4 py-2 text-gray-800"
                    key={cell.column.id}
                  >
                    {cell.render('Cell')}
                  </td>
                )
                )}
              </tr>
            );
          })}
          {
            
          }
        </tbody>
      </table>
    </div>
  );
};

export default ReactTableComponent;