import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setSelectedRole] = useState("");

  console.log(username , email , role , password);
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
        console.log(response.data.msg);
      } else {
        console.error("Registration failed:", response.data.error);
      }
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };

  return (
    <div className="w-1/2 mx-auto my-20 p-10 flex flex-col bg-slate-500 rounded-xl">
      <label htmlFor="username">Username</label>
      <input
        className=""
        type="text"
        name="username"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        className=""
        type="text"
        name="email"
        id="email"
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password" // Change type to "password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="role">Select Role</label>
      <select
        name="roles"
        id="roles"
        onChange={(e) => setSelectedRole(e.target.value)}
      >
        <option value="default">Please Select your Role</option>
        <option value="Admin">Admin</option>
        <option value="Sales Representative">Sales Representative</option>
        <option value="Manager">Manager</option>
      </select>
      <button
        className="p-4 my-3 rounded-xl bg-slate-700 text-white w-1/2 mx-auto"
        type="submit"
        onClick={registerUser}
      >
        Register
      </button>
    </div>
  );
};

export default Registration;
