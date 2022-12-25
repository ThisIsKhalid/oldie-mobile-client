import React from "react";
import { SlClock, SlLock, SlPlane, SlUser } from "react-icons/sl";

const Services = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 ">
        <div className="rounded-r-md flex flex-col gap-2 items-center justify-center text-center shadow-md bg-gray-50 p-5 border-l-2 border-black">
          <div className="text-3xl text-black">
            <SlPlane />
          </div>
          <h1 className="text-xl font-medium text-black">Worldwide Delivery</h1>
          <p className="text-gray-700">
            With sites in 20 languages, we ship to over 200 countries regions
          </p>
        </div>
        <div className="rounded-r-md flex flex-col gap-2 items-center justify-center text-center shadow-md bg-gray-50 p-5 border-l-2 border-black">
          <di className="text-3xl text-black">
            <SlUser />
          </di>
          <h1 className="text-xl font-medium text-black">24/7 Help Center</h1>
          <p className="text-gray-700">
            Round the-clock assistance for a smooth shopping experience
          </p>
        </div>
        <div className="rounded-r-md flex flex-col gap-2 items-center justify-center text-center shadow-md bg-gray-50 p-5 border-l-2 border-black">
          <di className="text-3xl text-black">
            <SlLock />
          </di>
          <h1 className="text-xl font-medium text-black">Secure Checkout</h1>
          <p className="text-gray-700">
            Pay with the world's most popular and secure payment methods
          </p>
        </div>
        <div className="rounded-r-md flex flex-col gap-2 items-center justify-center text-center shadow-md bg-gray-50 p-5 border-l-2 border-black">
          <div className="text-3xl text-black">
            <SlClock />
          </div>
          <h1 className="text-xl font-medium text-black">30 Days Return</h1>
          <p className="text-gray-700">
            30 Days return policy if you are not satisfied with products
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
