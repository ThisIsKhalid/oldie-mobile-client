import { useQuery } from "@tanstack/react-query";
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

  const imgHostingKey = process.env.REACT_APP_imgbb_key;

  const { data: dbUser = {} } = useQuery({
    queryKey: ["dbUser"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/isVerfied/${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = res.json();
      return data;
    },
  });

  const handleAddProducts = (data) => {
    const image = data.img[0];
    const {
      name,
      category,
      condition,
      location,
      originalPrice,
      phone,
      resalePrice,
      purchaseDate,
      description,
    } = data;
    //-------------photo hosting at imgbb----------------
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        // console.log(imgData.data.display_url);
        if (imgData.success) {
          // -------------------product add and send to db----------------
          const product = {
            name,
            sellerName: user?.displayName,
            email: user?.email,
            category: category,
            condition: condition,
            img: imgData.data.display_url,
            location: location,
            originalPrice: originalPrice,
            resalePrice: resalePrice,
            phone: phone,
            purchaseDate: purchaseDate,
            postingDate: date,
            description,
            sold: false,
            reported: false,
            verified: dbUser?.verified,
            advertise: false,
          };

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
        }
      });
  };

  return (
    <section className="flex items-center justify-center bg-gray-50">
      <div className="w-96 lg:w-full p-7 mx-2 lg:mx-10 ">
        <h1 className="text-3xl font-semibold text-secondary">Add Product</h1>

        <form onSubmit={handleSubmit(handleAddProducts)}>
          <div className="flex lg:flex-row flex-col gap-5">
            <div className="lg:w-1/2">
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
                  <span className="label-text">Please Choose your Brand</span>
                </label>
                <select
                  defaultValue="Others"
                  {...register("category", { required: true })}
                  className="select select-bordered w-full max-w-xs"
                >
                  {categories.map((category) => (
                    <option key={category._id}>{category?.brand}</option>
                  ))}
                </select>
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
                  <p className="text-red-600">
                    {errors.originalPrice?.message}
                  </p>
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
                    required: "Minimum 9 digit is needed!!",
                    pattern: {
                      value: /[1-9]/,
                    },
                    minLength: 9,
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.phone && (
                  <p className="text-red-600">{errors.phone?.message}</p>
                )}
              </div>
            </div>

            <div className="lg:w-1/2">
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
                  <span className="label-text">
                    Purchase Time / When do you buy this phone?
                  </span>
                </label>
                <input
                  type="date"
                  defaultValue="2021-12-12"
                  {...register("purchaseDate")}
                  className="input input-bordered w-full max-w-xs"
                />
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
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  {...register("img", { required: true })}
                  className="input w-full max-w-xs -ml-3"
                />
              </div>
            </div>
          </div>
          <input
            className="btn btn-primary w-full max-w-xs mt-5"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
