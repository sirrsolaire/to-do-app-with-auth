import { Outlet, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../requests.js";
import { Spinner } from "../ui/Spinner.jsx";
import { useEffect } from "react";

export const ProtectedRoute = () => {
  const navigate = useNavigate();

  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

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
