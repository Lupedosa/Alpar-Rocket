function random(a, b){

    return Math.floor(Math.random() * ((a - b) + 1) + b);

}

const tarefas = random(10, 5);

function geraMedia(a){

    let soma = 0;

    for(let i = 0; i < a; i++){

        let nota = random(10,0);

        if(nota % 2 != 0){
            nota = nota * 2;
        }

        soma = soma + nota;

    }
    
    let resultado = soma / a

    if(resultado > 8){

        resultado = resultado + 2;

    }

    return Number(resultado.toFixed(2));

}

let dados = [
    ["Ana"],
    ["Carlos"],
    ["Pedro"],
    ["Bruno"],
    ["Rafael"]
    ];

let maior = -Infinity, menor = Infinity, maiorDado = null, menorDado = null;

for(i = 0; i < dados.length; i++){

    dados [i] [1] = geraMedia(tarefas);

    if(dados [i] [1] > maior){

        maior = dados [i] [1];

        maiorDado = dados [i];

    }
    if(dados [i] [1] < menor){

        menor = dados [i] [1];

        menorDado = dados [i];

        console.log(dados [i][1])

    }

}

console.log("Segue abaixo os nomes e médias de cada membro do time:\n")

for(i = 0; i < dados.length; i++){

    console.log(dados[i].join(" - "));

}

console.log("\n\nMembro com a média mais alta:\n"+maiorDado[0]+", com a nota média: "+maiorDado[1])
console.log("\n\nMembro com a média mais baixa:\n"+menorDado[0]+", com a nota média: "+menorDado[1])