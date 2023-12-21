import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useContext } from "react";
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
      <li>
        <NavLink className="font-semibold" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold" to="/dashboard">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold" to="/login">
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
           <AiOutlineMenu></AiOutlineMenu>
          </label>
          <ul
            // tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <p className="btn btn-ghost normal-case text-2xl font-bold">
          SCC Technovision Inc
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0}>
          <div className="flex flex-col items-center p-2 ">
            {user && (
              <img
                className="w-10 h-10 avatar rounded-full object-cover"
                src={user?.photoURL}
                alt="User_avatar"
              />
            )}
            <h1 className="text-lg text-black font-medium">{user && user?.displayName}</h1>
          </div>
        </label>
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-secondary text-white"
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
