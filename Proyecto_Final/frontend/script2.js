document.addEventListener('DOMContentLoaded', function() {
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('particles.js loaded successfully');
    }, function(error) {
        console.error('Error loading particles.js:', error);
    });

    localStorage.removeItem('currentUser');

    window.showSection = function(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

            const user = registeredUsers.find(user => user.email === email && user.password === password);
            if (user) {
                showSuccessMessage('Inicio de sesión exitoso');
                user.isLoggedIn = true;
                localStorage.setItem('currentUser', JSON.stringify(user));
                redirectToGamerStore();
            } else {
                showError(document.getElementById('loginEmail'), 'Usuario no registrado o contraseña incorrecta.');
            }
        });
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const fullname = document.getElementById('signupFullName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                showError(document.getElementById('confirmPassword'), 'Las contraseñas no coinciden.');
                return;
            }

            let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

            const userExists = registeredUsers.find(user => user.email === email);
            if (userExists) {
                showError(document.getElementById('signupEmail'), 'Este correo ya está registrado.');
            } else {
                registeredUsers.push({ fullname, email, password, isLoggedIn: false });
                localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
                showSuccessMessage('Registro exitoso, por favor inicia sesión.');
                showSection('loginSection');
            }
        });
    }

    function redirectToGamerStore() {
        window.location.href = 'Landing.html';
    }

    function showSuccessMessage(message) {
        alert(message);
    }

    function showError(inputElement, message) {
        inputElement.setCustomValidity(message);
        inputElement.reportValidity();
    }
});