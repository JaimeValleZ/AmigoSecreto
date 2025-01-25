// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo (){
    let valorUsuario = document.getElementById("amigo").value;
    console.log(valorUsuario);

    if (valorUsuario === ""){
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(valorUsuario);
        limpiarCampo();
        actualizarLista();
        
    }
}



function actualizarLista(){
    console.log(amigos);
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        let contenido = (amigos[i]);
        li.appendChild(document.createTextNode(contenido));
        lista.appendChild(li);
    }
}


function limpiarCampo(){
    let campoEntrada = document.getElementById("amigo");
    campoEntrada.value = "";
}

