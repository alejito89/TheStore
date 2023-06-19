function showNotification(event) {
    event.preventDefault();
    // Send form data to server to create product
    // Show notification after successfully creating product
    document.getElementById("notification").style.display = "block";
    setTimeout(function() {
        document.getElementById("notification").style.display = "none";
        resetForm();
    }, 3000);
}

function resetForm() {
    document.getElementById("productForm").reset();
}