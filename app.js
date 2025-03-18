let amigos = [];

//Função para adicionar amigos
function adicionarAmigo(){
    const adicionaAmigo = document.getElementById('amigo');
    const novoAmigo = adicionaAmigo.value.trim();

    if(novoAmigo == ""){
        alert('Por favor, insira um nome!');
        return;
    }
    
    if(amigos == novoAmigo){
        alert(`${novoAmigo} já está na lista.`);
        adicionaAmigo.value = "";
        return;
    }
    
    amigos.push(novoAmigo);
    ///alert(`${novoAmigo} adicionado à lista.`);
       
    adicionaAmigo.value = "";
    atualizarLista();
}

//Atualizar lista de amigos
function atulizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigos.length == 0){
        alert("Não há nomes cadastrados!");
        return;
    }

    const indiceAmigo = parseInt(Math.random() * amigos.length);

    const amigoSecreto = amigos[indiceAmigo];

    const resultado = document.getElementById('resultado');

    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSecreto}</strong>`;
}