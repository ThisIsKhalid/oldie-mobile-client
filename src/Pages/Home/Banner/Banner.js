import React from "react";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import phoneSell from "../../../Assets/phone sell.svg";
import phoneBuy from "../../../Assets/phone-buy.svg";

const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-gradient-to-r from-accent to-error  w-full flex md:flex-row flex-col-reverse justify-center items-center px-5 h-[500px]">
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-to-r from-secondary to-primary  w-full flex md:flex-row flex-col-reverse justify-center items-center px-5 h-[500px]">
            <div className="lg:w-1/2 lg:mb-0 mb-10">
              <h1 className=" text-4xl text-white font-medium">
                Sell{" "}
                <span className="text-accent uppercase font-bold">phones</span>{" "}
                from anywhere.
              </h1>
            </div>
            <img className="h-full" src={phoneSell} alt="/" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
