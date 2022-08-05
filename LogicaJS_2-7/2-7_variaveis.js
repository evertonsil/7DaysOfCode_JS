/*
    Variáveis | 2-7
*/

let nome = prompt ("Qual o seu nome?");
let idade = prompt ("Quantos anos você tem?");
let qualLinguagem = prompt ("Qual linguagem de programação você está estudando?");

let fraseResultado = (`Olá ${nome}, você tem ${idade} anos e já está estudando ${qualLinguagem}!`);

alert (fraseResultado);

let voceGosta = prompt(`Ahh que legal! E você gosta de estudar ${qualLinguagem}? \nDigita 1 caso a resposta for SIM e 2 para NÃO`);

if (voceGosta == 1){
    mensagem = ("Muito bom! Continue estudando e você terá muito sucesso");
}

else if (voceGosta == 2){
    mensagem = ("Ahh que pena... Já tentou aprender outras linguagens?");
}

else{
    mensagem = ("Por favor digite uma opção válida.");
}

alert (mensagem);



