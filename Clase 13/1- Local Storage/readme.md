/* Metodos de localStorage */

 1. localStorage.setItem(clave,valor) 
para guardar un dato
clave para identificarlo
valor que queremos guardar

Ambos deben ser cadena de texto
si tenemos otro tipo de datos, necesitamos convertirlo a JSON


2. localStorage.getItem(clave)
Recupera un dato usando su clave, sino existe devuelve null

3. localStorage.removeItem(clave)
elimina un dato especifico por su clave

4. localStorage.clear()
borra los datos almacenados en el localStorage para ese dominio
*
