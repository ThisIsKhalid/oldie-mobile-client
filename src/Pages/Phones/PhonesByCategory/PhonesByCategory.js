import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Others/Loading";
import Phone from "../../Shared/Phone";
import BookingModal from "../BookingModal/BookingModal";

const PhonesByCategory = () => {
  const { category } = useParams();
  const [product, setProduct] = useState(null);

  const { data: phones = [], isLoading } = useQuery({
    queryKey: ["phones"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/categories/${category}`);
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-3xl text-gray-800 font-medium text-center">
        Categories:{" "}
        <span className="text-secondary">
          {category} (<small>{phones.length}</small>)
        </span>
      </h1>
      <div className="grid md:grid-cols-2 gap-5 my-10 px-5">
        {phones?.map((phone) => (
          <Phone
            key={phone._id}
            phoneDetails={phone}
            setProduct={setProduct}
          ></Phone>
        ))}
      </div>
      {product && (
        <BookingModal product={product} setProduct={setProduct}></BookingModal>
      )}
    </div>
  );
};

export default PhonesByCategory;
