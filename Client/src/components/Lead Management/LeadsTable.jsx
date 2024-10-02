import React, { useMemo, useState } from "react";
import CreateLead from "./CreateLead";
import { useTable } from "react-table";

const LeadsTable = ({ leadsData }) => {
  const [currentLeads , setCurrentLeads] = useState(leadsData);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const openModel = () => setIsModelOpen(true);
  const closeModal = () => setIsModelOpen(false);

  const handelLeadCreation = (newLead) => {
    setCurrentLeads((prevLeads) => [...prevLeads , newLead]);
    setIsModelOpen(false);
  }
  // Definiton of Columns for the leads table
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id",
      },
      {
        Header: "Lead Name",
        accessor: "leadName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Oppertunity Name",
        accessor: "oppertunityName",
      },
      {
        Header: "Source",
        accessor: "source",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );


  // Table creation using useTable hook of react-table
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: currentLeads,
    });
  return (
    <div className="w-full , gap-y-2">
      <div className="mb-4 flex flex-row justify-between">
        <button className="px-3 bg-green-600 text-white text rounded-md"
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

      <CreateLead isVisible = {isModelOpen} handleLeadCreation={handelLeadCreation} onClose={closeModal}/>
    </div>
  );
};

export default LeadsTable;
