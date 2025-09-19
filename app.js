let nombresAmigos = []

function agregarAmigo() {
    let nombre = document.querySelector("#amigo").value;
    const lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    if (nombre.trim() === "") {
        alert("Ingrese un nombre");
    } else {
        if (nombresAmigos.includes(nombre)) {
            alert("Ese amigo ya está en la lista");
        } else {
            nombresAmigos.push(nombre);
            for (let i = 0; i < nombresAmigos.length; i++) {
                lista.innerHTML += `<li> ${nombresAmigos[i]} </li>`;
            }
        }
        
    }
    document.querySelector("#amigo").value = "";
}

function sortearAmigo() {
    if (nombresAmigos.length <= 1) {
        alert("Ingrese al menos 2 amigos para sortear");
    } else {
        let indiceSorteado = Math.floor(Math.random()*nombresAmigos.length);
        nombreSorteado = nombresAmigos[indiceSorteado];
        let listaResultado = document.querySelector("#resultado");
        listaResultado.innerHTML = `<li>${nombreSorteado}</li>`;
    }
}