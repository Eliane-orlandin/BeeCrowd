/*
Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:
Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.
Entrada
O arquivo de entrada contém três valores inteiros.
Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".
*/

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var valores = lines[0].split(" ");
var a = parseInt(valores[0]);
var b = parseInt(valores[1]);
var c = parseInt(valores[2]);

var maiorAB = (a + b + Math.abs(a - b)) / 2;

var maior = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(maior + " eh o maior");
