import {
    listarPersonagens,
    pesquisar,
    cadastrar,
    excluir
} from "../controllers/sonicController.js";

import {
    isLogged,
    logout
} from "../controllers/authController.js";

export function adminView() {

    if (!isLogged()) {

        return `
            <section style="text-align:center">
                <h2>Acesso Negado</h2>

                <p>Faça login para acessar esta página.</p>
                <br>
                <a href="#/login" class="btn">
                    Ir para Login
                </a>
            </section>
        `;
    }

    setTimeout(() => {
        carregarTabela();

        const form = document.getElementById("form-personagem");

        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const personagem = {
                nome: document.getElementById("nome").value,
                tipo: document.getElementById("tipo").value,
                velocidade: document.getElementById("velocidade").value,
                descricao: document.getElementById("descricao").value,
                imagem: document.getElementById("imagem").value
            };

            await cadastrar(personagem);
            form.reset();
            carregarTabela();

        });

        document
            .getElementById("pesquisa")
            .addEventListener("keyup", async (event) => {
                const texto = event.target.value;
                const personagens = await pesquisar(texto);
                renderTabela(personagens);
            });

        document
            .getElementById("btnLogout")
            .addEventListener("click", logout);
    }, 0);

    return `
        <section class="admin">
            <div class="top-admin">
                <h2>Painel Administrativo</h2>

                <button
                    id="btnLogout"
                    class="btn-delete">
                    Sair
                </button>
            </div>

            <input
                type="text"
                id="pesquisa"
                class="search"
                placeholder="Pesquisar personagem...">
            <br><br>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Velocidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody id="tabela-personagens">
                </tbody>
            </table>

            <div class="form-admin">
                <h2>Novo Personagem</h2>

                <form id="form-personagem">

                    <input
                        id="nome"
                        type="text"
                        placeholder="Nome"
                        required>

                    <input
                        id="tipo"
                        type="text"
                        placeholder="Tipo"
                        required>

                    <input
                        id="velocidade"
                        type="text"
                        placeholder="Velocidade"
                        required>

                    <input
                        id="imagem"
                        type="text"
                        placeholder="URL da imagem"
                        required>

                    <textarea
                        id="descricao"
                        rows="5"
                        placeholder="Descrição"
                        required>
                    </textarea>

                    <button
                        type="submit"
                        class="save">
                        Salvar
                    </button>
                </form>
            </div>
        </section>
    `;
}

async function carregarTabela() {
    const personagens = await listarPersonagens();
    renderTabela(personagens);
}

function renderTabela(personagens) {
    const tabela = document.getElementById("tabela-personagens");
    if (!tabela) return;
    tabela.innerHTML = personagens.map(personagem => `

        <tr>
            <td>${personagem.id}</td>
            <td>${personagem.nome}</td>
            <td>${personagem.tipo}</td>
            <td>${personagem.velocidade}</td>
            <td>
                <button
                    class="btn-delete"
                    onclick="window.excluirPersonagem(${personagem.id})">
                    Excluir
                </button>
            </td>
        </tr>
    `).join("");
    window.excluirPersonagem = async (id) => {
        await excluir(id);
        carregarTabela();
    };
}