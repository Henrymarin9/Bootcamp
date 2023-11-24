import React from "react";

function Contact(){
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
    
    return(
        <div>
            <main class="Main">

                <section class="title">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus iusto atque in consectetur est at ipsa minima nulla possimus, ullam soluta accusamus vitae quod sed adipisci eius nisi corporis.
                    </p>
                </section>

                <section class="form">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    
                    <form id="contact-form">
                        

                        <label class="labels">
                            <input type="text" id="nombre" maxlength="20" placeholder="Nombre" />
                        </label>

                        <label class="labels">
                            <input type="text" id="apellido" placeholder="Apellido" />
                        </label>

                        <label class="labels">
                            <input type="email" id="email" placeholder="Email: user@gmail.com" />
                        </label>

                        <label>
                            <button id="submitButton">Enviar</button>
                        </label>
                        <p id="errorDisplay" class="error-message"></p>
                    </form>

                </section>

            </main>
        </div>
    )
}

export default Contact;