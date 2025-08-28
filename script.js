const textos = [
  { titulo: "O Idealismo da Autonomia: Questionando o Poder, o Conformismo e o Sentido da Existência", conteudo: "Em um mundo cada vez mais interconectado, onde as normas sociais ditam o ritmo da vida cotidiana, surge um idealismo profundo que questiona os pilares da existência humana: a autonomia individual, o valor intrínseco da vida e a estrutura de poder que nos cerca. Esse idealismo não é mero devaneio romântico, mas uma crítica afiada à sociedade contemporânea, ecoando vozes históricas e filosóficas que há séculos alertam para as armadilhas do conformismo. Neste artigo, exploramos como o desejo por liberdade genuína colide com as demandas coletivas, propondo reflexões e alternativas que convidam o leitor a reavaliar sua própria jornada." },
  { titulo: "A Autonomia e o Valor Intrínseco da Vida", conteudo: "Outro texto para compartilhar pensamentos ou histórias." }
  { titulo: "Sociedade, Poder e o Ciclo do Conformismo", conteudo: "A manutenção das estruturas sociais depende de um equilíbrio precário entre autoridade e submissão. Quem detém o poder protege seus interesses, enquanto os subordinados frequentemente aceitam o status quo por medo de represálias ou pela comodidade da rotina estabelecida. Mesmo aqueles que percebem injustiças – desigualdades econômicas, opressões sistêmicas ou explorações laborais – tendem a se conformar, pois mudanças radicais demandam riscos que nem todos estão dispostos a assumir. Um indivíduo que opta por romper com o sistema, vivendo à margem, não derruba o todo sozinho; no entanto, sua escolha expõe a fragilidade da dependência coletiva.Friedrich Nietzsche criticava ferozmente esse conformismo, vendo-o como uma barreira à "vontade de poder" – a força vital que impulsiona o crescimento individual e a superação de mediocridades sociais. Para ele, a tragédia da conformidade reside na perda da individualidade, onde a massa se contenta com a estagnação em nome da segurança. Historicamente, movimentos como o Iluminismo desafiaram monarquias absolutas, mas mesmo ali, o conformismo da maioria perpetuou ciclos de poder, como visto nas revoluções que deram lugar a novas tiranias." },
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
