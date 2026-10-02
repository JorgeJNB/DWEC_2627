// Saludo
function saludar() {
  console.log("Se ha pulsado el botón Saludar");
  alert("Hola, soy Jorge");
}

// Escribe un error de prueba en la consola.
function simularError() {
  console.error(
    "Error simulado: este mensaje solo se muestra en la consola"
  );
}

// Muestra la información  del navegador.
function mostrarNavegador() {
  const agente = navigator.userAgent;

  console.warn("Información del navegador:", agente);
  alert("Tu navegador se identifica como:\n" + agente);
}