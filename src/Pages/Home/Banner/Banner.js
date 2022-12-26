import React from "react";
import { Link } from "react-router-dom";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../../Assets/banner1.jpg";
import banner2 from "../../../Assets/banner2.jpg";
import banner3 from "../../../Assets/banner3.jpg";
import banner4 from "../../../Assets/banner4.jpg";
import banner5 from "../../../Assets/banner5.jpg";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[90vh] relative">
            <img className="h-full w-full object-cover" src={banner1} alt="" />
            <div className="absolute md:top-2/3 top-[55%] left-16 text-white">
              <h1 className="text-2xl text-gray-300">Are You Looking For</h1>
              <h1 className="text-5xl mb-4">Brand New Laptop</h1>
              <Link className=" px-3 py-2 text-gray-200 font-medium text-lg rounded-md border-2 border-gray-200 hover:bg-white hover:text-black">
                See Here
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="h-[550px] relative">
            <img className="h-full w-full object-cover" src={banner2} alt="" />
            <div className="absolute md:top-1/2 bottom-5 left-8 text-white">
              <h1 className="text-2xl">
                Do You Want To{" "}
                <span className="bg-black p-2 rounded text-white">Sell</span>{" "}
                Your
              </h1>
              <h1 className="lg:text-5xl text-4xl mb-4 bg-black p-2 rounded font-medium">
                Used Laptop ?
              </h1>
              <Link className=" px-3 py-2 text-gray-200 font-medium text-lg rounded-md border-2 border-gray-200 hover:bg-white hover:text-black">
                Sell Now
              </Link>
            </div>
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <div className="h-[550px] relative">
            <img className="h-full w-full object-cover" src={banner3} alt="" />
            <h1 className="absolute top-1/2 left-20 text-white"></h1>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="h-[90vh] relative">
            <img className="h-full w-full object-cover" src={banner4} alt="" />
            <h1 className="absolute top-1/2 left-20 text-white"></h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[90vh] relative">
            <img className="h-full w-full object-cover" src={banner5} alt="" />
            <h1 className="absolute top-1/2 left-20 text-white"></h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
