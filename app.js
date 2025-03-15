let amigos = [];
//let listaDeAmigos = [];
//let quantidadeDeAmigos = 0;
let amigoSecreto = gerarAmigoAleatorio();


function adicionarAmigo(){
    let amigo = document.querySelector('input').value;

    if(amigo){
        //quantidadeDeAmigos =+ 1;
        //listaDeAmigos = amigo;
        
        amigos.push(amigo);
        alert(`${amigos} adicionado à lista`);
        limparCampo();
    }else{
        alert('Por favor, insira um nome!');
    }
}

function atulizarListaDeAmigos(){
    
    
}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
