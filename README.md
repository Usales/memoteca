![Thumbnail](./thumb.png)

# Memoteca

Memoteca é um aplicativo organizador de pensamentos e frases que permite cadastrar, listar e deletar pensamentos, incluindo informações como conteúdo e autoria.

## 🔨 Funcionalidades do projeto

- **Cadastro de pensamentos:** Permite adicionar novos pensamentos à lista, inserindo informações como conteúdo e autoria.
- **Listagem de pensamentos:** Exibe os pensamentos cadastrados, permitindo visualizar o texto e a autoria.
- **Exclusão de pensamentos:** Permite remover pensamentos da lista com um clique no botão "×" no canto do pensamento.

## ✔️ Técnicas e tecnologias utilizadas

- **JavaScript (ES Modules):** Utilizado para a lógica do aplicativo, com separação de responsabilidades em arquivos como `api.js`, `ui.js` e `main.js`.
- **Fetch API:** Utilizada para realizar requisições HTTP para comunicação com o backend.
- **Node.js:** Plataforma utilizada para executar o ambiente de desenvolvimento.
- **JSON Server:** Utilizado para simular um backend RESTful e facilitar o desenvolvimento e teste das operações CRUD.
- **CSS:** Utilizado para estilização da interface do aplicativo.

## 📁 Link do Figma

Você pode [acessar o figma do projeto aqui](https://www.figma.com/design/Sz1gmmemxqcB3amInL4Ndp/Rebrand-Memoteca-%7C-Curso-CRUD?node-id=148-26&t=FpdmfbiM1i1s6REQ-0).

## 🛠️ Como rodar o projeto

### 1. Instale o JSON Server globalmente (se ainda não estiver instalado):

```bash
npm install -g json-server
```

### 2. Execute o backend

Abra um terminal, navegue até a pasta `backend` e execute:

```bash
json-server --watch db.json --port 3000
```

Acesse o backend localmente em seu navegador:

[http://localhost:3000/pensamentos](http://localhost:3000/pensamentos)

### 3. Execute o frontend

Abra o projeto no Visual Studio Code. Com a extensão Live Server instalada, clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.

Acesse o frontend localmente em seu navegador:

[http://localhost:5500](http://localhost:5500)

---

**Observação:**  
O projeto está organizado em módulos JavaScript para separar as responsabilidades:  
- `api.js` cuida das requisições HTTP para a API.
- `ui.js` gerencia a renderização da interface.
- `main.js` faz a integração entre a interface e a API.

O botão de deletar está disponível em cada pensamento, no canto superior direito, estilizado para melhor experiência do usuário.