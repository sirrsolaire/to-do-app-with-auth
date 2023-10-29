import {useQuery} from "@tanstack/react-query";
import {fetchData} from "../requests.js";
import {ListItem} from "./ListItem.jsx";

export const ListSection = () => {
    const {data} = useQuery({
        queryKey: ["todos"],
        queryFn: fetchData
    })

    return (
        <section className="py-24 flex justify-center flex-col items-center px-3">
            <div className="flex flex-col gap-2 mb-10">
                <div className="text-[#4ea8de] text-sm font-medium">
                    Created Tasks <span className="text-white bg-[#333333] px-2 rounded-full">2</span>
                </div>
                <div className="text-[#8284fa] text-sm font-medium">
                    Done Tasks <span className="text-white bg-[#333333] px-2 rounded-full">1 of 2</span>
                </div>
            </div>
            {data?.map((item, i) => <ListItem key={i} id={item.id} text={item.text}/>)}
        </section>
    )
}
