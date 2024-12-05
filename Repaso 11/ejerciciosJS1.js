
// reemplaza `null` por la respuesta o el dato requerido

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Esto es un String";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 38;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

/* Te daremos las funciones prearmadas
tienes que completar lo que retorna cada funcion e invocarla dentro de un console.log
enviar este archivo en formato .zip */

const devolverString = str => str; console.log(devolverString("Hola que tal"));


const suma = (x, y) => x+y     // Ejemplo resuelto con funcion flecha
console.log(suma(10,10));

const resta = (x, y) => x-y; console.log( resta(10, 5));

const multiplica = (x, y) =>  x*y ;console.log(multiplica(10, 2));

const divide = (x, y) => x/y; console.log(divide (21,7));

const sonIguales = (x, y) =>  x===y; console.log(sonIguales(22,22));
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:podes utilizar if y else o ... no 
/* if (x===y){
  return  true
}else {
  return false
} */

/* return x===y ? true : false */

const tienenMismaLongitud = (str1, str2) => str1.length==str2.length;console.log(tienenMismaLongitud("Hola", "Chau"));

const menosQueNoventa =num => num <90 ; console.log(menosQueNoventa(99));

const mayorQueCincuenta = num => num >50; console.log(mayorQueCincuenta(51));

const obtenerResto = (x, y) => x%y  ; console.log(obtenerResto(22,7));

const esPar = num => num%2==0 ; console.log(esPar(9));

const esImpar = num => num%2!=0 /*  num%2==1 */ ; console.log(esImpar(9));

/* const elevarAlCuadrado = num => num*num   ; console.log(elevarAlCuadrado(3)); */
/* const elevarAlCuadrado = num => num**2   ; console.log(elevarAlCuadrado(3)); 
** es el operador de potencia
*/
const elevarAlCuadrado = num => Math.pow(num,2)   ; console.log(elevarAlCuadrado(3));

const elevarAlCubo = num => Math.pow(num,3) ; console.log(elevarAlCubo(3));

const elevar = (num, exponent) => Math.pow (num,exponent) ; console.log(elevar(5,2));

const redondearNumero = num => Math.round (num); console.log(redondearNumero(4.6));  /* 4.5 == 5 */

const redondearHaciaArriba = num => Math.ceil (num); console.log(redondearHaciaArriba(4.5));

const redondearHaciaAbajo = num => Math.floor (num); console.log(redondearHaciaAbajo(4.9));

/* Math */
/* .pow Eleva el primer parametro por el 2do */
/* .round redondea al entero mas cercado
 .ceil redondea al entero mas cercano hacia arriba
 .floot  redondea al entero mas cercano hacia abajo
*/


/* 
let num2 = 14.54758456
console.log(Number(num2.toFixed(2))); */


const numeroRandom = () => Math.random() ; console.log(numeroRandom());
/* redondearlo */
const numeroRandom2 = () => Math.round(Math.random()*10) ;console.log(numeroRandom2());


const esPositivo = numero => num===0 ? false : numero>0 ? "Es Positivo" : "Es Negativo"
/*     if ternario */

console.log(esPositivo(-1));

  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
/*   if (numero>0){
    return "Es positivo"
  }else if (numero<0){
    return "Es Negativo"
  }else {
    return false
  } */

const agregarSimboloExclamacion = str=> `${str} !`; console.log(agregarSimboloExclamacion("Hola"));
                         /*            str + " " + "!" */

const combinarNombres= (nombre, apellido) => `${nombre} ${apellido} ` ; console.log(combinarNombres("Bruce", "Wayne"));

const obtenerSaludo = nombre => `Hola ${nombre}`; console.log(obtenerSaludo("Natalio"));


function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
return ancho*alto
}
console.log(obtenerAreaRectangulo(10,2));


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
return lado *4
}
console.log(retornarPerimetro(10));


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
return base*altura /2

}
console.log(areaDelTriangulo(10,4));

const deEuroAdolar= euro => euro*1.2; console.log(deEuroAdolar(20));

function esVocal(letra){
  letra= letra.toLowerCase()

 if(letra.length!=1){
  return "Escribiste mas de un caracter"
 }else if (letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u"){
 return `la letra ${letra} es vocal`
 }else {
 return `la letra ${letra} es consonante`
 }

}
console.log(esVocal("d"));

/* 
const consonantes = ["a","e","i","o","u"];
letra = "A"
letra = letra.toLowerCase()
console.log(consonantes.includes( letra)); */

// true

//Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
//Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
//que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
//si ingresa una consonante muestre en pantalla dato incorrecto
//Escribe tu código aquí