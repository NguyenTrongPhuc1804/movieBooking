import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="header-2 text-white fixed mb-24 top-0 w-screen  z-10">
        <nav className="bg-[#1f1f1f] p-4   md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex  rounded-lg justify-between items-center">
              <img
                className="w[70px] rounded-lg  h-[70px]"
                src="https://static.vecteezy.com/system/resources/previews/002/236/321/large_2x/movie-trendy-banner-vector.jpg"
                alt=""
              />
              <button
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="border border-solid border-gray-600 px-3 py-1 rounded  opacity-50 hover:opacity-75 md:hidden"
                id="navbar-toggle"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>

            <div
              className={` md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 ${
                toggle ? "flex" : "hidden"
              }  `}
              id="navbar-collapse"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-[#ff7f50]"
                    : "p-2 lg:px-4 md:mx-2  rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/2"
                className={({ isActive }) =>
                  isActive
                    ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-[#ff7f50]"
                    : "p-2 lg:px-4 md:mx-2  rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/2"
                className={({ isActive }) =>
                  isActive
                    ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-[#ff7f50]"
                    : "p-2 lg:px-4 md:mx-2  rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                }
              >
                Features
              </NavLink>
              <a
                href="#"
                className="p-2 lg:px-4 md:mx-2  text-center border border-transparent rounded hover:bg-indigo-100 hover:text-[#ff7f50] transition-colors duration-300"
              >
                Login
              </a>
              <a
                href="#"
                className="p-2 lg:px-4 md:mx-2  text-center border border-solid border-[#ff7f50] rounded hover:bg-[#ff7f50] hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
              >
                Signup
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
