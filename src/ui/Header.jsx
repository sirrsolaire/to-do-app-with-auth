import logo from "../assets/logo.png";
import { Icon } from "@iconify/react";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "../requests.js";
import { useAuth } from "../context/TodoContext.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Header = () => {
  const { handleUser, getUser, handleAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (getUser === null) {
      navigate("/");
    }
  }, [getUser]);

  const { mutate } = useMutation({
    mutationFn: () => signOut(),
    onSuccess: () => {
      handleUser(null);
      handleAuth(false);
    },
    onError: (error) => {
      console.error("Sign-out error:", error.message);
    },
  });

  const onLogout = () => {
    mutate();
  };

  return (
    <header className="bg-[#0d0d0d] py-16 flex justify-center ">
      <img src={logo} alt="Application Logo" className="w-[200px]" />
      <div className="absolute right-6 top-5">
        <Icon
          icon="material-symbols:logout"
          className="text-white text-5xl cursor-pointer"
          onClick={onLogout}
        />
      </div>
    </header>
  );
};
