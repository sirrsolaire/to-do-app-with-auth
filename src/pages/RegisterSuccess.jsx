import check from "../assets/check.png";

export const RegisterSuccess = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#262626] flex items-center gap-7 justify-center w-fit py-4 px-8 rounded-2xl">
        <img src={check} alt="Success image" className="w-20" />
        <p className="text-4xl text-white font-medium tracking-wide">
          Please click the activation link we sent to your email
        </p>
      </div>
    </div>
  );
};
