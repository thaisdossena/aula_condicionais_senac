        // Exercícios de interpretação de código

       // 1. Leia o código abaixo:

        // const respostaDoUsuario = prompt("Digite o número que você quer testar")
        // const numero = Number(respostaDoUsuario)

        // if (numero % 2 === 0) {
        // console.log("Passou no teste.")
        // } else {
        // console.log("Não passou no teste.")
        // }


        // a) Explique o que o código faz. Qual o teste que ele realiza? Resposta: Verifica se o número é par ou impar.
        // b) Para que tipos de números ele imprime no console "Passou no teste"? Resposta: Números pares
        // c) Para que tipos de números a mensagem é "Não passou no teste"? Resposta: Números impares

        // 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

    // let fruta = prompt("Escolha uma fruta")
    // let preco
    // switch (fruta) {
    //   case "Laranja":
    //     preco = 3.50
    //     break;
    //   case "Maçã":
    //     preco = 2.25
    //     break;
    //   case "Uva":
    //     preco = 0.30
    //     break;
    //   case "Pêra":
    //     preco = 5.50
    //     break;// BREAK PARA O ITEM c.
    //   default:
    //     preco = 5.00
    //     break;
    // }
    // console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


    // a) Para que serve o código acima? Resposta: Informar valores frutas.
    // b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? Resposta: 2.25
    // c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? Resposta: Retorna o valor do default

    // 3. Leia o código abaixo:

    // const numero = Number(prompt("Digite o primeiro número."))

    // if(numero > 0) {
    //   console.log("Esse número passou no teste")
    // 	let mensagem = "Essa mensagem é secreta!!!"
    // }

    // console.log(mensagem)


    // a) O que a primeira linha está fazendo? Resposta: Pedindo ao usuário que digite um número
    // b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? Resposta: Mensagem não foi declarada
    // c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. Resposta: Sim. O console deve estar dentro da função, pois a variável mensagem foi declarada localmente.

    //Exercícios de escrita de código

        // 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
        // a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
        // b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
        // c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

let idade = Number(prompt("Qual é a sua idade?"));

if (idade >= 18) {
  console.log("Você pode dirigir");
} else {
  console.log("Você não pode dirigir");}

    // 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else.

let turno = prompt("Qual é o seu turno de estudos? Digite M para Matutino, V para Vespertino ou N para Noturno.").toUpperCase();

if (turno === "M") {
    console.log("Bom Dia!");
    } else if (turno === "V") {
    console.log("Boa Tarde!");
    } else if (turno === "N") {
    console.log("Boa Noite!");
    } else {
    console.log("Turno inválido. Por favor, digite M para Matutino, V para Vespertino ou N para Noturno.");
}

    // 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

let turno = prompt("Qual é o seu turno de estudo? Digite M para matutino, V para vespertino ou N para noturno.").toUpperCase();

switch (turno) {
    case "M":
    console.log("Bom Dia!");
    break;
    case "V":
    console.log("Boa Tarde!");
    break;
    case "N":
    console.log("Boa Noite!");
    break;
    default:
    console.log("Turno inválido. Por favor, digite M, V ou N.");
}

    // 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

let generoFilme = prompt("Qual é o gênero do filme que vocês vão assistir?").toLowerCase();

let precoIngresso = Number(prompt("Qual é o preço do ingresso?"));

if (generoFilme === "fantasia" && precoIngresso < 15) {
  console.log("Bom filme!");
} else {
  console.log("Escolha outro filme :(");
}

    //Desafios

    // 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

let idade = prompt("Qual a sua idade?");
let acompanhado = prompt("Você está acompanhado? Responda 'sim' ou 'não'.").toLowerCase();

if (idade >= 18 || acompanhado === "sim") {
    let lanchinho = prompt("Qual lanchinho você vai comprar?");

    console.log("Bom filme!");
    console.log("Aproveite o seu " + lanchinho + "!");

} else {
    console.log("Você não pode assistir ao filme.");
    }
    

