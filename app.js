// Obtener los elementos del formulario
const formulario = document.querySelector('.posicion__Boton__Envio');
const nombreInput = document.querySelector('.nombre');
const apellidoInput = document.querySelector('.apellido');
const tipoDocumentoInput = document.querySelector('.documento');
const numeroDocumentoInput = document.querySelector('.numeroDoc');
const botonEnviar = document.querySelector('.boton-envio-datos');

// Función para validar los datos
function validarDatos() {
  // Obtener los valores de los campos
  const nombre = nombreInput.value;
  const apellido = apellidoInput.value;
  const tipoDocumento = tipoDocumentoInput.value;
  const numeroDocumento = numeroDocumentoInput.value;

  // Validar los datos (puedes agregar más validaciones según tus necesidades)
  if (nombre === '' || apellido === '' || tipoDocumento === '' || numeroDocumento === '') {
    alert('Por favor, completa todos los campos.');
    return false;
  }

  if (isNaN(numeroDocumento)) {
    alert('El número de documento debe ser numérico.');
    return false;
  }

  return true;
}

// Función para manejar el envío del formulario
function enviarDatos(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  if (validarDatos()) {
    // Aquí puedes agregar la lógica para enviar los datos a un servidor o realizar otra acción
    // Por ejemplo, mostrar un mensaje de confirmación:
    alert('¡Datos enviados correctamente!');

    // Limpiar los campos del formulario (opcional)
    nombreInput.value = '';
    apellidoInput.value = '';
    tipoDocumentoInput.value = '';
    numeroDocumentoInput.value = '';
  }
}

// Agregar un event listener al botón de envío
botonEnviar.addEventListener('click', enviarDatos);
