
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("crear").addEventListener("click",crear);
   
   
});

function crear(){    

      ventana(new Gato(
        document.getElementById("nombreIn").value, document.getElementById("fechaIn").value, 
        document.getElementById("razaIn").value, document.getElementById("pesoIn").value
        ));

        divPeso=document.getElementById("divPeso");
        divEstado=document.getElementById("divEstado");

        
    
}

function ventana(gato){
    configuracionVentana = "top = 0, left = 0, width = 1000, height = 1000";
    let ventana = window.open(" ", gato.nombre, configuracionVentana);
    ventana.document.open();

    
    ventana.document.write(
        `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${gato.nombre}</title>
            <meta name="author" content="María Moreno Muñoz">
            <script src="manejarGato.js"></script>
            <script src="Gato.js"></script>
            <script src="overlib.js"></script>

        </head>
        
        <body>
        <p>Gato: ${gato.nombre}</p>

        <div id="imgEstado"></div>

        <div id="divPeso">Peso:  </div>
        <div id="divEstado">Estado:  </div>

        <p><input type="button" value="comer" name="comer" id="comer"></p>
        <p><input type="button" value="jugar" name="jugar" id="jugar"></p>
        <p><input type="button" value="dormir" name="dormir" id="dormir"></p>
        <p><input type="button" value="descansar" name="descansar" id="descansar"></p>

        
        </html>`);

    ventana.document.close();
    ventana.gato = gato;

}
