import { Header } from "../ui/Header.jsx";
import { AddForm } from "../ui/AddForm.jsx";
import { ListSection } from "../ui/ListSection.jsx";
import { ToastContainer } from "react-toastify";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <AddForm />
      <ListSection />
      <ToastContainer />
    </>
  );
};
