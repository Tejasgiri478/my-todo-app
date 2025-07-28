import React, { useState, useEffect } from "react";
import CreateTask from "./createTask/CreateTask";
import { Outlet, NavLink } from "react-router-dom";
import {
  FaClipboardList,
  FaListUl,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";

function Layout() {
  // Get the initial state from localStorage or default to false
  const [showTaskList, setShowTaskList] = useState(() => {
    const savedState = localStorage.getItem("showTaskList");
    // If we're on a task route, default to showing tasks
    const location = window.location.pathname;
    if (
      location === "/" ||
      location === "/active" ||
      location === "/completed"
    ) {
      return savedState !== null ? JSON.parse(savedState) : true;
    }
    return savedState !== null ? JSON.parse(savedState) : false;
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("showTaskList", JSON.stringify(showTaskList));
  }, [showTaskList]);

  return (
    <div className="container mx-auto px-4 py-6 bg-gradient-to-b from-blue-50 to-purple-50 min-h-screen pt-10 lg:pt-10">
      {!showTaskList ? (
        <div className="flex flex-col">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-800">Add Task</h1>
            <button
              onClick={() => setShowTaskList(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-md hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              <FaClipboardList className="text-yellow-300" />
              <span>View Tasks</span>
            </button>
          </div>
          <div className="w-full max-w-2xl mx-auto">
            <CreateTask />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-start space-y-4">
          <div className="w-full flex flex-col space-y-4 mb-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Your Tasks
              </h1>
              <button
                onClick={() => setShowTaskList(false)}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-md hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                <span>+ Add New Task</span>
              </button>
            </div>

            {/* Task Navigation */}
            <nav className="w-full">
              <ul className="flex gap-3 justify-between p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-md border border-purple-200 overflow-visible">
                <li className="flex-1">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `flex items-center justify-center gap-2 py-2 px-3 rounded-md transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md transform scale-105 border border-blue-300"
                          : "text-blue-700 hover:bg-blue-100 hover:text-blue-900"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <FaListUl
                          className={isActive ? "text-yellow-300" : ""}
                        />
                        <span>All Tasks</span>
                      </>
                    )}
                  </NavLink>
                </li>
                <li className="flex-1">
                  <NavLink
                    to="/active"
                    className={({ isActive }) =>
                      `flex items-center justify-center gap-2 py-2 px-3 rounded-md transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md transform scale-105 border border-orange-300"
                          : "text-orange-700 hover:bg-orange-100 hover:text-orange-900"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <FaSpinner
                          className={isActive ? "text-yellow-300" : ""}
                        />
                        <span>Active</span>
                      </>
                    )}
                  </NavLink>
                </li>
                <li className="flex-1">
                  <NavLink
                    to="/completed"
                    className={({ isActive }) =>
                      `flex items-center justify-center gap-2 py-2 px-3 rounded-md transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-md transform scale-105 border border-green-300"
                          : "text-green-700 hover:bg-green-100 hover:text-green-900"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <FaCheckCircle
                          className={isActive ? "text-yellow-300" : ""}
                        />
                        <span>Completed</span>
                      </>
                    )}
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="outlet bg-white rounded-lg shadow-md p-5 w-full border border-purple-200 hover:shadow-xl transition-shadow duration-300">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;
