/* Convertir textoJSON a Objeto javascript */
/* JSON.parse : se utiliza para convertir una cadena de texto JSON a un objeto Javascipt */

const textoJSON = '{"nombre": "Juan","edad": 25,"suscripto": true}'  //no olvidar las comillas simples

const objeto =JSON.parse(textoJSON)

console.log (objeto)
console.log(objeto.nombre);
/* 
JSON.stringify(convertir objeto de javascript a texto JSON) */
console.log(JSON.stringify(objeto));


