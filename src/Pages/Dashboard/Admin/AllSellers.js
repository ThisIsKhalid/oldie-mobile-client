import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import Loading from "../../Others/Loading";

const AllSellers = () => {
  const {
    data: sellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/admin/users/sellers", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = res.json();
      return data;
    },
  });

  const handleSellerDelete = (id) => {
    fetch(`http://localhost:5000/admin/users/sellers/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Sellers Deleted!");
          refetch();
        }
      });
  };

  const handleSellerVerify = (email) => {
    fetch(`http://localhost:5000/users/seller/${email}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.existingUser.acknowledged) {
          toast.success("User verified successfully!!");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="overflow-x-auto w-full">
      <h1 className="text-3xl font-bold text-primary my-5">
        All Sellers :
      </h1>
      <table className="table w-full rounded-none">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Verify</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {sellers?.map((seller) => (
            <tr key={seller._id}>
              <td className="font-bold">{seller.name}</td>
              <td>{seller.email}</td>
              <td>
                {seller?.verified ? (
                  <span className="font-semibold text-primary">Verified</span>
                ) : (
                  <button
                    onClick={() => handleSellerVerify(seller?.email)}
                    className="btn btn-primary btn-xs"
                  >
                    Verify
                  </button>
                )}
              </td>
              <td>
                <button
                  onClick={() => handleSellerDelete(seller._id)}
                  className="btn btn-error btn-xs"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSellers;
