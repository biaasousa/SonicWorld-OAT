import { login } from "../controllers/authController.js";

export function loginView() {

    setTimeout(() => {
        const form = document.getElementById("login-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;
            login(email, senha);
        });
    }, 0);

    return `
        <section class="login">
            <h2>
                Login Administrativo
            </h2>

            <form id="login-form">
                <input
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    required>
                <input
                    id="senha"
                    type="password"
                    placeholder="Senha"
                    required>
                <button
                    class="save"
                    type="submit">
                    Entrar
                </button>
            </form>
        </section>
    `;
}