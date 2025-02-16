let listaDeCompras = []
let comando
let item



while (comando != 4) {

    comando = prompt("Digite 1 para adicionar um item da lista\nDigite 2 para remover um item da lista\nDigite 3 para exibir a sua lista de compras\nOu digite 4 para encerrar o programa")
    
    if (comando == 1 || comando == 2 || comando == 3) {
        
        if (comando == 1) {

            item = prompt("Digite o item que deseja adicionar à lista")
            listaDeCompras.push(item)
            alert("Item " + item + " adicionado à lista!");

        } else if (comando == 2) {

            if (listaDeCompras.length > 0) {

                item = prompt("Digite o nome do item que deseja remover\n"+listaDeCompras.join("\n"));
                
                if(listaDeCompras.includes(item)){

                    let index = listaDeCompras.indexOf(item)
                    listaDeCompras.splice(index, 1)
                    alert("Item "+item+" removido!")

                }else{
                    alert("Item inválido")
                }

            } else {
                alert("Sua lista de compras está vazia.");
            }


        } else if (comando == 3) {

            if (listaDeCompras.length > 0) {
                alert("Sua lista de compras: \n" + listaDeCompras.join("\n"));
            } else {
                alert("Sua lista de compras está vazia.");
            }
        }

    } else if (comando == 4) {

        break;

    } else {

        comando = prompt("Por favor, digite um comando válido")

    }
}