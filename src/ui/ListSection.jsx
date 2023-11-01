import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../requests.js";
import { ListItem } from "./ListItem.jsx";
import { useEffect } from "react";
import { errorNotify } from "../helpers/toasters/error.js";
import { useUser } from "../features/authentication/useUser.js";

export const ListSection = () => {
  const { user } = useUser();
  const { id } = user;
  const { data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchData(id),
  });

  useEffect(() => {
    if (error) {
      errorNotify(error.message);
    }
  }, [error]);

  const taskLength = data?.length;

  return (
    <section className="py-24 flex justify-center flex-col items-center px-3 max-w-[700px] mx-auto">
      <div className="flex flex-col gap-2 mb-10 wide:self-start wide:mb-3">
        <div className="text-[#4ea8de] text-sm font-medium">
          Created Tasks{" "}
          <span className="text-white bg-[#333333] px-2 rounded-full">
            {taskLength}
          </span>
        </div>
      </div>
      {data?.map((item, i) => (
        <ListItem key={i} id={item.id} text={item.text} />
      ))}
    </section>
  );
};
