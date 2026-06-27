import { listarPersonagens } from "../controllers/sonicController.js";

export function personagensView() {

    setTimeout(async () => {
        const container = document.getElementById("lista-personagens");
        const personagens = await listarPersonagens();
        console.log(personagens);
        if (!personagens.length) {
            container.innerHTML = `
                <p>Nenhum personagem cadastrado.</p>
            `;
            return;
        }

        container.innerHTML = personagens.map(personagem => `
            <div class="card">
                <img src="${personagem.imagem}" alt="${personagem.nome}">
                <div class="card-content">
                    <h3>${personagem.nome}</h3>
                    <p><strong>Tipo:</strong> ${personagem.tipo}</p>
                    <p><strong>Velocidade:</strong> ${personagem.velocidade}</p>
                    <br>
                    <p>${personagem.descricao}</p>
                </div>
            </div>
        `).join("");
    }, 0);

    return `
        <section>
            <h2 class="section-title">
                Personagens
            </h2>

            <div
                id="lista-personagens"
                class="grid">
                <p>Carregando...</p>
            </div>
        </section>
    `;
}