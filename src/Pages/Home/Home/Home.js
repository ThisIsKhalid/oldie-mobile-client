import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import Loading from "../../Others/Loading";
import BookingModal from "../../Phones/BookingModal/BookingModal";
import Phone from "../../Phones/PhonesByCategory/Phone";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
  const { loading } = useContext(AuthContext);
  const [product, setProduct] = useState(null);

  const { data: advertisedPhones = [], isLoading } = useQuery({
    queryKey: ["advertised"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/phones/announce");
      const data = await res.json();
      return data;
    },
  });

  if (loading || isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Banner></Banner>

      <Categories></Categories>

      {/* ----------advertised section----------------- */}
      {advertisedPhones?.length && (
        <section>
          <h1 className="text-gray-700 text-3xl font-bold text-center mb-5">Featured Products</h1>
          <div className="grid grid-cols-2 gap-10 mx-10">
            {advertisedPhones?.map((phoneDetails) => (
              <Phone
                key={phoneDetails._id}
                phoneDetails={phoneDetails}
                setProduct={setProduct}
              ></Phone>
            ))}
          </div>
        </section>
      )}
      {product && (
        <BookingModal product={product} setProduct={setProduct}></BookingModal>
      )}
    </>
  );
};

export default Home;
