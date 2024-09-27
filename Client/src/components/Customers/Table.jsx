import React, { useState } from "react";
import { useTable } from "react-table";
import CreateCustomer from "./createCustomer";

// Table Column Names
const columns = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Company",
    accessor: "company",
  },
  {
    Header: "Industry",
    accessor: "industry",
  },
  {
    Header: "Actions",
    Cell: ({ row }) => (
      <div className="flex space-x-2">
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          Edit
        </button>
        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    ),
  },
];

// Table Component
const ReactTableComponent = ({ data }) => {
  const [customerModel , setCustomerModel] = useState(false)
  const customerData = {};
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
    const openModel = () => {
      setCustomerModel(true);
    }
    const closeModel = () => {
      setCustomerModel(false);
    }
  return (
    <div className="w-full gap-y-2">
      <div className="mb-4 flex flex-row justify-between">
        <button className="px-3 py-1 bg-green-600 text-white text-xl rounded-md"
        onClick={openModel}>
          Create
        </button>
        <input
          className="border-2 border-gray-300 p-2 w-1/3 rounded-xl outline-gray-400 bg-slate-200"
          placeholder="Search"
          type="text"
        />
      </div>
      <div className="overflow-x-auto">
        <table
          {...getTableProps()}
          className="min-w-full table-auto border-collapse text-sm"
        >
          <thead className="bg-gray-100">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="px-4 py-2 text-left font-semibold text-gray-600"
                    key={column.id}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  key={row.id}
                  className="hover:bg-gray-50"
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="px-4 py-2 text-gray-800"
                      key={cell.column.id}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <CreateCustomer data={customerData} isVisible={customerModel} onClose={closeModel}/>
    </div>
  );
};

export default ReactTableComponent;
