import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";

const ReportedItems = () => {
  const { data: products = [], refetch } = useQuery({
    queryKey: ["ReportedProduct"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/product/reported");
      const data = res.json();
      return data;
    },
  });

  const handleProductsDelete = (id) => {
    fetch(`http://localhost:5000/product/reported/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Product Deleted!!");
          refetch();
        }
      });
  };

  return (
    <div className="overflow-x-auto w-full">
      <h1 className="text-3xl font-bold text-primary my-5">Reported Items :</h1>
      <table className="table w-full rounded-none">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product._id}>
              <td>
                <div className="avatar">
                  <div className="w-14 rounded-xl">
                    <img src={product.img} alt="" />
                  </div>
                </div>
              </td>
              <td className="font-bold">{product.name}</td>
              <td>{product.email}</td>
              <td>
                <button
                  onClick={() => handleProductsDelete(product._id)}
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

export default ReportedItems;
