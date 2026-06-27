import { supabase } from "../services/supabase.js";

const TABLE = "characters";

export async function getCharacters() {

    const { data, error } = await supabase
        .from(TABLE)
        .select("*")
        .order("id", { ascending: true });

    if (error) {
        console.error(error);
        return [];
    }

    return data;
}

export async function getCharacter(id) {

    const { data, error } = await supabase
        .from(TABLE)
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        console.error(error);
        return null;
    }

    return data;
}

export async function createCharacter(character) {

    const { error } = await supabase
        .from(TABLE)
        .insert(character);

    if (error) {
        console.error(error);
    }
}

export async function updateCharacter(id, character) {

    const { error } = await supabase
        .from(TABLE)
        .update(character)
        .eq("id", id);

    if (error) {
        console.error(error);
    }
}

export async function deleteCharacter(id) {

    const { error } = await supabase
        .from(TABLE)
        .delete()
        .eq("id", id);

    if (error) {
        console.error(error);
    }
}

export async function searchCharacters(text) {

    const { data, error } = await supabase
        .from(TABLE)
        .select("*")
        .ilike("nome", `%${text}%`);

    if (error) {
        console.error(error);
        return [];
    }

    return data;
}
