import React from "react";
import phoneSell from "../../../Assets/phone sell.svg";
import phoneBuy from "../../../Assets/phone-buy.svg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="bg-gradient-to-r from-secondary to-primary  w-full flex md:flex-row flex-col-reverse justify-evenly items-center px-5">
          <div className="lg:w-1/2">
            <h1 className=" text-4xl text-white font-medium">
              Sell your{" "}
              <span className="text-accent uppercase font-bold">phones</span>{" "}
              from anywhere.
            </h1>
          </div>
          <img className="h-96" src={phoneSell} alt="/" />
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-sm btn-circle btn-outline">
            ❮
          </a>
          <a href="#slide2" className="btn btn-sm btn-circle btn-outline">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="bg-gradient-to-r from-accent to-neutral  w-full flex md:flex-row flex-col-reverse justify-evenly items-center px-5">
          <div className="lg:w-1/2">
            <h1 className=" text-4xl font-medium">
              Buy <span className="text uppercase font-bold text-white">used phones</span>{" "}
               from anywhere.
            </h1>
          </div>
          <img className="h-96" src={phoneBuy} alt="/" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-sm btn-circle btn-outline">
            ❮
          </a>
          <a href="#slide1" className="btn btn-sm btn-circle btn-outline">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
