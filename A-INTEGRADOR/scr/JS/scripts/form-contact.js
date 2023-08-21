window.onload = function() {
    const form = document.getElementById('contact-form');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const emailInput = document.getElementById('email');
    const submitButton = document.getElementById('submitButton');

    const errorDisplay = document.getElementById('errorDisplay');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let errorMessage = '';

        // Validación del campo "Nombre"
        const nombreValue = nombreInput.value.trim();
        if (!/^[A-Za-z\s]+$/.test(nombreValue)) {
            errorMessage += 'El nombre solo debe contener letras.<br>';
        }

        // Validación del campo "Apellido"
        const apellidoValue = apellidoInput.value.trim();
        if (!/^[A-Za-z\s]+$/.test(apellidoValue)) {
            errorMessage += 'El apellido solo debe contener letras.<br>';
        }

        // Validación del campo "Email"
        const emailValue = emailInput.value.trim();
        if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(emailValue)) {
            errorMessage += 'Ingresa un email válido (user@gmail.com).<br>';
        }

        // Actualizar el mensaje de error
        errorDisplay.innerHTML = errorMessage;

        // Si no hay errores, se muestra el mensaje de éxito
        if (errorMessage === '') {
            const successMessage = document.createElement('p');
            successMessage.id = 'successMessage';
            successMessage.textContent = '¡Formulario enviado exitosamente!';
            successMessage.style.color = 'green';
            successMessage.style.fontWeight = 300;
            errorDisplay.insertAdjacentElement('afterend', successMessage);
        }
    });

    [nombreInput, apellidoInput, emailInput].forEach(input => {
        input.addEventListener('input', function() {
            hideError(input);
        });
    });

    function hideError(inputElement) {
        const errorElement = inputElement.nextElementSibling;
        if (errorElement && errorElement.className === 'error-message') {
            errorElement.remove();
        }
    }
};
