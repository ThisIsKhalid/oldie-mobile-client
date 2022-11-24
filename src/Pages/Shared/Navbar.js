import React, { useContext } from "react";
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
    <div className="navbar bg-base-200 justify-between lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold">
          <span className="text-neutral">Oldie</span>{" "}
          <span className="text-secondary">Mobile</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
    </div>
  );
};

export default Navbar;
