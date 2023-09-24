const contactForm = document.getElementById('add-contact-form');
const errorMessage = document.getElementById('error-message');
const contactList = document.getElementById('contact-list');
let contacts = [];

       
const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
const dateRegex = /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

// Función para agregar un contacto
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const birthdate = document.getElementById('birthdate').value;
    const id = document.getElementById('id').value;

    if (!name || !email || !birthdate || !id) {
        errorMessage.textContent = 'Todos los campos son obligatorios.';
        return;
    }

    if (!emailRegex.test(email)) {
        errorMessage.textContent = 'El email no es válido.';
        return;
    }

    if (!dateRegex.test(birthdate)) {
        errorMessage.textContent = 'La fecha de nacimiento debe tener el formato YYYY-MM-DD.';
        return;
    }

    if (contacts.some(contact => contact.id === id)) {
        errorMessage.textContent = 'El ID ya existe.';
        return;
    }

    errorMessage.textContent = '';

    const newContact = {
        name,
        email,
        birthdate,
        id
    };
    addContactToFirebase(newContact);

    contacts.push(newContact);
    updateContactList();
    contactForm.reset();
    updateContactList();
});

// Función para actualizar toda la lista de contactos
function updateContactList() {
    contactList.innerHTML = '';
    
    contacts.forEach((contact, index) => {

        const contactItem = document.createElement('div');
        contactItem.classList.add('contact-item');
        contactItem.innerHTML = `
            <p><strong>Nombre:</strong> ${contact.name}</p>
            <p><strong>Email:</strong> ${contact.email}</p>
            <p><strong>Fecha de Nacimiento:</strong> ${contact.birthdate}</p>
            <p><strong>ID Único:</strong> ${contact.id}</p>
            <button onclick="updateContact(${index})">Actualizar</button>
            <button onclick="deleteContact(${index})">Eliminar</button>
        `;
        contactList.appendChild(contactItem);
    });
    
}

// Función para actualizar un contacto
async function updateContact(index) {
    const contactToUpdate = contacts[index];
    const newName = prompt('Nuevo nombre:', contactToUpdate.name);
    const newEmail = prompt('Nuevo email:', contactToUpdate.email);
    const newBirthdate = prompt('Nueva fecha de nacimiento (YYYY-MM-DD):', contactToUpdate.birthdate);
    const newId = prompt('Nuevo ID único:', contactToUpdate.id);

    if (!newName || !newEmail || !newBirthdate || !newId) {
        errorMessage.textContent = 'Todos los campos son obligatorios.';
        return;
    }

    if (!emailRegex.test(newEmail)) {
        errorMessage.textContent = 'El nuevo email no es válido.';
        return;
    }

    if (!dateRegex.test(newBirthdate)) {
        errorMessage.textContent = 'La nueva fecha de nacimiento debe tener el formato YYYY-MM-DD.';
        return;
    }

    if (contacts.some(contact => contact.id === newId && contact.id !== contactToUpdate.id)) {
        errorMessage.textContent = 'El nuevo ID ya existe.';
        return;
    }

    errorMessage.textContent = '';

    contactToUpdate.name = newName;
    contactToUpdate.email = newEmail;
    contactToUpdate.birthdate = newBirthdate;
    contactToUpdate.id = newId;

    await updateContactInFirebase(contactToUpdate.id, contactToUpdate);

    contacts[index] = contactToUpdate;
    updateContactList();
}

// Función para eliminar un contacto
function deleteContact(index) {
    const contactToDelete = contacts[index];

    // Llama a la función para eliminar el contacto de Firebase
    deleteContactInFirebase(contactToDelete.id);
    contacts.splice(index, 1);
    updateContactList();

}

async function addContactToFirebase(contact) {
    try {
        // Realiza una solicitud POST a la base de datos Firebase
        const response = await fetch('https://coleccion-juegos-9af50-default-rtdb.firebaseio.com/contacts.json', {
        method: 'POST', // Utiliza el método POST para agregar datos
        headers: {
            'Content-Type': 'application/json', // Indica que estás enviando datos en formato JSON
        },
        body: JSON.stringify(contact), // Convierte el objeto "contact" a JSON y lo envía en el cuerpo de la solicitud
        });

        if (!response.ok) {
        // Si la respuesta no es exitosa, lanza un error
        throw new Error('Error al agregar contacto en Firebase');
        }

        console.log('Contacto agregado en Firebase con éxito.');
    } catch (error) {
        // Captura y muestra cualquier error que ocurra
        console.error('Error:', error);
    }
}

async function updateContactInFirebase(contactId, updatedContact) {
    try {
        // Construye la URL específica del contacto que se va a actualizar
        const updateUrl = `https://coleccion-juegos-9af50-default-rtdb.firebaseio.com/contacts/${contactId}.json`;

        // Realiza una solicitud PUT a la URL construida
        const response = await fetch(updateUrl, {
        method: 'PUT', // Utiliza el método PUT para actualizar datos
        headers: {
            'Content-Type': 'application/json', // Indica que estás enviando datos en formato JSON
        },
        body: JSON.stringify(updatedContact), // Convierte el objeto "updatedContact" a JSON y lo envía en el cuerpo de la solicitud
        });

        if (!response.ok) {
        // Si la respuesta no es exitosa, lanza un error
        throw new Error('Error al actualizar contacto en Firebase');
        }

        console.log('Contacto actualizado en Firebase con éxito.');
    } catch (error) {
        // Captura y muestra cualquier error que ocurra
        console.error('Error:', error);
    }
}

async function deleteContactInFirebase(contactId) {
    try {
        // Construye la URL específica del contacto que se va a eliminar
        const deleteUrl = `https://coleccion-juegos-9af50-default-rtdb.firebaseio.com/contacts/${contactId}.json`;

        // Realiza una solicitud DELETE a la URL construida
        const response = await fetch(deleteUrl, {
        method: 'DELETE', // Utiliza el método DELETE para eliminar datos
        });

        if (!response.ok) {
        // Si la respuesta no es exitosa, lanza un error
        throw new Error('Error al eliminar contacto en Firebase');
        }

        console.log('Contacto eliminado en Firebase con éxito.');
    } catch (error) {
        // Captura y muestra cualquier error que ocurra
        console.error('Error:', error);
    }
}
