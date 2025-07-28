import React, { useContext } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import TokenContext from "../../context/TokenContext.js";
import "./header.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

function Header() {
  const { userToken, tokenDispatch, user } = useContext(TokenContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("authToken");
    tokenDispatch({ type: "REMOVE_TOKEN" });
    navigate("/login");
  };

  const handleLogoClick = () => {
    if (userToken) {
      localStorage.setItem("showTaskList", "false");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <nav className="header bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg flex flex-wrap md:flex-nowrap justify-between items-center relative overflow-hidden fixed top-0 left-0 right-0 z-20">
        <div
          className="logo flex-1 min-w-[150px] md:w-1/4 text-center cursor-pointer z-10 transform transition-transform duration-300 hover:scale-105"
          onClick={handleLogoClick}
        >
          <div className="flex items-center justify-center py-3 px-2 md:px-4">
            <div className="mr-2 text-white text-xl md:text-2xl flex items-center">
              <TaskAltIcon
                className="inline-block mr-2 text-yellow-300 animate-pulse"
                fontSize="large"
              />
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">
                TaskMaster
              </span>
            </div>
          </div>
        </div>
        
        {/* No mobile menu button needed */}
        {/* Spacer for layout balance */}
        <div className="hidden md:block flex-1"></div>
        
        {/* User section */}
        <div className="flex-1 flex justify-end items-center z-10 min-w-[200px]">
          {userToken ? (
            <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-auto">
              <p className="mb-2 md:mb-0 md:mr-5 text-white text-center md:text-left">
                Welcome,{" "}
                <span className="text-lg md:text-xl text-yellow-300 capitalize font-semibold">
                  {user?.name || "User"}
                </span>
              </p>
              <button
                onClick={logout}
                className="logout mt-2 md:mt-0 md:mr-4 px-4 py-1.5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full hover:from-red-600 hover:to-orange-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Logout
              </button>
            </div>
          ) : (
            <ul className="flex flex-col md:flex-row justify-end gap-2 md:gap-3 w-full md:w-3/4 pr-0 md:pr-6">
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-4 text-yellow-300 font-medium bg-blue-700 bg-opacity-30 rounded-lg"
                      : "block py-2 px-4 text-white hover:text-yellow-300 hover:bg-blue-700 hover:bg-opacity-30 rounded-lg transition-all duration-300"
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-4 text-yellow-300 font-medium bg-purple-700 bg-opacity-30 rounded-lg"
                      : "block py-2 px-4 text-white hover:text-yellow-300 hover:bg-purple-700 hover:bg-opacity-30 rounded-lg transition-all duration-300"
                  }
                >
                  Register
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
      {/* No mobile menu needed here anymore */}
      
      <div className="pt-16 md:pt-16">
        <Outlet />
      </div>
    </div>
  );
}

export default Header;
