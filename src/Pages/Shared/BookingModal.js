import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const BookingModal = ({ product, setProduct }) => {
  const { user } = useContext(AuthContext);
  const { name, resalePrice } = product;
  const handleSubmitModal = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const location = form.location.value;
    console.log(phone, location);
    form.reset();
    setProduct(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-secondary btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-error font-semibold text-lg mt-1">
            Resale Price: {resalePrice}
          </p>
          <form
            onSubmit={handleSubmitModal}
            className="grid grid-cols-1 gap-5 mt-10"
          >
            <input
              type="text"
              name="name"
              required
              defaultValue={user?.displayName}
              disabled
              placeholder="Your name"
              className="input w-full input-bordered"
            />
            <input
              type="email"
              name="email"
              required
              defaultValue={user?.email}
              disabled
              placeholder="Email"
              className="input w-full input-bordered"
            />
            <input
              type="text"
              name="phone"
              required
              placeholder="Phone"
              className="input w-full input-bordered"
            />
            <input
              type="text"
              required
              name="location"
              placeholder="Your Location"
              className="input w-full input-bordered"
            />
            <input
              className="input w-full btn btn-primary"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
