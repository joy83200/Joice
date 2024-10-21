const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "voçê separa seu lixo reciclável do lixo comum?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "facilita o processo de reciclagem e reutilização de materiais"
            },
            {
                texto: "não",
                afirmacao: "isso pode contribuir para a poluição e desperdicio e recursos"
            }
        ]
    },
    {
        enunciado: "voçê utiliza produtos feitos de materiais reciclados?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "isso apoia a economia circular e reduz a demanda por novos recursos"
            },
            {
                texto: "não",
                afirmacao: "isso pode limitar as opções disponíveis paraum consumo mais sustentável"
            }
        ]
    },
    {
        enunciado: "voçê está ciente da importância da reciclagem na preservação ambiental?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "a reciclagem ajuda a conservar energia e recursos naturais"
            },
            {
                texto: "não",
                afirmacao: "não entender a reciclagem pode resultar em práticas de descarte inadequadas"
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você é uma pessoa que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
