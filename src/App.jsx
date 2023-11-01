import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./pages/AppLayout.jsx";
import { Login } from "./pages/Login.jsx";
import { RegisterForm } from "./features/authentication/RegisterForm.jsx";
import { RegisterSuccess } from "./pages/RegisterSuccess.jsx";
import { ProtectedRoute } from "./pages/ProtectedRoute.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path={"/app"} element={<AppLayout />} />
        </Route>
        <Route path={"/sign-up"} element={<RegisterForm />} />
        <Route path={"/success"} element={<RegisterSuccess />} />
      </Routes>
    </BrowserRouter>
  );
};
