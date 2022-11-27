import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useUsers from "../hooks/useUsers";
import Loading from "../Pages/Others/Loading";
import Navbar from "../Pages/Shared/Navbar";

const DashboardLayout = () => {
  const { user, loading } = useContext(AuthContext);
  const { isAdmin } = useAdmin(user?.email);
  const { isSeller, isBuyer } = useUsers(user?.email);
  
  if(loading){
    return <Loading></Loading>
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side border-r">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 bg-slate-100 text-gray-800 font-medium uppercase">
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>

            {/* ----------------------seller--------------------- */}
            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addproducts">Add Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproducts">My Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/mybuyers">My Buyers</Link>
                </li>
              </>
            )}
            {/* --------------------------admin---------------------------- */}
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allsellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/reporteditems">Reported Items</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
