import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthProvider";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const date = new Date();
  const navigate = useNavigate();

  const getProductsData = (data) => {
    const {
      name,
      category,
      condition,
      img,
      location,
      originalPrice,
      phone,
      resalePrice,
      purchaseDate,
      description,
    } = data;

    const product = {
      name,
      sellerName: user.displayName,
      category: category,
      condition: condition,
      img: img,
      location: location,
      originalPrice: originalPrice,
      resalePrice: resalePrice,
      phone: phone,
      purchaseDate: purchaseDate,
      postingDate: date,
      description,
      sold: false,
      reported: false,
    };
    // console.log(product);

    fetch("http://localhost:5000/phones", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product Updated Successfully!!");
          navigate("/dashboard/myproducts");
        }
      });
  };

  return (
    <section className="flex items-center justify-center">
      <div className="w-96 p-7 shadow-md mx-2 my-5 border border-gray-200 rounded-md bg-gray-100">
        <h1 className="text-3xl">Add Product</h1>

        <form onSubmit={handleSubmit(getProductsData)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              {...register("category", { required: true })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Original Price</span>
            </label>
            <input
              //   type="text"
              {...register("originalPrice", {
                required: "Please input number greater than 0",
                valueAsNumber: true,
                validate: (value) => value > 0,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.originalPrice && (
              <p className="text-red-600">{errors.originalPrice?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Resale Price</span>
            </label>
            <input
              //   type="text"
              {...register("resalePrice", {
                required: "Please input number greater than 0",
                valueAsNumber: true,
                validate: (value) => value > 0,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.resalePrice && (
              <p className="text-red-600">{errors.resalePrice?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              {...register("phone", {
                required: "Please give your 9 digit phone number",
                pattern: {
                  value: /[1-9]{9}/,
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.phone && (
              <p className="text-red-600">{errors.phone?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register("location", { required: true })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Condition</span>
            </label>
            <input
              type="text"
              {...register("condition", { required: true })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Purchase Time</span>
            </label>
            <input
              type="text"
              {...register("purchaseDate", {
                required: "Please give valid date",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.purchaseDate && (
              <p className="text-red-600">{errors.purchaseDate?.message}</p>
            )}
          </div>

          <textarea
            {...register("description", {
              required: true,
            })}
            className="textarea textarea-bordered w-full max-w-xs mt-4"
            placeholder="Description"
          ></textarea>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              {...register("img", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("img", { required: true })}
            className="input w-full max-w-xs -ml-3"
          />
        </div> */}

          <input
            className="btn btn-primary w-full max-w-xs mt-5"
            type="submit"
            value="Add DOCTOR"
          />
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
