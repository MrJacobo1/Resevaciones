(function(){
    let nombre = localStorage.getItem("nombre");
   
    let correo = localStorage.getItem("correo");
    
    let habitaciones = localStorage.getItem("habitaciones");
    
    let asientos  = localStorage.getItem("asientos");
    
    let adultos = localStorage.getItem("adultos");
    
    let ubicacion = localStorage.getItem("destino");

    var ninos = JSON.parse(localStorage.getItem("arreglo"));
    console.log(ninos);
    var lista = "";
    for (let i = 0; i < ninos.length; i++) {
        lista += "<br> Edad de niño " + (i+1) +": "+ ninos[i];
    }
    switch (ubicacion) {
        case "1":
            document.getElementById('resultado').innerHTML ="Nombre del cliente: "+ nombre +
            "<br>"+"Correo electronico: "+correo+
            "<br>"+"La ubicacion a viajar es: Leon"+
            "<br>"+"El numero de habitaciones: "+habitaciones+
            "<br>"+"El numero de asientos: "+asientos+
            "<br>"+"El numero de adultos que van a asistir: "+adultos
            + lista;
            break;
        case "2":
            document.getElementById('resultado').innerHTML ="Nombre del cliente: "+ nombre +
            "<br>"+"Correo electronico: "+correo+
            "<br>"+"La ubicacion a viajar es: Ciudad de mexico"+
            "<br>"+"El numero de habitaciones: "+habitaciones+
            "<br>"+"El numero de asientos: "+asientos+
            "<br>"+"El numero de adultos que van a asistir: "+adultos
            + lista;
            break;
        default:
            break;
    }
})();