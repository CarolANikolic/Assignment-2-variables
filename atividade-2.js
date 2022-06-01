//Crie um algoritmo que calcule a velocidade média de um veículo e retorne o resultado no console.

//cria uma variavel para guardar o valor da distancia percorrida.
let distanciaPercorrida = 270;
//cria uma variavel para guardar o valor do tempo gasto
let tempoGasto = 3;
//cria uma variavel para guardar o resutado da divisao entre a distacia percorrida e o tempo gasto, our seja, a velocidade media
let velocidadeMedia = distanciaPercorrida/tempoGasto;

//comando para aparecer no console em uma string interpolation.
console.log(`A velocidade média que fiz o trajeto é de ${velocidadeMedia} km/h.`)