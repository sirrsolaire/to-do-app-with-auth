import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn } from "../../requests.js";
import { useNavigate } from "react-router-dom";

export function useLogin(email, password) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: () => signIn(email, password),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/app", { replace: true });
    },
  });

  return { mutate, isPending };
}
