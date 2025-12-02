import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password Validation
    const regExp =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!regExp.test(password)) {
      toast.error(
        "Password must be at least 6 characters and include uppercase, lowercase, number, and special character!"
      );
      return;
    }

    // ✅ Create user & update profile properly
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        return updateProfile(user, { displayName, photoURL });
      })
      .then(() => {
        toast.success("Signup successful ✅ Redirecting to login...");
        navigate("/login"); // ✅ Redirect only after profile update completes
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          toast.error("Email already in use!");
        } else {
          toast.error(e.message);
        }
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-5">
        <h2 className="text-2xl font-bold text-center mb-4">Create Account</h2>
        <div className="card-body">
          <form onSubmit={handleSignUp}>
            <label className="label">Name</label>
            <input
              type="text"
              name="displayName"
              className="input input-bordered w-full"
              placeholder="Full Name"
              required
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              className="input input-bordered w-full"
              placeholder="Photo URL"
              required
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Email"
              required
            />

            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input input-bordered w-full pr-10"
                placeholder="Password"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-600 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </span>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-2 px-4 rounded-lg shadow mt-4 w-full"
            >
              Register
            </button>

            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
