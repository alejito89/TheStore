function showNotification(event) {
    event.preventDefault();
    // Enviar los datos del formulario al servidor para crear el producto
    // Mostrar la notificación después de crear el producto correctamente
    document.getElementById("notification").style.display = "block";
    setTimeout(function(){ 
        document.getElementById("notification").style.display = "none";
    }, 3000);
}