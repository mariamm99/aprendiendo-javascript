{
    let divPeso, divEstado, imgEstado, butonComer, butonJugar, butonDormir, butonDescansar;

    document.addEventListener("DOMContentLoaded", function () {


        butonComer = document.getElementById("comer");
        butonComer.addEventListener("click", comer);

        butonJugar = document.getElementById("jugar");
        butonJugar.addEventListener("click", jugar);

        butonDormir = document.getElementById("dormir");
        butonDormir.addEventListener("click", dormir);

        butonDescansar = document.getElementById("descansar");
        butonDescansar.addEventListener("click", descansar);

        divPeso = document.getElementById("divPeso");
        divEstado = document.getElementById("divEstado");
        imgEstado = document.getElementById("imgEstado");

        document.addEventListener("mouseover", muestraEdad);

        cambioEstado();

    });


    function comer() {
        gato.come();
        cambioEstado();
    }

    function jugar() {
        gato.juega();
        cambioEstado();
    }

    function dormir() {
        gato.duerme();
        cambioEstado();
    }

    function descansar() {
        gato.espera();
        cambioEstado();
    }

    function cambioEstado() {
        divPeso.innerHTML = `Peso: ${gato.peso}`;
        divEstado.innerHTML = `Estado: ${gato.estado}`;
        imgEstado.innerHTML = gato.imagen();
        if (gato.estado == "muerto") {

            butonComer.setAttribute("disabled", "disabled");
            butonDescansar.setAttribute("disabled", "disabled");
            butonDormir.setAttribute("disabled", "disabled");
            butonJugar.setAttribute("disabled", "disabled");

        }
    }


    function muestraEdad() {

        overlib(`el gato tiene ${gato.edad()} años `, DELAY, 250, OFFSETX, 15, ABOVE);

    }

}