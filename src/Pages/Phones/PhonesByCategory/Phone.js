import React from "react";

const Phone = ({ phone }) => {
  const {
    name,
    img,
    location,
    originalPrice,
    postingDate,
    resalePrice,
    sellerName,
    usageTime,
  } = phone;
  return (
    <div className="card card-compact bg-gray-100 shadow-xl border border-gray-100">
      <figure>
        <img className="w-full" src={img} alt="Shoes" />
      </figure>
      <div className="card-body text-gray-900">
        <h2 className="text-2xl font-medium text-primary">{name}</h2>
        <div className="flex justify-between text-base gap-2 font-medium">
          <div>
            <p>Seller Name: {sellerName}</p>
            <p>
              Original Price:{" "}
              <span className="text-neutral font-bold">{originalPrice}</span>
            </p>
            <p>
              Resale Price:{" "}
              <span className="text-neutral font-bold">{resalePrice}</span>
            </p>
            <p>Usage Time: {usageTime} Year</p>
          </div>
          <div>
            <p>Location: {location}</p>
            <p>Posting Date: {postingDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
