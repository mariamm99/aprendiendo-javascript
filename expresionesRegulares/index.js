document.addEventListener("DOMContentLoaded", function() {
    //1. Capitaliza
    //escuchar boton enviar de capitaliza:
    document.getElementById("enviarCap").addEventListener("click", capitaliza);
    document.getElementById("enviarInv").addEventListener("click", invierte);
    document.getElementById("enviarCamel").addEventListener("click", camelCase);
    document.getElementById("enviarSinCamel").addEventListener("click", sinCamelCase);
    document.getElementById("enviarFin").addEventListener("click", finaliza);
    document.getElementById("enviarCom").addEventListener("click", comienza);

    document.getElementById("enviarDni").addEventListener("click", () => document.getElementById("resDni").value = dni());
    document.getElementById("enviarMat").addEventListener("click", matricula);
    document.getElementById("enviarCP").addEventListener("click", codPostal);
    document.getElementById("enviarMAC").addEventListener("click", mac);
    document.getElementById("enviarIP").addEventListener("click", ip);




});

//Función capitaliza
function capitaliza() {
    document.getElementById("resCapitaliza").value =
        document.getElementById("capitaliza").value.replace(
            /\b[a-z]/g, match => match.toUpperCase()
        );
}

//Función invierte de mayuscula a minuscula y viciversa
function invierte() {
    document.getElementById("resInvierte").value =
        document.getElementById("invierte").value.replace(
            /[a-zA-Z]/g, match => (match.toLowerCase() === match) ? match.toUpperCase() : match.toLowerCase()
        );
    //!!!!REALIZAR CON TILDES.
    //.replace(/[wñÑáéíóú]/g);
}

//Función camelCase
function camelCase() {
    //pongo los números para que tambien elimine los espacios en caso de que ponga un núme
    document.getElementById("resCamelCase").value = document.getElementById("camelCase").value.replace(
        /\s[a-z0-9]/g, match => match.toUpperCase().trim());
}


//SIN CAMELCASE
function sinCamelCase() {
    document.getElementById("resSinCamel").value =
        document.getElementById("sin-CamelCase").value.replace(
            /[A-Z]/g, match => " " + match.toLowerCase()
            ); //resultado
}



//FINALIZA CON
function finaliza() {
    document.getElementById("resFinaliza").value =
        document.getElementById("finaliza").value.endsWith(
            document.getElementById("result-finaliza").value
        );
}

function comienza() {
    // resultado     comienza    comienza por
    document.getElementById("resComienza").value =
        document.getElementById("comienza").value.startsWith(
            document.getElementById("result-comienza").value
        );
}

function dni() {
    try {

        //letra todas segidas y luego obtener la letra con substring
        let aLetra = "TRWAGMYFPDXBNJZSQVHLCKE";

        let expresion =/^(?<numero>\d{8})(?<letra>[A-Z])$/i.exec(document.getElementById("Dni").value.trim());
        let resto = expresion.groups.numero % 23;
       
        if (aLetra[resto] != (expresion.groups.letra).toUpperCase()) {
            return "la letra no coincide con el número";

        }
        return "dni correcto";


    } catch (error) {
        return "revisa el formato del dni son 8 numeros y 1 letra";
    }

}


function matricula() {
    let matriculaValida, resultado = "";
    //decimal \d 4 veces y3 letras     //ELIMINAR vocal q y ñ
    let expresion =/\b\d{4}([\s\-])?[B-DF-HJ-NP-TV-Z]{3}\b/ig;
    let texto = (document.getElementById("matricula").value).trim();

    while ((matriculaValida = expresion.exec(texto)) !== null) {
        resultado += matriculaValida[0] + " es valida \n";
    }
    document.getElementById("resMatricula").value = resultado;
}

//CONTINUAR POR AQUI
function codPostal() {
    let resultado = "",
        cod;
    //desde 01000 52999
    let expresion = /\b([0-4][0-9]|5[0-2])\d{3}\b/g;
    let texto = document.getElementById("codPostal").value;

    //devuelve las coincidencias y la guarda en myArray
    while ((cod = expresion.exec(texto)) !== null) {
        resultado += cod[0] + " es valida \n";
    }

    document.getElementById("resCodPostal").value = resultado;
}

//CONTINUAR POR AQUI
function mac() {
    let expresion =/^([0-9a-fA-F]{2}[:-]){5}([0-9a-fA-F]{2})$/;
    document.getElementById("resMAC").value = expresion.test(document.getElementById("MAC").value.trim());
}

function ip() {
    let expresion =/^([0-255][.]){3}[0-255]$/;
    document.getElementById("resIP").value = expresion.test(document.getElementById("IP").value.trim());
}