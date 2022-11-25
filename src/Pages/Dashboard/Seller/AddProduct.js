import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();


    return (
      <div className="w-96 p-7 shadow-md">
        <h1 className="text-3xl">Add Product</h1>
        <form onSubmit={handleSubmit()}>
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
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              {...register("img", { required: true })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <input
            className="btn btn-accent w-full max-w-xs mt-5"
            type="submit"
            value="Add DOCTOR"
          />
        </form>
      </div>
    );
};

export default AddProduct;