import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { FaHome, FaTasks } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log("user in Dashboard", user);

  return (
    <div>
      <div className="flex text-white ">
        <div className="mx-auto lg:w-[400px] min-h-screen flex flex-col pt-12 bg-black">
          <div className="flex flex-col items-center gap-2">
            <img className="lg:h-60 h-16 w-16 lg:w-60 rounded-full object-cover" src={user?.photoURL} alt="" />
            <h1 className="lg:text-lg text-sm font-semibold">Name : {user?.displayName}</h1>
            <h1 className="lg:text-lg text-sm font-semibold">Email : {user?.email}</h1>
          </div>
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
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
