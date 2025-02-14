function formatarReal(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

 const desconto = Math.random() < 0.5 //chance aleatória. 0.5 = 50/50

 if(desconto == true){
    alert("Olha só! Você tem direito a um desconto de 10%! Que sorte");
    preco = preco * 0.90;
    console.log(desconto)
}


document.getElementById('calculate').addEventListener('click', function () {
    const preco = parseFloat(document.getElementById('preco').value);
    let codigo = document.getElementById('codigo').value;
    const local = document.getElementById('local').value;

    const ICMS = Math.floor(Math.random() * 14) + 12; // 14 é a diferença de 25 e 12 (ICM máximo e mínimo) +1, e o +12 é a soma do ICMS mínimo para garantir que o valor será igual ou maior que 12 

    

    let precoBackup = preco

    

    if (preco > 0 && local === "SP" || local === "RJ" || local === "Outro"){

        if(codigo == "OFERTA15"){
            if(desconto == true){
                alert("Infelizmente, nossos descontos não são acumulativos. Apenas o desconto do seu cupom será considerado :D");
                preco = precoBackup;
                }

            let precocomdesconto = preco * 0.85;

            let total = precocomdesconto + (precocomdesconto * (ICMS / 100));

            switch(local){
                case "SP":
                    total = total + 10
                    break;
                case "RJ":
                    total = total + 20
                    break;
                case "Outro":
                    total = total + 30
                    break;
            }

            alert("Valor do seu produto: " + preco + "\nFrete: " + frete + "\nICMS: " + ICMS + "%\nTotal: " + total);

        }else{

            let direitoadesconto = "Sem direito a desconto dessa vez. Quem sabe na próxima!";
            let total = preco + (preco * (ICMS / 100));

            alert(direitoadesconto);

            let frete;

            switch(local){
                case "SP":
                    frete = 10;
                    total = total + 10;
                    break;
                case "RJ":
                    frete = 20;
                    total = total + 20;
                    break;
                case "Outro":
                    frete = 30;
                    total = total + 30;
                    break;
            }

            alert("Valor do seu produto: " + preco + "\nFrete: " + frete + "\nICMS: " + ICMS + "%\nTotal: " + total);

        }

        

    } else {

        alert("Por favor insira o valor do produto e localidade válida")

    }

});