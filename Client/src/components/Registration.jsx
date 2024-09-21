import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-10 p-5 sm:p-8 md:p-10 flex flex-col bg-slate-200 rounded-xl shadow-md">
      <h1 className="my-3 text-center text-2xl sm:text-3xl font-bold">
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
        type="password"
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
        className="p-3 sm:p-4 my-3 rounded-xl bg-green-600 text-white w-full sm:w-1/2 mx-auto hover:bg-slate-300 hover:text-black"
        type="submit"
        onClick={registerUser}
      >
        Register
      </button>
      <p className="my-2 text-center text-sm">
        Have an Account?{" "}
        <Link className="text-green-600 hover:text-gray-400" to={"/login"}>
          Log In
        </Link>
      </p>
    </div>
  );
};

export default Registration;
