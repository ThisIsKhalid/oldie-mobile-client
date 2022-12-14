import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Others/Loading";
import BookingModal from "../Shared/BookingModal";
import Phone from "../Shared/Phone";

const PhonesByCategory = () => {
  const { brand } = useParams();
  const [product, setProduct] = useState(null);

  const { data: phones = [], isLoading } = useQuery({
    queryKey: ["phones"],
    queryFn: async () => {
      const res = await fetch(
        `https://b612-used-products-resale-server-side-this-is-khalid.vercel.app/categories/${brand}`
      );
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="py-10">
      <div>
        <h1 className="text-3xl text-gray-800 font-medium text-center">
          Categories:{" "}
          <span className="text-secondary">
            {brand} (<small>{phones.length}</small>)
          </span>
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-10 px-5">
          {phones?.map((phone) => (
            <Phone
              key={phone._id}
              phoneDetails={phone}
              setProduct={setProduct}
            ></Phone>
          ))}
        </div>
        {product && (
          <BookingModal
            product={product}
            setProduct={setProduct}
          ></BookingModal>
        )}
      </div>
    </section>
  );
};

export default PhonesByCategory;
