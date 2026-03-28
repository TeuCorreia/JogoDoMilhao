const perguntas = [
  {
    pergunta:
      "Em programação, uma sequência de instruções executadas na ordem em que aparecem é chamada de:",
    opcoes: ["Repetição", "Sequência", "Condição", "Variável"],
    correta: 1,
  },
  {
    pergunta: "Quais das alternativas não se encaixa como proposição lógica?",
    opcoes: [
      "2+2=45",
      "A Inglaterra é um país",
      "Gosto do churrasco",
      "Conte até 32",
    ],
    correta: 3,
  },
  {
    pergunta:
      "Considere o algoritmo: se número > 10 então mostrar 'Grande', senão mostrar 'Pequeno'. Se número = 10, o programa mostrará:",
    opcoes: ["Grande", "Pequeno", "Erro", "Nada"],
    correta: 1,
  },
  {
    pergunta: "Determine o valor de X: x = 5 | x = x + 3 | mostrar x",
    opcoes: ["3", "5", "8", "15"],
    correta: 2,
  },
  {
    pergunta:
      "Qual é o principal problema no algoritmo: x = 10 | se x > 5 mostrar 'A' senão mostrar 'B'?",
    opcoes: [
      "Falta identação/bloco",
      "A variável não existe",
      "O número é inválido",
      "O programa está correto",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Um programa deve mostrar 'Aprovado' apenas se: nota ≥ 7 e frequência ≥ 75%. Qual condição correta?",
    opcoes: [
      "nota >= 7 OU frequencia >= 75",
      "nota >= 7 E frequencia >= 75",
      "nota > 7 OU frequencia > 75",
      "nota >= 7",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Observe o algoritmo: x = 2 | enquanto x < 10 { x = x * 2; mostrar x } Quais números podem ser exibidos?",
    opcoes: ["4 8 16", "2 4 8", "4 8", "2 4 8 16"],
    correta: 0,
  },
  {
    pergunta:
      "Considere o algoritmo: x = 2, y = 3, z = 0 | enquanto x < 10 { z = z + y; x = x + 2; y = y + 1 } mostrar z. Qual o valor final?",
    opcoes: ["15", "18", "21", "25"],
    correta: 1,
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
      localStorage.setItem("pontuacao", pontuacao);
      window.location.href = "../arquivoshtml/final.html";
    }
  } else {
    alert("Errou! 💥 Você perdeu tudo!");

    pontuacao = 0;
    perguntaAtual = 0;
    carregarPergunta();
  }
}

carregarPergunta();
