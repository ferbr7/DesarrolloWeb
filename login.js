document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Verificar las credenciales (esto es solo un ejemplo, no seguro)
    if (username === 'usuario' && password === 'contraseña') {
        // Redirigir a la calculadora
        window.location.href = 'index.html';
    } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
});
