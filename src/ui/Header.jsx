import logo from "../assets/logo.png";
import { Icon } from "@iconify/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut } from "../requests.js";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser.js";

export const Header = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useUser();
  const { user_name } = user.user_metadata;

  const fullName = user_name.charAt(0).toUpperCase() + user_name.slice(1);

  const { mutate } = useMutation({
    mutationFn: () => signOut(),
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/", { replace: true });
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
      <img src={logo} alt="Application Logo" className="w-[150px]" />
      <div className="absolute right-3 top-2 flex items-center gap-3">
        <span className="text-white text-xl font-semibold ">{fullName}</span>
        <Icon
          icon="material-symbols:logout"
          className="text-white text-3xl cursor-pointer"
          onClick={onLogout}
        />
      </div>
    </header>
  );
};
