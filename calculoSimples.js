/*
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.
*/

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var valoresPeca1 = lines[0].split(" ");
var codigoPeca1 = parseInt(valoresPeca1[0]);
var numeroPecas1 = parseInt(valoresPeca1[1]);
var valorUnitario1 = parseFloat(valoresPeca1[2]);

var valoresPeca2 = lines[1].split(" ");
var codigoPeca2 = parseInt(valoresPeca2[0]);
var numeroPecas2 = parseInt(valoresPeca2[1]);
var valorUnitario2 = parseFloat(valoresPeca2[2]);

var valorTotal = numeroPecas1 * valorUnitario1 + numeroPecas2 * valorUnitario2;

console.log("VALOR A PAGAR: R$ " + valorTotal.toFixed(2));
