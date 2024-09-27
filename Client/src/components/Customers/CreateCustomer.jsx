import React, { useState } from "react";
import { XIcon } from "@heroicons/react/outline";

const CreateCustomer = ({ customerData, isVisible, onClose }) => {
  const [name, setName] =
    customerData == {} ? useState(customerData.name) : useState("");
  const [email, setEmail] =
    customerData == {} ? useState(customerData.email) : useState("");
  const [phone, setPhone] =
    customerData == {} ? useState(customerData.phone) : useState("");
  const [company, setCompany] =
    customerData == {} ? useState(customerData.company) : useState("");
  const [industry, setInsdustry] =
    customerData == {} ? useState(customerData.industry) : useState("");
  const [address, setAddress] =
    customerData == {} ? useState(data.address) : useState("");
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-8 rounded-lg w-11/12 md:w-2/3 lg:w-1/2">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <XIcon className="h-6 w-6" />
        </button>

        <h1 className="text-center text-3xl">Enter Customer Details</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
          <div>
            <label htmlFor="customer_name">Name</label>
            <input
              className="w-full py-3 px-2 bg-slate-200 rounded-lg"
              placeholder="Enter name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="customer_email">Email</label>
            <input
              className="w-full py-3 px-2 bg-slate-200 rounded-lg"
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="customer_phone">Phone</label>
            <input
              className="w-full py-3 px-2 bg-slate-200 rounded-lg"
              type="text"
              placeholder="Enter phone number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="customer_company">Company Name</label>
            <input
              className="w-full py-3 px-2 bg-slate-200 rounded-lg"
              type="text"
              placeholder="Enter company name"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="customer_industry">Industry</label>
            <input
              className="w-full py-3 px-2 bg-slate-200 rounded-lg"
              type="text"
              placeholder="Enter industry"
              required
              value={industry}
              onChange={(e) => setInsdustry(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="customer_address">Address</label>
            <input
              className="w-full py-3 px-2 bg-slate-200 rounded-lg"
              type="text"
              placeholder="Enter address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="mx-auto py-2 px-4 bg-green-600 text-white rounded-lg">
            Create Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCustomer;
