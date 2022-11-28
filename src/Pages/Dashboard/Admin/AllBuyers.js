import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import Loading from "../../Others/Loading";

const AllBuyers = () => {
  const {
    data: buyers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch(
        "https://b612-used-products-resale-server-side-this-is-khalid.vercel.app/admin/users/buyers",
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = res.json();
      return data;
    },
  });

  const handlebuyerDelete = (id) => {
    fetch(
      `https://b612-used-products-resale-server-side-this-is-khalid.vercel.app/admin/users/buyers/${id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Buyers Deleted!");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="overflow-x-auto w-full">
      <h1 className="text-3xl font-bold text-primary my-5">All Buyers :</h1>
      <table className="table w-full rounded-none">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {buyers?.map((buyer) => (
            <tr key={buyer._id}>
              <td className="font-bold">{buyer.name}</td>
              <td>{buyer.email}</td>
              <td>
                <button
                  onClick={() => handlebuyerDelete(buyer._id)}
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

export default AllBuyers;
