import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaListUl, FaSpinner, FaCheckCircle } from 'react-icons/fa';

function TaskIndicator() {
    return ( 
        <div className='flex-grow'>
            <nav>
                <ul className='flex gap-3 justify-between p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-md border border-purple-200 lg:flex-col lg:gap-4 lg:overflow-visible overflow-visible'>
                    <li className='flex-1'>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                `flex flex-col lg:flex-row lg:items-center lg:gap-3 items-center py-2 px-3 rounded-md transition-all ${
                                    isActive 
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md transform scale-105 border border-blue-300' 
                                        : 'text-blue-700 hover:bg-blue-100 hover:text-blue-900'
                                }`
                            }
                        >
                            <FaListUl className="mb-1 lg:mb-0" />
                            <span>All Tasks</span>
                        </NavLink>
                    </li>
                    <li className='flex-1'>
                        <NavLink 
                            to="/active" 
                            className={({ isActive }) => 
                                `flex flex-col lg:flex-row lg:items-center lg:gap-3 items-center py-2 px-3 rounded-md transition-all ${
                                    isActive 
                                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md transform scale-105 border border-orange-300' 
                                        : 'text-orange-700 hover:bg-orange-100 hover:text-orange-900'
                                }`
                            }
                        >
                            <FaSpinner className="mb-1 lg:mb-0" />
                            <span>Active</span>
                        </NavLink>
                    </li>
                    <li className='flex-1'>
                        <NavLink 
                            to="/completed" 
                            className={({ isActive }) => 
                                `flex flex-col lg:flex-row lg:items-center lg:gap-3 items-center py-2 px-3 rounded-md transition-all ${
                                    isActive 
                                        ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-md transform scale-105 border border-green-300' 
                                        : 'text-green-700 hover:bg-green-100 hover:text-green-900'
                                }`
                            }
                        >
                            <FaCheckCircle className="mb-1 lg:mb-0" />
                            <span>Completed</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
     );
}

export default TaskIndicator;