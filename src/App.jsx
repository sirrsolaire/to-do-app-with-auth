import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./pages/AppLayout.jsx";
import { Login } from "./pages/Login.jsx";
import { RegisterForm } from "./ui/RegisterForm.jsx";
import { RegisterSuccess } from "./pages/RegisterSuccess.jsx";
import { ProtectedRoute } from "./pages/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/app",
        element: <AppLayout />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <RegisterForm />,
  },
  {
    path: "/success",
    element: <RegisterSuccess />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
