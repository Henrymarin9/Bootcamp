window.onload = function() {
    const form = document.getElementById('upDate-form');
    const categoryInputs = form.querySelectorAll('input[name="category"]');
    const tituloInput = document.getElementById('titulo');
    const subtituloInput = document.getElementById('subtitulo');
    const descripcionTextarea = document.getElementById('description');
    const fileInput = document.getElementById('file');
    const submitButton = document.getElementById('submitButton');

    const errorDisplay = document.getElementById('errorDisplay');
    const successMessage = document.createElement('p');
    successMessage.id = 'successMessage';
    submitButton.parentNode.insertBefore(successMessage, submitButton.nextSibling);
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let errorMessage = '';

        // Validación de la categoría
        let selectedCategory = null;
        for (const input of categoryInputs) {
            if (input.checked) {
                selectedCategory = input.nextElementSibling.textContent.trim();
                break;
            }
        }
        
        if (!selectedCategory) {
            errorMessage += 'Por favor, selecciona una categoría.<br>';
        }

        // Validación del campo "Titulo del Producto"
        const tituloValue = tituloInput.value.trim();
        if (tituloValue.length === 0 || tituloValue.length > 20) {
            errorMessage += 'El título debe tener entre 1 y 20 caracteres.<br>';
        }

        // Validación del campo "Subtitulo del Producto"
        const subtituloValue = subtituloInput.value.trim();
        if (subtituloValue.length > 30) {
            errorMessage += 'El subtitulo no puede tener más de 30 caracteres.<br>';
        } else if (subtituloValue.length === 0) {
            errorMessage += 'Por favor, completa el subtitulo.<br>';
        }

        // Validación del campo "Descripción"
        const descripcionValue = descripcionTextarea.value.trim();
        if (descripcionValue.length > 1000) {
            errorMessage += 'La descripción no puede tener más de 1000 caracteres.<br>';
        } else if (descripcionValue.length === 0) {
            errorMessage += 'Por favor, completa la descripción.<br>';
        }

        // Validación del campo "Seleccionar archivo"
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'svg'];
        const fileName = fileInput.value;
        const fileExtension = fileName.split('.').pop().toLowerCase();
        if (!allowedExtensions.includes(fileExtension)) {
            errorMessage += 'Selecciona un archivo con formato válido: jpg, jpeg, png o svg.<br>';
        }

        // Actualizar el mensaje de error
        errorDisplay.innerHTML = errorMessage;

        // Si no hay errores, el formulario se enviará
        if (errorMessage === '') {
            const successMessage = document.createElement('p');
            successMessage.id = 'successMessage';
            successMessage.textContent = '¡Formulario enviado exitosamente!';
            successMessage.style.color = 'green';
            successMessage.style.fontWeight = 300;
            errorDisplay.insertAdjacentElement('afterend', successMessage);
            //form.submit();
            window.location.href = "D:\\OneDrive\\Escritorio\\EducacionIT_Bootcamp\\A-INTEGRADOR\\public\\index.html";
            console.log(window);
        } else {
            successMessage.textContent = '';
        }
    });

    categoryInputs.forEach(input => {
        input.addEventListener('click', function() {
            errorDisplay.innerHTML = '';
        });
    });

    [tituloInput, subtituloInput, descripcionTextarea, fileInput].forEach(input => {
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
