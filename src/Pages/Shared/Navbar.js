import React, { useContext } from "react";
import { TfiViewList, TfiViewListAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import img from '../../Assets/mobile-app (1).png'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const menuItem = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
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
    <section className="bg-slate-100">
      <div className="navbar justify-between lg:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={1} className="btn btn-ghost lg:hidden">
              <TfiViewList className="text-xl text-gray-900" />
            </label>
            <ul
              tabIndex={2}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {menuItem}
            </ul>
          </div>
          <div className="flex items-center border-2 border-black p-1 rounded my-1">
            <h1 className="bg-black text-white font-bold py-1 px-3 text-lg tracking-widest rounded-l">OLDIE</h1>
            <h1 className="text-black font-bold py-1 px-3 text-lg tracking-widest">STORE</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 p-0 text-lg font-semibold text-black">
            {menuItem}
          </ul>
        </div>
        <label
          htmlFor="dashboard-drawer"
          tabIndex={3}
          className="btn btn-ghost lg:hidden"
        >
          <TfiViewListAlt className="text-xl" />
        </label>
      </div>
    </section>
  );
};

export default Navbar;
