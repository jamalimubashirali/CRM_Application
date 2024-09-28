import React, { useState , useEffect} from "react";
import { XIcon } from "@heroicons/react/outline";
import axios from 'axios';

const CreateCustomer = ({ customerData, isVisible, onClose , onCustomerCreated }) => {

  // States for the fields
  const [name, setName] = useState("");
  const [email, setEmail] =useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [address, setAddress] = useState("");
  const [isPatchRequest , setIsPatch] = useState(false);


    useEffect(() => {
      if (customerData) {
        setName(customerData.name || "");
        setEmail(customerData.email || "");
        setPhone(customerData.phone || "");
        setCompany(customerData.company || "");
        setIndustry(customerData.industry || "");
        setAddress(customerData.address || "");
        setIsPatch(true);
      } else {
        // Reset the fields if no customerData is passed
        resetFields();
      }
    }, [customerData]);

    // Method for reseting each field
    const resetFields = () => {
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setIndustry("");
        setAddress("");
        setIsPatch(false);
    }
    
  // Method To Create Customer in the database
  const handleCreateSubmit = async () => {
      if (name && email && phone && company && industry && address){
        await axios.post('/api/customer' , {name , email , phone , company , industry , address})
        .then(
          (response) => {
              if(response.status === 201){
                onClose();
                onCustomerCreated(response.data);
                resetFields();
              }
          }
        ).catch((response) => {
            if(response.status === 400){
              alert(response.data.msg);
            }
        })
    }  
    else {
      alert("Please Fill all the fields");
    }
}

  // For handling Updates in the Data
  const handleUpdateCustomer = async () => {
    if (name && email && phone && company && industry && address){
      await axios.patch(`/api/customer/${customerData._id}` , {
        name, 
        email,
        phone,
        company,
        industry,
        address
      }).then((response) => {
        if(response.status === 200) {
          onClose();
          onCustomerCreated(response.data);
          resetFields();
        }
      }).catch((response) => {
        if(response.status === 404) {
          alert(response.data.msg);
        }
      })
  }  
  else {
    alert("Please Fill all the fields");
  }
  }

  // Checking Model visibility
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-8 rounded-lg w-11/12 md:w-2/3 lg:w-1/2">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={()=>{
            resetFields();
            onClose();
          }}
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
          <button className="mx-auto py-2 px-4 bg-green-600 text-white rounded-lg"
          onClick={() => {
            if(isPatchRequest){
              handleUpdateCustomer();
            } else {
              handleCreateSubmit();
            }
          }}>
            Create Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCustomer;
