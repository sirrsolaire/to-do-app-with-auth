import supabase from "./supabase.js";

export async function fetchData() {
  let { data: list, error } = await supabase.from("todoList").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return list;
}

export async function postData(text) {
  const { error } = await supabase.from("todoList").insert([{ text }]).select();

  if (error) throw new Error(error.message);
}

export async function deleteData(id) {
  const { error } = await supabase.from("todoList").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}

export async function updateData(id, text) {
  const { error } = await supabase
    .from("todoList")
    .update({ text })
    .eq("id", id)
    .select();

  if (error) {
    throw new Error(error.message);
  }
}

export async function signUp(formData) {
  const { error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        user_name: formData.username,
      },
    },
  });

  if (error) throw new Error(error.message);
}

export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    throw new Error(error.message); // Throw an error when authentication fails
  }

  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}
