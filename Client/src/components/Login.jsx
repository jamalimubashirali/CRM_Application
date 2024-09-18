import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [passowrd, setPassword] = useState("");
  const [seletedRole, setSelectedRole] = useState("");
  console.log(username, passowrd, seletedRole);
  return (
    <div className="w-1/2 mx-auto my-20 p-10 flex flex-col bg-slate-500 rounded-xl">
      <label htmlFor="username">Username</label>
      <input
        className=""
        type="text"
        name="username"
        id="password"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        name="passowrd"
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
        <option value="admin">Admin</option>
        <option value="sale representative">Sales Representative</option>
        <option value="Manager">Manager</option>
      </select>
      <button
        className="p-4 my-3 rounded-xl bg-slate-700 text-white w-1/2 mx-auto"
        type="submit"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
