const usuarioSalvo = sessionStorage.getItem("usuarioLogado");
if (!usuarioSalvo) {
    window.location.replace("../login/login.html");
} else {
    const usuarioLogado = JSON.parse(usuarioSalvo);

    const userName = document.querySelector("#user-name");
    const userAvatar = document.querySelector("#user-avatar");
    const welcomeMessage = document.querySelector("#welcome-message");
    const logoutButton = document.querySelector("#logout-button");

    userName.textContent = usuarioLogado.nome;
    welcomeMessage.textContent =
        `Bem-vindo(a), ${usuarioLogado.nome}!`;

    const partesNome = usuarioLogado.nome.split(" ");
    const iniciais =
        partesNome[0][0] +
        partesNome[partesNome.length - 1][0];

    userAvatar.textContent = iniciais.toUpperCase();

    logoutButton.addEventListener("click", () => {
        sessionStorage.removeItem("usuarioLogado");
        window.location.replace(
            "../login/login.html"
        );
    });
}