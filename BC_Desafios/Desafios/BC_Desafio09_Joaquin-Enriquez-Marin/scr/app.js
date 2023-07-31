

// 2 - En el archivo de JS externo crear un constructor de objetos Libro
function Libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }
  
  // 3 - Agregar en Libro el método mostrarDatosEnConsola()
  Libro.prototype.mostrarDatosEnConsola = function () {
    console.log(`${this.titulo}, de ${this.autor.toUpperCase()}`);
  };
  
  // 4 - Agregar en Libro el método mostrarDatosEnAlert()
  Libro.prototype.mostrarDatosEnAlert = function () {
    console.log(`${this.titulo}, de ${this.autor.toUpperCase()}`);
  };
  
  
  // 5 - Agregar en Libro el método getTitulo()
  Libro.prototype.getTitulo = function () {
    return this.titulo;
  };
  
  // 6 - Agregar en Libro el método mostrarDatos()
  Libro.prototype.mostrarDatos = function (outputType) {
    const datos = `${this.titulo}, de ${this.autor.toUpperCase()}`;
    if (outputType === "alert") {
      alert(datos);
    } else if (outputType === "console") {
      console.log(datos);
    } else {
      console.log(datos);
    }
  };
  

  // Prueba de creación de un libro y uso de métodos
  let unLibro = new Libro("Ángeles y Demonios", "Dan Brown");
  console.log(unLibro); // Debe mostrar: Libro {autor: "Dan Brown", titulo: "Ángeles y Demonios"}
  unLibro.mostrarDatosEnConsola(); // Debe mostrar: "Ángeles y Demonios, de DAN BROWN"
  // unLibro.mostrarDatosEnAlert(); // Comentamos esta línea para evitar el error
  let nuevolibro = new Libro("Fuego y Sangre", "George R. R. Martin");
  let tituloDelNuevoLibro = nuevolibro.getTitulo();
  console.log(tituloDelNuevoLibro); // Debe mostrar: "Fuego y Sangre"
  unLibro.mostrarDatos("console"); // Debe mostrar en consola: "Fuego y Sangre, de GEORGE R. R. MARTIN"
  unLibro.mostrarDatos(); // Debe mostrar en consola: "Fuego y Sangre, de GEORGE R. R. MARTIN"
  