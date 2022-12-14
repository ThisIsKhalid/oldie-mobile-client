import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
import useUsers from "../../hooks/useUsers";

const BookingModal = ({ product, setProduct }) => {
  const { user } = useContext(AuthContext);
  const { _id, name, img, resalePrice } = product;
  const { isBuyer } = useUsers(user?.email);

  const handleSubmitModal = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const location = form.location.value;

    if (user && isBuyer) {
      const orderData = {
        email: user?.email,
        title: name,
        productId: _id,
        img: img,
        price: resalePrice,
        phone: phone,
        location: location,
      };

      fetch(
        "https://b612-used-products-resale-server-side-this-is-khalid.vercel.app/myorders",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(orderData),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Order Successfully booked");
            form.reset();
            setProduct(null);
          }
        });
    } else {
      toast.error("Please Login as a Buyer!!");
    }
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
