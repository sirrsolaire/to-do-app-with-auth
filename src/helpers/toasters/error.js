import { toast } from "react-toastify";

export const errorNotify = (message) =>
  toast.error(`Something went wrong! ${message}`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
  });
