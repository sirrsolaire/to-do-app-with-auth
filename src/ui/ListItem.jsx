import { Icon } from "@iconify/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteData } from "../requests.js";
import EditModal from "./EditModal.jsx";
import { useState } from "react";
import { deleteNotify } from "../helpers/toasters/deleteSucces.js";
import { Spinner } from "./Spinner.jsx";

export const ListItem = ({ id, text }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate: deleteMutate, isPending } = useMutation({
    mutationKey: ["deleteTodo"],
    mutationFn: () => deleteData(id),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
    onSuccess: () => deleteNotify(),
  });

  async function handleDelete() {
    deleteMutate(id);
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <ul className="w-full mb-3">
        <li className="bg-[#333333] flex flex-col rounded-lg px-5 wide:flex-row-reverse wide:justify-between">
          <div className="flex items-center justify-around border-b-[1px] py-3.5 border-[#414141] wide:border-0 wide:gap-5">
            <button
              onClick={showModal}
              className="hover:bg-white duration-200 transition-all p-0.5 rounded-md group"
            >
              <Icon
                icon="ph:note-pencil-bold"
                className="text-[#808080] text-2xl group-hover:text-black duration-200 transition-all"
              />
            </button>
            {isPending ? (
              <Spinner />
            ) : (
              <button
                onClick={() => handleDelete(id)}
                className="hover:bg-white duration-200 transition-all p-0.5 rounded-md group"
              >
                <Icon
                  icon="ph:trash-bold"
                  className="text-[#808080] text-2xl group-hover:text-black duration-200 transition-all"
                />
              </button>
            )}
          </div>
          <span className="py-3.5 text-center text-white font-medium">
            {text}
          </span>
        </li>
      </ul>
      <EditModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        showModal={showModal}
        id={id}
      />
    </>
  );
};
