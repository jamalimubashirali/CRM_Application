import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  // States of input values
  const [username, setUsername] = useState("");
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setSelectedRole] = useState("Please Select the Role");

  // Function is called to send data to database for User Registration
  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register", {
        username,
        email,
        password,
        role,
      });
      if (response.status == 201) {
        alert(response.data.msg);
      } else {
        alert("Request Failed");
      }
      setPassword("");
      setSelectedRole("Please Select the Role");
      setUserEmail("");
      setUsername("");
    } catch (error) {
      alert("An Error Occured During User Registraion");
    }
  };

  return (
    <div className="w-1/3 mx-auto my-20 p-10 flex flex-col bg-slate-200 rounded-xl shadow-md">
      <h1 className="my-3 text-center text-3xl font-bold">
        {"Registration".toUpperCase()}
      </h1>
      <label htmlFor="username">Username</label>
      <input
        placeholder="Create username"
        value={username}
        className="p-2 my-1 rounded-xl outline-slate-300 border-2 border-green-600"
        type="text"
        name="username"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        placeholder="Enter your email"
        value={email}
        className="p-2 my-1 rounded-xl outline-slate-300 border-2 border-green-600"
        type="text"
        name="email"
        id="email"
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        placeholder="Create password"
        value={password}
        className="p-2 my-1 rounded-xl outline-slate-300 border-2 border-green-600"
        type="password" // Change type to "password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="role">Select Role</label>
      <select
        value={role}
        className="p-2 my-1 rounded-xl outline-slate-300 border-2 border-green-600"
        name="roles"
        id="roles"
        onChange={(e) => setSelectedRole(e.target.value)}
      >
        <option value="default" className="">
          Please Select your Role
        </option>
        <option value="Admin">Admin</option>
        <option value="Sales Representative">Sales Representative</option>
        <option value="Manager">Manager</option>
      </select>
      <button
        className="p-4 my-3 rounded-xl bg-green-600 text-white w-1/2 mx-auto hover:bg-slate-300 hover:text-black"
        type="submit"
        onClick={registerUser}
      >
        Register
      </button>
      <p className="my-2 text-center text-sm">
        Have an Account?{" "}
        <span className="text-green-600 cursor-pointer">Log In</span>
      </p>
    </div>
  );
};

export default Registration;
