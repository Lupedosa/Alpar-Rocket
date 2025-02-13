let preco = 200
const desconto = Math.random() < 0.5 //chance aleatória. 0.5 = 50/50

const ICMS = Math.floor(Math.random() * 14) + 12 // 14 é a diferença de 25 e 12 (ICM máximo e mínimo) +1, e o +12 é a soma do ICMS mínimo para garantir que o valor será igual ou maior que 12 



if(desconto == true){

    let precocomdesconto = preco * 0.90

    let direitoadesconto = "Olha só! Você tem direito a um desconto de 10%! Seu produto ficou R$ " + precocomdesconto + ",00"

    let precofinal = precocomdesconto + (precocomdesconto*(ICMS / 100))

    console.log("Seu produto custa R$ " + preco + ",00 | ")
    console.log(direitoadesconto)
    console.log("TAXADOO!!! Seu produto agora custa R$ " + precofinal + ",00 (ICMS de " + ICMS + "%)")

}else{

    let direitoadesconto = "Sem direito a desconto dessa vez. Quem sabe na próxima!"

    let precofinal = preco + (preco*(ICMS / 100))

    console.log("Seu produto custa R$ " + preco + ",00")
    console.log(direitoadesconto)
    console.log("TAXADOO!!! Seu produto agora custa R$ " + precofinal + ",00 (ICMS de " + ICMS + "%)")


}


