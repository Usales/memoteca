import api from "./api.js";

const ui = {
  async renderizarPensamentos() {
    const listaPensamentos = document.getElementById("lista-pensamentos");
    listaPensamentos.innerHTML = ""; // Limpa antes de renderizar

    try {
      const pensamentos = await api.buscarPensamentos();
      pensamentos.forEach(pensamento => {
        ui.adicionarPensamentoNaLista(pensamento);
      });
    } catch {
      alert('Erro ao renderizar pensamentos');
    }
  },

  adicionarPensamentoNaLista(pensamento) {
    const listaPensamentos = document.getElementById("lista-pensamentos");
    const li = document.createElement("li");
    li.setAttribute("data-id", pensamento.id);
    li.classList.add("li-pensamento");

    const iconeAspas = document.createElement("img");
    iconeAspas.src = "assets/imagens/aspas-azuis.png";
    iconeAspas.alt = "Aspas azuis";
    iconeAspas.classList.add("icone-aspas");

    const pensamentoConteudo = document.createElement("div");
    pensamentoConteudo.textContent = pensamento.conteudo;
    pensamentoConteudo.classList.add("pensamento-conteudo");

    const pensamentoAutoria = document.createElement("div");
    pensamentoAutoria.textContent = pensamento.autoria;
    pensamentoAutoria.classList.add("pensamento-autoria");

    // Botão de deletar (apenas um "×")
    const botaoDeletar = document.createElement("button");
    botaoDeletar.textContent = "×";
    botaoDeletar.title = "Deletar pensamento";
    botaoDeletar.classList.add("botao-deletar");
    botaoDeletar.addEventListener("click", async () => {
      await api.deletarPensamento(pensamento.id);
      ui.renderizarPensamentos();
    });

    li.appendChild(iconeAspas);
    li.appendChild(pensamentoConteudo);
    li.appendChild(pensamentoAutoria);
    li.appendChild(botaoDeletar);
    listaPensamentos.appendChild(li);
  }
};

export default ui;

/* Exemplo de estilo */
/* filepath: c:\Users\Gabriel\Desktop\ALURA\3781-javascript\css\styles.css */
