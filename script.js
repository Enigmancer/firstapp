function jugada(minimo,maximo){
    var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}

var piedra = 0;
var papel  = 1;
var tijera = 2;

var opciones = ["piedra", "papel", "tijeras"];

var opcion_humano;
var opcion_cpu = jugada(0,2);

opcion_humano = prompt("¿Que elijes? \nPiedra: 0 \nPapel: 1 \nTijeras: 2", 0);

alert("elegiste " + opciones[opcion_humano]);
alert("Cpu elije " + opciones[opcion_cpu]);

var resultados = ["Ganaste", "Perdiste", "Empate", "Ganaste", "Perdiste"];

alert(resultados[opcion_humano - opcion_cpu + 2]);