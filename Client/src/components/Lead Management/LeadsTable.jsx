import React, { useState, useMemo } from "react";
import CreateLead from "./CreateLead";
import { useTable } from "react-table";

const LeadsTable = ({ leadsData }) => {
  const [currentLeads, setCurrentLeads] = useState(leadsData); 
  const [isModelOpen, setIsModelOpen] = useState(false); 

  // Function to open the modal
  const openModal = () => setIsModelOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModelOpen(false);

  // Function to handle the creation of a new lead
  const handleLeadCreation = (newLead) => {
    setCurrentLeads((prevLeads) => [...prevLeads, newLead]); 
    setIsModelOpen(false); 
  };

  // Columns definition for the React Table
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
        Header: "Opportunity Name",
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

  // React Table setup
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: currentLeads,
    });

  return (
    <div className="w-full gap-y-2">
      <div className="mb-4 flex flex-row justify-between">
        <button
          className="px-3 py-1 bg-green-600 text-white text-xl rounded-md"
          onClick={openModal}
        >
          Create Lead
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
      <CreateLead
        isVisible={isModelOpen}
        handleLeadCreation={handleLeadCreation}
        onClose={closeModal}
      />
    </div>
  );
};

export default LeadsTable;
