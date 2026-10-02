import { login } from "../js/auth.js";

const formLogin = document.querySelector("#login-form");
const campoEmail = document.querySelector("#email");
const campoSenha = document.querySelector("#senha");
const feedback = document.querySelector("#login-feedback");
const forgotPasswordButton = document.querySelector("#forgot-password");


formLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = campoEmail.value.trim();
    const senha = campoSenha.value;


    if (!email || !senha) {
        mostrarErro("Preencha o e-mail e a senha.");
        return;
    }


    login(email, senha)
        .then((usuario) => {
            sessionStorage.setItem(
                "usuarioLogado",
                JSON.stringify(usuario)
            );

            window.location.href =
                "../dashboard/dashboard.html";

        })
        .catch((erro) => {
            mostrarErro(erro);

        });

});


forgotPasswordButton.addEventListener("click", () => {
    window.alert(
        "Funcionalidade de recuperação de senha em construção."
    );

});


function mostrarErro(mensagem) {
    feedback.textContent = mensagem;
    feedback.classList.add("error");

}