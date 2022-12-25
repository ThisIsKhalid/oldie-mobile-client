import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import Loading from "../../Others/Loading";
import BookingModal from "../../Shared/BookingModal";
import Phone from "../../Shared/Phone";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Newsletter from "../Newsletter/Newsletter";
import TopOffer from "../TopOffer/TopOffer";

const Home = () => {
  const { loading } = useContext(AuthContext);
  const [product, setProduct] = useState(null);

  const { data: advertisedPhones = [], isLoading } = useQuery({
    queryKey: ["advertised"],
    queryFn: async () => {
      const res = await fetch(
        "https://b612-used-products-resale-server-side-this-is-khalid.vercel.app/phones/announce"
      );
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

      {/* <Categories></Categories> */}

      <TopOffer></TopOffer>

      {/* ----------advertised section----------------- */}
      {advertisedPhones?.length && (
        <section className="py-14">
          <h1 className="text-black uppercase text-3xl font-medium text-center mb-10 underline">
            Featured Phones
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-5">
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

      <Newsletter></Newsletter>
    </>
  );
};

export default Home;
