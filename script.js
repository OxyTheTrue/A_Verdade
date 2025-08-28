const textos = [
  { titulo: "Meu Primeiro Texto", conteudo: "Este é um texto de exemplo. Escreva aqui suas ideias, Émerson!" },
  { titulo: "Reflexões", conteudo: "Outro texto para compartilhar pensamentos ou histórias." }
];

const listaTextos = document.getElementById("textos-lista");

function carregarTextos() {
  textos.forEach(texto => {
    const div = document.createElement("div");
    div.className = "texto-card";
    div.innerHTML = `<h3>${texto.titulo}</h3><p>${texto.conteudo}</p>`;
    listaTextos.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", carregarTextos);