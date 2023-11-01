import { Outlet, useNavigate } from "react-router-dom";
import { Spinner } from "../ui/Spinner.jsx";
import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser.js";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { isLoading, user } = useUser();

  const isAuthenticated = user?.role === "authenticated";

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/");
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="h-screen bg-[#1a1a1a] flex items-center justify-center">
        <Spinner />
      </div>
    );

  if (isAuthenticated) return <Outlet />;
};
