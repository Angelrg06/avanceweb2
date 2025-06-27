const correo = document.getElementById('correo');
const contra = document.getElementById('contrasena');
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', e => {
    e.preventDefault(); //que no se envie el form

    if (correo.value === "admin@mail.com" && contra.value === "123456") {
        console.log("Bienvenido, administrador");
        window.location.href = "intranet.html"; 
    } else {
        console.log("Credenciales no válidas");
    }
});
