import Aluno from "../js/Aluno.js";
import { cadastrarAluno } from "../js/alunos.js";
import alunos from "../dados/listagem-alunos.js";


/* =========================================
   USUÁRIO LOGADO
========================================= */

const usuarioSalvo = sessionStorage.getItem("usuarioLogado");

if (!usuarioSalvo) {
    window.location.replace("../login/login.html");

} else {

    const usuarioLogado = JSON.parse(usuarioSalvo);
    const userName = document.querySelector("#user-name");
    const userAvatar = document.querySelector("#user-avatar");
    const logoutButton = document.querySelector("#logout-button");
    userName.textContent = usuarioLogado.nome;

    const partesNome = usuarioLogado.nome.split(" ");

    const iniciais =
        partesNome[0][0] +
        partesNome[partesNome.length - 1][0];
    userAvatar.textContent = iniciais.toUpperCase();

    logoutButton.addEventListener("click", () => {
        sessionStorage.removeItem("usuarioLogado");
        window.location.replace("../login/login.html");
    });

}


/* =========================================
   ELEMENTOS DO FORMULÁRIO
========================================= */

const formulario =
    document.querySelector("#student-form");

const feedback =
    document.querySelector("#student-feedback");


/* =========================================
   LISTAGEM DE ALUNOS
========================================= */

const tabelaAlunos =
    document.querySelector("#students-table-body");

const contadorAlunos =
    document.querySelector("#students-count");


/* =========================================
   CAMPOS DE ENDEREÇO
========================================= */

const campoCep =
    document.querySelector("#cep");

const campoCidade =
    document.querySelector("#cidade");

const campoEstado =
    document.querySelector("#estado");

const campoLogradouro =
    document.querySelector("#logradouro");

const campoBairro =
    document.querySelector("#bairro");


/* =========================================
   CAMPO DATA DE NASCIMENTO
========================================= */

const campoDataNascimento =
    document.querySelector("#dataNascimento");

/* =========================================
   LISTAGEM INICIAL DE ALUNNOS
========================================= */


    renderizarAlunos();

/* =========================================
   VIA CEP
========================================= */

campoCep.addEventListener("blur", () => {

    const cep =
        campoCep.value.replace(/\D/g, "");


    // Limpa dados anteriores antes de realizar uma nova consulta.
    limparEndereco();

    if (cep.length !== 8) {
        mostrarErro(
            "Informe um CEP válido com 8 números."
        );
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((resposta) => {
            if (!resposta.ok) {
                throw new Error(
                    "Erro ao consultar o CEP."
                );
            }
            return resposta.json();
        })
        .then((dados) => {
            if (dados.erro) {
                mostrarErro(
                    "CEP não encontrado."
                );
                return;
            }

            campoCidade.value =
                dados.localidade;
            campoEstado.value =
                dados.uf;
            campoLogradouro.value =
                dados.logradouro;
            campoBairro.value =
                dados.bairro;

            esconderFeedback();
        })
        .catch(() => {
            limparEndereco();
            mostrarErro(
                "Não foi possível consultar o CEP. Tente novamente."
            );
        });
});

/* =========================================
   VALIDAÇÃO DA DATA AO ALTERAR O CAMPO
========================================= */

campoDataNascimento.addEventListener(
    "change",
    () => {
        validarDataNascimento();
    }
);

/* =========================================
   EVENTO DE SUBMISSÃO DO FORMULÁRIO
========================================= */

formulario.addEventListener(
    "submit",
    (event) => {
        event.preventDefault();

        /* =====================================
           RECUPERA OS CAMPOS
        ===================================== */

        const nome =
            document.querySelector("#nome")
                .value
                .trim();

        const genero =
            document.querySelector("#genero")
                .value;

        const dataNascimento =
            document.querySelector("#dataNascimento")
                .value;

        const cpf =
            document.querySelector("#cpf")
                .value
                .trim();

        const telefone =
            document.querySelector("#telefone")
                .value
                .trim();

        const email =
            document.querySelector("#email")
                .value
                .trim();

        const cep =
            document.querySelector("#cep")
                .value
                .trim();

        const cidade =
            document.querySelector("#cidade")
                .value
                .trim();

        const estado =
            document.querySelector("#estado")
                .value
                .trim();

        const logradouro =
            document.querySelector("#logradouro")
                .value
                .trim();

        const numero =
            document.querySelector("#numero")
                .value;

        const complemento =
            document.querySelector("#complemento")
                .value
                .trim();

        const bairro =
            document.querySelector("#bairro")
                .value
                .trim();


        /* =====================================
           VALIDAÇÃO DO NOME
        ===================================== */

        if (
            nome.length < 4 ||
            nome.length > 80
        ) {
            mostrarErro(
                "O nome deve possuir entre 4 e 80 caracteres."
            );
            return;
        }

        /* =====================================
           VALIDAÇÃO DA DATA
        ===================================== */

        if (!validarDataNascimento()) {
            return;
        }

        /* =====================================
           CRIA O OBJETO ALUNO
        ===================================== */

        const aluno = new Aluno(
            nome,
            genero,
            dataNascimento,
            cpf,
            telefone,
            email,
            cep,
            cidade,
            estado,
            logradouro,
            numero,
            complemento,
            bairro
        );


        /* =====================================
           CADASTRA O ALUNO
        ===================================== */

        cadastrarAluno(aluno)

            .then((mensagem) => {
                mostrarSucesso(mensagem);
                console.log(
                    "Aluno cadastrado:", aluno );
                renderizarAlunos();
                formulario.reset();
                limparEndereco(); })
                    .catch((erro) => {
                        mostrarErro(erro);
                    });
            }
        );

/* =========================================
   VALIDAÇÃO DA DATA DE NASCIMENTO
========================================= */

function validarDataNascimento() {
    const dataNascimento =
        campoDataNascimento.value;


    if (!dataNascimento) {
        mostrarErro(
            "Informe a data de nascimento."
        );

        return false;

    }

    const dataNascimentoMoment =
        moment(
            dataNascimento,
            "YYYY-MM-DD",
            true
        );

    if (!dataNascimentoMoment.isValid()) {
        mostrarErro(
            "Informe uma data de nascimento válida."
        );
        return false;

    }

    const hoje =
        moment().startOf("day");

    if (
        !dataNascimentoMoment.isBefore(hoje)
    ) {
        mostrarErro(
            "A data de nascimento deve ser anterior à data atual."
        );
        return false;

    }

    esconderFeedback();
    return true;

}


/* =========================================
   LIMPA ENDEREÇO
========================================= */

function limparEndereco() {

    campoCidade.value = "";
    campoEstado.value = "";
    campoLogradouro.value = "";
    campoBairro.value = "";

}

/* =========================================
   FEEDBACK DE SUCESSO
========================================= */

function mostrarSucesso(mensagem) {
    feedback.textContent = mensagem;
    feedback.style.display = "block";
    feedback.style.color = "#0d5d37";
    feedback.style.backgroundColor =
        "#dff3e7";

}

/* =========================================
   FEEDBACK DE ERRO
========================================= */

function mostrarErro(mensagem) {
    feedback.textContent = mensagem;
    feedback.style.display = "block";
    feedback.style.color = "#b42318";
    feedback.style.backgroundColor =
        "#fee4e2";

}

/* =========================================
   ESCONDE O FEEDBACK
========================================= */

function esconderFeedback() {
    feedback.textContent = "";
    feedback.style.display = "none";

}

/* =========================================
   RENDERIZA A LISTAGEM DE ALUNOS
========================================= */

function renderizarAlunos() {
    tabelaAlunos.innerHTML = "";

    alunos.forEach((aluno) => {
        const linha =
            document.createElement("tr");

        linha.innerHTML = `
            <td>${aluno.id}</td>
            <td>${aluno.nome}</td>
            <td>${aluno.genero}</td>
            <td>${aluno.cpf}</td>
            <td>${aluno.email}</td>
            <td>${aluno.telefone}</td>
        `;
        tabelaAlunos.appendChild(linha);
    });

    const quantidade = alunos.length;
    contadorAlunos.textContent =
        quantidade === 1
            ? "1 aluno cadastrado"
            : `${quantidade} alunos cadastrados`;
}