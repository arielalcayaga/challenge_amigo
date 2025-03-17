// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigoSecreto = [];

function agregarAmigo() {
let amigoNormal = document.getElementById('amigo').value;
    if (!amigoNormal) {
        alert ('Por favor, ingrese un nombre válido.');
    } else {
    if ((listaAmigoSecreto.indexOf(amigoNormal) > -1))
         {
    alert (`Ya ingresaste a ${amigoNormal}`)
    document.getElementById('amigo').value = '';
        } else {
            listaAmigoSecreto.push(amigoNormal)
            document.getElementById('amigo').value = '';
            document.getElementById('listaAmigos').innerHTML = '';
            document.getElementById('listaAmigos').innerHTML = `<li>${listaAmigoSecreto.join('<li>')}`;
            document.getElementById('resultado').innerHTML = '';
            
    }
    }
}

function sortearAmigo() {
    if (listaAmigoSecreto.length == 0) {
        alert ('No has ingresado a ningún amigo aún');
        document.getElementById('amigo').value = ''; 
    } else {
    document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${listaAmigoSecreto[Math.floor(Math.random()*(listaAmigoSecreto.length))]}`;
    document.getElementById('listaAmigos').innerHTML = '';
listaAmigoSecreto = [];
}
}