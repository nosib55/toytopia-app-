import React, { useContext, useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { signInWithEmailAndPasswordFunc } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [showResetModal, setShowResetModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 If redirected from protected page → go back there
  const from = location.state?.from || "/";

  // ====================================================
  // Email/Password Login
  // ====================================================
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPasswordFunc(email, password)
      .then(() => {
        toast.success("Login successful!");
        navigate(from, { replace: true }); // 👈 fixed redirect
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // ====================================================
  // Google Login
  // ====================================================
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Google Sign-In successful!");
        navigate(from, { replace: true }); // 👈 fixed redirect
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // ====================================================
  // Reset Password
  // ====================================================
  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!resetEmail) {
      toast.error("Please enter your email!");
      return;
    }

    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        toast.success("Password reset email sent!");
        setShowResetModal(false);
        setResetEmail("");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-5">

        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <div className="card-body">
          <form onSubmit={handleSignIn}>
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />

            {/* Password */}
            <label className="label mt-3">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input input-bordered w-full pr-10"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </span>
            </div>

            {/* Forgot Password */}
            <div className="text-right mt-2">
              <span
                onClick={() => setShowResetModal(true)}
                className="link link-hover text-sm text-blue-600 cursor-pointer"
              >
                Forgot password?
              </span>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow mt-4 w-full"
            >
              Login
            </button>

            {/* Google Sign-In */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-lg mt-3 w-full"
            >
              <FcGoogle size={22} />
              <span>Continue with Google</span>
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-sm mt-4">
              Don’t have an account?{" "}
              <Link
                to="/singup"
                className="text-blue-600 font-semibold hover:underline"
              >
                SignUp
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Reset Modal */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-80 shadow-xl">
            <h3 className="text-lg font-semibold text-center">Reset Password</h3>

            <form onSubmit={handleResetPassword}>
              <input
                type="email"
                className="input input-bordered w-full mt-3"
                placeholder="Enter your email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                required
              />

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowResetModal(false)}
                  className="btn btn-sm"
                >
                  Cancel
                </button>
                <button className="btn btn-primary btn-sm">Send Email</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
