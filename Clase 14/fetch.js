// FETCH
// es una funcion que nos permite realizar solicitudes HTTP
/* para obtener recursos como datos JSON desde una API
devuelve una promesa que se resuelve cuando se completa la solicitud */

/* API: Aplication Programing Interface interfaz me permite la comunicacion entre diferentes sistemas
en javascript , se unsan para interactuar con servicios web y obtener/enviar datos */


// REALIZAR UNA SOLICITUD A UNA API PUBLICA
        /*        endpoint */
fetch("https://jsonplaceholder.typicode.com/posts/1")
/* me envia una respuesta */
.then(respuesta =>respuesta.json())     /* convierte la respuesta en json */
.then(posteos => console.log(posteos.title)//mostramos los resultados
 .catch(error = console.error (`Error: ${error}`))
)


