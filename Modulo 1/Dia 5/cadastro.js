let dados = []
let comando

    
while(comando != 4){

    comando = prompt("Digite 1 para adicionar um novo usuário\nDigite 2 para remover um usuário pelo email\nDigite 3 para exibir todos os usuários cadastrados\nOu digite 4 para encerrar o programa")
    
    if (comando == 1 || comando == 2 || comando == 3) {


        
        if (comando == 1){

            dados.push({
            nome: prompt("Digite o nome do usuário que deseja adicionar"),
            idade:parseInt(prompt("Digite a idade do usuário que deseja adicionar")),
            email: prompt("Digite o email do usuário que deseja adicionar"),
            })
            
            alert("Usuário " + dados[dados.length - 1].nome + " adicionado à lista!");

            
        } else if (comando == 2) {                                          

            if (dados.length > 0) {

                let listaCadastros = dados.map(usuario => `Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}\n`)

                let email = prompt(`Digite o email do usuário que deseja remover\n\n${listaCadastros}`);
                
                let index = dados.findIndex(usuario => usuario.email === email)
                                
                if(index !== -1){

                    dados.splice(index, 1)

                    alert(`Usuário com email ${email} removido`)

                }else{

                    alert("Email inválido")
                }

            } else {
                alert("Nenhum usuário cadastrado");
            }



        } else if (comando == 3) {

            if (dados.length > 0) {

                let listaCadastros = dados.map(usuario => `Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}\n`)

                alert(`Usuários cadastrados:\n\n${listaCadastros.join("")}`);

            } else {

                alert("Nenhum usuário cadastrado.");

            }
        }

    } else if (comando == 4) {

        break;

    } else {

        comando = prompt("Por favor, digite um comando válido")

    }
}
