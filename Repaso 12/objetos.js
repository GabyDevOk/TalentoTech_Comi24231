
const celular = {
/*     clave-valor */
marca: "Motorola",
modelo: "V3",
stock:true,
//metodos
encender : function () {
    return `${this.marca} Encendido`
}
}
console.log(celular.marca);
console.log(celular.encender());

//asignacion de valores
celular.marca = "Sony"
console.log(celular.marca);

console.log(celular);
