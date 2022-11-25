import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import AllBuyers from "../Pages/Dashboard/Admin/AllBuyers";
import AllSellers from "../Pages/Dashboard/Admin/AllSellers";
import ReportedItems from "../Pages/Dashboard/Admin/ReportedItems";
import MyOrders from "../Pages/Dashboard/Buyer/MyOrders";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts";
import Home from "../Pages/Home/Home/Home";
import Signin from "../Pages/Login/Signin";
import Signup from "../Pages/Login/Signup";
import PhonesByCategory from "../Pages/Phones/PhonesByCategory/PhonesByCategory";
import AdminRoute from "./AdminRoute";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/categories/:category",
        element: (
          <PrivateRoutes>
            <PhonesByCategory></PhonesByCategory>
          </PrivateRoutes>
        ),
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/addproducts",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reporteditems",
        element: (
          <AdminRoute>
            <ReportedItems></ReportedItems>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
