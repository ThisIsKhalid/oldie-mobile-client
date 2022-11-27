import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Others/Loading";

const AllBuyers = () => {
  const { data: buyers = [], isLoading } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/admin/users/buyers");
      const data = res.json();
      return data;
    },
  });

  const handlebuyerDelete = (id) => {
    console.log(id);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="overflow-x-auto w-full">
        <h1 className="text-3xl font-bold text-center text-primary my-5">All Buyers</h1>
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
