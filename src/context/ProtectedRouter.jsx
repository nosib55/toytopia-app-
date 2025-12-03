import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Loading from "../pages/Loading";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // 1️⃣ Wait for Firebase Auth
  if (loading) {
    return <Loading />;
  }

  // 2️⃣ If user NOT logged in → redirect to login
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}   // 🔥 return to this page after login
        replace
      />
    );
  }

  // 3️⃣ User logged in → allow access
  return children;
};

export default ProtectedRoute;
