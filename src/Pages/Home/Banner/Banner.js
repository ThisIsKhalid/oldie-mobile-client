import React from "react";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import phoneSell from "../../../Assets/phone sell.svg";
import phoneBuy from "../../../Assets/phone-buy.svg";
import banner1 from "../../../Assets/banner1.jpg";
import banner2 from "../../../Assets/banner2.jpg";
import banner3 from "../../../Assets/banner3.jpg";
import banner4 from "../../../Assets/banner4.jpg";
import banner5 from "../../../Assets/banner5.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[550px] relative">
            <img className="h-full w-full object-cover" src={banner1} alt="" />
            <div className="absolute md:top-2/3 top-[55%] left-16 text-white">
              <h1 className="text-2xl text-gray-300">Are You Looking For</h1>
              <h1 className="text-5xl mb-4">Brand New Laptop</h1>
              <Link className=" px-3 py-2 text-gray-200 font-medium text-lg rounded-md border-2 border-gray-200 hover:bg-white hover:text-black">
                See Here
              </Link>
            </div>
          </div>
          {/* <div className="bg-gradient-to-r from-accent to-error  w-full flex md:flex-row flex-col-reverse justify-center items-center px-5 h-[500px]">
            <div className="lg:w-1/2 lg:mb-0 mb-10">
              <h1 className=" text-4xl font-medium">
                Buy{" "}
                <span className="text uppercase font-bold text-white">
                  phones
                </span>{" "}
                from anywhere.
              </h1>
            </div>
            <img className="h-full" src={phoneBuy} alt="/" />
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[550px] relative">
            <img className="h-full w-full object-cover" src={banner2} alt="" />
            <div className="absolute md:top-1/2 bottom-5 left-8 text-white">
              <h1 className="text-2xl">
                Do You Want To{" "}
                <span className="bg-black p-2 rounded text-white">Sell</span>{" "}
                Your
              </h1>
              <h1 className="text-5xl mb-4 bg-black p-2 rounded font-medium">
                Used Laptop ?
              </h1>
              <Link className=" px-3 py-2 text-gray-200 font-medium text-lg rounded-md border-2 border-gray-200 hover:bg-white hover:text-black">
                Sell Now
              </Link>
            </div>
          </div>
          {/* <div className="bg-gradient-to-r from-secondary to-primary  w-full flex md:flex-row flex-col-reverse justify-center items-center px-5 h-[500px]">
            <div className="lg:w-1/2 lg:mb-0 mb-10">
              <h1 className=" text-4xl text-white font-medium">
                Sell{" "}
                <span className="text-accent uppercase font-bold">phones</span>{" "}
                from anywhere.
              </h1>
            </div>
            <img className="h-full" src={phoneSell} alt="/" />
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[550px] relative">
            <img className="h-full w-full object-cover" src={banner3} alt="" />
            <h1 className="absolute top-1/2 left-20 text-white">
              hiiiiiiiiiiiiiii
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[550px] relative">
            <img className="h-full w-full object-cover" src={banner4} alt="" />
            <h1 className="absolute top-1/2 left-20 text-white">
              hiiiiiiiiiiiiiii
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[550px] relative">
            <img className="h-full w-full object-cover" src={banner5} alt="" />
            <h1 className="absolute top-1/2 left-20 text-white">
              hiiiiiiiiiiiiiii
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
