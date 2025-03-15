# Form Validation with Cookie Session

Este projeto é um exemplo de validação de formulário utilizando Express, EJS, e sessões de cookies.

## Estrutura do Projeto

```
.gitignore
index.js
package.json
.vscode/
    settings.json
views/
    index.ejs
```

## Dependências

- body-parser: ^1.20.3
- cookie-parser: ^1.4.7
- ejs: ^3.1.10
- express: ^4.21.2
- express-flash: ^0.0.2
- express-session: ^1.18.1
- nodemon: ^3.1.9

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/Benevanio/form-validation-cookie-session.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd form-validation-cookie-session
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

## Uso

Para iniciar o servidor, execute o comando:
```sh
npm run dev
```

O servidor estará rodando em `http://localhost:3000`.

## Funcionalidades

- Validação de formulário com mensagens de erro.
- Armazenamento de dados de sessão utilizando cookies.
- Renderização de páginas com EJS.

## Estrutura de Arquivos

- `index.js`: Configuração do servidor Express e rotas.
- `views/index.ejs`: Template EJS para o formulário.
- `.gitignore`: Arquivos e diretórios ignorados pelo Git.
- `package.json`: Configurações do projeto e dependências.

## Autor

- Benevanio

## Licença

Este projeto está licenciado sob a licença MIT.
