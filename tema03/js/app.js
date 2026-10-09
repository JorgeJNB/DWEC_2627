function ejercicio1() {
  console.log("--- Ejercicio 1 · Variables y typeof ---");

  const precio = 12;
  const nombre = "Jorge";
  const estudiante = true;
  const resultado = null;
  let nota;
  const visitas = 10n;

  console.log("precio =", precio, "→", typeof precio);
  console.log("nombre =", nombre, "→", typeof nombre);
  console.log("estudiante =", estudiante, "→", typeof estudiante);
  console.log("resultado =", resultado, "→", typeof resultado);
  console.log("nota =", nota, "→", typeof nota);
  console.log("visitas =", visitas, "→", typeof visitas);

  nota = 8;
  console.log("nota después =", nota, "→", typeof nota);
}

function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---");

  const numeroATexto = String(123); // Espero "123", string.
  console.log("String(123) →", numeroATexto, typeof numeroATexto);
  const textoANumero = Number("123"); // Espero 123, number.
  console.log('Number("123") →', textoANumero, typeof textoANumero);
  const textoMezclado = Number("12abc"); // Espero NaN, number.
  console.log('Number("12abc") →', textoMezclado, typeof textoMezclado);
  const textoVacio = Number(""); // Espero 0, number.
  console.log('Number("") →', textoVacio, typeof textoVacio);
  const verdaderoANumero = Number(true); // Espero 1, number.
  console.log("Number(true) →", verdaderoANumero, typeof verdaderoANumero);
  const ceroABooleano = Boolean(0); // Espero false, boolean.
  console.log("Boolean(0) →", ceroABooleano, typeof ceroABooleano);
  const textoABooleano = Boolean("texto"); // Espero true, boolean.
  console.log('Boolean("texto") →', textoABooleano, typeof textoABooleano);
  const vacioABooleano = Boolean(""); // Espero false, boolean.
  console.log('Boolean("") →', vacioABooleano, typeof vacioABooleano);
}

function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");

  console.log('"5" - 2 →', "5" - 2); // Espero 3.
  console.log('"5" + 2 →', "5" + 2); // Espero "52".
  console.log('"10" * 2 →', "10" * 2); // Espero 20.
  console.log("true + 3 →", true + 3); // Espero 4.
  console.log('"Corte " + 12 →', "Corte " + 12); // Espero "Corte 12".
  console.log('"18" / 3 →', "18" / 3); // Espero 6.

  console.log('5 == "5" →', 5 == "5"); // Espero true.
  console.log('5 === "5" →', 5 === "5"); // Espero false.
  console.log("0 == false →", 0 == false); // Espero true.
  console.log("0 === false →", 0 === false); // Espero false.
  console.log("null == undefined →", null == undefined); // Espero true.
  console.log("null === undefined →", null === undefined); // Espero false.
}

function ejercicio4() {
  console.log("--- Ejercicio 4 · Tu ficha con plantillas de cadena ---");

  const nombre = "Jorge Núñez Barrales";
  const ciclo = "Desarrollo de Aplicaciones Web";
  const curso = "2º";
  const aficion = "programar";
  let horasEstudio = 5;
  horasEstudio += 2;

  const ficha = `Soy ${nombre}, estudio ${curso} de ${ciclo}, me gusta ${aficion} y esta semana he estudiado ${horasEstudio} horas.`;
  alert(ficha);
  console.log(ficha);

  const fichaConMas = "Soy " + nombre + ", estudio " + curso + " de " + ciclo + ", me gusta " + aficion + " y esta semana he estudiado " + horasEstudio + " horas.";
  console.log(fichaConMas);
  console.log("¿Son iguales?", ficha === fichaConMas);
}
