import React from 'react';
import { Link } from 'react-router-dom';

const Phone = ({ phoneDetails }) => {
    const {
      _id,
      name,
      category,
      img,
      originalPrice,
    } = phoneDetails;
  return (
    <div className="flex bg-slate-100 shadow-xl rounded-md">
      <div>
        <img src={img} alt="Album" />
      </div>
      <div className="ml-5 flex flex-col justify-center pr-2">
        <h2 className="lg:text-2xl text-xl font-bold text-black">{name}</h2>
        <p className="font-medium">{category}</p>
        <p className="text-lg text-red-500 font-bold mt-2">Price: {originalPrice}</p>
        <div className="rating rating-sm">
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <div className='mt-5'>
          <Link to={`/phone/${_id}`} className="text-black border-2 border-black p-1 font-medium rounded hover:bg-black hover:text-white">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Phone;