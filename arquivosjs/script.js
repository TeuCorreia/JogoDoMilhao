const perguntas = [

/* Nível 01*/

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
      "Considere um programa que calcula a raiz quadrada de um número x. Qual deve ser a pré-condição para que o programa funcione corretamente?",
    opcoes: [
      "x > 0",
      "x >= 0",
      "x < 0",
      "x pode ser qualquer valor",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Considere o algoritmo: = int a = 5; | int b = 3 | int soma; | soma = a + b; Qual é a pós-condição correta após a execução?",
    opcoes: [
      "a > b",
      "soma = a + b",
      "a = soma",
      "b = soma",
    ],
    correta: 1,
  },

/* Nível 02*/

  {
    pergunta:
      "Considere o algoritmo: if (numero > 10) | { printf('Grande');} | else { printf('Pequeno'); }, o programa mostrará:",
    opcoes: ["Grande", "Pequeno", "Erro", "Nada"],
    correta: 1,
  },
  {
    pergunta: "Determine o valor de X: int x = 5 | x = x + 3 | printf('%d', x);",
    opcoes: ["3", "5", "8", "15"],
    correta: 2,
  },
  {
    pergunta:
      "Qual é o principal problema no algoritmo: int x = 10  if (x > 5) printf('A') | else printf('B')?",
    opcoes: [
      "Falta de chaves {} para definir o bloco do if",
      "A variável x não foi declarada",
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
      "Considere o cálculo da média: media = soma/quantidade; Qual deve ser a pré-condição para evitar erro de execução?",
    opcoes: [
      "soma >= 0",
      "quantidade > 0",
      "soma > quantidade",
      "quantidade >= soma",
    ],
    correta: 1,
  },

/* Nível 03*/

  {
    pergunta:
      "Considere o algoritmo: int i = 1;  int produto = 1; int soma = 0; | while (i <= n) { soma = soma + i; | i = i + 1; Durante a execução do laço, qual é um possível invariante de laço?",
    opcoes: [
      "i <= n",
      "soma >= 0",
      "soma contém a soma dos valores de 1 até i-1",
      "soma = n",
    ],
    correta: 2,
  },
  {
    pergunta:
      "Observe o algoritmo: int x = 2 | while (x < 10) { x = x * 2; printf('%d', x); } Quais números podem ser exibidos?",
    opcoes: ["4 8 16", "2 4 8", "4 8", "2 4 8 16"],
    correta: 0,
  },
  {
    pergunta:
      "Considere de código: int i x = 5; | int y; | y = x +2; | Se a Pré condição é: x > 0 ",
    opcoes: [
      "y > 2",
      "y > 0",
      "y > x",
      "x > y"],
    correta: 0,
  },
  {
    pergunta:
      "Considere o algoritmo: int x = 2, y = 3, z = 0 | while (x < 10) { z = z + y; x = x + 2; y = y + 1 } printf('%d', z); Qual o valor final?",
    opcoes: ["15", "18", "21", "25"],
    correta: 1,
  },
  {
    pergunta:
      "Considere o algoritmo: int i = 1;  int produto = 1; | while (i<=n) { produto = produto * i; i=i+1;} Esse algoritmo calcula o fatorial de n. Qual é a pós-condição correta?",
    opcoes: [
      "Produto = i",
      "Produto = i!",
      "Produto = (i-1)!",
      "Produto =n!"],
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
