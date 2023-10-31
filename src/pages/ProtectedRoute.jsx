import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/TodoContext.jsx";

export const ProtectedRoute = () => {
  const location = useLocation();
  const { getUser } = useAuth();
  return getUser ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} replace state={{ path: location.pathname }} />
  );
};
