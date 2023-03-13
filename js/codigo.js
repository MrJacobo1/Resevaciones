function ninos(){
    let nino = document.getElementById('cant').value;
    let imp = document.getElementById('nin');
    let impr;
    let mostrar = document.getElementById('dat');
    while (imp.firstChild) {
        imp.removeChild(imp.firstChild);
    }
    nino = parseInt(nino)
    switch (nino) {
        case 1:
            impr = 4;
            mostrar.style.display = "inline-block";
            break;
        case 2:
            impr = 3;
            mostrar.style.display = "inline-block";
            break;
        case 3:
            impr = 2;
            mostrar.style.display = "inline-block";
            break;
        case 4:
            impr = 1;
            mostrar.style.display = "inline-block";
            break;
        default:
            mostrar.style.display = "inline-block";
            break;
    }
    for (var i = 0; i < impr; i++) {
        const divElement = document.createElement("div");
        divElement.setAttribute("class","otro");
        const h2Element = document.createElement("h2");
        const h2Text = document.createTextNode("Edad de un niño");
        h2Element.appendChild(h2Text);
        var inputElement = document.createElement("input");
        inputElement.setAttribute("type","text");
        inputElement.setAttribute("id","edad"+i);
        inputElement.setAttribute("placeholder","Ingresa la edad");
        divElement.appendChild(h2Element);
        divElement.appendChild(inputElement);
        document.getElementById('nin').appendChild(divElement);
        /* mostrar.style.display = "inline-block"; */
    }
}
function terminar(){
    let ubica;  
    var i;
    var edad = "0";
    var num_ninos = parseInt(edad);
    let nom = document.getElementById('name').value;
    localStorage.setItem("nombre",nom);
    let correo = document.getElementById('email').value;
    localStorage.setItem("correo",correo);
    let lugar  = document.getElementById('destino').value;
    localStorage.setItem("destino",lugar);
    let habita = document.getElementById('hab').value;
    localStorage.setItem("habitaciones",habita);
    let asiento = document.getElementById('asientos').value;
    localStorage.setItem("asientos",asiento);
    let adult = document.getElementById('cant').value;
    adult = parseInt(adult);
    switch (adult) {
        case 1:
            num_ninos = 4;
            break;
        case 2:
            num_ninos = 3;
            break;
        case 3:
            num_ninos = 2;
            break;
        case 4:
            num_ninos = 1;
            break;
    }
    localStorage.setItem("adultos",adult);
    var edades = new Array(num_ninos);
    for (var x = 0; x < num_ninos; x++) {
        edades[x] = document.getElementById('edad'+x).value;
        console.debug(edades[x]);
    }
    localStorage.setItem("arreglo",JSON.stringify(edades));
    console.log(edades);
    window.location.href = "html/factura.html";
}

















