// let nome = "Diogo";
// let idade = 30;

// // CONCATENAÇÃO
// console.log("Nome: " + nome + ", idade: " + idade);

// // INTERPOLAÇÃO
// console.log(`Nome: ${nome}, idade: ${idade}`);

// console.log(typeof nome);
// console.log(typeof idade);


// let soma = "5" + 3; // 53
// let sub = "5" - 3; // 2

// console.log(soma);
// console.log(sub);

// console.log(typeof soma);
// console.log(typeof sub);

// convertendo valores
// let numero = "ab" // string

// let convertido = Number(numero) // converte o valor para number

// console.log(typeof convertido);


// OPERADORES RELACIONAIS

// VALIDA IGUALDADE DE VALOR (SOMENTE VALOR)
// "10" == 10 -> true

// VALIDO IGUALDADE DE VALOR E TIPO DE DADO
// "10" === 10 -> false


// &&
// ||
// !

// let opcao = 2

// switch(opcao) {
//     case 1:
//         hgdhasghd
//         break;
//     case 2:
// }


// // ESTRUTURA DE REPETIÇÃO
// let frutas = ["Maçã", "Banana", "Acerola", "Uva"];

// console.log(frutas);

// frutas.forEach(function(fruta) {
//     console.log(`Fruta: ${fruta}`);
// })

// frutas.forEach(fruta => console.log(`Fruta: ${fruta}`));


// FUNÇÕES NATIVAS JS

// FUNÇÃO MAP()
// Percorre uma lista e cria uma nova lista com base em uma condição

// let numeros = [1, 2, 3, 4]

// let numerosDobrados = numeros.map(function(num) {
//     return num * 2
// })

// // numerosDobrados = [2, 4, 6, 8]
// console.log(numerosDobrados);

// // ou assim:
// // Arrow function com retorno implícito

// let numerosDobradosArrow = numeros.map(num => num * 2);


//FILTER
// Filtra os elementos com base em uma condição

// let numeros = [5, 10, 15, 20];
// let maiorQueDez = numeros.filter(num => num > 10);

// // maiorQueDez = [15, 20]
// console.log(maiorQueDez);


// REDUCE
// Ele reduz os valores de array um para um único valor

// let numeros = [1, 2, 3, 4];
// let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);
// // acumulador inicia em 0 -> inicia em 0 por causa do 0 depois da vírgula.
// // o acumulador soma com o auxiliar até o último valor do array
// // variavel auxiliar 

// console.log(soma);

// FIND
// Retorna o primeiro elemento que atende a condição

// let produtos = [
//     {id: 1, nome: "Teclado", preco: 50}, // cada linha, um produto
//     {id: 2, nome: "Mouse", preco: 30},
//     {id: 2, nome: "Caderno", preco: 30}
// ];

// let item = produtos.find(produto => produto.id === 2);

// console.log(item);

// // diferença entre find e find
// // FIND -> retorna somente o primeiro elemento que ele encontra com a condição
// // FILTER -> retona todos os elementos que encontra com a condição
// // arrow function / função lambda
// let itemFiltrado = produtos.filter(produto => produto.id === 2); // forma resumida

// console.log(itemFiltrado);

// produtos.filter(function(produto) { // forma completa
//     produto.id == 2;
// })

// SPLIT
// Divide a string em partes, transformando em um array

// let frase = "JS é top";
// let palavras = frase.split(" ");

// console.log(palavras);

// TRIM
// Remove spaços no inicio e final de string
// let nome = "      Paulo";
// let nomeLimpo = nome.trim();

// console.log(nome);
// console.log(nomeLimpo);

// INCLUDES
// Verifica se existe um valor dentro de uma lista e retorna um bool

// let frutas = ["maçã", "banana"];
// let frutasIncludes = frutas.includes("maçã");

// console.log(frutasIncludes);

// toLowerCase() -> transforma o texto em minusculo
// toUpperCase() -> transforma o texto em maiusculo
// let nome = "KESSIA";
// let cargo = "instrutor";

// console.log(nome.toLowerCase());
// console.log(cargo.toUpperCase());

// FOREACH
// let nomes = ["Guilherme", "João", "Maria"];

// nomes.forEach(nome => console.log(nome));

// SOME
// Verifica se pelo menos um iem atendde a condição
// retorna bool

// let numeros = [1, 3, 5, 8];
// let temPar = numeros.some(num => num % 2 === 0);
// console.log(temPar);

// // EVERY
// // Verifica se todos os elementos atendem a condição

// let todosPares = numeros.every(num => num % 2 === 0);
// console.log(todosPares);

// SORT
// Ordena os elementos do array

// let numeros = [3, 10, 5, 2, 4];
// let letras = ["c", "a", "x", "h"];

// // para letras

// letras.sort
// console.log(letras);

// // para números
// numeros.sort((a, b) => a - b);
// console.log(numeros);
 
// REVERSE
// Inverte a ordem dos elementos no array
// let numeros = [1, 2, 3];

// numeros.reverse();
// console.log(numeros);

// JOIN
// Junta os elementos de um array em uma string
// let palavras = ["JS", "é", "top"];
// let frase = palavras.join(" ");

// console.log(palavras); 

//ADICIONANDO E REMOVENDO ELEMENTOS DO ARRAY
// PUSH
// POP
// SHIFT
// UNSHIFT
// let lista = ["A", "B"];

// //PUSH -> adiciona elementos no final do array
// lista.push("C"); //adicionando

// // POP -> remove o elemento no final da lista
// lista.pop();

// // SHIFT -> remove elemetos no começo da lista
// lista.shift(); //remove

// // UNSHIFT -> adicionar elementos no inicio da lista
// lista.unshift("A"); //adicionando

// console.log(lista);


// SLICE
// Cria uma copia de uma parte da lista

/*
    array.slice(inicial, final)

    inicial -> onde começa
    final -> onde termina (não inclui a poisção/indice/index)
*/
// let numeros = [1, 2, 3, 4];
// let parte = numeros.slice(1, 3); //posições do array

// console.log(parte);


// SPLICE
// remove ou adiciona elementos em qualquer posição
// let numeros = [1, 2, 3, 4];

/*
    array.splice(index, count, item1, ..., itemX);

    index -> indice(posição do elemento array)
    count -> número de elementos a serem removidos (pode ser 0)
    item1, ..., itemX -> itens a serem adicionados
*/

// // removendo elementos, sem adicionar
// numeros.splice(1, 1); //1 parametro -> a parir da posição no array ------ 2 parametro -> número de elementos a serem excluidos

// console.log(numeros);

// //removendo elementos e adcionando mais dois elementos
// let frutas = ["Banana", "Laranja", "Maçã", "Manga"];

// // frutas.splice(0, 3, "Limão", "Kiwi");

// // adicionando elementos sem remover
// frutas.splice(2, 0, "limão", "Kiwi");
// console.log(frutas);


// REPLACE
// Substitui uma parte da string

/*
    replace("valorProcurado", "valorQueSubstitui")
*/
// let texto = "Olá, mundo!";
// let novoTexto = texto.replace("mundo", "cliente");

// console.log(novoTexto);


// NOSSAS FUNÇÕES
// função comum
// function exibirMensagem()
// {
//     console.log("Bem vinda(o)!");
// }

// exibirMensagem();

// função com parametros
// function cumprimentar(nome)
// {
//     console.log(`Olá, ${nome}`);
// }
// cumprimentar("Anna");
// cumprimentar("Carlos");

// função com mais de um parametro
// function somar(n1, n2)
// {
//     let soma = n1 + n2;
//     console.log(soma);
// }

// somar(7, 3);

// const somar = (n1, n2) => n1 + n2;
// console.log(somar(1, 2));

// PROMPT
// recebe/solicita uma informção do usuário
// o valor recebido pelo prompt() normalmente é string
// let nome = prompt("Digite seu nome");
// console.log(nome);

// // recebendo um número e convertendo
// // Number() -> converte de forma genérica (inteiro ou quebrado)
// let idade = Number(prompt("Digite sua idade"));

// // ParseInt() -> converte o valor para um número inteiro 
// idade = parseInt(prompt("Digite sua idade"));

// // ParseFloat() -> converte o valor para número decimal/ponto flutuante
// idade = parseFloat(prompt("Digite sua idade"));


