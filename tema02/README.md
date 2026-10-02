# Tema 2: navegadores y primera página interactiva

## Descripción

En esta tarea he creado un sitio web sencillo formado por dos páginas. Para hacer la estructura he utilizado HTML y para la parte visual he usado componentes y clases de Bootstrap.

En index.html he añadido una tabla que compara Chrome, Firefox, Safari, Edge y Opera. En ella aparece la empresa que desarrolla cada navegador, su motor de renderizado, su motor de JavaScript y si está basado en Chromium. También he incluido una diferencia de compatibilidad y una reflexión sobre los navegadores en los que probaría una web.

En interaccion.html he creado tres botones que llaman a funciones del archivo externo js/app.js. El primer botón muestra un saludo, el segundo simula un error en la consola y el tercero muestra el userAgent del navegador.

# Evidencias

1. Página de navegadores en el ordenador

En esta captura se puede ver index.html abierto en el ordenador. En la barra de navegación aparece mi nombre y debajo está la tabla con los cinco navegadores.

 2. Página de interacción en modo móvil

En esta imagen he utilizado el modo dispositivo de Edge.Los botones se colocan uno debajo de otro y la página se adapta al tamaño de la pantalla sin provocar desplazamiento horizontal.

 3. Trazas de los tres botones

La consola muestra las trazas de los tres botones. El botón Saludar utiliza console.log(), el botón de error utiliza console.error() y el botón del navegador utiliza console.warn().

 4. UserAgent en Edge y Firefox

Aqui podemos ver los mensajes de los dos navegadores usados, Mozilla y Edge

 5. VS Code y Live Server


En esta captura aparece la carpeta tema02 abierta. También se puede ver que la página se está ejecutando mediante Live Server.

# Quién hace qué

Para explicar las tres capas he elegido el botón Saludar. HTML crea el botón y utiliza onclick="saludar()" para llamar a la función. Bootstrap se encarga de su apariencia mediante las clases btn y btn-primary. JavaScript contiene la función saludar(), que abre el mensaje con alert() y deja una traza en la consola con console.log().

Por tanto, HTML crea y organiza el contenido, Bootstrap le da el aspecto visual y JavaScript añade el comportamiento.

# Comparación de los userAgent

Los userAgent de Edge y Firefox son diferentes. En Edge aparecen palabras como Mozilla, AppleWebKit, Chrome, Safari y Edg. Esto no quiere decir que Edge sea Chrome o Safari. Estas palabras se mantienen por compatibilidad con páginas antiguas que buscaban nombres concretos para reconocer el navegador. La palabra Edg es la que permite reconocer que realmente se está utilizando Microsoft Edge.

En Firefox también aparece Mozilla, pero se pueden reconocer las palabras Gecko y Firefox. Edge utiliza Blink y V8 porque está basado en Chromium, mientras que Firefox utiliza Gecko y SpiderMonkey. Esto demuestra que los dos navegadores pueden mostrar la misma página, aunque internamente no funcionen exactamente de la misma manera.
 # Fuentes consultadas
-Motor JavaScript V8 (https://v8.dev/)
-Documentación de Gecko (https://firefox-source-docs.mozilla.org/overview/gecko.html)
-Proyecto WebKit (https://webkit.org/project/)
-Compatibilidad del selector CSS :has() (https://caniuse.com/css-has)
-Información sobre userAgent en MDN (https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)

 # Uso de IA

He utilizado ChatGPT para entender mejor el enunciado, organizar los apartados y revisar algunos conceptos sobre los navegadores y JavaScript. Después he adaptado el contenido, he probado personalmente el código en Edge y Firefox y he realizado las capturas en mi propio equipo.