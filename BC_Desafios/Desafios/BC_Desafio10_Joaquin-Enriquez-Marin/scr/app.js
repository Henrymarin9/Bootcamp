document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const errorsContainer = document.querySelector(".form__errors");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrorMessages();
    validateForm();
  });

  const inputs = form.querySelectorAll(".form__input");

  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      clearErrorMessages();
      validateInput(input);
    });
  });

  function clearErrorMessages() {
    errorsContainer.innerHTML = "";
  }

  function validateForm() {
    let hasErrors = false;

    inputs.forEach(function (input) {
      const errorMessage = validateInput(input);
      if (errorMessage) {
        hasErrors = true;
        displayErrorMessage(input, errorMessage);
      }
    });

    if (!hasErrors) {
      console.log("Formulario válido, enviado exitosamente");
    }
  }

  function validateInput(input) {
    const validity = input.validity;
    if (validity.valid) {
      return "";
    }

    const inputName = input.getAttribute("name");

    if (validity.valueMissing) {
      return "Este campo es obligatorio";
    }

    if (inputName === "primer-nombre") {
      return validatePrimerNombre(input.value);
    }

    if (inputName === "primer-apellido") {
      return validatePrimerApellido(input.value);
    }

    if (inputName === "email") {
      return validateEmail(input.value);
    }

    if (inputName === "tipo-documento") {
      return validateTipoDocumento(input);
    }

    if (inputName === "numero-documento") {
      return validateNumeroDocumento(input.value);
    }

    if (inputName === "direccion") {
      return validateDireccion(input.value);
    }

    return "Formato inválido";
  }

  function validatePrimerNombre(value) {
    // Validación para el primer nombre aquí
  }

  function validatePrimerApellido(value) {
    // Validación para el primer apellido aquí
  }

  function validateEmail(value) {
    if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(value)) {
      return "Correo electrónico inválido";
    }

    if (value.length < 10 || value.length > 30) {
      return "El correo electrónico debe tener entre 10 y 30 caracteres";
    }

    return "";
  }

  function validateTipoDocumento(input) {
    const selectedOption = form.querySelector('input[name="tipo-documento"]:checked');
    if (!selectedOption) {
      return "Debes seleccionar un tipo de documento";
    }

    return "";
  }

  function validateNumeroDocumento(value) {
    if (!/^\d+$/.test(value)) {
      return "Número de documento inválido. Solo se permiten números";
    }

    if (value.length > 11) {
      return "El número de documento no puede tener más de 11 caracteres";
    }

    return "";
  }

  function validateDireccion(value) {
    // Validación para la dirección aquí
  }

  function displayErrorMessage(input, message) {
    const errorElement = document.createElement("div");
    errorElement.classList.add("form__error");
    errorElement.textContent = message;
    errorsContainer.appendChild(errorElement);

    console.log(`Error en "${input.name}": ${message}`);
  }
});
