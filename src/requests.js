import supabase from "./supabase.js";

export async function fetchData() {
  let { data: list, error } = await supabase.from("todoList").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return list;
}

export async function postData(text) {
  const { data, error } = await supabase
    .from("todoList")
    .insert([{ text }])
    .select();
}

export async function deleteData(id) {
  const { error } = await supabase.from("todoList").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}

export async function updateData(id, text) {
  const { data, error } = await supabase
    .from("todoList")
    .update({ text })
    .eq("id", id)
    .select();

  if (error) {
    throw new Error(error.message);
  }
}

export async function signUp(formData) {
  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        user_name: formData.username,
      },
    },
  });
}

export async function signIn(formData) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    throw new Error(error.message); // Throw an error when authentication fails
  }

  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
}
