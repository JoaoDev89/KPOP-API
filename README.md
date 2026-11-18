API REST com MySQL e Node.js(CRUD)

Aluno: João Victor Lopes Gomes
Turma:3ºDS-N - Curso de Desenvolvimento de Sistemas

Sobre o projeto
  Este projeto é uma API REST de CRUD (criação, leitura, atualização e exclusão de usuários) feita com Node.js e Express, conectada diretamente a um banco de dados MySQL usando SQL puro, sem o uso de ORMs.

Instruções sobre como rodar o banco e o projeto de forma local:

Pré-requisitos
  Antes de começar, você precisa ter instalados no seu computador o Node.js, o MySQL Server e o MySQL Workbench. Também será necessário um navegador ou uma ferramenta online como o ReqBin (ou programas como Postman e Insomnia) para testar as rotas da API.

1. Configuração do banco de dados
  Abra o MySQL Workbench, conecte-se ao seu servidor local e execute o arquivo SQL da atividade para criar o banco de dados chamado "devdb", montar a tabela "usuarios" (com as colunas id, nome e email) e inserir alguns registros iniciais de teste. Depois de rodar o script, atualize a lista de esquemas no Workbench para confirmar que o banco e a tabela foram criados.

2. Instalação das dependências
  Abra a pasta do projeto no seu editor de código, como o VS Code. Abra o terminal integrado na pasta principal do projeto (onde fica o arquivo package.json) e digite o comando "npm install" para baixar todas as dependências necessárias, que são o Express, o MySQL2, o Dotenv e o Cors.

3. Configuração das variáveis de ambiente
  Na mesma pasta raiz do projeto, crie um arquivo chamado ".env" e preencha com os dados de acesso do seu banco e a porta do servidor. Você deve definir as variáveis PORT (por exemplo, 3002), DB_HOST (localhost), DB_USER (geralmente root), DB_PASSWORD (a senha que você criou no MySQL), DB_DATABASE (devdb) e DB_PORT (3306). Lembre-se de nunca enviar esse arquivo para repositórios públicos no GitHub.

4. Execução do servidor
  Para iniciar o servidor localmente, volte ao terminal na pasta raiz e execute o comando "npm run watch" (ou "node --watch src/server.js"). Se tudo estiver certo, aparecerá no terminal a mensagem avisando que o servidor MySQL está rodando em localhost na porta 3002.

5. Testes da aplicação
  Com o servidor ativo, você já pode testar a aplicação usando o ReqBin ou o navegador no endereço http://localhost:3002. Para listar os usuários, basta fazer uma requisição do tipo GET na rota principal. Para cadastrar alguém, faça uma requisição POST na mesma rota enviando um JSON com "nome" e "email". Para atualizar um cadastro, use o método PUT adicionando o ID do usuário na URL (como http://localhost:3002/4) junto com os novos dados em JSON. E para apagar um registro, basta enviar uma requisição DELETE informando o ID do usuário na URL.
