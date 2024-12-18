const TraerPronostico = async () => {
    try {
        const city = "Buenos Aires";  // Ciudad a consultar
        const apiKey = "";  // INSERTA Tu API Key válida

        // Solicitud a la API con idioma español 2.5
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=es`);

        if (response.ok) {
            const data = await response.json();
            console.log("Datos de la API:", data);  // Depuración

            // Mostrar clima y temperatura
            document.getElementById("temperature").textContent = 
                `Clima actual: ${data.weather[0].description}, Temperatura: ${data.main.temp}°C`;
        } else {
            // Mostrar mensaje si la respuesta no es exitosa
            console.warn("Error en la respuesta:", response.status, response.statusText);
            document.getElementById("temperature").textContent = "No se pudo obtener el clima";
        }
    } catch (error) {
        // Manejar errores de la red u otros problemas
        console.error("Error de red:", error.message);
        document.getElementById("temperature").textContent = "Error al obtener el clima";
    }
}

// Llama a la función cuando la página se carga
TraerPronostico();
