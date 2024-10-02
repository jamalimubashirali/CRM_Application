import React, { useState } from "react";
import { XIcon } from "@heroicons/react/outline"; 
import axios from "axios";

const CreateLead = ({ isVisible, handleLeadCreation, onClose }) => {
  // Checking if the modal is open or not
  if (!isVisible) return null;

  // States for the modal form fields
  const [leadName, setLeadName] = useState("");
  const [email, setEmail] = useState("");
  const [oppertunityName, setOppertunityName] = useState("");
  const [source, setSource] = useState("");
  const [status, setStatus] = useState("default");

  const createLead = async () => {
    try {
      const response  = await axios.post('/api/leads' , {
        leadName ,
        email,
        oppertunityName,
        source,
        status
      })
      if(response.status === 201){
        handleLeadCreation(response.data)
      }
      onClose()
    } catch (error) {
      console.log(`This error ${error} occured during Lead Creation`);
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-8 rounded-lg w-11/12 md:w-2/3 lg:w-1/2">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <XIcon className="h-6 w-6" />
        </button>

        <h1 className="text-center text-3xl mb-6">Create Lead</h1>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label htmlFor="leadName" className="block text-sm font-medium text-gray-700">
              Lead's Name
            </label>
            <input
              type="text"
              name="leadName"
              id="leadName"
              className="w-full py-2 px-3 bg-gray-100 rounded-lg"
              value={leadName}
              placeholder="Enter lead name"
              onChange={(e) => setLeadName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full py-2 px-3 bg-gray-100 rounded-lg"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="opportunity" className="block text-sm font-medium text-gray-700">
              Opportunity Name
            </label>
            <input
              type="text"
              name="opportunity"
              id="opportunity"
              className="w-full py-2 px-3 bg-gray-100 rounded-lg"
              value={oppertunityName}
              placeholder="Enter opportunity name"
              onChange={(e) => setOppertunityName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="source" className="block text-sm font-medium text-gray-700">
              Source of Opportunity
            </label>
            <input
              type="text"
              name="source"
              id="source"
              className="w-full py-2 px-3 bg-gray-100 rounded-lg"
              value={source}
              placeholder="Enter source of lead"
              onChange={(e) => setSource(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Select Status
            </label>
            <select
              name="status"
              id="status"
              className="w-full py-2 px-3 bg-gray-100 rounded-lg"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="default">Please Select the Status</option>
              <option value="New">New</option>
              <option value="Converted">Converted</option>
              <option value="In Progress">In Progress</option>
              <option value="Lost">Lost</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            className="py-2 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700"
            onClick={createLead}
          >
            Create Lead
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateLead;
