/*
  Tarea 6 · DWEC · Jorge Núñez Barrales
  Objetos y arrays.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
  console.log("Array como texto", lista);
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

const estudiante = {
  nombre: "Jorge",
  apellidos: "Núñez Barrales",
  edad: 20,
  curso: "2.º DAW",
  presentarse: function () {
    console.log("Ejercicio 1: presentarse", this);
    return "Soy " + this.nombre + " " + this.apellidos + ", tengo " + this.edad + " años y estudio " + this.curso + ".";
  }
};

function verFicha() {
  const salida = document.querySelector("#salida1");
  salida.textContent = "";
  const lista = document.createElement("ul");
  lista.classList.add("list-group");
  const claves = ["nombre", "apellidos", "edad", "curso"];

  claves.forEach(function (clave) {
    console.log("Ejercicio 1: propiedad", clave, estudiante[clave]);
    const elemento = document.createElement("li");
    elemento.classList.add("list-group-item");
    elemento.textContent = clave + ": " + estudiante[clave];
    lista.append(elemento);
  });

  const frase = document.createElement("p");
  frase.classList.add("mt-2");
  frase.textContent = estudiante.presentarse();
  salida.append(lista, frase);
  console.log("Ejercicio 1: ficha", estudiante);
}

function cumplirAnios() {
  estudiante.edad += 1;
  console.log("Ejercicio 1: cumplir años", estudiante.edad);
  verFicha();
}

function quitarCurso() {
  delete estudiante.curso;
  console.log("Ejercicio 1: quitar el curso", estudiante);
  verFicha();
}


// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  console.log("Ejercicio 2: mostrar colores", colores);
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";   // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    console.log("Ejercicio 2: pintar color", color);
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  console.log("Ejercicio 2: aviso", mensaje);
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  console.log("Ejercicio 2: añadir color");
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);   // push añade al final
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  console.log("Ejercicio 2: quitar el último");
  if (colores.length === 0) {
    avisar2("No quedan colores para quitar.");
    mostrarColores();
    return;
  }

  const eliminado = colores.pop();
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: pop, ha salido", eliminado);
}

function quitarPrimero() {
  console.log("Ejercicio 2: quitar el primero");
  if (colores.length === 0) {
    avisar2("No quedan colores para quitar.");
    mostrarColores();
    return;
  }

  const eliminado = colores.shift();
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: shift, ha salido", eliminado);
}

mostrarColores();   // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// Puedes cambiar los productos por otros, pero deja al menos seis, con estas tres propiedades
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Ya está hecha: pinta en la tabla la lista de productos que le pases
function pintarProductos(lista) {
  console.log("Ejercicio 3: pintar productos", lista);
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    console.log("Ejercicio 3: pintar producto", producto.nombre);
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {
  console.log("Ejercicio 3: todos", productos);
  pintarProductos(productos);
  document.querySelector("#mensaje3").textContent = "Hay " + productos.length + " productos.";
}

function ordenarPorPrecio() {
  // sort cambia el array: uso una copia para conservar el catálogo original.
  const ordenados = [...productos];
  ordenados.sort(function (a, b) {
    console.log("Ejercicio 3: comparar precios", a.precio, b.precio);
    return a.precio - b.precio;
  });
  pintarProductos(ordenados);
  document.querySelector("#mensaje3").textContent = "Productos ordenados de menor a mayor precio.";
  console.log("Ejercicio 3: ordenar por precio", ordenados);
}

function filtrarCaros() {
  const caros = productos.filter(function (producto) {
    console.log("Ejercicio 3: comprobar precio", producto.precio);
    return producto.precio > 50;
  });
  pintarProductos(caros);
  document.querySelector("#mensaje3").textContent = "Hay " + caros.length + " productos de más de 50 €.";
  console.log("Ejercicio 3: filtrar caros", caros);
}

function buscarProducto() {
  const texto = document.querySelector("#buscarProducto").value.trim().toLowerCase();
  const mensaje = document.querySelector("#mensaje3");
  console.log("Ejercicio 3: buscar", texto);
  if (texto === "") {
    mensaje.textContent = "Escribe el nombre de un producto para buscar.";
    return;
  }

  const encontrado = productos.find(function (producto) {
    console.log("Ejercicio 3: comprobar nombre", producto.nombre);
    return producto.nombre.toLowerCase().includes(texto);
  });
  if (encontrado === undefined) {
    pintarProductos([]);
    mensaje.textContent = "No se ha encontrado ningún producto: find devuelve undefined.";
    return;
  }

  pintarProductos([encontrado]);
  mensaje.textContent = "Producto encontrado: " + encontrado.nombre + ".";
}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "Jorge Núñez Barrales",
  notas: [],
  anadirNota: function (nota) {
    console.log("Ejercicio 4: comprobar nota", nota);
    if (typeof nota !== "number" || Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
    this.notas.push(nota);
    return true;
  },
  media: function () {
    console.log("Ejercicio 4: calcular media", this.notas);
    if (this.notas.length === 0) {
      return 0;
    }
    const suma = this.notas.reduce(function (total, nota) {
      console.log("Ejercicio 4: sumar nota", total, nota);
      return total + nota;
    }, 0);
    return suma / this.notas.length;
  }
};

function mostrarNotas() {
  console.log("Ejercicio 4: mostrar notas", alumno.notas);
  const salida = document.querySelector("#notas");
  salida.textContent = "";
  alumno.notas.forEach(function (nota) {
    console.log("Ejercicio 4: pintar nota", nota);
    const badge = document.createElement("span");
    badge.classList.add("badge", "me-1", "mb-1");
    if (nota >= 5) {
      badge.classList.add("text-bg-success");
    } else {
      badge.classList.add("text-bg-danger");
    }
    badge.textContent = nota;
    salida.append(badge);
  });

  const media = document.querySelector("#media");
  if (alumno.notas.length === 0) {
    media.textContent = "Todavía no hay notas.";
  } else {
    media.textContent = "Media de " + alumno.notas.length + " notas: " + alumno.media().toFixed(2);
  }
}

function anadirNota() {
  console.log("Ejercicio 4: añadir nota");
  const casilla = document.querySelector("#nota");
  const error = document.querySelector("#error4");
  // La casilla vacía se comprueba antes: Number("") daría 0.
  if (casilla.value.trim() === "") {
    error.textContent = "Escribe una nota antes de añadirla.";
    error.classList.remove("d-none");
    return;
  }

  const nota = Number(casilla.value);
  if (alumno.anadirNota(nota) === false) {
    error.textContent = "La nota debe ser un número entre 0 y 10.";
    error.classList.remove("d-none");
    return;
  }

  error.classList.add("d-none");
  casilla.value = "";
  mostrarNotas();
}

function borrarNotas() {
  console.log("Ejercicio 4: borrar notas");
  alumno.notas = [];
  document.querySelector("#error4").classList.add("d-none");
  mostrarNotas();
}

mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verDobles() {
  const dobles = numeros.map(function (numero) {
    console.log("Ejercicio 5: duplicar", numero);
    return numero * 2;
  });
  const salida = document.querySelector("#salida5");
  salida.textContent = "";
  const resultado = document.createElement("p");
  resultado.textContent = "Dobles: " + comoTexto(dobles);
  const original = document.createElement("p");
  original.textContent = "Original: " + comoTexto(numeros);
  salida.append(resultado, original);
  console.log("Ejercicio 5: dobles", dobles);
}

function verPares() {
  const pares = numeros.filter(function (numero) {
    console.log("Ejercicio 5: comprobar par", numero);
    return numero % 2 === 0;
  });
  const salida = document.querySelector("#salida5");
  salida.textContent = "";
  const resultado = document.createElement("p");
  resultado.textContent = "Pares: " + comoTexto(pares);
  const original = document.createElement("p");
  original.textContent = "Original: " + comoTexto(numeros);
  salida.append(resultado, original);
  console.log("Ejercicio 5: pares", pares);
}

function verSuma() {
  const suma = numeros.reduce(function (total, numero) {
    console.log("Ejercicio 5: sumar", total, numero);
    return total + numero;
  }, 0);
  const salida = document.querySelector("#salida5");
  salida.textContent = "";
  const resultado = document.createElement("p");
  resultado.textContent = "Suma: " + suma;
  const original = document.createElement("p");
  original.textContent = "Original: " + comoTexto(numeros);
  salida.append(resultado, original);
  console.log("Ejercicio 5: suma", suma);
}

function verCadena() {
  const pares = numeros.filter(function (numero) {
    console.log("Ejercicio 5: filtrar par", numero);
    return numero % 2 === 0;
  });
  const dobles = pares.map(function (numero) {
    console.log("Ejercicio 5: duplicar par", numero);
    return numero * 2;
  });
  const suma = dobles.reduce(function (total, numero) {
    console.log("Ejercicio 5: sumar doble", total, numero);
    return total + numero;
  }, 0);

  const salida = document.querySelector("#salida5");
  salida.textContent = "";
  const paso1 = document.createElement("p");
  paso1.textContent = "1. Pares: " + comoTexto(pares);
  const paso2 = document.createElement("p");
  paso2.textContent = "2. Dobles de los pares: " + comoTexto(dobles);
  const paso3 = document.createElement("p");
  paso3.textContent = "3. Suma de los dobles: " + suma;
  const original = document.createElement("p");
  original.textContent = "Original: " + comoTexto(numeros);
  salida.append(paso1, paso2, paso3, original);
  console.log("Ejercicio 5: tres pasos", pares, dobles, suma);
}



// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];

function mostrarCiudades() {
  console.log("Ejercicio 6: mostrar ciudades", ciudades);
  const salida = document.querySelector("#ciudades");
  salida.textContent = "";
  ciudades.forEach(function (ciudad, posicion) {
    console.log("Ejercicio 6: pintar ciudad", posicion, ciudad);
    const badge = document.createElement("span");
    badge.classList.add("badge", "text-bg-secondary", "me-1", "mb-1");
    badge.textContent = posicion + " · " + ciudad;
    salida.append(badge);
  });
}

function verSlice() {
  const copia = ciudades.slice(2, 5);
  document.querySelector("#salida6").textContent = "slice(2, 5) devuelve " + comoTexto(copia) + ". Siguen " + ciudades.length + " ciudades en el array.";
  console.log("Ejercicio 6: slice", copia, ciudades);
}

function hacerSplice() {
  console.log("Ejercicio 6: splice", ciudades);
  if (ciudades.length < 3) {
    document.querySelector("#salida6").textContent = "Quedan menos de tres ciudades. Pulsa Restaurar antes de quitar más.";
    return;
  }
  const eliminadas = ciudades.splice(2, 2);
  document.querySelector("#salida6").textContent = "splice(2, 2) ha quitado " + comoTexto(eliminadas) + ". Quedan " + ciudades.length + " ciudades.";
  mostrarCiudades();
  console.log("Ejercicio 6: ciudades eliminadas", eliminadas);
}

function restaurarCiudades() {
  ciudades = [...ciudadesOriginal];
  mostrarCiudades();
  document.querySelector("#salida6").textContent = "Restauradas las ocho ciudades originales.";
  console.log("Ejercicio 6: restaurar", ciudades);
}

function buscarCiudad() {
  const nombre = document.querySelector("#buscarCiudad").value.trim();
  console.log("Ejercicio 6: buscar", nombre);
  if (nombre === "") {
    document.querySelector("#salida6").textContent = "Escribe el nombre exacto de una ciudad.";
    return;
  }
  const incluida = ciudades.includes(nombre);
  const posicion = ciudades.indexOf(nombre);
  document.querySelector("#salida6").textContent = nombre + ": includes() = " + incluida + "; indexOf() = " + posicion + ".";
  console.log("Ejercicio 6: resultado", incluida, posicion);
}

mostrarCiudades();
