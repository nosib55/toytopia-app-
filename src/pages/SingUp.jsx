import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Redirect back to page where user came from
  const from = location.state?.from || "/";

  const passwordRule =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  // ===============================  
  // ⭐ Email & Password Signup  
  // ===============================
  const handleSignUp = (e) => {
    e.preventDefault();
    setLoading(true);

    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!passwordRule.test(password)) {
      toast.error(
        "Password must contain: uppercase, lowercase, number, special symbol & minimum 6 characters."
      );
      setLoading(false);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;

        return updateProfile(user, { displayName, photoURL });
      })
      .then(() => {
        toast.success("Account created successfully! 🎉");

        // Redirect to previous protected page or home
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("This email is already registered!");
        } else {
          toast.error(error.message);
        }
      })
      .finally(() => setLoading(false));
  };

  // ===============================  
  // ⭐ Google Signup  
  // ===============================
  const handleGoogleSignup = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);

    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Signup with Google successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6 rounded-xl">

        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Create Account
        </h2>
        <p className="text-center text-gray-600 mb-5">
          Join ToyTopia and start your journey 🎠
        </p>

        <form onSubmit={handleSignUp} className="space-y-3">

          {/* Name */}
          <div>
            <label className="label font-medium">Full Name</label>
            <input
              type="text"
              name="displayName"
              required
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="label font-medium">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              required
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />
          </div>

          {/* Email */}
          <div>
            <label className="label font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password */}
          <div>
            <label className="label font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Create Password"
                className="input input-bordered w-full pr-10"
              />
              <span
                className="absolute right-3 top-3 text-gray-600 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white font-semibold
              bg-gradient-to-r from-green-500 to-emerald-600
              hover:from-green-600 hover:to-emerald-700
              shadow-lg transition
              ${loading && "opacity-60 cursor-not-allowed"}`}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        {/* Divider */}
        <div className="divider my-4">OR</div>

        {/* Google Signup */}
        <button
          onClick={handleGoogleSignup}
          className="flex items-center justify-center gap-2 border border-gray-300 
          hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-lg w-full transition"
        >
          <FcGoogle size={22} /> Sign Up with Google
        </button>

        {/* Login Link */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default SignUp;
