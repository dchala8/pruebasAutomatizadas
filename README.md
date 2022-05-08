# Entrega - Semana 5

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




## Ejecución de Pruebas - Herramienta Puppeteer
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




