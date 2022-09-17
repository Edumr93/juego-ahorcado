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


//HORCA
//SOGA
area.beginPath();
area.lineWidth = 15
area.moveTo(182, 30);
area.lineTo(182, 100);
area.stroke();
area.closePath();


//HORCA PRIMER PALO
area.beginPath();
area.lineWidth = 15
area.moveTo(80, 35);
area.lineTo(190, 35);
area.stroke();
area.closePath();

//HORCA PALO DOS
area.beginPath();
area.lineWidth = 15
area.moveTo(90, 30);
area.lineTo(90, 300);
area.stroke();
area.closePath();

//HORCA BASE
area.beginPath();
area.lineWidth = 15
area.moveTo(60, 300);
area.lineTo(120, 300);
area.stroke();
area.closePath();

//LINEA ROJA
area.beginPath();
area.lineWidth = 8;
area.moveTo(150, 130);
area.lineTo(210, 130);
area.fillStyle = "red";
area.fill();
area.stroke();
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

let palabras = ["que", "hola", "programacion", "alura", "manzana", "pera", "frutilla"];
let palabraSorteada = "";
const cajaGuiones = document.getElementById("guionesCaja");
const cajaLetras = document.getElementById("letrasCaja");
const cajaBotones = document.getElementById("botonesLetras");

function comenzarJuego(){
    cajaGuiones.innerHTML = "";
    cajaLetras.innerHTML = "";
    cajaBotones.innerHTML = "";

    obtenerPalabraAleatoria();
    botonesLetra();
    letrasFuncionalidad;

}

function comparacionLetras(){

}

function obtenerPalabraAleatoria(){

    palabraSorteada = palabras[Math.floor(Math.random()*palabras.length)];

    console.log(palabraSorteada)

    for(let i = 0; i < palabraSorteada.length; i++){
        letras(palabraSorteada.substring(i,i+1));
        guiones();
    }
}

function letras(letra){
    let etiqueta = document.createElement("a");
    etiqueta.id = letra;
    let contenido = document.createTextNode(letra);
    etiqueta.appendChild(contenido);
    //etiqueta.style.display = "none";
    const cajaLetras = document.getElementById("letrasCaja").appendChild(etiqueta);

}
function guiones(){
    let etiqueta = document.createElement("span");
    let contenido = document.createTextNode("_");
    etiqueta.appendChild(contenido);
    let cajaGuiones = document.getElementById("guionesCaja").appendChild(etiqueta);

}


function botonesLetra(){
    const abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    const cajaLetras = document.getElementById("botonesLetras");

    for(let i = 0; i < abecedario.length; i++){
        let etiqueta = document.createElement("input")
        etiqueta.type = "button";
        etiqueta.id = abecedario.charAt(i);
        etiqueta.value = abecedario.charAt(i);
        cajaLetras.appendChild(etiqueta);
        letrasFuncionalidad(abecedario.charAt(i));
    }
    
}

function letrasFuncionalidad(letras){

    let botones = document.getElementById(letras).addEventListener("click", function(){

        alert("Apretaste la letra: " + letras);

    })
    
    

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


