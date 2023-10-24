fetch("alumnos.json")
.then(response => {
    if (response.ok) {
        return response.json(); // Parsea la respuesta JSON
    } else {
        throw new Error(response.status);
    }
})
.then(data => {
    const alumnos = data.alumnos;
    const alumnosContainer = document.getElementById("alumnosContainer");

    // Recorre los alumnos y muestra sus datos en la página
    alumnos.forEach(alumno => {
        const alumnoDiv = document.createElement("div");
        alumnoDiv.classList.add("alumno"); // Puedes agregar una clase CSS para dar estilo a los alumnos

        alumnoDiv.innerHTML = `
            <h2>${alumno.Nombre}</h2>
            <p>Email: ${alumno.email}</p>
            <p>GitHub: <a href="${alumno.github}" target="_blank">${alumno.github}</a></p>
            <p>LinkedIn: <a href="${alumno.linked}" target="_blank">${alumno.linked}</a></p>
            <p>descripcion:<p/>
            <p>HTML:${alumno.inicio.html}</p>
            <p>CSS:${alumno.inicio.css}</p>
            <p>JS:${alumno.inicio.js}</p>
            <p>VUE:${alumno.inicio.vue}</p>
            <p>SQL:${alumno.inicio.SQL}</p>
            <p>API:${alumno.inicio.API}</p>
            <p>NODE:${alumno.inicio.node}</p>
            <p>Express:${alumno.inicio.express}</p>
            
        `;

        // Agrega la tarjeta del alumno al contenedor
        alumnosContainer.appendChild(alumnoDiv);
    });
})
.catch(error => {
    console.error("Error al cargar el archivo JSON:", error);
});