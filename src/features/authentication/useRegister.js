import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../requests.js";
import { useNavigate } from "react-router-dom";

export function useRegister(formData) {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: () => signUp(formData),
    onSuccess: () => {
      navigate("/success");
    },
  });

  return { mutate, isPending };
}
