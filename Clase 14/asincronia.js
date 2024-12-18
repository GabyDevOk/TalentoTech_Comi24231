/* Asincronia en Js */
/* La asincronía permite ejecutar tareas sin bloquear el flujo principal del programa.  */

/* Javascript usa la asincronia para manejar tareas como solicitudes a 
servidores, temporizadores,eventos */

console.log("Inicio");

/* simulamos una tarea asincronica */
setTimeout(()=>{
console.log("Tarea Asincronica Completada");
},3000)// despues de 3 segundos

console.log("Fin");

