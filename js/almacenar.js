const botonAgregar = document.getElementById("agregar");
const botonLimpiar = document.getElementById("limpiar");
const contenedor = document.getElementById('contenedor');

// Función para cargar la lista desde el almacenamiento local al cargar la página
function cargarLista() {
    const listaCargar= localStorage.getItem('lista');
    contenedor.innerHTML = listaCargar;
  }

  // Función para agregar un nuevo ítem a la lista
function agregarItem() {
    const itemInput = document.getElementById('item');
    const nuevoItem = itemInput.value.trim();
    if (nuevoItem !== '') {
      const newItemElement = document.createElement('li');
      newItemElement.className = 'list-group-item';
      newItemElement.textContent = nuevoItem;
      contenedor.appendChild(newItemElement);
      // Guardar la lista en el almacenamiento local
      const listaGuardada = contenedor.innerHTML;
      localStorage.setItem('lista', listaGuardada);
      // Limpiar el campo de entrada
      itemInput.value = '';
    }
  }

  function limpiarLista() {
    contenedor.innerHTML = '';
    // Limpiar la lista del almacenamiento local
    localStorage.removeItem('lista');
  }

  

// Cargar la lista al cargar la página
cargarLista();
// Agregar un evento al botón Agregar
botonAgregar.addEventListener('click', agregarItem);
// Agregar un evento al botón Limpiar
botonLimpiar.addEventListener('click', limpiarLista);


