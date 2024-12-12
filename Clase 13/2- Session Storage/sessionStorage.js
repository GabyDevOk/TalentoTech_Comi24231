
const botonGuardar = document.querySelector("#guardar")
const botonMostrar = document.querySelector("#mostrar")
const botonBorrar = document.querySelector("#borrar")

botonGuardar.addEventListener("click", () => {
    const nombre = document.querySelector("#nombre").value
    sessionStorage.setItem("nombreUser", nombre)
    alert("nombre Guardado en sessionStorage")
})

botonMostrar.addEventListener("click", () => {
    const nombreGuardado = sessionStorage.getItem("nombreUser")
    if (nombreGuardado) {
        document.querySelector("#resultado").textContent = `Guardaste ${nombreGuardado}`
        alert(`Guardaste ${nombreGuardado}`)
    } else {
        document.querySelector("#resultado").textContent = "no hay nombre guardado"
    }
})

botonBorrar.addEventListener("click", () => {
    sessionStorage.removeItem("nombreUser")
    alert("Nombre eliminado de sesssionStorage")
    document.querySelector("#resultado").textContent = ""
})