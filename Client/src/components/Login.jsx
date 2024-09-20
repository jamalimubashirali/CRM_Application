import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  // Variables required for input States
  const [username, setUsername] = useState("");
  const [passowrd, setPassword] = useState("");
  const [seletedRole, setSelectedRole] = useState("");
  console.log(username, passowrd, seletedRole);

  // Login credentials verification function
  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", {
        username,
        passowrd,
        seletedRole,
      });
      if (response.status == 200) {
        console.log(response.data.msg);
      } else {
        console.log(response.data.error);
      }
      setPassword("");
      setUsername("");
      setSelectedRole("default");
    } catch (error) {
      console.log(error);
    }
  };

  // Front-End Code
  return (
    <div className="w-1/3 mx-auto my-10 p-10 flex flex-col bg-slate-200 shadow-md rounded-xl">
      <h1 className="my-3 text-center text-3xl font-bold">LOGIN</h1>
      <label htmlFor="username" className="">
        Username
      </label>
      <input
        value={username}
        className="p-2 my-1 outline-slate-300 border-2 border-green-600 rounded-xl"
        type="text"
        name="username"
        id="password"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password" className="">
        Password
      </label>
      <input
        value={passowrd}
        className="p-2 my-1  outline-slate-300 border-2 border-green-600 rounded-xl"
        type="text"
        name="passowrd"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="role" className="">
        Select Role
      </label>
      <select
        className="p-2 my-1  outline-slate-300 border-2 border-green-600 rounded-xl"
        value={seletedRole}
        name="roles"
        id="roles"
        onChange={(e) => setSelectedRole(e.target.value)}
      >
        <option value="default">Please Select your Role</option>
        <option value="admin">Admin</option>
        <option value="sale representative">Sales Representative</option>
        <option value="Manager">Manager</option>
      </select>
      <button
        className="p-4 my-3 rounded-xl bg-green-600 text-white w-1/2 mx-auto
        hover:text-black hover:bg-slate-300"
        type="submit"
        onSubmit={login}
      >
        Login
      </button>
      <p className="text-center text-sm">
        Don't have an Account?{" "}
        <span className="text-green-600 cursor-pointer">Create One.</span>
      </p>
    </div>
  );
};

export default Login;
