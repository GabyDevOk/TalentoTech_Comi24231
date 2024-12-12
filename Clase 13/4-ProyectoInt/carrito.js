// recuperar el carrito del almacenamiento local

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Muestra los productos en el carrito

const mostrarCarrito = ()=> {
    const lista = document.getElementById("lista-carrito")
    lista.innerHTML = "";

    if(carrito.length===0){
        lista.innerHTML = '<p>Tu carrito está vacio</p>';
        return;
    }
    carrito.forEach((item,indice)=>{
      const producto = document.createElement("article")
      producto.classList.add("producto")
      producto.innerHTML=`
      <h2>${item.nombre}</h2>
      <p class="precio">$${item.precio}</p>
      <button onclick="eliminarDelCarrito(${indice})">Eliminar</button>
      `;
      lista.appendChild(producto)
    });
}

//Elimina un producto del carrito
const eliminarDelCarrito=(indice)=>{
    carrito.splice(indice,1);
    localStorage.setItem("carrito",JSON.stringify(carrito))
    mostrarCarrito();
}

// Simule la compra

const realizarCompra =()=>{
    alert("compra realizada con exito")
    localStorage.removeItem("carrito")
    window.location.href="index.html"
}

// inicializar el carrito al carga la pagina
mostrarCarrito()
