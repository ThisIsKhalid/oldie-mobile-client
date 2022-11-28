import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const { data: myOrders = [], refetch } = useQuery({
    queryKey: ["myorders"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myorders?email=${user?.email}`,
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

  const handlePhonePaid = (productId) => {
    console.log(productId);
  };
  const handlePhoneDelete = (id) => {
    fetch(`http://localhost:5000/myorders/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product Deleted Successfully!");
          refetch();
        }
      });
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Image</th>
            <th>Phone Name</th>
            <th>Price</th>
            <th>Pay</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myOrders?.map((order) => (
            <tr key={order._id}>
              <td>
                <div className="avatar">
                  <div className="w-14 rounded-xl">
                    <img src={order.img} alt="" />
                  </div>
                </div>
              </td>
              <td className="text-xl font-semibold">{order.title}</td>
              <td>
                <span className="text-accent font-xl font-bold">
                  Price: {order.price}
                </span>
              </td>
              <td>
                <button
                  onClick={() => handlePhonePaid(order.productId)}
                  className="btn btn-secondary btn-sm"
                >
                  Pay
                </button>
              </td>
              <td>
                <button
                  onClick={() => handlePhoneDelete(order._id)}
                  className="btn btn-error btn-sm"
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

export default MyOrders;
