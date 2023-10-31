import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn } from "../requests.js";
import { Icon } from "@iconify/react";
import { Spinner } from "./Spinner.jsx";

export const LoginForm = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: () => signIn(email, password),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/app", { replace: true });
    },
    onSettled: () => {
      setValid(true);
      setEmail("");
      setPassword("");
    },
  });

  async function handleSubmit(e) {
    e.preventDefault();
    mutate();
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 lg:px-8 py-40 max-w-[500px] mx-auto">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white mb-6">
          Sign in
        </h2>
      </div>

      {valid && (
        <div className="bg-[#202020] py-4 px-5 rounded-md mb-5">
          <div className="text-red-400 font-semibold flex  items-center justify-between">
            <p>Incorrect username or password.</p>
            <Icon
              icon="octicon:x-12"
              className="cursor-pointer"
              onClick={() => setValid(false)}
            />
          </div>
        </div>
      )}

      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-[#161616] px-4 py-5 rounded-xl shadow-sm">
        <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-base font-medium leading-6 text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                value={email}
                id="email"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                id="password"
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-2 text-white shadow-md  placeholder:text-gray-400   sm:text-sm sm:leading-6 bg-[#262626] px-3"
              />
            </div>
          </div>

          <div>
            <button
              disabled={isPending}
              type="submit"
              className="shadow-md flex items-center bg-[#1e6f9f] py-2 rounded-lg justify-center text-white font-semibold disabled:opacity-70 hover:bg-[#4ea8de] duration-200 transition-colors w-full"
            >
              {!isPending ? "Sign in" : <Spinner />}
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/sign-up"
            className="font-semibold leading-6 text-sky-300 hover:text-sky-600"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
