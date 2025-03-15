//let amigo = '';
let listaDeAmigos = [];
//let quantidadeDeAmigos = 0;
let amigoSecreto = gerarAmigoAleatorio();


function adicionarAmigo(){
    listaDeAmigos = document.querySelector('input').value;

    if(listaDeAmigos){
        //quantidadeDeAmigos =+ 1;
        //listaDeAmigos = amigo;
        alert(`${listaDeAmigos} adicionado à lista`);
        limparCampo();
    }else{
        alert('Por favor, insira um nome válido!');
    }
}

function atulizarListaDeAmigos(){
    
    
}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
