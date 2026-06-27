export function login(email, senha) {

    const ADMIN_EMAIL = "admin@sonicworld.com";
    const ADMIN_PASSWORD = "123456";

    if (email === ADMIN_EMAIL && senha === ADMIN_PASSWORD) {

        sessionStorage.setItem("logged", "true");

        window.location.hash = "/admin";

        return true;
    }

    alert("E-mail ou senha inválidos!");

    return false;

}

export function logout() {

    sessionStorage.removeItem("logged");

    window.location.hash = "/";

}

export function isLogged() {

    return sessionStorage.getItem("logged") === "true";

}