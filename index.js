const area = document.querySelector("canvas").getContext("2d");

area.lineWidth = 10;
area.strokeStyle = "#000000";

// cabeza
area.beginPath();
area.fillStyle = "#fffff";
area.lineWidth = 5;
area.arc(182,100,30,0,2*Math.PI);
area.fill();
area.closePath();

// tronco cuerpo
area.beginPath();
area.lineWidth = 15
area.moveTo(182, 100);
area.lineTo(182, 230);
area.stroke();
area.closePath();

//brazo derecho
area.beginPath();
area.lineWidth = 10
area.moveTo(220, 220);
area.lineTo(180, 120);
area.stroke();
area.closePath();

//pierna derecha
area.beginPath();
area.lineWidth = 10
area.moveTo(215, 300);
area.lineTo(185, 220);
area.stroke();
area.closePath();

// brazo izquierdo
area.beginPath();
area.lineWidth = 10
area.moveTo(140, 210);
area.lineTo(190, 105);
area.stroke();
area.closePath();

//pierna izquierda
area.beginPath();
area.lineWidth = 10
area.moveTo(150, 300);
area.lineTo(180, 220);
area.stroke();
area.closePath();


//LOGICA DEL JUEGO

let palabra = "quehace";


for(let i = 0; i < palabra.length; i++){
    letras(palabra.substring(i,i+1));
    guiones();
}

function letras(letra){
    let etiqueta = document.createElement("a");
    let contenido = document.createTextNode(letra);
    
    etiqueta.appendChild(contenido);

    const cajaLetras = document.getElementById("letrasCaja").appendChild(etiqueta);

}
function guiones(){
    let etiqueta = document.createElement("a");
    let contenido = document.createTextNode("_");
    etiqueta.appendChild(contenido);
    let cajaGuiones = document.getElementById("guionesCaja").appendChild(etiqueta);

}


//lineas letras
/*
let inicioEspacios = 0;
let unidad = 370/palabra.length - 10;

for(let i = 0; i < palabra.length; i++){

    area.beginPath();
    area.lineWidth = 5;
    area.moveTo(inicioEspacios, 400)
    area.lineTo(unidad, 400);
    area.stroke();
    area.closePath();
    inicioEspacios = inicioEspacios + unidad;
}
*/


