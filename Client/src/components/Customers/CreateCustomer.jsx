import React, { useState } from "react";

const CreateCustomer = ({data}) => {
  const [name , setName] = typeof(data) != undefined ? useState(data.name) : useState("");
  const [email , setEmail] = typeof(data) != undefined ? useState(data.email) : useState("");
  const [phone , setPhone] = typeof(data) != undefined ? useState(data.phone) : useState("");
  const [company , setCompany] = typeof(data) != undefined ? useState(data.company) : useState("");
  const [industry , setInsdustry] = typeof(data) != undefined ? useState(data.industry) : useState("");
  const [address , setAddress] = typeof(data) != undefined ? useState(data.address) : useState("");
  return (
    <div className="w-full flex flex-row p-5">
      <div className="min-w-1/3">
        <label htmlFor="customer_name">Name</label>
        <input
          className="max-w-fit py-3 px-2 bg-slate-200 rounded-lg"
          placeholder="Name"
          type="text"
          value={name}
        />
      </div>
      <div className="min-w-1/2">
        <label htmlFor="customer_name">Name</label>
        <input
          className="max-w-fit py-3 px-2 bg-slate-200 rounded-lg"
          type="text"
        />
      </div>
      <div className="min-w-1/2">
        <label htmlFor="customer_name">Name</label>
        <input
          className="max-w-fit py-3 px-2 bg-slate-200 rounded-lg"
          type="text"
        />
      </div>
      <div className="min-w-1/2">
        <label htmlFor="customer_name">Name</label>
        <input
          className="max-w-fit py-3 px-2 bg-slate-200 rounded-lg"
          type="text"
        />
      </div>
      <div className="min-w-1/2">
        <label htmlFor="customer_name">Name</label>
        <input
          className="max-w-fit py-3 px-2 bg-slate-200 rounded-lg"
          type="text"
        />
      </div>
    </div>
  );
};

export default CreateCustomer;
