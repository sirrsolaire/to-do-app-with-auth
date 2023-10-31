import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "../requests.js";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState([
    {
      username: "",
      email: "",
      password: "",
    },
  ]);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const { mutate } = useMutation({
    mutationFn: () => signUp(formData),
    onSuccess: () => navigate("/success"),
  });

  async function handleSubmit(e) {
    e.preventDefault();
    mutate();
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 lg:px-8 py-40 max-w-[500px] mx-auto">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign up
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-[#161616] px-4 py-5 rounded-xl shadow-sm">
        <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-base font-medium leading-6 text-white"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-2 text-white shadow-md  placeholder:text-gray-400   sm:text-sm sm:leading-6 bg-[#262626] px-3"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-base font-medium leading-6 text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-2 text-white shadow-md  placeholder:text-gray-400   sm:text-sm sm:leading-6 bg-[#262626] px-3"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-base font-medium leading-6 text-white"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-2 text-white shadow-md  placeholder:text-gray-400   sm:text-sm sm:leading-6 bg-[#262626] px-3"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="shadow-md flex items-center bg-[#1e6f9f] py-2 rounded-lg justify-center text-white font-semibold disabled:opacity-70 hover:bg-[#4ea8de] duration-200 transition-colors w-full"
            >
              Sign up
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/"
            className="font-semibold leading-6 text-sky-300 hover:text-sky-600"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};
