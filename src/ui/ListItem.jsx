import {Icon} from "@iconify/react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteData} from "../requests.js";

export const ListItem = ({id, text}) => {
    const queryClient = useQueryClient()

    const {mutate: deleteMutate} = useMutation({
        mutationKey: ["deleteTodo"],
        mutationFn: () => deleteData(id),
        onSettled: () => queryClient.invalidateQueries({queryKey: ["todos"]})

    })

    async function handleDelete() {
        deleteMutate(id)
        console.log(id)
    }


    return (
        <ul className="w-full mb-3">
            <li className="bg-[#333333] flex flex-col rounded-lg px-5 ">
                <div className="flex items-center justify-around border-b-[1px] py-3.5 border-[#414141]">
                    <input type="checkbox"
                           className="checkbox checkbox-primary rounded-full border-[2px] border-[#4ea8de]"/>
                    <button onClick={() => handleDelete(id)}><Icon icon="ph:trash-bold"
                                                                   className="text-[#808080] text-2xl"/>
                    </button>
                </div>
                <span className="py-3.5 text-center text-white font-medium">{text}</span>
            </li>
        </ul>

    )
}
