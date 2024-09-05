import React from "react";

const NavLinks = ({ icon, linkText }) => {
  return (
    <div className="min-w-56 px-3 py-2 rounded-xl cursor-pointer flex align-baseline gap-2 bg-blue-500 text-white">
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
    </div>
  );
};

export default NavLinks;
