import React from "react";
import { GoCheck } from "react-icons/go";

const Phone = ({ phoneDetails, setProduct }) => {
  const {
    name,
    sellerName,
    category,
    condition,
    img,
    location,
    originalPrice,
    resalePrice,
    phone,
    purchaseDate,
    postingDate,
    description,
    sold,
    reported,
    verified,
  } = phoneDetails;
  return (
    <div className="card card-compact bg-gray-100 shadow-xl border border-gray-200">
      <figure>
        <img className="w-1/2 pt-3" src={img} alt="Shoes" />
      </figure>
      <div className="card-body text-gray-900">
        <h2 className="text-2xl font-semibold text-accent">{name}</h2>
        <p className="text-secondary">{category}</p>
        <div className="flex text-base gap-2 font-medium">
          <div className="w-1/2">
            <div className="flex items-center">
              <p className="flex items-center gap-2">
                Seller: {sellerName}{" "}
                {verified && (
                  <GoCheck className="bg-primary text-white rounded-full" />
                )}
              </p>
            </div>
            <p>Phone No: {phone}</p>
            <p>
              Price: <span className="text-error font-bold">{resalePrice}</span>
            </p>
            <p>
              Original Price:{" "}
              <span className="text-error font-bold">{originalPrice}</span>
            </p>

            <p>Purchase Date: {purchaseDate}</p>
            <p>Condition: {condition}</p>
          </div>
          <div className="w-1/2">
            <p>Location: {location}</p>
            <p>Posting Date: {`${postingDate}`.slice(0, 10)}</p>
            <p>Description: {description}</p>
          </div>
        </div>
        <div className="mt-2 flex justify-between items-end">
          <label
            htmlFor="booking-modal"
            onClick={() => setProduct(phoneDetails)}
            className="btn btn-primary btn-outline text-white"
          >
            Book Now
          </label>
          <button className="btn btn-outline btn-error btn-sm">Report to Admin</button>
        </div>
      </div>
    </div>
  );
};

export default Phone;
