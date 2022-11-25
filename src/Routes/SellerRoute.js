import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useUsers from "../hooks/useUsers";
import Loading from "../Pages/Others/Loading";


const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { isSeller, isUsersLoading } = useUsers(user?.email);
  const location = useLocation();

  if (loading || isUsersLoading) {
    return <Loading></Loading>;
  }

  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
