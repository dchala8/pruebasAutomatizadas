# Pruebas E2E Automatizadas sobre Ghost

## Equipo de proyecto
| Apellidos          | Nombres        | Correo @uniandes             |
| ------------------ | -------------- | ---------------------------- |
| Chala Burbano      | Daniel Andres  | d.chala@uniandes.edu.co      |
| Gutierrez Lizarazo | John Alexander | j.gutierrezl@uniandes.edu.co |
| Mora Rocha         | Carlos Andres  | ca.morar1@uniandes.edu.co    |
| Suárez González    | Jorge Enrique  | je.suarezg1@uniandes.edu.co  |

## 1. Funcionalidades bajo prueba
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

## 2. Pruebas exploratorias manuales
1. Ejecución
- Para ejecutar las pruebas exploratorias manuales se ha creado un archivo con el inventario de pruebas que contiene los escenarios a validar por cada funcionalidad, la fecha de ejecución, el tester responsable de la ejecución, así como el tipo de prueba y el nombrel escenario. El archivo se encuentra en la ruta **pruebasAutomatizadas/PruebasExploratoriasManuales/**

2. Resultados
- Los resultados de las pruebas manuales ejecutados durante la semana 1 del proyecto se encuentra relacionados en el archivo de inventario de pruebas. Allí se encuentran relacionadas las evidencias de la ejecución de cada escenario de prueba, el resultado de cada prueba y el identificador de los issues creado en la herramienta de gestion de incidencias (Github issues). 

## 3. Pruebas de reconocimiento usando Monkey testing
1. Instalación y configuración
- Hacer un fork al repositorio
- Clonar desde el repositorio creado a partir del fork anterior 
- Abrir el editor de código de su preferencia y ubicarse en la siguiente carpeta: **pruebasAutomatizadas/pruebas-de-reconocmimiento-monkey**
- Abrir una consola de línea de comandos y ubicarse en la caperta mencionada anteriormente.
- Instalar dependencias haciendo uso del comando **npm i**

Los siguientes cambios se hacen para el monkey sencillo, pero se pueden realizar para el smart-monkey en su correspondiente archivo smart-monkey-config.json:
Dirigirse al archivo monkey-config.json cambiar la baseUrl por aquella que este usando la instalacion de ghost en pruebas cambiar las variables de usuario y contraseña, usar aquellas que se encuentren en uso para el usuario admin de la version de ghost a probar

2. Ejecución
- Ejecute el comando **cypress run -C monkey-config.json --headed o cypress run -C smart-monkey-config.json --headed**
Puede omitir el comando --headed si no desea ver la ejecucion del programa

3. Resultados
- En la carpeta resultados podra encontrar un video de la prueba realizada en cypress y un reporte html con los pasos realizados, nuevas ejecuciones borraran las realizadas previamente, en el repo de manera original se encuentra un reporte con 411 pasos realizados

## 4. Pruebas de reconocimiento usando Ripper
1. PreRequisitos: 
    - Instalacion de NodeJS almenos en Version 12.22.1
    - Instalacion de Ghost en Version 4.41.3 y/o 4.26.1
2. Instrucciones:
    - Hacer un fork al repositorio
    - Clonar desde el repositorio creado a partir del fork anterior 
    - Entrar a la carpeta llamada "Pruebas Exploratorias Ripper".
    - Ejecutar el comando **npm i** para instalar los paquetes necesarios.
    - Ir al archivo llamado generalVariables.js y abrirlo
    - Dentro del mismo, en el campo URL, poner la direccion de despliegue de Ghost, dentro del campu values, ir a ember7 y colocar en el el correo de loggin de Ghost, y en ember9 colocar la contraseña, guardar el archivo.
    - Abrir una terminal ubicada en la carpeta y ejecutar el comando **node index.js**, esto correra las pruebas en la URL especificada anteriormente, esperar que terminen.
    - Dentro de la carpeta Pruebas Exploratorias Ripper se ha creado una carpeta llamada results, ingresar a esta y ejecutar el comando **npm install -g http-server** 
    - Una vez el comando anterior termine, ejecutar el comando **http-server**
    - Cuando el comando finalice, ir desde su explorador web a la URL generada por el comando **http-server**, tipicamente http://192.168.5.100:8080, y una vez ahi ingresar a la carpeta que sale, navegar al explorador chrome y una vez dentro abrir result.html para ver los resultados.

## 5. Pruebas E2E
Para las pruebas E2E se han propuesto los siguientes escenarios de pruebas:

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

### Ejecución con herramienta Puppeteer (carpeta cucumber implementation)
1. PreRequisitos: 
    - Instalacion de NodeJS almenos en Version 12.22.1
    - Instalacion de Ghost en Version 4.41.3
    - Instalacion de Ghost en Version 4.26.1
2. Instrucciones:
    - Hacer un fork al repositorio
    - Clonar desde el repositorio creado a partir del fork anterior
    - Entrar a la carpeta llamada "cucumber implementation".
    - Ejecutar el comando npm i para instalar los paquetes necesarios.
    - Ir al archivo llamado generalVariables.js y abrirlo
    - Dentro del mismo encontrara una estructura llamada genVar, dentro de ella podra editar los campos, "user" que representa el correo electronico para hacer login a Ghost debe colocar en este campo el correo correspondiente a su usuario de Ghost, "password" representa la contraseña usada inicialmente para el loggin, "tempPassword" representa la contraseña usada para las pruebas de cambio de contraseña, finalmente port1 y port2 representan los puertos de localhost que se usan para cada instalacion de ghost, podra comentar y descomentar en el area indicada para probar una version u otra.
    - Una vez terminada la configuracion del archivo generalVariables.js, puede proceder a ejecutar los casos de prueba, para hacer esto escriba en la consola ubicada en la carpeta "cucumber implementation" el comando npm test de esta manera se ejecutaran los features correspondientes a cada caso.
    - Debido a que estas imagenes seran usadas en las pruebas usando resemble, las evidencisa de cada prueba se ubicaran en la carpeta "resemble-c/V2" con la siguiente estructura "case<numero_de_caso>/<numero_de_puerto>-i<numero_de_imagen>"
    - La prueba debe correrse una seguna vez con el puerto de la segunda instalacion de ghost

### Ejecución con Herramienta Kraken 
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

## 6. Pruebas de regresión visual VRT

### Ejecución con herramienta KRAKEN
Para realizar las pruebas VRT se seleccionó la herramienta ResembleJS. A continuación, se detallan las actividades necesarias para realizar la ejecución de las pruebas de forma correcta:

1. Prerrequisitos:
    - NodeJS versión 16 o superior
    - ResembleJS versión 4.1.0 o superior
    - Ejecución de pruebas automatizadas previas que generan capturas de pantalla de la ABP en las versiones 4.26.1 y 4.41.3
    - Las imágenes para realizar la comparación deben 
        - Ser tipo PNG
        - Ser el mismo número y tener los mismos nombres para las dos versiones. Se espera que los escenarios de pruebas se ejecuten en las dos versiones, con esto, el resultado debería ser el mismo. Ejemplo: se tienen 3 escenarios de pruebas, cada uno con 10 pasos; se espera que existan 30 archivos de imagen para la versión 4.26 y otros 30 (con los mismos nombres) tomados de la versión 4.41
        - Conservar el siguiente patrón de nombramiento: screenshotScenario<#>_StepNumber<#>.png 
            Ejemplo: screenshotScenario10_StepNumber1.png
2. Instrucciones:
    - Hacer un fork al repositorio
    - Clonar desde el repositorio creado a partir del fork anterior
    - Abrir el editor de código de su preferencia y ubicarse en la siguiente carpeta: **pruebasAutomatizadas/ResembleJS_Kraken**
    - Abrir una consola de línea de comandos y ubicarse en la caperta mencionada anteriormente
    - Ejecutar el comando **npm install** para descargar las dependencias y librerías requeridas
    - Eliminar los archivos de la carpeta **../ResembleJS_Kraken/results/Ghost_4_26** 
    - Copiar los archivos de imagen de la ejecución de pruebas sobre la versión 4.26.1 en la carpeta **../ResembleJS_Kraken/results/Ghost_4_26** 
    - Eliminar los archivos de la carpeta **../ResembleJS_Kraken/results/Ghost_4_41** 
    - Copiar los archivos de imagen de la ejecución de pruebas sobre la versión 4.41.3 en la carpeta **../ResembleJS_Kraken/results/Ghost_4_41** 
    - Ejecutar el comando **node index2.js** desde la ruta **pruebasAutomatizadas/ResembleJS_Kraken/**
    - Al finalizar la ejecución se podrá ver el resultado de la misma en la línea de comandos
    - La ejecución habrá generado una nueva carpeta bajo la ruta **../ResembleJS_Kraken/results/** esta carpeta contiene el reporte de la ejecución en formato html, revíselo y analice los resultados

### Ejecución con herramienta Puppeteer
1. PreRequisitos: 
    - NodeJS versión 12.22.1 o superior
    - ResembleJS versión 4.1.0 o superior
    - Ejecución de pruebas automatizadas previas que generan capturas de pantalla de la ABP en las versiones 4.26.1 y 4.41.3
    - Las imágenes para realizar la comparación deben 
        - Ser tipo PNG
        - Conservar el siguiente patrón de nombramiento: <#puerto_ghost>-i<#paso>.png 
            Ejemplo para la versión 4.26.1: 2368-i1.png
            Ejemplo para la versión 4.41.3: 2369-i1.png
        - Ser la misma cantidad. Se espera que los escenarios de pruebas se ejecuten en las dos versiones, con esto, el resultado debería ser el mismo. Ejemplo: se tienen 3 escenarios de pruebas, cada uno con 10 pasos; se espera que existan 30 archivos de imagen para la versión 4.26.1 (sus nombres empiezan con 2368-i) y otros 30 tomados de la versión 4.41 (sus nombres empiezan con 2369-i)
        
2. Instrucciones:
    - Hacer un fork al repositorio
    - Clonar desde el repositorio creado a partir del fork anterior
    - Abrir el editor de código de su preferencia y ubicarse en la siguiente carpeta: **pruebasAutomatizadas/resemble-c**
    - Abrir una consola de línea de comandos y ubicarse en la caperta mencionada anteriormente
    - Ejecutar el comando **npm i** para descargar las dependencias y librerías requeridas
    - Bajo la carpeta **pruebasAutomatizadas/resemble-c/V2** crear una nueva carpeta por cada caso de prueba con el nombre "case<#>"; ejemplo: case1
    - Copiar los archivos de imagen de la ejecución de pruebas sobre las dos versiones (4.26.1y 4.41.3) en la carpeta de caso de prueba correspondiente ("case<#>")
    - Ejecutar el comando **node index2.js**, en este archivo se encuentra una constante llamada "casesAndImages", la cual es un array compuesto de arrays de 2 elementos en donde se indica el numero de caso y la cantidad de imágenes por caso
    - Los resultados de resemble se podran observar en la carpeta "results2" en donde hay una carpeta para cada caso en donde estan las imágenes comparadas y el archivo html con el reporte, revíselo y analice los resultados

## 7. Pruebas con generación de datos
### Ejecución con herramienta Kraken

La ejecución de casos con generación de datos sigue el mismo proceso realizado para ejecutar los escenarios creados en "Pruebas E2E - Ejecución con Herramienta Kraken":

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

Para los escenarios de prueba con generación de datos en Kraken se usan diferentes estrategias:
* Datos aleatorios: Se usa la herramienta Faker para generar cadenas de caracteres aleatorias con diferentes longitudes, con el fin de verificar los valores límites permitidos en los campos de texto. También se utiliza la librería integrada de Faker, especialmente para crear datos de tipo String cuando el tipo de dato a generar no es una restricción
* Datos pseudo aleatorios dinámicos: Se utilizan especialmente en escenarios positivos donde se requiere utilizar data predefinida para obtener respuestas esperadas. En la funcionalidad de miembros se utiliza data para interactuar con los miembros de la aplicación (crear, actualizar, modificar). También se utiliza en escenarios donde se requiere cambiar el color de una característica en especial. Allí se selecciona un color en hexadecimal de un pool de datos para modificar valores de configuración


### Ejecución con herramienta Puppeteer usando faker con cucumber
1. PreRequisitos: 
    - Instalacion de NodeJS almenos en Version 12.22.1
2. Instrucciones:
    - Entrar a la carpeta llamada "faker-cucumber".
    - Ejecutar el comando npm i para instalar los paquetes necesarios.
    - En el archivo generalVariables.js cambiar la informacion correspondiente a initialPassword, donde se pondra la contraseña actual del usuario administrador de ghost, second password corresponde a la contraseña que se usara en las pruebas 17 y 18 cuando se realizan cambios de contraseña y se revierten respectivamente, port1 para indicar el puerto de localhost en donde se esta ejecutando la instalacion de ghost y finalmente dentro del objego genVar el elemento user como el usuario administrador de la instalacion de ghost
    - Ejecutar el comando node "npm test", con esto se ejecutaran todos los casos de prueba, si se desea ejecutar un caso concreto se puede usar el comando: npx cucumber-js --tags "@case62", en donde se puede reemplazar el numero del caso por elq ue se desee testear
    - Los resultados se podran observar en la carpeta resemble-c "results2" en donde hay una carpeta para cada caso en donde estan las imagnes comparadas y el archivo html.
