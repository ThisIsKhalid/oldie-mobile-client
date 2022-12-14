import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { saveUserInDB } from "../../Components/saveUserInDB";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../hooks/useToken";

const Signin = () => {
  const { logIn, googleSignIn } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  const token = useToken(userEmail);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data, e) => {
    logIn(data.email, data.password)
      .then((res) => {
        toast.success(`Welcome back ${res.user.displayName}`);
        setUserEmail(data.email);
        // e.target.reset();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogleSignin = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        if (user) {
          saveUserInDB(user.displayName, user.email, "Buyer", setUserEmail);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="m-5 flex items-center justify-center">
      <div className="w-96 p-7 shadow-md border border-gray-100 rounded-md">
        <h2 className="text-xl text-center">Log In</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
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
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>

          <input
            className="btn btn-accent w-full max-w-xs"
            type="submit"
            value="Login"
          />
        </form>
        <p className="mt-5 text-center">
          New to Doctors Portal?{" "}
          <Link to="/signup" className="text-secondary">
            {" "}
            Create new account
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

export default Signin;
