import { useQuery } from "@tanstack/react-query";
import React from "react";

const MyProducts = () => {
  const { data: phones = [], refetch } = useQuery({
    queryKey: ["phones"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/phones?email=jq@jd.com`);
      const data = await res.json();
      return data;
    },
  });

  //   refetch();

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
              <td>
                {phone.sold ? (
                  <span className="text-primary">Sold</span>
                ) : (
                  <span className="text-red-500">Unsold</span>
                )}
              </td>
              <td>
                {!phone.sold && (
                  <button className="btn btn-primary btn-xs">Advertise</button>
                )}
              </td>
              <td>
                <button className="btn btn-error btn-xs">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
