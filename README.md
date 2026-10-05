# AVA-EDUCA+

Projeto avaliativo desenvolvido para o Módulo 01 de Front-End.

Autor: Isaac Leite Persuhn.

---

## Descrição do projeto

O AVA-EDUCA+ é um protótipo de ambiente educacional desenvolvido com o objetivo de centralizar informações acadêmicas e facilitar o acompanhamento de cursos e alunos pela equipe pedagógica.

O projeto surgiu a partir de um cenário onde as informações acadêmicas estavam distribuídas em diferentes sistemas e planilhas, dificultando o acompanhamento dos dados.

A aplicação foi desenvolvida utilizando HTML, CSS e JavaScript, sem utilização de frameworks, back-end ou banco de dados.

O sistema possui as seguintes funcionalidades:

- Autenticação de usuários;
- Controle de sessão utilizando `sessionStorage`;
- Dashboard personalizado de acordo com o usuário autenticado;
- Listagem dos cursos vinculados ao professor;
- Tratamento para usuários sem cursos cadastrados;
- Cadastro de alunos;
- Validação dos dados do formulário;
- Validação da data de nascimento utilizando Moment.js;
- Consulta automática de endereço através da API ViaCEP;
- Utilização da classe `Aluno`;
- Geração de identificador para novos alunos;
- Listagem de alunos em tabela;
- Atualização dinâmica da tabela após um novo cadastro;
- Navegação entre Dashboard e Cadastro de Alunos;
- Logout do sistema;
- Layout responsivo para desktop e dispositivos móveis.

O projeto também utiliza módulos JavaScript com `import` e `export`, permitindo separar as responsabilidades das funcionalidades, das classes e das listagens utilizadas pelo sistema.

Durante o desenvolvimento foram realizados testes de autenticação, cursos, cadastro de alunos, ViaCEP, validações e responsividade para verificar o funcionamento de cada parte da aplicação.

Também foi utilizada Inteligência Artificial como ferramenta de apoio durante algumas etapas do projeto, principalmente para esclarecimento de dúvidas, revisão de código, identificação de erros, Git/GitHub e sugestões de melhorias de responsividade.

Todas as alterações utilizadas no projeto foram analisadas e testadas antes de serem consideradas concluídas.

---

# Link do vídeo de apresentação

Adicionar após a gravação:

---

# Link do repositório GitHub

https://github.com/isaac-mfdev/ava-educa

---

# Link do Kanban / Notion do projeto

https://app.notion.com/p/AVA-EDUCA-Projeto-Avaliativo-3dfce6d3352b819f9065fe3d561896ac?source=copy_link


---

## Tecnologias utilizadas

As principais tecnologias, conceitos e ferramentas utilizadas no desenvolvimento foram:

- HTML5;
- CSS3;
- JavaScript;
- Visual Studio Code;
- Git;
- GitHub;
- Live Server;
- Chrome DevTools;
- Módulos ES com `import` e `export`;
- Programação Orientada a Objetos;
- Arrays;
- Objetos;
- Métodos de arrays;
- `find()`;
- `filter()`;
- `reduce()`;
- `forEach()`;
- Estruturas condicionais;
- Operadores lógicos;
- Funções;
- Arrow Functions;
- Promises;
- Assincronicidade;
- Fetch API;
- Manipulação do DOM;
- Eventos;
- `sessionStorage`;
- `window.alert`;
- Flexbox;
- CSS Grid;
- Media Queries;
- API ViaCEP;
- Moment.js.

---

## Utilização de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento para:

- Tirar dúvidas relacionadas ao projeto;
- Revisar os requisitos;
- Auxiliar na utilização de branches;
- Auxiliar na criação e revisão de commits;
- Auxiliar no processo de Pull Request;
- Identificar possíveis erros no código;
- Auxiliar na revisão das validações;
- Sugerir melhorias de responsividade;
- Auxiliar na revisão da documentação.

A Inteligência Artificial foi utilizada como ferramenta de consulta e apoio.

As funcionalidades implementadas foram testadas durante o desenvolvimento para verificar se apresentavam o comportamento solicitado no projeto.

---

# Etapas de desenvolvimento

O desenvolvimento do AVA-EDUCA+ foi dividido em etapas para facilitar a organização das funcionalidades.

As atividades também foram acompanhadas através de um quadro Kanban.

---

## 1. Estrutura inicial do projeto

A primeira etapa consistiu na organização da estrutura de arquivos e diretórios da aplicação.

Foram criadas pastas específicas para:

- Login;
- Dashboard;
- Cadastro de alunos;
- JavaScript compartilhado;
- Dados;
- CSS;
- Assets;
- Imagens;
- Ícones.

Também foram criados os arquivos:

- `index.html`;
- `README.md`;
- `package.json`;
- `.gitignore`.

O `package.json` foi configurado para trabalhar com módulos JavaScript.

Nesta etapa também foi iniciado o processo de versionamento utilizando Git e GitHub.

---

## 2. Login e autenticação

Foi criada a branch:

`feature/login`

Nesta etapa foi desenvolvida a página de Login da aplicação.

Foram implementados:

- Campo de e-mail;
- Campo de senha;
- Botão Entrar;
- Link "Esqueceu sua senha?";
- Feedback visual para dados incorretos;
- Redirecionamento para o Dashboard após autenticação.

A autenticação é realizada através da função:

`login(usuario, senha)`

localizada no arquivo:

`js/auth.js`

A função consulta os usuários disponíveis no arquivo:

`dados/listagem-usuarios.js`

Quando o usuário informa dados válidos, suas informações são armazenadas no:

`sessionStorage`

O usuário é então redirecionado para o Dashboard.

Quando os dados estão incorretos, o sistema apresenta a mensagem:

`Dados incorretos. Favor verificar e tentar novamente`

A opção "Esqueceu sua senha?" utiliza `window.alert()` para informar que a funcionalidade ainda está em construção.

---

## 3. Cabeçalho e menu de navegação

Foi criada a branch:

`feature/cabecalho-menu`

Nesta etapa foram implementados o cabeçalho e o menu utilizados nas páginas internas da aplicação.

O cabeçalho apresenta:

- Logo do AVA-EDUCA+;
- Nome do usuário autenticado;
- Iniciais do usuário;
- Perfil do usuário.

O menu possui:

- Dashboard;
- Cursos;
- Cadastro de Alunos;
- Sair.

A opção Cursos permanece desabilitada conforme solicitado no projeto.

A opção Sair remove o usuário do `sessionStorage` e retorna para a página de Login.

Também foi implementada uma verificação para impedir o acesso às páginas internas quando não existe um usuário autenticado.

---

## 4. Dashboard e cursos

Foi criada a branch:

`feature/dashboard`

Nesta etapa foi desenvolvido o Dashboard da aplicação.

Os cursos são exibidos através de cards contendo:

- Nome do curso;
- Data de início;
- Data de término.

Os dados são recuperados utilizando a função:

`listarCursos(usuario)`

localizada no arquivo:

`js/cursos.js`

A função utiliza a listagem disponível em:

`dados/listagem-cursos.js`

Durante os testes foram utilizados os três usuários fornecidos no projeto.

### Ana Carolina Silva

Possui 6 cursos cadastrados.

### Carlos Eduardo Santos

Possui 2 cursos cadastrados.

### Mariana Oliveira Costa

Não possui cursos cadastrados.

Nesse caso, o sistema apresenta:

`Não há cursos cadastrados para esse usuário`

---

## 5. Cadastro de alunos

Foi criada a branch:

`feature/cadastro-aluno`

Nesta etapa foi desenvolvido o formulário para cadastro de novos alunos.

O formulário possui os campos:

- Nome completo;
- Gênero;
- Data de nascimento;
- CPF;
- Telefone;
- E-mail;
- CEP;
- Cidade;
- Estado;
- Logradouro;
- Número;
- Complemento;
- Bairro.

Também foram adicionadas validações antes da realização do cadastro.

O nome deve possuir entre 4 e 80 caracteres.

Os campos obrigatórios são verificados antes do envio do formulário.

---

## 6. Classe Aluno

Para trabalhar com Programação Orientada a Objetos foi criada a classe:

`Aluno`

no arquivo:

`js/Aluno.js`

A classe possui um `constructor` responsável por inicializar as propriedades pertencentes ao objeto aluno.

Entre elas estão:

- Nome;
- Gênero;
- Data de nascimento;
- CPF;
- Telefone;
- E-mail;
- CEP;
- Cidade;
- Estado;
- Logradouro;
- Número;
- Complemento;
- Bairro.

Após a validação do formulário é criado um objeto utilizando:

`new Aluno(...)`

Esse objeto é enviado para a função:

`cadastrarAluno(aluno)`

---

## 7. Cadastro e geração de identificador

No arquivo:

`js/alunos.js`

foi implementada a função:

`cadastrarAluno(aluno)`

Essa função:

- Recebe o objeto do aluno;
- Verifica os identificadores já existentes;
- Gera um novo ID;
- Insere o aluno no array;
- Retorna uma Promise.

Quando o cadastro é realizado corretamente, a função retorna:

`Aluno cadastrado com sucesso!`

Em caso de erro:

`Erro ao cadastrar o aluno`

---

## 8. Consulta de endereço através do ViaCEP

Para facilitar o preenchimento do endereço foi utilizada a API ViaCEP.

Ao informar um CEP e sair do campo, o sistema realiza uma consulta utilizando:

`fetch()`

Quando o CEP é encontrado, são preenchidos automaticamente:

- Cidade;
- Estado;
- Logradouro;
- Bairro.

Também foram implementadas verificações para CEP inválido ou inexistente.

Caso um novo CEP seja informado, os dados anteriores do endereço são limpos antes da nova consulta.

---

## 9. Validação da data de nascimento

A biblioteca Moment.js foi utilizada para validar a data de nascimento.

A aplicação verifica:

- Se existe uma data informada;
- Se a data possui um valor válido;
- Se a data de nascimento é anterior à data atual.

Caso seja informada uma data futura, o sistema apresenta uma mensagem de erro e impede o cadastro.

---

## 10. Listagem de alunos

O arquivo:

`dados/listagem-alunos.js`

possui dois alunos iniciais:

- Lucas Henrique Martins;
- Beatriz Fernanda Oliveira.

Foi adicionada uma tabela na página de Cadastro de Alunos para exibir essas informações.

A listagem é criada dinamicamente através do JavaScript utilizando manipulação do DOM e `forEach()`.

Quando um novo aluno é cadastrado, a tabela é atualizada imediatamente sem a necessidade de recarregar a página.

Também é apresentado um contador com a quantidade atual de alunos.

Exemplo:

`2 alunos cadastrados`

Após um novo cadastro:

`3 alunos cadastrados`

Como a aplicação não possui banco de dados, os novos alunos permanecem no array somente durante aquela execução da página.

Ao atualizar o navegador, a aplicação volta a utilizar os dados originais definidos em:

`dados/listagem-alunos.js`

---

## 11. Responsividade

Após a conclusão das funcionalidades foi realizada uma revisão visual das páginas.

Foram realizados ajustes para funcionamento em:

### Desktop

Largura a partir de aproximadamente:

`768px`

### Mobile

Largura abaixo de:

`768px`

Foram utilizados:

- Media Queries;
- Flexbox;
- CSS Grid;
- Larguras fluidas;
- Adaptação dos cards;
- Adaptação do formulário;
- Menu responsivo;
- Scroll horizontal interno na tabela.

No mobile, o menu lateral é reorganizado para permitir maior espaço para o conteúdo.

O formulário de Cadastro de Alunos passa de duas colunas para uma coluna.

Os cards do Dashboard também passam a utilizar uma única coluna em telas menores.

---

## 12. Testes do projeto

Após a implementação foram realizados testes das principais funcionalidades.

### Login

Foram testados:

- Login com dados corretos;
- Login com dados incorretos;
- Feedback de erro;
- Persistência do usuário utilizando `sessionStorage`;
- Proteção das páginas internas;
- Logout.

### Dashboard

Foram testados:

- Ana Carolina com 6 cursos;
- Carlos Eduardo com 2 cursos;
- Mariana Oliveira sem cursos;
- Nome do usuário;
- Iniciais do usuário;
- Navegação;
- Logout.

### Cadastro de alunos

Foram testados:

- Exibição dos dois alunos iniciais;
- Validação de campos obrigatórios;
- Validação do nome;
- Validação de data futura;
- Data válida;
- CEP válido;
- CEP inválido;
- Preenchimento automático do endereço;
- Cadastro de um novo aluno;
- Atualização da tabela;
- Atualização do contador de alunos.

### Responsividade

Foram realizados testes utilizando o modo responsivo do Chrome DevTools.

Foram verificadas diferentes larguras, incluindo dispositivos móveis.

Também foi verificado o Console do navegador durante os testes para identificar possíveis erros JavaScript.

Ao final dos testes não foram identificados erros em vermelho no Console.

---

# Organização com Git e GitHub

O desenvolvimento foi versionado utilizando Git e GitHub.

Foi utilizada a seguinte estratégia:

`main`

Branch utilizada para armazenar a versão final do projeto.

`develop`

Branch utilizada para integrar as funcionalidades durante o desenvolvimento.

As funcionalidades foram desenvolvidas através de feature branches.

---

## Branches utilizadas

### `feature/estrutura-inicial`

Utilizada para criação da estrutura inicial do projeto e organização dos arquivos.

### `feature/login`

Utilizada para desenvolvimento da página de Login e autenticação.

### `feature/cabecalho-menu`

Utilizada para desenvolvimento do cabeçalho, menu e navegação.

### `feature/dashboard`

Utilizada para implementação do Dashboard e listagem dos cursos.

### `feature/cadastro-aluno`

Utilizada para desenvolvimento do cadastro de alunos, classe `Aluno`, validações, ViaCEP e listagem dos alunos.

---

## Fluxo de integração

Durante o desenvolvimento as funcionalidades foram integradas para:

`develop`

através de Pull Requests.

Ao final do desenvolvimento, a versão completa da aplicação deve ser integrada através de Pull Request:

`develop -> main`

Esse processo permite manter a branch principal separada durante o desenvolvimento das funcionalidades.

---

# Como executar localmente

## Pré-requisitos

Para executar o projeto é recomendado possuir:

- Visual Studio Code;
- Extensão Live Server;
- Navegador Google Chrome ou outro navegador moderno.

Não é necessário possuir banco de dados ou servidor back-end.

Outra Forma de Execução é pelo Link do GitHub, cujo onde está hospedado.

---

## Clonar o projeto

Abra um terminal e execute:

```bash
git clone https://github.com/isaac-mfdev/ava-educa.git