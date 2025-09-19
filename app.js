let nombresAmigos = []  //Creo el array

function agregarAmigo() {
    let nombre = document.querySelector("#amigo").value;    //Capturo el nombre ingresado por el usuario
    const lista = document.querySelector("#listaAmigos");   //Selecciono la lista
    lista.innerHTML = "";   //Vacio la lista
    if (nombre.trim() === "") {     //Borra espacios para comparar
        alert("Ingrese un nombre");
    } else {
        if (nombresAmigos.includes(nombre)) {
            alert("Ese amigo ya está en la lista");     //Si el amigo ya está en la lista, no lo agrega
        } else {
            nombresAmigos.push(nombre);
            for (let i = 0; i < nombresAmigos.length; i++) {
                lista.innerHTML += `<li> ${nombresAmigos[i]} </li>`;    //Lee en forma de lista cada elemento del array
            }
        }
        
    }
    document.querySelector("#amigo").value = "";    //Vacio al terminar de escribir el nombre.
}

function sortearAmigo() {
    if (nombresAmigos.length <= 1) {
        alert("Ingrese al menos 2 amigos para sortear");    //Si hay un solo elemento (amigo) pido al menos 2 para sortear
    } else {
        let indiceSorteado = Math.floor(Math.random()*nombresAmigos.length);
        nombreSorteado = nombresAmigos[indiceSorteado];
        let listaResultado = document.querySelector("#resultado");
        listaResultado.innerHTML = `<li>${nombreSorteado}</li>`;
    }
}