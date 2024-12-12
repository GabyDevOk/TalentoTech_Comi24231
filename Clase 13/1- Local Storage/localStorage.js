
const botonGuardar = document.querySelector("#guardar")
const botonMostrar = document.querySelector("#mostrar")
const botonBorrar = document.querySelector("#borrar")

botonGuardar.addEventListener("click", () => {
    const nombre = document.querySelector("#nombre").value
    localStorage.setItem("nombreUser", nombre)
    alert("nombre Guardado en localStorage")
})

botonMostrar.addEventListener("click", () => {
    const nombreGuardado = localStorage.getItem("nombreUser")
    if (nombreGuardado) {
        document.querySelector("#resultado").textContent = `Guardaste ${nombreGuardado}`
        alert(`Guardaste ${nombreGuardado}`)
    } else {
        document.querySelector("#resultado").textContent = "no hay nombre guardado"
    }
})

botonBorrar.addEventListener("click", () => {
    localStorage.removeItem("nombreUser")
    alert("Nombre eliminado de LocalStorage")
    document.querySelector("#resultado").textContent = ""
})