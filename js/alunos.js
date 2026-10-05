import alunos from "../dados/listagem-alunos.js";

export function cadastrarAluno(aluno) {
    return new Promise((resolve, reject) => {
        try {
            const ultimoId = alunos.reduce((maiorId, item) => {
                if (item.id > maiorId) {
                    return item.id;
                }
                return maiorId;
            }, 0);

            aluno.id = ultimoId + 1;
            alunos.push(aluno);
            resolve("Aluno cadastrado com sucesso!");

        } catch (erro) {

            reject("Erro ao cadastrar o aluno");
        }
    });

}