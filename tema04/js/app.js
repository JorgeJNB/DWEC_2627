/*
  Tarea 4 · DWEC · Jorge Núñez Barrales
  Calculadora y bucles.

  Cómo usar esta plantilla:
  · Hay una función por botón. Cada una se ejecuta al pulsar su botón de index.html.
  · sumar() está hecha: es el modelo. Escribe las demás donde pone TODO y, cuando termines, borra el TODO.
  · Para leer las casillas y escribir el resultado usa las funciones de js/ayudas.js:
      leerNumero("numero1"), mostrar(texto, color), anadirLinea(texto), anadirBadge(texto, color), limpiarSalida()
  · Además de en la página, cada función deja su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.log("Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.log("Restar: falta algún número");
  } else {
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
  }
}

function multiplicar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.log("Multiplicar: falta algún número");
  } else {
    const resultado = n1 * n2;
    mostrar(`${n1} * ${n2} = ${resultado}`);
    console.log(`Multiplicar: ${n1} * ${n2} = ${resultado}`);
  }
}

function dividir() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.log("Dividir: falta algún número");
  } else if (n2 === 0) {
    mostrar("No se puede dividir entre 0.", "danger");
    console.log("Dividir: el segundo número es 0");
  } else {
    const resultado = n1 / n2;
    mostrar(`${n1} / ${n2} = ${resultado}`);
    console.log(`Dividir: ${n1} / ${n2} = ${resultado}`);
  }
}

function potencia() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.log("Potencia: falta algún número");
  } else {
    const resultado = n1 ** n2;
    mostrar(`${n1} ** ${n2} = ${resultado}`);
    console.log(`Potencia: ${n1} ** ${n2} = ${resultado}`);
  }
}

function modulo() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.log("Módulo: falta algún número");
  } else if (n2 === 0) {
    mostrar("No se puede calcular el módulo con el segundo número a 0.", "danger");
    console.log("Módulo: el segundo número es 0");
  } else {
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Módulo: ${n1} % ${n2} = ${resultado}`);
  }
}


// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de comparar.", "danger");
    console.log("Comparar: falta algún número");
  } else if (n1 > n2) {
    mostrar(n1 + " es mayor que " + n2, "info");
    console.log("Comparar: " + n1 + " es mayor que " + n2);
  } else if (n1 < n2) {
    mostrar(n2 + " es mayor que " + n1, "info");
    console.log("Comparar: " + n2 + " es mayor que " + n1);
  } else {
    mostrar(n1 + " y " + n2 + " son iguales.", "info");
    console.log("Comparar: los dos números son iguales");
  }
}

function parOImpar() {
  const n1 = leerNumero("numero1");

  if (Number.isNaN(n1)) {
    mostrar("Escribe el número 1 para saber si es par o impar.", "danger");
    console.log("Par o impar: falta el número 1");
  } else if (!Number.isInteger(n1)) {
    mostrar(n1 + " tiene decimales: no es ni par ni impar.", "warning");
    console.log("Par o impar: el número tiene decimales");
  } else {
    const tipo = n1 % 2 === 0 ? "par" : "impar";
    mostrar(n1 + " es " + tipo + ".", "info");
    console.log("Par o impar: " + n1 + " es " + tipo);
  }
}


// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function bucleFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Escribe un número entero que no supere " + MAXIMO_REPETICIONES + ".", "danger");
    console.log("for: número no válido", veces);
  } else {
    let contador = 0;
    for (let i = 1; i <= veces; i++) {
      contador++;
      const linea = "for · repetición " + i + " de " + veces;
      anadirLinea(linea);
      console.log(linea);
    }
    const total = "Total: " + contador + (contador === 1 ? " repetición" : " repeticiones");
    anadirLinea(total);
    console.log("for: " + total);
  }
}

function bucleWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Escribe un número entero que no supere " + MAXIMO_REPETICIONES + ".", "danger");
    console.log("while: número no válido", veces);
  } else {
    let contador = 0;
    let i = 1;
    while (i <= veces) {
      contador++;
      const linea = "while · repetición " + i + " de " + veces;
      anadirLinea(linea);
      console.log(linea);
      i++;
    }
    const total = "Total: " + contador + (contador === 1 ? " repetición" : " repeticiones");
    anadirLinea(total);
    console.log("while: " + total);
  }
}

function bucleDoWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Escribe un número entero que no supere " + MAXIMO_REPETICIONES + ".", "danger");
    console.log("do…while: número no válido", veces);
  } else {
    let contador = 0;
    let i = 1;
    do {
      contador++;
      const linea = "do…while · repetición " + i + " de " + veces;
      anadirLinea(linea);
      console.log(linea);
      i++;
    } while (i <= veces);
    const total = "Total: " + contador + (contador === 1 ? " repetición" : " repeticiones");
    anadirLinea(total);
    console.log("do…while: " + total);
  }
}


// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {
  // TODO: como bucleFor(), pero cada vuelta añade un badge con el número de la repetición:
  //         anadirBadge(i, "primary");
  // TODO: los pares, de un color y los impares, de otro. Elige el color con el operador ternario.
}

function badgesWhile() {
  // TODO: lo mismo que badgesFor(), con un while.
}

function badgesDoWhile() {
  // TODO: lo mismo que badgesFor(), con un do…while.
}
