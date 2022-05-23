# Pruebas E2E Automatizadas sobre Ghost

## Equipo de proyecto
| Apellidos          | Nombres        | Correo @uniandes             |
| ------------------ | -------------- | ---------------------------- |
| Chala Burbano      | Daniel Andres  | d.chala@uniandes.edu.co      |
| Gutierrez Lizarazo | John Alexander | j.gutierrezl@uniandes.edu.co |
| Mora Rocha         | Carlos Andres  | ca.morar1@uniandes.edu.co    |
| Suárez González    | Jorge Enrique  | je.suarezg1@uniandes.edu.co  |

## Funcionalidades bajo prueba
1. Login
2. Crear post
3. Modificar post
4. Eliminar post
5. Publicar post
6. Crear pagina
7. Modificar pagina
8. Eliminar pagina
9. Publicar pagina
10. Crear tag
11. Modificar tag
12. Eliminar tag
13. Crear miembro
14. Modificar miembro
15. Iniciar sesión
16. Ver sitio
17. Cambiar nombre del sitio

## Escenarios de prueba
1. Crear post, publicarlo, modificar el post y ver que el post se actualice.
2. Crear post, publicarlo, eliminar el post y verificar que ya no esté publicado.
3. Crear post y no publicarlo, verificar que no esté publicado, publicarlo y verificar que esté publicado.
4. Crear post, programar fecha de publicacion futura, verificar que no esté publicado y luego verificar que se publique en la fecha programada.
5. Crear post, publicarlo, verificar que se publique, cambiar de estado a draft, y verificar que ya no se publique.
6. Crear pagina y publicarlo, modificar pagina y ver cambio.
7. Crear pagina y publicarlo, eliminarlo pagina y verificar que ya no esté publicado.
8. Crear pagina y no publicarlo, verificar que no esté publicado, publicarlo y verificar que esté publicado.
9. Crear pagina, programar fecha de publicacion futura, verificar que no esté publicado y luego verificar que se publique en la fecha programada.
10. Crear pagina, publicarlo, verificar que se publique, cambiar de estado a draft, y verificar que ya no se publique.
11. Crear tag, crear post con el tag creado y publicarlo, validar que el post muestre tag.
12. Crear tag, crear post con el tag creado y publicarlo, validar que el post muestre tag, eliminar el tag, verificar que el post ya no muestre.
13. Crear tag, crear post con el tag creado y publicarlo, validar que el post muestre tag, modificar el tag, verificar que el post muestre el tag actualizado.
14. Crear tag, crear la pagina con el tag asociado, ir a la lista de paginas, filtrar por el tag creado y verificar que retorne la pagina creada.
15. Crear miembro, verificar que se muestra en la ventana de miembros, modificar miembro, verificar que se muestre el miembro actualizado.
16. Modificar el miembro principal, ir a la lista de posts, filtrar por author y validar que tenga el nuevo nombre.
17. Cambiar la contraseña del usuario, cerrar sesión, intentar con la antigua contraseña, validar que no le permita.
18. Cambiar la contraseña del usuario, cerrar sesión, intentar con la nueva contraseña, validar que le permita ingresar, dejar la contraseña original.
19. Crear post, visualizarlo en View site, modificar post, validar en View Site post con el cambio realizado.
20. Ingresar a configuraciones, seleccionar general, expandir títulos y descripción, cambiar nombre del sitio, verificar en el sitio que tenga el nuevo título.

## Ejecución de Pruebas - Herramienta Kraken 
1. Prerequisitos:
    - NodeJS versión 16 o superior
    - Ghost version 4.41.3
    - Verificar que se cumplan los prerequisitos para instalar Kraken, indicados en la pagina de documentación (https://thesoftwaredesignlab.github.io/Kraken/)

2. Instrucciones:
    - Hacer un fork al repositorio
    - Clonar desde el repositorio creado a partir del fork anterior
    - Abrir el editor de código de su preferencia y ubicarse en la siguiente carpeta: **pruebasAutomatizadas/PruebasKraken**
    - Abrir una consola de línea de comandos y ubicarse en la caperta mencionada anteriormente.
    - Ejecutar el comando **npm install** para descargar las dependencias y librerías requeridas
    - Antes de ejecutar las pruebas es necesario modificar las siguientes llaves del archivo **properties.json** ubicado en la carpeta: **pruebasAutomatizadas/PruebasKraken**:
        - "GHOST_URL": "Colocar la URL donde se encuentra desplegada la instalación de Ghost". Ejemplo: http://localhost:2369.
        - "USER": "El correo de autenticación del usuario principal creado en la instalación de Ghost".
        - "PASSWORD": "Clave del usuario utilizado anteriormente en USER".
        - "USER_NAME" "Nombre del usuario registrado como principal en Ghost".
    - Para lanzar las pruebas definidas en el feature:
        - Desde la consola de línea de comandos, ubicarse en la ruta **pruebasAutomatizadas/PruebasKraken**
        - Ejecutar el comando **npx kraken-node run**
    - Verificar los resultados de la ejecución en la carpeta **pruebasAutomatizadas/PruebasKraken/reports**
3. Ejecución casos versión de regresión 4.26.1:
    - Para ejecutar los casos de la versión 4.26.1 se ejecuta el mismo comando indicado anteriormente, pero desde la rama **Ghost_4.26.1**. En este caso se ejecutarán los siguientes escenarios, seleccionados para ejecutar posteriormente las pruebas VRT:
        - Escenario 14: Crear tag, crear la pagina con el tag asociado, ir a la lista de paginas, filtrar por el tag creado y verificar que retorne la pagina creada.
        - Escenario 15. Crear miembro, verificar que se muestra en la ventana de miembros, modificar miembro, verificar que se muestre el miembro actualizado.
        - Escenario 18. Cambiar la contraseña del usuario, cerrar sesión, intentar con la nueva contraseña, validar que le permita ingresar, dejar la contraseña original.
        - Escenario 19. Crear post, visualizarlo en View site, modificar post, validar en View Site post con el cambio realizado.
        - Escenario 20. Ingresar a configuraciones, seleccionar general, expandir títulos y descripción, cambiar nombre del sitio, verificar en el sitio que tenga el nuevo título.

## Ejecución de pruebas de regresión visual VRT / KRAKEN
Para realizar las pruebas VRT se seleccionó la herramienta ResembleJS, siguiendo los siguientes pasos:

1. Se almacenaron las imagenes obtenidas de las pruebas E2E de cada versión de la aplicación en dos carpetas diferentes. Las rutas de las carpetas son **pruebasAutomatizadas/ResembleJS_Kraken/results/Ghost_4_26/** y **pruebasAutomatizadas/ResembleJS_Kraken/results/Ghost_4_41/**
2. Una vez almacenadas, se ejecutó el comando **node index2.js** desde la ruta **pruebasAutomatizadas/ResembleJS_Kraken/**

El reporte HTML de las pruebas de regresión visual de estos escenarios se encuentra en la ruta **pruebasAutomatizadas/ResembleJS_Kraken/results/2022-05-15T20.38.23.354Z/** con el nombre **report.html**. En el reporte se evidencian las comparaciones y resultados de cada uno de los pasos de los escenarios indicados anteriormente.

## Ejecución de pruebas con generación de datos / KRAKEN

La ejecución de casos con generación de datos sigue el mismo proceso realizado para ejecutar los escenarios creados en "Ejecución de Pruebas - Herramienta Kraken":

- Hacer un fork al repositorio
- Clonar desde el repositorio creado a partir del fork anterior
- Abrir el editor de código de su preferencia y ubicarse en la siguiente carpeta: **pruebasAutomatizadas/PruebasKraken**
- Abrir una consola de línea de comandos y ubicarse en la caperta mencionada anteriormente.
- Ejecutar el comando **npm install** para descargar las dependencias y librerías requeridas
- Antes de ejecutar las pruebas es necesario modificar las siguientes llaves del archivo **properties.json** ubicado en la carpeta: **pruebasAutomatizadas/PruebasKraken**:
- "GHOST_URL": "Colocar la URL donde se encuentra desplegada la instalación de Ghost". Ejemplo: http://localhost:2369.
- "USER": "El correo de autenticación del usuario principal creado en la instalación de Ghost".
- "PASSWORD": "Clave del usuario utilizado anteriormente en USER".
- "USER_NAME" "Nombre del usuario registrado como principal en Ghost".
- Para lanzar las pruebas definidas en el feature:
- Desde la consola de línea de comandos, ubicarse en la ruta **pruebasAutomatizadas/PruebasKraken**
- Ejecutar el comando **npx kraken-node run**
- Verificar los resultados de la ejecución en la carpeta **pruebasAutomatizadas/PruebasKraken/reports**

Para los escenarios de prueba con generación de datos en Kraken utilizamos diferentes estrategias:
* Datos aleatorios: Se realizó uso de la herramienta Faker para generar cadenas de caracteres aleatorias con diferentes longitudes, con el fin de verificar los valores límites permitidos en los campos de texto. También se utilizó la librería integrada de Faker, especialmente para crear datos de tipo String cuando el tipo de dato a generar no era una restricción.
* Datos pseuso aleatorios dinámicos: Se utilizaron especialmente en escenarios positivos donde se requiere obtener utilizar data predefinida para obtener respuestas esperadas. En la funcionalidad de miembros se utilizó data para crear interactuar con los miembros de la aplicación (crear, actualizar, modificar). También se utilizó en escenarios donde se requiere cambiar el color de una característica en especial. Allí se seleccionaba un color en hexadecimal de un pool de datos para modificar valores de configuración.

## Ejecución de Pruebas - Herramienta Puppeteer (carpeta cucumber implementation)
1. PreRequisitos: 
    - Instalacion de NodeJS almenos en Version 12.22.1
    - Instalacion de Ghost en Version 4.41.3
    - Instalacion de Ghost en Version 4.26.1
2. Instrucciones:
    - Entrar a la carpeta llamada "cucumber implementation".
    - Ejecutar el comando npm i para instalar los paquetes necesarios.
    - Ir al archivo llamado generalVariables.js y abrirlo
    - Dentro del mismo encontrara una estructura llamada genVar, dentro de ella podra editar los campos, "user" que representa el correo electronico para hacer login a Ghost debe colocar en este campo el correo correspondiente a su usuario de Ghost, "password" representa la contraseña usada inicialmente para el loggin, "tempPassword" representa la contraseña usada para las pruebas de cambio de contraseña, finalmente port1 y port2 representan los puertos de localhost que se usan para cada instalacion de ghost, podra comentar y descomentar en el area indicada para probar una version u otra.
    - Una vez terminada la configuracion del archivo generalVariables.js, puede proceder a ejecutar los casos de prueba, para hacer esto escriba en la consola ubicada en la carpeta "cucumber implementation" el comando npm test de esta manera se ejecutaran los features correspondientes a cada caso.
    - Debido a que estas imagenes seran usadas en las pruebas usando resemble, las evidencisa de cada prueba se ubicaran en la carpeta "resemble-c/V2" con la siguiente estructura "case<numero_de_caso>/<numero_de_puerto>-i<numero_de_imagen>"
    - La prueba debe correrse una seguna vez con el puerto de la segunda isntalacion de ghost

## Ejecucion de pruebas con resemble
1. PreRequisitos: 
    - Instalacion de NodeJS almenos en Version 12.22.1
2. Instrucciones:
    - Entrar a la carpeta llamada "resemble-c".
    - Ejecutar el comando npm i para instalar los paquetes necesarios.
    - Ejecutar el comando node index2.js, en este arcvhivo se encuentra una constante llamada "casesAndImages", la cual es un array compuesto de arrays de 2 elementos en donde se indica el numero de caso y la cantidad de imagenes por caso.
    - Los resultados de resmble se podran observar en la carpeta "results2" en donde hay una carpeta para cada caso en donde estan las imagnes comparadas y el archivo html.

## Ejecucion de pruebas con faker con cucumber
1. PreRequisitos: 
    - Instalacion de NodeJS almenos en Version 12.22.1
2. Instrucciones:
    - Entrar a la carpeta llamada "faker-cucumber".
    - Ejecutar el comando npm i para instalar los paquetes necesarios.
    - En el archivo generalVariables.js cambiar la informacion correspondiente a initialPassword, donde se pondra la contraseña actual del usuario administrador de ghost, second password corresponde a la contraseña que se usara en las pruebas 17 y 18 cuando se realizan cambios de contraseña y se revierten respectivamente, port1 para indicar el puerto de localhost en donde se esta ejecutando la instalacion de ghost y finalmente dentro del objego genVar el elemento user como el usuario administrador de la instalacion de ghost
    - Ejecutar el comando node "npm test", con esto se ejecutaran todos los casos de prueba, si se desea ejecutar un caso concreto se puede usar el comando: npx cucumber-js --tags "@case62", en donde se puede reemplazar el numero del caso por elq ue se desee testear
    - Los resultados se podran observar en la carpeta resemble-c "results2" en donde hay una carpeta para cada caso en donde estan las imagnes comparadas y el archivo html.

## Ejecución de Pruebas - Herramienta Puppeteer (carpeta PruebasPuppeteer version anterior sin pageObject ni given, when, then)
1. PreRequisitos: 
    - Instalacion de NodeJS almenos en Version 12.22.1
    - Instalacion de Ghost en Version 4.41.3 y/o 4.26.1
2. Instrucciones:
    - Entrar a la carpeta llamada "PruebasPuppeteer".
    - Ejecutar el comando npm i para instalar los paquetes necesarios.
    - Ir al archivo llamado generalVariables.js y abrirlo
    - Dentro del mismo encontrara una estructura llamada genVar, dentro de ella podra editar los campos, "user" que representa el correo electronico para hacer login a Ghost debe colocar en este campo el correo correspondiente a su usuario de Ghost, "password" representa la contraseña usada inicialmente para el loggin, "tempPassword" representa la contraseña usada para las pruebas de cambio de contraseña, finalmente port1 y port2 representan los puertos de localhost que se usan para cada instalacion de ghost, podra comentar y descomentar en el area indicada para probar una version u otra si lo desea.
    - Una vez terminada la configuracion del archivo generalVariables.js, puede proceder a ejecutar los casos de prueba, para hacer esto escriba en la consola ubicada en la carpeta "PruebasPuppeteer" el comando node case<numero_de_caso>.js por ejemplo "node case1.js" de esta manera se ejecutaran las pruebas correspondientes a cada caso, esto generara una carpeta con el nombre del caso y las capturas de pantalla correspondientes, repetir el caso sobreescribira las evidencias de dicho caso

