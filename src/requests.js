import supabase from "./supabase.js";

export async function fetchData() {
    let {data: list, error} = await supabase
        .from('todoList')
        .select('*')
    if (error) {
        throw new Error(error.message);
    }
    return list;
}


export async function postData(text) {
    const {data, error} = await supabase
        .from('todoList')
        .insert([
            {text},
        ])
        .select()
}

export async function deleteData(id) {
    const {error} = await supabase
        .from('todoList')
        .delete()
        .eq('id', id)

    if (error) {
        throw new Error(error.message);
    }
}
