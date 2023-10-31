import { toast } from "react-toastify";

export const addNotify = () =>
  toast.success("Added a task", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
  });
