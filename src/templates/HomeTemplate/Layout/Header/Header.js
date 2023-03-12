import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { logOut } from "../../../../redux/reducer/ManagementUserSlice";
import { USER_INFO } from "../../../../util/setting/config";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.ManagementUserSlice);
  const infoUser = JSON.parse(localStorage.getItem(USER_INFO));
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="header-2 text-white fixed mb-24 top-0 w-screen  z-10">
        <nav className="bg-[#1f1f1f] p-4   md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex  rounded-lg justify-between items-center">
              <img
                className="w[70px] rounded-lg  h-[70px]"
                src="https://png2.cleanpng.com/sh/15e12cd1b73db869f9a5dca9878a293e/L0KzQYm3VsI2N6d9e5H0aYP2gLBuTfNqdpZ1hNdDeD36ebb1TfF2cJDrRdVybnXzfLbBmL1kcZ9qhdN8LXPsfrb3jPV5gF5pRdRqZImwRbO6UcBmQGlmfdYBMECxRoG3VMQ3PWQ2TaQEOUS0RoW3V8E3OV91htk=/kisspng-cineplexx-wien-auhof-cineplexx-cinemas-cineplexx-d-bady-5b310e88aed600.6004465315299416407161.png"
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
                    : "p-2 lg:px-4 md:mx-2  rounded hover:bg-[#ff7f50] hover:text-white transition-colors duration-300"
                }
              >
                Trang chủ
              </NavLink>
              <NavLink
                to="/2"
                className={({ isActive }) =>
                  isActive
                    ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-[#ff7f50]"
                    : "p-2 lg:px-4 md:mx-2  rounded hover:bg-[#ff7f50] hover:text-white transition-colors duration-300"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/2"
                className={({ isActive }) =>
                  isActive
                    ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-[#ff7f50]"
                    : "p-2 lg:px-4 md:mx-2  rounded hover:bg-[#ff7f50] hover:text-white transition-colors duration-300"
                }
              >
                Features
              </NavLink>
              {localStorage.getItem(USER_INFO) ? (
                <div className="flex items-center justify-between">
                  <p className="p-2">Xin chào {infoUser.hoTen}!!</p>
                  <button
                    onClick={() => {
                      dispatch(logOut());
                      navigate(0);
                    }}
                    // to="/"
                    className="p-2 lg:px-4 md:mx-2  text-center border border-solid border-[#ff7f50] rounded hover:bg-[#ff7f50] hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                  >
                    Đăng xuất
                  </button>
                </div>
              ) : (
                <div className="span flex ">
                  <NavLink
                    to="login/sign-in"
                    className="p-2 lg:px-4 md:mx-2  rounded hover:bg-[#ff7f50] hover:text-white transition-colors duration-300"
                  >
                    Đăng nhập
                  </NavLink>
                  <NavLink
                    to="login/signUp"
                    className="p-2 lg:px-4 md:mx-2  text-center border border-solid border-[#ff7f50] rounded hover:bg-[#ff7f50] hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                  >
                    Đăng ký
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
