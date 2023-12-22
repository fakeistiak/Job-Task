import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useContext } from "react";
import { CiLogin } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  console.log(user?.displayName);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <a className="mb-2 text-xl">
        <NavLink className="font-semibold" to="/">
          <IoHomeOutline/>
        </NavLink>
      </a>
      <a className="mb-2 lg:px-6 text-xl">
        <NavLink className="font-semibold" to="/dashboard"><RxDashboard/></NavLink>
      </a>
      <a className="mb-2 text-xl">
        <NavLink className="font-semibold" to="/login">
          <CiLogin/>
        </NavLink>
      </a>
    </>
  );


  return (
    <div className="navbar bg-white text-black">
      <div className="navbar-start">
        {user && (
          <div className="flex gap-3 items-center p-2 ">
            <img
              className="w-10 h-10 avatar rounded-full object-cover"
              src={user?.photoURL}
              alt="User_avatar"
            />
            <h1 className="lg:text-lg text-sm text-black font-medium">
              {user?.displayName}
            </h1>
          </div>
        )}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenu></AiOutlineMenu>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleSignOut}
            className="bg-black lg:text-lg text-sm px-7 md:px-8 lg:px-6 text-center py-2 mt-3 font-medium text-white justify-center items-center cursor-pointer block rounded-md w-auto"
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-black text-lg px-7 md:px-8 lg:px-6 text-center py-2 mt-3 font-medium text-white justify-center items-center cursor-pointer w-full block rounded-md">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
