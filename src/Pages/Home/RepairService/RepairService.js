import React from 'react';
import { Link } from 'react-router-dom';
import item2 from '../../../Assets/item-2.jpg'
import item3 from '../../../Assets/item-3.jpg'
import item4 from '../../../Assets/item-4.jpg'

const RepairService = () => {

    const services = [
      {
        id: 1,
        title: "LAPTOP & MAC UPGRADE",
        img: item2,
        description:
          "We working hard to build a reputation of customer satisfaction through technical excellence and friendly staff",
      },
      {
        id: 2,
        title: "REPAIR SMARTPHONE",
        img: item3,
        description:
          "We working hard to build a reputation of customer satisfaction through technical excellence and friendly staff",
      },
      {
        id: 3,
        title: "TABLET REPAIR",
        img: item4,
        description:
          "We working hard to build a reputation of customer satisfaction through technical excellence and friendly staff",
      },
    ];

    return (
      <section className="bg-slate-100 py-10 px-5 lg:px-0">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-black uppercase text-3xl font-medium underline mb-2">
              Repair Services
            </h1>
            <p className="text-gray-700 text-lg">
              We offer a full range of repair services provided by an
              experienced and specialized team
            </p>
          </div>
          {/* -------------------cards------------------- */}
          <div className="grid lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.id}
                className="max-w-lg p-4 shadow-md bg-white text-gray-800 rounded-md"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <img
                      src={service.img}
                      alt=""
                      className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">
                      {service.title}
                    </h3>
                    <p className="leading-snug text-gray-700 my-3">
                      {service.description}
                    </p>
                    <Link className="text-black border-2 border-black p-1 font-medium rounded hover:bg-black hover:text-white">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h1 className="text-center mt-10">
            <Link className="text-white px-5 py-2 text-xl rounded-md bg-black/80 hover:bg-black">
              See More
            </Link>
          </h1>
        </div>
      </section>
    );
};

export default RepairService;