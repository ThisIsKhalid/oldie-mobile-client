import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import camera from "../../../Assets/camera.jpg";
import laptop from "../../../Assets/laptop.jpg";
import phone from "../../../Assets/phone.jpg";

const TopOffer = () => {
  return (
    <div className="container mx-auto py-14">
      <h1 className="text-black uppercase text-3xl font-medium text-center mb-10 ">
        Trending Products
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 px-5">
        <div className="relative flex justify-center">
          <img
            className="hover:scale-110 transition ease-in-out delay-150 duration-300 rounded-md"
            src={camera}
            alt=""
          />
          <div className="absolute top-10 lg:left-10 left-5 w-40">
            <h1 className="text-lg font-medium">WIFI CAMERAS</h1>
            <p className="text-gray-500 font-medium my-2">
              Safety measure for your house.
            </p>
            <Link className="text-white flex items-center w-3/4 justify-center gap-1 p-1 rounded-md bg-black/80 hover:bg-black">
              Buy Now
              <FaChevronRight />
            </Link>
          </div>
        </div>
        <div className="relative flex justify-center">
          <img
            className="hover:scale-110 transition ease-in-out delay-150 duration-300 rounded-md"
            src={laptop}
            alt=""
          />
          <div className="absolute top-10 lg:left-10 left-5 w-40">
            <h1 className="text-lg font-medium">DELL INSPIRON</h1>
            <p className="text-gray-500 font-medium my-2">
              Signature Edition Laptop.
            </p>
            <Link className="text-white flex items-center w-3/4 justify-center gap-1 p-1 rounded-md bg-black/80 hover:bg-black">
              Buy Now
              <FaChevronRight />
            </Link>
          </div>
        </div>
        <div className="relative flex justify-center">
          <img
            className="hover:scale-110 transition ease-in-out delay-150 duration-300 rounded-md"
            src={phone}
            alt=""
          />
          <div className="absolute top-10 lg:left-10 left-5 w-40">
            <h1 className="text-lg font-medium">HTC PHONES</h1>
            <p className="text-gray-500 font-medium my-2">
              All Brands New. Ready for sale
            </p>
            <Link className="text-white flex items-center w-3/4 justify-center gap-1 p-1 rounded-md bg-black/80 hover:bg-black">
              Buy Now
              <FaChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopOffer;
