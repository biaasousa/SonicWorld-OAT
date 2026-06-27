import {
    getCharacters,
    createCharacter,
    updateCharacter,
    deleteCharacter,
    searchCharacters

} from "../models/sonicModel.js";

export async function listarPersonagens() {
    return await getCharacters();
}

export async function pesquisar(nome) {
    if (nome.trim() === "") {

        return await getCharacters();

    }
    return await searchCharacters(nome);
}

export async function cadastrar(personagem) {

    if (!personagem.nome) {
        alert("Informe o nome.");
        return;
    }

    await createCharacter(personagem);
    alert("Personagem cadastrado!");
}

export async function editar(id, personagem) {
    await updateCharacter(id, personagem);
    alert("Personagem atualizado!");
}

export async function excluir(id) {
    const confirmar = confirm("Deseja realmente excluir?");
    if (!confirmar) return;
    await deleteCharacter(id);
    alert("Personagem removido!");
}