import { toast } from "react-toastify";

export const deleteNotify = () =>
  toast.success("Deleted a task", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
  });
