/*
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:
Distancia =
Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.
Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.
*/

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var line1 = lines[0].split(" ");
var x1 = parseFloat(line1[0]);
var y1 = parseFloat(line1[1]);

var line2 = lines[1].split(" ");
var x2 = parseFloat(line2[0]);
var y2 = parseFloat(line2[1]);

var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(distancia.toFixed(4));
