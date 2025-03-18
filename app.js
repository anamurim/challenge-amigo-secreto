let amigos = [];
//let listaDeAmigos = [];
//let quantidadeDeAmigos = amigos.length; //Conta quantos itens tem em amigos
let amigoSecreto = gerarAmigoAleatorio();

//Função para adicionar amigos
function adicionarAmigo(){
    const adicionaAmigo = document.getElementById('amigo').value;
    const novoAmigo = adicionaAmigo;


    if(adicionaAmigo == ""){
        alert('Por favor, insira um nome!');
    }else{
        //quantidadeDeAmigos =+ 1
        //listaDeAmigos = amigo;
        
        amigos.push(novoAmigo);
        alert(`${amigos} adicionado à lista`);
        adicionaAmigo.innerHTML  = "";

        atualizarListaDeAmigos();
    }

    if(amigos == novoAmigo){
        alert(`${novoAmigo} já está na lista.`);
    }
}

//Atualizar lista de amigos
function atulizarListaDeAmigos(){
    const listaAmigos = document.getElementById(listaAmigos);

    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        const lista = document.createElement('li');
        lista.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
    
}


/*function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
*/