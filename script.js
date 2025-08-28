const textos = [
  { titulo: "Meu Primeiro Texto", conteudo: "Este é um texto de exemplo. Escreva aqui suas ideias, Émerson!" },
  { titulo: "Reflexões", conteudo: "Outro texto para compartilhar pensamentos ou histórias." }
];

function carregarLinks() {
  const linksDiv = document.getElementById("artigo-links");
  if (linksDiv) {
    textos.forEach(texto => {
      const link = document.createElement("a");
      link.href = "artigos.html?artigo=" + encodeURIComponent(texto.titulo);
      link.textContent = texto.titulo;
      link.className = "artigo-link";
      linksDiv.appendChild(link);
      linksDiv.appendChild(document.createElement("br"));
    });
  }
}

function carregarTextos() {
  const listaTextos = document.getElementById("textos-lista");
  if (listaTextos) {
    const urlParams = new URLSearchParams(window.location.search);
    const artigoSelecionado = urlParams.get("artigo");
    if (artigoSelecionado) {
      const texto = textos.find(t => decodeURIComponent(artigoSelecionado) === t.titulo);
      if (texto) {
        const div = document.createElement("div");
        div.className = "texto-card";
        div.innerHTML = `<h3>${texto.titulo}</h3><p>${texto.conteudo}</p>`;
        listaTextos.appendChild(div);
      }
    } else {
      textos.forEach(texto => {
        const div = document.createElement("div");
        div.className = "texto-card";
        div.innerHTML = `<h3>${texto.titulo}</h3><p>${texto.conteudo}</p>`;
        listaTextos.appendChild(div);
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  carregarLinks();
  carregarTextos();
});
