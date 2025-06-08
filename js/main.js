import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPensamentos();

  const form = document.getElementById("pensamento-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const conteudo = document.getElementById("pensamento-conteudo").value.trim();
    const autoria = document.getElementById("pensamento-autoria").value.trim();

    if (!conteudo || !autoria) {
      alert("Preencha todos os campos!");
      return;
    }

    await api.salvarPensamento({ conteudo, autoria });
    form.reset();
    ui.renderizarPensamentos();
  });
});
