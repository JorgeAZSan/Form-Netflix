// Variables
const loginForm = document.getElementById("login-form")
const successMessage = document.getElementById("success-message")

// Formulario
loginForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    // Validación de credenciales
    if (username === 'jorge' && password === '4321') {
        successMessage.style.display = "block";
        successMessage.textContent = 'Login Exitoso';
    } else {
        alert('Usuario o password incorrectos')
    }
})