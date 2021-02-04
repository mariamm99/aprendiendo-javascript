{
   //elemento numero
    let numero;
    //variables para guardar lo pulsado
    let numero1;
    let numero2;
    let operacion;
    

    document.addEventListener("DOMContentLoaded", function () {

        let titulo1 = document.createElement("h2");
        titulo1.appendChild(document.createTextNode(`Calculadora`));
        document.body.appendChild(titulo1);

        let cuadroCalculadora = document.createElement("div");
        document.body.appendChild(cuadroCalculadora);


        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "texto");
        input.setAttribute("value", "0");
        input.setAttribute("readonly", "true");
      
        cuadroCalculadora.appendChild(input);

        array = ["CE", "<--", "%", "➕", "7", "8", "9", "➖", "4", "5", "6", "✖️", "1", "2", "3", "➗", "0", "+/-", ",", "="]

        let inputButton;

        //CREA TODOS LOS BOTONES
        array.forEach(element => {
            inputButton = document.createElement("input");
            inputButton.setAttribute("type", "button");
            inputButton.setAttribute("value", element);
            
            // inputButton.setAttribute("readonly");
            // inputButton.setAttribute("id", element);
            inputButton.appendChild(document.createTextNode(element));

            cuadroCalculadora.appendChild(inputButton);

            inputButton.addEventListener("click", valor);
        });

        numero = document.getElementById("texto");
    });


    function valor() {


        if (numero.value == "0") {
            resultado = 0;
        } else {
            resultado = numero.value;
        }

        if (numero2 != null) {
            
            numero1 = null;
            numero2 = null;
        }

        switch (this.value) {
            case "1":
                resultado = resultado + 1;
                break;

            case "2":
                resultado = resultado + 2;
                break;

            case "3":
                resultado = resultado + 3;
                break;

            case "4":
                resultado = resultado + 4;
                break;

            case "5":
                resultado = resultado + 5;
                break;

            case "6":
                resultado = resultado + 6;
                break;

            case "7":
                resultado = resultado + 7;
                break;

            case "8":
                resultado = resultado + 8;
                break;

            case "9":
                resultado = resultado + 9;
                break;

            case "0":
                resultado = resultado + esCero();
                break;

            case ",":
                resultado = resultado + coma();
                break;

            case "CE":
                resultado = "0";
                numero1 = null;
                numero2 = null;
                break;

            case "<--":
                resultado = eliminar();
                break;

            case "%":
                resultado = resultado / 100;
                break;
                
            case "+/-":
                resultado = cambioSigno();
                break;

            case "➗":
                resultado = dividir();
                break;

            case "✖️":
                resultado = mult();
                break;

            case "➖":
                resultado = restar();
                break;

            case "➕":
                resultado = sumar();
                break;


            case "=":
                resultado = igual();
                break;

            default:
                // console.log(resultado);
                break;
        }

        numero.value = resultado;
    }

    function esCero() {

        switch (numero.value) {
            case "0":
                return "";

            default:
                return "0";
        }
    }

    function coma() {
        //si ya existe una coma no dejar poner mas
        let expresion = /\d+(\.)\d*/g;

        if (expresion.test(numero.value)) {
            return "";
        // } else if (numero.value == "") {
        //     return "0,"
        }
        return ".";
    }

    function cambioSigno() {

        let expresion = /\d+([.]\d*)?/g;
        let num = numero.value;

        if (num==0) {
            return "0";
        }

        if (expresion.test(num)) {
            return "-" + num;
        }
        return num.substring(1, num.length);

    }

    function dividir() {
        resultado = input.value;

        if (numero1 == null) {
            numero1 = resultado;
            operacion = "d";
            //let borrar=true;
            //return resultado;
            return "0";
        } else {
            numero2 = resultado;
            if (numero2==0) {
                return "no se puede dividir entre 0";
            }
            return numero1 / numero2;
        }
    }

    function sumar() {
        resultado = numero.value;

        if (numero1 == null) {
            numero1 = resultado;
            operacion = "s";
            // let borrar=true;
            // return resultado;
            return "0";
        } else {
            numero2 = resultado;
            return parseInt(numero1) + parseInt(numero2);
        }

    }

    function restar() {
        resultado = numero.value;

        if (numero1 == null) {
            numero1 = resultado;
            operacion = "r";
            // let borrar=true;
            // return resultado;
            return "0";
        } else {
            numero2 = resultado;
            return numero1 - numero2;
        }
    }

    function mult() {
        resultado = numero.value;

        if (numero1 == null) {
            numero1 = resultado;
            operacion = "m";
            // let borrar=true;
            // return resultado;
            return "0";
        } else {
            numero2 = resultado;
            return numero1 * numero2;
        }
    }


    function igual() {
        numero2 = numero.value;

        if (numero1==null) {
            return numero2;
        }

        switch (operacion) {
            case "d":
                if (numero2==0) {
                    return "no se puede dividir entre 0";
                }
                return numero1 / numero2;

            case "m":
                return numero1 * numero2;

            case "s":
                return parseInt(numero1) + parseInt(numero2);
            case "r":
                return numero1 - numero2;

            default:
                break;
        }
    }

    function eliminar() {
        resultado = resultado.substring(0, (resultado.length) - 1);
        if (resultado =="") {
            return 0;
        }
        return resultado;
        
    }
}