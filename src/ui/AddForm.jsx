import { Form } from "./Form.jsx";
import { Icon } from "@iconify/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { postData } from "../requests.js";
import "react-toastify/dist/ReactToastify.css";
import { addNotify } from "../helpers/toasters/addSucces.js";

export const AddForm = () => {
  const inputRef = useRef();
  const queryClient = useQueryClient();
  const [text, setText] = useState("");
  const { mutate: addMutate, isPending } = useMutation({
    mutationFn: (text) => postData(text),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
    onSuccess: () => {
      addNotify();
    },
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!text.length) return;
    addMutate(text);
    setText("");
  }

  return (
    <section className="px-3 -mt-3 max-w-[700px] mx-auto">
      <Form
        inputRef={inputRef}
        placeholder="Add a new task"
        buttonTitle="Add"
        icon={<Icon icon="flat-color-icons:plus" />}
        handlesubmit={handleSubmit}
        text={text}
        setText={setText}
        isPending={isPending}
      />
    </section>
  );
};
