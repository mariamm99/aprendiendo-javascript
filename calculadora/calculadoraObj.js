{

    const calculadora = {
        numero1: undefined,
        numero2: undefined,
        operador: undefined,
        resetea: false,
        input: undefined,


        init: () => {
            // if (resetea) {
            //     calculadora.numero1 = undefined;
            //     calculadora.numero2 = undefined;
            //     return () => calculadora.input.value = "0";
            // }
            calculadora.input = calculadora.crearCal();
        },

        crearCal: () => {

            let titulo1 = document.createElement("h2");
            titulo1.appendChild(document.createTextNode(`Calculadora`));
            document.body.appendChild(titulo1);

            let cuadroCalculadora = document.createElement("div");
            document.body.appendChild(cuadroCalculadora);


            input2 = document.createElement("input");
            input2.setAttribute("type", "text");
            // input.setAttribute("id", "texto");
            input2.setAttribute("value", "0");
            input2.setAttribute("readonly", "true");

            cuadroCalculadora.appendChild(input2);

            let array = ["CE", "<--", "%", "➕", "7", "8", "9", "➖", "4", "5", "6", "✖️", "1", "2", "3", "➗", "0", "+/-", ",", "="];
            array.forEach(element => {
                cuadroCalculadora.appendChild(calculadora.crearBotones(element));
            });

            return input2;
        },

        crearBotones: (element) => {

            let inputButton;
            //CREA TODOS LOS BOTONES
            inputButton = document.createElement("input");
            inputButton.setAttribute("type", "button");
            inputButton.setAttribute("value", element);
            inputButton.appendChild(document.createTextNode(element));
            inputButton.addEventListener("click", calculadora.comportamiento(element));

            // console.log(calculadora.numero1);
            // console.log(calculadora.numero2);
            return inputButton;
        },

        comportamiento: (valor) => {
            if (/[1-9]/.test(valor)) {
                // console.log(valor);  
                return () => calculadora.numero(valor);
            } else {

                switch (valor) {

                    case "0":
                        return () => calculadora.cero(valor);

                    case ",":
                        return calculadora.coma;

                    case "CE":

                        calculadora.numero1 = undefined;
                        calculadora.numero2 = undefined;
                        return () => calculadora.input.value = "0";

                    case "<--":
                        return calculadora.eliminar;


                    case "%":
                        return () => calculadora.input.value = calculadora.input.value / 100;

                    case "+/-":
                        return calculadora.cambioSigno;

                    case "➗":
                        return calculadora.dividir;

                    case "✖️":
                        return calculadora.mult;


                    case "➖":
                        return calculadora.restar;


                    case "➕":
                        return calculadora.sumar;

                    case "=":
                        return calculadora.igual;

                    default:
                        //console.log(valor);
                        break;
                }
            }
        },

        numero: (valor) => {

            if (calculadora.input.value == "0" || calculadora.resetea) {
                calculadora.resetea = false;
                calculadora.input.value = valor;
                // calculadora.numero1=calculadora.input.value;
            } else {
                calculadora.input.value = calculadora.input.value + valor;
            }

        },

        coma: () => {
            let expresion = /\d+(\.)\d*/g;

            if (!expresion.test(calculadora.input.value)) {
                calculadora.input.value = calculadora.input.value + ".";
            }
        },

        cero: (valor) => {
            if (calculadora.input.value != "0") {
                calculadora.input.value = calculadora.input.value + valor;
            }
        },

        cambioSigno: () => {
            // let expresion = /^\d+([.]\d*)?$/g;

            let num = calculadora.input.value;
            if (num != "0" && num != "0.") {
                console.log(num);
                if (num.startsWith("-")) {
                    calculadora.input.value = num.slice(1);

                } else {
                    calculadora.input.value = '-' + num;
                }
            }
        },

        eliminar: () => {
            resultado = calculadora.input.value;
            resultado = resultado.substring(0, (resultado.length) - 1);
            if (resultado == "") {
                resultado = "0";
            }
            calculadora.input.value = resultado;
        },

        dividir: () => {
            calculadora.resetea = true;
            num = calculadora.input.value;

            if (calculadora.numero1 == undefined) {
                calculadora.numero1 = num;
                calculadora.operador = "d";

            } else {
                calculadora.numero2 = num;
                if (calculadora.numero2 == "0") {
                    calculadora.input.value = "no se puede dividir entre 0";
                } else {
                    calculadora.numero1 = calculadora.numero1 / calculadora.numero2;
                    calculadora.input.value = calculadora.numero1;
                }

                calculadora.numero2 = undefined;
                // calculadora.numero1 = undefined;
            }
        },

        mult: () => {
            calculadora.resetea = true;
            num = calculadora.input.value;

            if (calculadora.numero1 == undefined) {
                calculadora.numero1 = num;
                calculadora.operador = "m";

            } else {
                calculadora.numero2 = num;
                calculadora.numero1 = calculadora.numero1 * calculadora.numero2;
                calculadora.input.value = calculadora.numero1;

                calculadora.numero2 = undefined;
                // calculadora.numero1 = undefined;
            }
        },

        sumar: () => {
            calculadora.resetea = true;

            if (calculadora.numero1 == undefined) {
                calculadora.numero1 = calculadora.input.value;
                calculadora.operador = "s";

            } else {
                calculadora.numero2 = calculadora.input.value;
                calculadora.input.value = parseInt(calculadora.numero1) + parseInt(calculadora.numero2);

                calculadora.numero2 = undefined;
                calculadora.numero1 = calculadora.input.value;
            }
        },

        restar: () => {
            calculadora.resetea = true;
            num = calculadora.input.value;

            if (calculadora.numero1 == undefined) {
                calculadora.numero1 = num;
                calculadora.operador = "r";
            } else {
                calculadora.numero2 = num;
                calculadora.input.value = calculadora.numero1 - calculadora.numero2;

                calculadora.numero2 = undefined;
                calculadora.numero1 = calculadora.input.value;
            }
        },

        igual: () => {
            calculadora.numero2 = calculadora.input.value;
            calculadora.resetea = true;

            if (calculadora.numero1 == undefined) {
                resultado = calculadora.input.value;

            } else {
               // calculadora.numero2 = calculadora.input.value;

                switch (calculadora.operador) {
                    case "d":
                        if (calculadora.numero2 == 0) {
                            resultado = "no se puede dividir entre 0";
                        } else {
                            resultado = calculadora.numero1 / calculadora.numero2;
                        }

                        break;

                    case "m":
                        resultado = calculadora.numero1 * calculadora.numero2;
                        break;

                    case "s":
                        resultado = parseInt(calculadora.numero1) + parseInt(calculadora.numero2);
                        break;

                    case "r":
                        resultado = calculadora.numero1 - calculadora.numero2;
                        break;
                }
            }
            calculadora.input.value = resultado;
            calculadora.numero1 = calculadora.numero2 = undefined;
        },
    }

    document.addEventListener("DOMContentLoaded", calculadora.init);
}