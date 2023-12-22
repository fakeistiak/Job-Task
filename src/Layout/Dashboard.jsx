import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaTasks } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      {/* Button to toggle the dropdown */}
      <button
        className="lg:hidden block text-black p-4"
        onClick={toggleDropdown}
      >
       <IoMenuSharp className="text-xl"/>
      </button>

      <div className="flex text-white ">
        {/* Sidebar for larger devices */}
        <div className="mx-auto lg:w-[200px] min-h-screen flex-col pt-8 bg-black hidden lg:block">
          <ul className="menu p-4">
            <li className="lg:text-xl md:text-md sm:text-sm">
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li className="lg:text-xl md:text-md sm:text-sm">
              <NavLink to="/dashboard/addtask">
                <FaTasks />
                Add a Task
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Dropdown content for small devices */}
        {isDropdownOpen && (
          <div className="mx-auto lg:hidden min-h-screen flex flex-col pt-8 bg-black">
            <ul className="menu p-4">
              <li className="lg:text-xl md:text-md sm:text-sm">
                <NavLink to="/">
                  <FaHome />
                  Home
                </NavLink>
              </li>
              <li className="lg:text-xl md:text-md sm:text-sm">
                <NavLink to="/dashboard/addtask">
                  <FaTasks />
                  Add a Task
                </NavLink>
              </li>
            </ul>
          </div>
        )}

        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
