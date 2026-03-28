const perguntas = [
  {
    pergunta: "Qual é o planeta mais próximo do Sol?",
    opcoes: ["Vênus", "Marte", "Mercúrio", "Júpiter"],
    correta: 2,
  },
  {
    pergunta: "Quanto é 2 + 2?",
    opcoes: ["3", "4", "5", "6"],
    correta: 1,
  },
  {
    pergunta: "Qual a capital do Brasil?",
    opcoes: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    correta: 2,
  },
];

let perguntaAtual = 0;
let pontuacao = 0;

const perguntaBox = document.querySelector(".pergunta-box");
const alternativas = document.querySelectorAll(".alternativa");

function carregarPergunta() {
  let q = perguntas[perguntaAtual];

  perguntaBox.textContent = q.pergunta;

  alternativas.forEach((alt, index) => {
    alt.textContent = index + 1 + ") " + q.opcoes[index];
  });
}

alternativas.forEach((alt, index) => {
  alt.addEventListener("click", () => {
    verificarResposta(index);
  });
});

function verificarResposta(respostaSelecionada) {
  let q = perguntas[perguntaAtual];

  if (respostaSelecionada === q.correta) {
    pontuacao += 100000;

    if (perguntaAtual < perguntas.length - 1) {
      alert("Acertou! 💰");
      perguntaAtual++;
      carregarPergunta();
    } else {
      alert("Você ganhou! 🏆 Total: R$ " + pontuacao);
      window.location.href = "../index.html";
    }
  } else {
    alert("Errou! 💥 Você perdeu tudo!");

    pontuacao = 0;
    perguntaAtual = 0;
    carregarPergunta();
  }
}

carregarPergunta();
