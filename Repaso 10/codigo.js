/* condicional if  */

let nombre = "Juan"
let edad = 19

if (edad >= 18) {
    console.log(`${nombre}, podes pasar`);
} else {
    console.log(`${nombre},NO podes pasar, tenes ${edad} años `);
}
/* backsticks */

/* if ternario */
edad >= 18 ? console.log(`${nombre}, podes pasar`) : console.log(`${nombre},NO podes pasar, tenes ${edad} años `)

/* if anidados */
let nota = 10
let calificacion;
/* notas 
<5 insuficiente - 
<8 bien
sobresaliente
 */
if (nota < 5) {    /* 1234 */
    calificacion = "insuficiente";
} else if (nota < 8) { /*  567 */
    calificacion = "bien";
} else {
    calificacion = "Sobresaliente";  /* >8 */
}

console.log(`Mi nota es " ${calificacion}`);

/* pasamos a ternario */

nota < 5 ?  calificacion = "insuficiente" :nota < 8 ?calificacion = "bien" :  calificacion = "Sobresaliente"

console.log(`Mi nota es " ${calificacion}`);

/* cada tipo de dato tiene metodos */

/* strings  */
/* metodo para contar caracteres de un string*/
/* .length */

/* console.log(nombre.length); */

if (edad >=18 && nombre.length>=6){
    console.log(`tenes ${edad} años y tu nombre es ${nombre} son ${nombre.length} letras GANASTE`);
} else {
    console.log(`tenes ${edad} años y tu nombre es ${nombre} son ${nombre.length} letras NO GANASTE`);
}

/* SWICH */

let semaforo = "ROJO"

/* semaforo = semaforo.toUpperCase()  */ // mayuscula
/* semaforo = semaforo.toLowerCase() */  // MINUSCULA
/* console.log(semaforo); */



switch (semaforo.toLowerCase()) {
  case "rojo": console.log("no podes avanzar");
  break;
  case "amarillo" : console.log("precaucion");
  break;
  case "verde" : console.log("Avanzar");
  break;
  default : console.log("no pusiste un color del semaforo");
}


let fruta = "banana"

switch (fruta) {
    case  "manzana":
        case  "naranja":
            case  "banana" :
                console.log("sirve para un licuado rico");
                break;
                case "papa":
                    case "lechuga" :
                        console.log("NO sirve para un licuado rico");
                        break;
                        default :
                        console.log("No es una fruta o verdura");
                                
}

let edadNueva = 70;

switch (true){
   case (edadNueva>0&&edadNueva<=12):
    console.log("tu pase es INFANTIL");
    break;
    case (edadNueva>13&&edadNueva<=17):
        console.log("tu pase es ADOLESCENTE");
        break;
        case (edadNueva>18&&edadNueva<=64):
            console.log("tu pase es ADULTO");
            break; 
            case (edadNueva>=65):
                console.log("tu pase es ADULTO MAYOR");
                break; 
                default :   console.log("no es una edad valida");
                break; 
}



/* 
pedir el nombre en un promt 
pedir en un promt que la persona elija :
serie   
pelicula
libro

y segun lo que la persona elije recomendarle una : serie pelicula o libro (en un alert) */











