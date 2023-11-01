import check from "../assets/check.png";
import { useNavigate } from "react-router-dom";

export const RegisterSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen px-5">
      <div className="bg-[#262626] flex items-center gap-7 justify-center w-fit py-4 px-8 rounded-2xl flex-col">
        <img src={check} alt="Success image" className="w-20" />
        <p className="text-4xl text-white font-medium tracking-wide">
          You have successfully created and account!
        </p>
        <button
          onClick={() => navigate("/")}
          className="shadow-md flex items-center bg-[#1e6f9f] py-2 rounded-lg justify-center text-white font-semibold disabled:opacity-70 hover:bg-[#4ea8de] duration-200 transition-colors px-6"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};
