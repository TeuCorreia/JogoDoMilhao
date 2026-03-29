const perguntas = [
  {
    pergunta: "O que é um algoritmo?",
    opcoes: [
      "Um tipo de computador",
      "Uma sequência de passos para resolver um problema",
      "Um programa pronto",
      "Um erro de sistema",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual símbolo representa igualdade em programação?",
    opcoes: ["=", "==", "!=", ">"],
    correta: 1,
  },
  {
    pergunta: "Qual dessas é uma linguagem de programação?",
    opcoes: ["HTML", "CSS", "JavaScript", "Google"],
    correta: 2,
  },
  {
    pergunta: "O que o comando 'if' faz?",
    opcoes: [
      "Repete um código",
      "Cria uma variável",
      "Executa uma condição",
      "Finaliza o programa",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual o resultado de 5 + 3?",
    opcoes: ["6", "7", "8", "9"],
    correta: 2,
  },
  {
    pergunta: "Para que serve uma variável?",
    opcoes: [
      "Guardar informações",
      "Apagar dados",
      "Desligar o computador",
      "Executar um erro",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual estrutura repete várias vezes?",
    opcoes: ["if", "while", "print", "var"],
    correta: 1,
  },
  {
    pergunta: "O que significa 'true'?",
    opcoes: ["Falso", "Erro", "Verdadeiro", "Nulo"],
    correta: 2,
  },
  {
    pergunta: "Qual o resultado de 10 / 2?",
    opcoes: ["2", "3", "5", "10"],
    correta: 2,
  },
  {
    pergunta: "O que o comando 'print' faz?",
    opcoes: [
      "Apaga dados",
      "Mostra algo na tela",
      "Cria variável",
      "Fecha o programa",
    ],
    correta: 1,
  },
];

let acertos = 0;
let erros = 0;

let perguntaAtual = 0;
const premios = [
  1000, 5000, 10000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000,
];

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
    pontuacao = premios[perguntaAtual];
    acertos++;
    alert("Acertou! 💰 Pontuação: " + pontuacao);
  } else {
    erros++;
    alert("Errou! ❌");
  }

  if (perguntaAtual < perguntas.length - 1) {
    perguntaAtual++;
    carregarPergunta();
  } else {
    localStorage.setItem("pontuacao", pontuacao);
    localStorage.setItem("acertos", acertos);
    localStorage.setItem("erros", erros);

    window.location.href = "../arquivoshtml/final.html";
  }
}

carregarPergunta();
