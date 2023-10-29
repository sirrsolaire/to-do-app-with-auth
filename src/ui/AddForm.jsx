import {Icon} from "@iconify/react";
import {postData} from "../requests.js";
import {useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";

export const AddForm = () => {
    const queryClient = useQueryClient()
    const [text, setText] = useState("")


    const {mutate: addMutate} = useMutation({
        mutationFn: (text) => postData(text),
        onSettled: () => queryClient.invalidateQueries({queryKey: ['todos']}),
    })


    async function handleSubmit(e) {
        e.preventDefault()
        if (!text.length) return;
        addMutate(text)
        setText("")
    }

    return (
        <section className="px-3 -mt-3">
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <input type="text"
                       value={text}
                       onChange={(e) => setText(e.target.value)}
                       className="py-3.5 bg-[#262626] rounded-lg px-4 text-white shadow-md placeholder:opacity-70"
                       placeholder="Add a new task"/>
                <button
                    className="shadow-md flex items-center gap-2 bg-[#1e6f9f] py-3.5 rounded-lg justify-center text-white font-semibold ">Add <Icon
                    icon="flat-color-icons:plus"/>
                </button>
            </form>
        </section>
    )
}
