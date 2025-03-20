let nomesDosAmigos = [];
let campoTexto = document.getElementById("amigo");
campoTexto.value = "";


function adicionarAmigo(){

    if(campoTexto.value == ""){

        alert("Por favor, insira um nome");

    } else if(nomesDosAmigos.includes(campoTexto.value)) {
        alert(`${campoTexto.value} já está na lista`);
        campoTexto.value = "";

    } else{
        nomesDosAmigos.push(campoTexto.value);
        campoTexto.value = "";

    }

    atualizarLista();

}


function atualizarLista(){

    let campoLista = document.getElementById("listaAmigos");
    campoLista.innerHTML = "";

    for(let i = 0; i < nomesDosAmigos.length; i++){

        let li = document.createElement("li");
        li.textContent = nomesDosAmigos[i];
        campoLista.appendChild(li);

    }

}


function sortearAmigo(){

    if(nomesDosAmigos.length == 0){

        alert("Não há nomes cadastrados!");

        return;

    }

    let indiceAmigo = parseInt(Math.random() * nomesDosAmigos.length);
    let amigoSecreto = nomesDosAmigos[indiceAmigo];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSecreto}</strong>`;

}