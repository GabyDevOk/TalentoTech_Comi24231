/* async y await */
/* caracteristicas de javascript que simplifican el manejo por ejemplo de funciones asincronicas y promesas- */
/*  y await se utiliza para pausar la ejecucion hasta que una promesa se resuelva o se rechace */


const obtenerUsers = async () => {
    /*  realizar una solicitud a una API publica */
    /*   espero la respuesta de la API */
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
    /*    console.log(respuesta); */
    // verificar si la respuesta fue exitosa
    if (respuesta.ok) {
        // convertimos la respuesta en formato JSON
        const users = await respuesta.json()
        //Mostrar los datos en la consola
        /*   console.log(users); */
        /*     solucion 1 */
        /*       console.log(`User obtenidos: ${JSON.stringify(users,null,2)}`); */
        /*       array a texto legible */

        /*   solucion 2 recorrer y mostrar cada user */

        users.forEach(user => {
            console.log(`Nombre: ${user.name} y vive en la calle : ${user.address.street} `);

        })

    } else {
        /*     Mostramos un mensaje de error si la respuesta no fue exitosa */
        console.log(`Error en la solicitud. Codigo ${respuesta.status}`);

    }

}
/* llamamos a la funcion */
obtenerUsers()




const obtenerUsers2 = async () => {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
    if (respuesta.ok) {
        const users = await respuesta.json()
        users.forEach(user => {
            console.log(`Nombre: ${user.name} y vive en la calle : ${user.address.street} `);
        })
    } else {
        console.log(`Error en la solicitud. Codigo ${respuesta.status}`);
    }
    } catch (error) {
/*         console.log((error)); */
        console.error (`ocurrio un error : ${error.message}`)
    }
}
obtenerUsers2()

try {
 /*    pones el codigo que puede llegar a fallar */
} catch (error) {
  /*   Manejo el error si eso ocurre */
}