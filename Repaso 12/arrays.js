
//                 0          1         2 
const frutas = ["manzana","naranja","pera"]
// longitug . length = 3 
console.log(frutas);
console.log(frutas[1]);

let apple = frutas[0] // copio un elemento del array y se lo asigno a una variable
console.log(apple); // 

console.log(frutas.length);  // Cantidad de datos en el array
console.log(frutas[frutas.length-1]);// accedo al ultimo elemento del array 

frutas[2]= "Banana"  // reasigno la posision 2
console.log(frutas)

// Mas metodos de arrays


// indice          0       1       2      3              4      5          6         7      
const animales = ["Gato","Perro","Tigre","Gallina","Cotorra","Conejo", "Carpincho","Dragon"]
const numeros = [1,2,8,7,4,6,7,3]

/* indexof devuelve ña primer ocurrencia de un elemento en el array. */
 console.log(animales.indexOf("Carpincho"));
 
/* splice : cambia el contenido de un array eliminando los elementos existentes y/o aagregando nuevos elementos */

animales.splice(1,2)/*  elimino 2 elementos desde la posicion 1 */
console.log(animales);
animales.splice(1,0,"Jirafa","Raton") // agrega Jirafa en la posicion 1
console.log(animales);

/* filter() recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condicion */
let nuevoArray2 = animales.filter(animal=>animal==="Cotorra"||animal==="Conejo")
console.log(nuevoArray2);

/* .find() recorre el array y retorna la primer coincidencia, del elemento que se busca */
let mayorATres = numeros.find(numero=>numero>3)
console.log(mayorATres);

/* .map() permite recorrer el array y modificar los elementos presentes en el, retorna un nuevo array con la misma longitud  que el original */
const nuevoArray = numeros.map(numero=>numero*10)
console.log(nuevoArray);
/* .pop() elimina el ultimo elemento del array */
animales.pop()
/* .push() = agrega un elemento al final del array */
animales.push("Ornitorrinco")

/* .shift() elimina el primer elemento del array
 */
animales.shift()
console.log(animales);
/* .unshift() agrega un elemento al inicio del array */
animales.unshift("Caballo")
console.log(animales);





