import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const { data: phones = [], refetch } = useQuery({
    queryKey: ["phones"],
    queryFn: async () => {
      const res = await fetch(
        `https://b612-used-products-resale-server-side-this-is-khalid.vercel.app/phones?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleAdvertise = (id) => {
    fetch(
      `https://b612-used-products-resale-server-side-this-is-khalid.vercel.app/phones/announce/${id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product Advertised Successfully!");
          refetch();
        }
      });
  };

  const handlePhoneDelete = (id) => {
    fetch(
      `https://b612-used-products-resale-server-side-this-is-khalid.vercel.app/phones/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product Deleted!");
          refetch();
        }
      });
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Phone Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Advertise</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {phones?.map((phone) => (
            <tr key={phone._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{phone.name}</div>
                    <div className="text-sm opacity-50">{phone.category}</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="text-secondary font-xl">
                  Price: {phone.resalePrice}
                </span>
                <br />
                <span className="badge badge-outline badge-sm">
                  Original Price: {phone.originalPrice}
                </span>
              </td>
              <td className="font-bold">
                {phone.sold ? (
                  <span className="text-primary">Sold</span>
                ) : (
                  <span className="text-red-500">Unsold</span>
                )}
              </td>
              <td>
                {!phone?.sold &&
                  (phone.advertise ? (
                    <span className="text-primary font-bold">Advertised</span>
                  ) : (
                    <button
                      onClick={() => handleAdvertise(phone._id)}
                      className="btn btn-primary btn-xs"
                    >
                      Advertise
                    </button>
                  ))}
              </td>
              <td>
                <button
                  onClick={() => handlePhoneDelete(phone._id)}
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

export default MyProducts;
