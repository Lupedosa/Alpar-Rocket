let segredo = Math.round(Math.random()*100);
console.log(segredo)
let numero = Number(prompt("Tente adivinhar qual o número entre 1 e 100!"));
let conseguiu = false;
let tentativas = 1;

while(conseguiu == false){
    if(numero < 1 || numero >100){
         numero = Number(prompt("Um número entre 1 e 100 por gentileza"));
         tentativas++;
    }else if(numero > segredo){
        numero = Number(prompt("Tente um número mais baixo"));
        tentativas++
    }else if(numero < segredo){
        numero = Number(prompt("Tente um número mais alto"));
        tentativas++
    }else if(numero == segredo){
        numero = Number(prompt("Parabéns!!!\nVocê acertou em " + tentativas + " tentativas!"));
        conseguiu == true;
        break;
    }
}