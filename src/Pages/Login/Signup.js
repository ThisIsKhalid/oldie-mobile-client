import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { saveUserInDB } from "../../Components/saveUserInDB";
import { AuthContext } from "../../Context/AuthProvider";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, googleSignIn } =
    useContext(AuthContext);

  const handleRegister = (data, e) => {
    createUser(data.email, data.password)
      .then(() => {
        updateUserProfile(data.name)
          .then(() => {
            saveUserInDB(data.name, data.email, data.role);
            e.target.reset();
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogleSignin = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        saveUserInDB(user.displayName, user.email, "Buyer");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="my-5 flex items-center justify-center mx-5">
      <div className="w-96 p-7 shadow-md border border-gray-100 rounded-md">
        <h2 className="text-xl text-center">Register</h2>
        <form onSubmit={handleSubmit(handleRegister)}>
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 chracters long",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Please select who you are:</span>
            </label>
            <select
              {...register("role", {
                required: true,
              })}
              className="select select-bordered w-full max-w-xs"
            >
              <option>buyer</option>
              <option>seller</option>
            </select>
          </div>

          <input
            className="btn btn-primary w-full max-w-xs mt-5"
            type="submit"
            value="Register"
          />
        </form>
        <p className="mt-5 text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-secondary">
            {" "}
            Signin
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleSignin}
          className="btn btn-outline w-full max-w-xs"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Signup;
