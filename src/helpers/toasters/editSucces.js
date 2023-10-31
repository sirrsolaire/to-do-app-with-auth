import { toast } from "react-toastify";

export const updateNotify = () =>
  toast.success("Changed a task", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
  });
