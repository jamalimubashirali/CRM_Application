import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ icon, linkText , toLink}) => {
  return (
    <NavLink to={toLink} className={({isActive}) => `min-w-56 p-3 rounded-xl flex align-baseline gap-2  ${isActive ? 'bg-green-600 text-gray-100' : 'border-2 border-green-600 text-gray-600'}`}>

      {icon}

      <h1 className="mr-auto">{linkText}</h1>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
          clipRule="evenodd"
        />
      </svg>
    </NavLink>
  );
};

export default NavLinks;
