import React from 'react';
import { Link } from 'react-router-dom';
import charger from '../../../Assets/MobileParts/charger.jpg'
import flipCover from '../../../Assets/MobileParts/Flip Cover for Samsung Galaxy J7 - Gold.jpg'
import bodyHousing from '../../../Assets/MobileParts/Full Body Housing For Apple Iphone 8 Plus Si.jpg'
import gorillaGlas from '../../../Assets/MobileParts/Gorilla Glass For Samsung Galaxy S3 i9300 With_yyth.jpg'
import lcdScreen from '../../../Assets/MobileParts/Lcd Screen For Samsung Galaxy J7 Replacement Displa.jpg'
import lcdTouchScreen from '../../../Assets/MobileParts/Lcd With Touch Screen For Samsung Galaxy S7.jpg'
import batterie from '../../../Assets/MobileParts/Mobile Batteries by Maxbhi.com.jpg'
import touchScreen from '../../../Assets/MobileParts/Replacement Touch Screens for mobile phones.jpg'

const MobileParts = () => {

    const mobileParts = [
      {
        id: 1,
        name: "Charger for LeTV",
        price: "500",
        img: charger ,
      },
      {
        id: 2,
        name: "Flip Cover for Samsung Galaxy",
        price: "390",
        img: flipCover ,
      },
      {
        id: 3,
        name: "Full Body Housing For Apple",
        price: "460",
        img: bodyHousing ,
      },
      {
        id: 4,
        name: "Gorilla Glass For Samsung Galaxy",
        price: "299",
        img: gorillaGlas ,
      },
      {
        id: 5,
        name: "Lcd Screen For Samsung Galaxy J7",
        price: "1200",
        img: lcdScreen ,
      },
      {
        id: 6,
        name: "Lcd Touch Screen For Samsung Galaxy S7",
        price: "1800",
        img: lcdTouchScreen ,
      },
      {
        id: 7,
        name: "Mobile Batteries",
        price: "900",
        img: batterie ,
      },
      {
        id: 8,
        name: "Touch Screens",
        price: "697",
        img: touchScreen ,
      },
    ];

    return (
      <section className="bg-slate-100 py-10">
        <h1 className="text-black text-center uppercase text-3xl font-medium underline mb-10">
          Mobile Parts
        </h1>
        <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 px-5">
          {mobileParts.map((parts) => (
            <div
              key={parts.id}
              className="max-w-lg p-4 shadow-md text-gray-800 bg-white rounded-md relative h-80"
            >
              <div className="space-y-4">
                <div className="h-40 flex items-center justify-center border border-gray-400 p-2 rounded">
                  <img src={parts.img} alt="" className="rounded-md h-full" />
                </div>
                <div>
                  <p className="text-red-500 font-medium text-lg">
                    Price: {parts.price}
                  </p>
                  <h3 className="text-lg font-semibold text-black">
                    {parts.name}
                  </h3>

                  <div className="absolute bottom-3 left-4">
                    <Link className="text-black border-2 border-black p-1 font-medium rounded hover:bg-black hover:text-white">
                      Buy Now
                    </Link>
                  </div>
                  <div className="absolute bottom-3 right-4">
                    <Link className="text-black border-2 border-black p-1 font-medium rounded hover:bg-black hover:text-white">
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default MobileParts;