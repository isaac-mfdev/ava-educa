import { listarCursos } from "../js/cursos.js";

const usuarioSalvo =
    sessionStorage.getItem("usuarioLogado");

if (!usuarioSalvo) {

    window.location.replace("../login/login.html");

} else {

    const usuarioLogado =
        JSON.parse(usuarioSalvo);
    const userName =
        document.querySelector("#user-name");
    const userAvatar =
        document.querySelector("#user-avatar");
    const welcomeMessage =
        document.querySelector("#welcome-message");
    const logoutButton =
        document.querySelector("#logout-button");
    const coursesContainer =
        document.querySelector("#courses-container");
    const coursesCount =
        document.querySelector("#courses-count");
    const coursesFeedback =
        document.querySelector("#courses-feedback");

    userName.textContent =
        usuarioLogado.nome;

    welcomeMessage.textContent =
        `Bem-vindo(a), ${usuarioLogado.nome}!`;


    const partesNome =
        usuarioLogado.nome.split(" ");

    const iniciais =
        partesNome[0][0] +
        partesNome[partesNome.length - 1][0];

    userAvatar.textContent =
        iniciais.toUpperCase();

    listarCursos(usuarioLogado)
        .then((cursos) => {
            coursesCount.textContent =
                `${cursos.length} cursos cadastrados`;
            renderizarCursos(cursos);
        })
        .catch((erro) => {

            coursesCount.textContent =
                "0 cursos cadastrados";

            coursesFeedback.textContent =
                erro;
        });


    logoutButton.addEventListener("click", () => {

        sessionStorage.removeItem(
            "usuarioLogado"
        );

        window.location.replace(
            "../login/login.html"
        );

    });


    function renderizarCursos(cursos) {
        coursesContainer.innerHTML = "";
        cursos.forEach((curso) => {
            const card =
                document.createElement("article");
            card.classList.add("course-card");

            card.innerHTML = `
                <div class="course-card-header">
                    <div class="course-icon">
                        📚
                    </div>

                    <div>
                        <h4>
                            ${curso.nomeCurso}
                        </h4>

                        <p> Curso disponível no AVA-EDUCA+ </p>
                    </div>
                </div>

                <div class="course-dates">

                    <div>
                        <span>Data de início</span>

                        <strong>
                            ${formatarData(curso.dataInicio)}
                        </strong>
                    </div>

                    <div>
                        <span>Data de término</span>

                        <strong>
                            ${formatarData(curso.dataFim)}
                        </strong>
                    </div>
                </div>
            `;
            coursesContainer.appendChild(card);
        });
    }
    function formatarData(data) {
        const partes =
            data.split("-");
        return `${partes[2]}/${partes[1]}/${partes[0]}`;
    }
}