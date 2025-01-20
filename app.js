var amigos = [];//Vector para almacenar nombres.

//Agregar amigo a la lista
function agregarAmigo() {
    //Capturar valor de entrada
    let amigoNombre = document.getElementById("amigo").value;
    console.log(amigoNombre + " " + "ingresado");
    //Si el nombre es nulo.
    if (validarEntrada(amigoNombre)) {
        //agrega a la lista
        amigos.push(amigoNombre);
        console.log(amigoNombre + " " + "agregado a la lista");
        console.log("Estado actual de la lista: " + amigos);
        //actualizar lista
        actualizarLista();
        //Limpiar campo de entrada
        document.getElementById("amigo").value = "";
    } else {
        //emitir alerta de nombre no valido.
        console.log(amigoNombre + " " + "No es valido");
        alert("Por favor, inserte un nombre.");
    }
}

/*
Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. 
 */
function validarEntrada(entrada) {
    if (entrada.length === 0 || entrada === null) {
        return false;
    } else {
        return true;
    }
}

/*
Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro 
de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
 */
function actualizarLista() {
    //Obtener el elemento de la lista
    lista = document.getElementById("listaAmigos");
    //Limpiar la lista existente
    lista.innerHTML = "";
    //Iterar sobre el arreglo
    for (let index = 0; index < amigos.length; index++) {
        lista.innerHTML += "<li>" + amigos[index] + "</li>";
    }
}

