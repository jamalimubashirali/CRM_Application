import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  // Variables required for input States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  console.log(username, password, selectedRole);

  // Login credentials verification function
  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", {
        username,
        password,
        selectedRole,
      });

      if (response.status == 200) {
        alert(response.data.message); 
      } else {
        alert(response.data.error || "Login Failed"); 
      }

      setPassword("");
      setUsername("");
      setSelectedRole("default");
    } catch (error) {
      alert("An error occurred during login. Please try again.");
      console.error("Login Error:", error);
    }
  };

  // Front-End Code
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-10 p-3 sm:p-5 md:p-8 lg:p-10 flex flex-col bg-slate-200 shadow-md rounded-xl">
      <h1 className="my-3 text-center text-2xl sm:text-3xl font-bold">
        {"login".toUpperCase()}
      </h1>
      <label htmlFor="username" className="">
        Username
      </label>
      <input
        placeholder="Enter your username"
        value={username}
        className="p-2 my-1 outline-slate-300 border-2 border-green-600 rounded-xl"
        type="text"
        name="username"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password" className="">
        Password
      </label>
      <input
        placeholder="Enter your password"
        value={password}
        className="p-2 my-1 outline-slate-300 border-2 border-green-600 rounded-xl"
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link
        className="ml-auto text-green-600 underline text-sm hover:text-gray-400"
        to="/forgot-password"
      >
        {"Forgot Password"}
      </Link>
      <label htmlFor="role" className="">
        Select Role
      </label>
      <select
        className="p-2 my-1 outline-slate-300 border-2 border-green-600 rounded-xl"
        value={selectedRole}
        name="roles"
        id="roles"
        onChange={(e) => setSelectedRole(e.target.value)}
      >
        <option value="default">Please Select your Role</option>
        <option value="Admin">Admin</option>
        <option value="sale Representative">Sales Representative</option>
        <option value="Manager">Manager</option>
      </select>
      <button
        className="p-3 sm:p-4 my-3 rounded-xl bg-green-600 text-white w-full sm:w-1/2 mx-auto
        hover:text-black hover:bg-slate-300"
        type="submit"
        onClick={login}
      >
        Login
      </button>
      <p className="text-center text-sm">
        Don't have an Account?{" "}
        <Link className="text-green-600 hover:text-gray-400" to="/register">
          Create One.
        </Link>
      </p>
    </div>
  );
};

export default Login;
