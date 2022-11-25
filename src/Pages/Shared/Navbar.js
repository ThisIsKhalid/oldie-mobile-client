import React, { useContext } from "react";
import { TfiViewList, TfiViewListAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const menuItem = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button onClick={logOut}>Sign Out</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-slate-100 justify-between lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <TfiViewList className="text-xl text-gray-900" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold">
          <span className="text-error">Oldie</span>{" "}
          <span className="text-secondary">Mobile</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={3}
        className="btn btn-ghost lg:hidden"
      >
        <TfiViewListAlt className="text-xl" />
      </label>
    </div>
  );
};

export default Navbar;
