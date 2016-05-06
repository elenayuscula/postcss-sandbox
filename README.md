# PostCSS Sandbox
## A PostCSS workflow

En este gulpfile pretendo crear un entorno de trabajo basado en PostCSS, con plugins que permiten escribir sintaxis CSS futura, y a la vez seguir aprovechando algunas de las características de SASS como las variables, los mixins o los loops.

Es posible que este flujo de trabajo vaya evolucionando e incorporando nuevos plugins según las necesidades, así como eliminando otros que vaya considerando innecesarios.


## Contenido
Está configurado de manera que se trabaja directamente sobre el archivo `src/styles-dev.css` El CSS es compilado y ordenado según la configuración del archivo `.csscomb.json` (Vosotros podéis crearos vuestra propia configuración [aquí](http://csscomb.com/config)) en el archivo `dest/styles.css` y, a la vez, es minificado en `dest/styles.min.css`. De esta manera podemos ver exactamente qué y cómo se compila a la vez que minificamos el CSS resultante para usar en distribución.



