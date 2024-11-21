
/* OPERADORES MATEMATICOS */
console.log(21 + 7); //SUMA
console.log(21 - 7); //RESTA
console.log(21 * 7); // MULTIPLICACION
console.log(21 / 7); // DIVISION
console.log(21 % 7); // MODULO

/* OPERADORES DE COMPARACION  */

let num1 = 32;
let num2 = 40;
let num3 = "32";
let num4 = 32;
/* Booleano = true / false */

console.log(num1 == num3); /* es igual? */
console.log(num1 === num3); /* es estrictamente igual? */
console.log(num1 != num3); /* es distinto a / no igual a */
console.log(num1 !== num3); /* es ESTRICTAMENTE distinto a / no igual a */
console.log(num1 > num2); /* mayor */
console.log(num2 < num3); //menor
console.log(num1 >= num4) // mayor o igual
console.log(num1 <= num2); // menor o igual

/* OR - AND */
/* ||  -  && */
/*  este o este = true */
console.log(num1 == num3 || num1 > num2);
// true       //false

/*  este y este */
console.log(num1 == num3 && num1 > num2);
// true       //false

// CONDICIONALES

let nombre = prompt("Decime tu nombre");
let edad = Number(prompt("decime tu edad"))
/*   SI  */ /* condicion = true*/
/* if (edad >= 18) {
    alert(`Hola ${nombre} tenes ${edad} años y podes pasar`); */
/* } else { */ /*  SINO (condicion = false) */
/*     alert(`Hola ${nombre} tenes ${edad} no podes pasar`);
}
 */

/* IF TERNARIO */
/* CONDICION ? TRUE : FALSE */
edad >= 18 ? alert(`tenes ${edad} años y podes pasar`): alert(`tenes ${edad} no podes pasar`);

/* plantillas literales / backsticks */
/* '' */

/* `` backsticks */

/* `` */ /* altGr+} */
/* `` */ /*  alt+96 */


/* "hola " +  nombre + " tenes" + edad + " años"

`hola ${nombre} tenes ${edad} años` */

