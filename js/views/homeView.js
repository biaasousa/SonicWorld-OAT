import { listarPersonagens } from "../controllers/sonicController.js";

export async function homeView() {

    const personagens = await listarPersonagens();

    return `
        <section class="hero">
            <div class="hero-text">
                <h2>Sonic World</h2>

                <p>
                    Bem-vindo ao Sonic World! Explore os personagens mais
                    famosos do universo Sonic.
                </p>

                <a href="#/personagens" class="btn">
                    Ver Personagens
                </a>
            </div>

            <img src="${personagens[0].imagem}" alt="${personagens[0].nome}">
        </section>

        <section>
            <h2 class="section-title">
                Destaques
            </h2>

            <div class="grid">
                ${personagens.slice(0, 3).map(personagem => `
                    <div class="card">

                        <img src="${personagem.imagem}" alt="${personagem.nome}">

                        <div class="card-content">
                            <h3>${personagem.nome}</h3>
                            <p>${personagem.descricao}</p>
                        </div>
                    </div>
                `).join("")}
            </div>
        </section>
    `;
}