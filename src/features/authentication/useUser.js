import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../requests.js";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isLoading, user };
}
