import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Loading from "../pages/Loading";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // 1️⃣ Firebase checking → wait until done
  if (loading) {
    return <Loading />; // or a spinner
  }

  // 2️⃣ If user NOT logged in → redirect to login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3️⃣ Otherwise → show protected content
  return children;
};

export default ProtectedRoute;
