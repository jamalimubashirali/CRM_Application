import React, { useState, useEffect } from "react";
import { XIcon } from "@heroicons/react/outline";
import axios from "axios";

const CreateCustomer = ({
  customerData,
  isVisible,
  onClose,
  onCustomerCreated,
  onCustomerUpdated,
}) => {
  // States for the fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [address, setAddress] = useState("");
  const [isEditMode, setIsEditMode] = useState(false); // State to check if we're editing or creating a customer

  // Effect to populate form when editing a customer
  useEffect(() => {
    if (customerData) {
      // Set fields with existing customer data for editing
      setName(customerData.name || "");
      setEmail(customerData.email || "");
      setPhone(customerData.phone || "");
      setCompany(customerData.company || "");
      setIndustry(customerData.industry || "");
      setAddress(customerData.address || "");
      setIsEditMode(true); // Enable edit mode
    } else {
      // Reset fields for creation mode
      resetFields();
      setIsEditMode(false);
    }
  }, [customerData]);

  // Reseting Fields when closing model
  const resetFields = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setIndustry("");
    setAddress("");
    setIsEditMode(false);
  };

  // Method to create a new customer
  const handleCreateSubmit = async () => {
    if (name && email && phone && company && industry && address) {
      try {
        const response = await axios.post("/api/customer", {
          name,
          email,
          phone,
          company,
          industry,
          address,
        });
        if (response.status === 201) {
          onClose();
          onCustomerCreated(response.data); // Send new customer to parent
          resetFields();
        }
      } catch (error) {
        alert("Error creating customer.");
      }
    } else {
      alert("Please fill all the fields.");
    }
  };

  // Method to update an existing customer
  const handleUpdateSubmit = async () => {
    if (name && email && phone && company && industry && address) {
      try {
        const response = await axios.patch(`/api/customer/${customerData._id}`, {
          name,
          email,
          phone,
          company,
          industry,
          address,
        });
        if (response.status === 200) {
          onClose();
          onCustomerUpdated(response.data); // Send updated customer to parent
          resetFields();
        }
      } catch (error) {
        alert("Error updating customer.");
      }
    } else {
      alert("Please fill all the fields.");
    }
  };

  // Determine whether to create or update based on the mode
  const handleSubmit = () => {
    if (isEditMode) {
      handleUpdateSubmit(); // Edit mode: Update customer
    } else {
      handleCreateSubmit(); // Create mode: Create new customer
    }
  };

  // Close modal handler
  const handleClose = () => {
    resetFields();
    onClose();
  };

  // Checking modal visibility
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-8 rounded-lg w-11/12 md:w-2/3 lg:w-1/2">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={handleClose}
        >
          <XIcon className="h-6 w-6" />
        </button>

        <h1 className="text-center text-3xl">
          {isEditMode ? "Update Customer Details" : "Create Customer"}
        </h1>

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
              onChange={(e) => setIndustry(e.target.value)}
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
          <button
            className="mx-auto py-2 px-4 bg-green-600 text-white rounded-lg"
            onClick={handleSubmit}
          >
            {isEditMode ? "Update Customer" : "Create Customer"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCustomer;
