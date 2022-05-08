# Entrega - Semana 5
## Pruebas Puppeteer
1. PreRequisitos: 
    - Instalacion de NodeJS almenos en Version 12.22.1
    - Instalacion de Ghost en Version 4.41.3
2. Instrucciones:
    - Entrar a la carpeta llamada Pruebas Puppeteer.
    - Ejecutar el comando  npm i para instalar los paquetes necesarios.
    - Ir al archivo llamado generalVariables.js y abrirlo
    - Dentro del mismo encontrara una estructura llamada genVar, dentro de ella hay 4 campos, "user" representa el correo electronico para hacer login a Ghost debe colocar en este campo el correo correspondiente a su instalacion de Ghost, "password" representa la contraseña usada inicialmente para el loggin, "tempPassword" representa la contraseña usada para las pruebas de cambio de contraseña y "url" representa la URL sobre la cual fue desplegada su instalacion de Ghost, acomodar segun su ambiente local.
    - Una vez terminada la configuracion del archivo generalVariables.js, puede proceder a ejecutar los casos de prueba, para hacer esto escriba en la consola ubicada en la carpeta el comando node con el nombre del archivo segun el caso que corresponda, para el caso 1 seria case1.js, asi que el comando para correr el caso 1 seria "node case1.js", se recomienda correr los casos de prueba en orden, es decir, caso 1, luego caso 2 y asi sucesivamente, puesto que algunas pruebas estan diseñadas para funcionar con base a las anteriores.
    - Cuando la prueba alla terminado de correr dentro de la carpeta correspondiente al numero de caso, podra ver la evidencia tomada por Puppeteer.




