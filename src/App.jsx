import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./pages/AppLayout.jsx";
import { Login } from "./pages/Login.jsx";
import { RegisterForm } from "./ui/RegisterForm.jsx";
import { RegisterSuccess } from "./pages/RegisterSuccess.jsx";
import { ProtectedRoute } from "./pages/ProtectedRoute.jsx";
import { AuthProvider } from "./context/TodoContext.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path={"/app"} element={<AppLayout />} />
          </Route>
          <Route path={"/sign-up"} element={<RegisterForm />} />
          <Route path={"/success"} element={<RegisterSuccess />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
