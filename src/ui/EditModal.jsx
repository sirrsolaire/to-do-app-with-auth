import {ConfigProvider, Modal} from "antd";
import {Form} from "./Form.jsx";
import {Icon} from "@iconify/react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateData} from "../requests.js";
import {useState} from "react";
import {updateNotify} from "../helpers/toasters/editSucces.js";

// eslint-disable-next-line react/prop-types
const EditModal = ({ isModalOpen, setIsModalOpen, id }) => {
  const queryClient = useQueryClient();
  const [text, setText] = useState("");

  const { mutate: updateMutate, isPending } = useMutation({
    mutationKey: ["updateTodo"],
    mutationFn: ({ id, text }) => updateData(id, text),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
    onSuccess: () => {
      updateNotify();
      setIsModalOpen(false);
    },
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!setText.length) return;
    updateMutate({ id, text });
    setText("");
  }

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorBgElevated: "#1a1a1a",
            colorText: "white",
            colorIcon: "white",
            colorIconHover: "#1e6f9e",
          },
        }}
      >
        <Modal
          title="Edit Task"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
          centered={true}
        >
          <Form
            placeholder="Edit the task"
            buttonTitle="Edit"
            icon={
              <Icon icon="ph:note-pencil-bold" className="text-white text-lg" />
            }
            handlesubmit={handleSubmit}
            text={text}
            setText={setText}
            isPending={isPending}
            addClass="text-base font-medium"
          />
        </Modal>
      </ConfigProvider>
    </>
  );
};
export default EditModal;
