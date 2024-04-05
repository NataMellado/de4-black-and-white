fetch('/views/components/navbar.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el navbar');
        }
        return response.text();
    })
    .then(data => {
        // Manipulación del contenido del navbar
        // Por ejemplo, insertar el contenido en el DOM
        document.getElementById('navbarContainer').innerHTML = data;
    })
    .catch(error => {
        console.error(error);
    });
