import { homeView } from "./views/homeView.js";
import { sobreView } from "./views/sobreView.js";
import { personagensView } from "./views/personagensView.js";
import { contatoView } from "./views/contatoView.js";
import { loginView } from "./views/loginView.js";
import { adminView } from "./views/adminView.js";

const routes = {
    "/": homeView,
    "/sobre": sobreView,
    "/personagens": personagensView,
    "/contato": contatoView,
    "/login": loginView,
    "/admin": adminView
};

export async function router() {

    const app = document.getElementById("app");

    const hash = window.location.hash.replace("#", "") || "/";

    const page = routes[hash];

    if (page) {

        app.innerHTML = await page();

    } else {

        app.innerHTML = `
            <h2>404</h2>
            <p>Página não encontrada.</p>
        `;

    }

}