Feature: Escenarios que involucran la creacion y uso de tags y actividades administrativas

@user11 @web
Scenario: 11 - Como administrador me gustaria cear tag, crear post con el tag creado y publicarlo, validar que el post muestre tag
Given I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_TAG_BUTTON>"
  And I wait for 2 seconds
  Then I enter text "Kraken Scenario 11" into field with id "name"
  And I click view with selector "<SAVE_TAG_BUTTON>"
  And I wait for 2 seconds
  And I select option posts
  And I wait for 3 seconds
  And I select New post
  And I wait for 3 seconds
  And I write a new post with title "This is a post with tag: Kraken Scenario 11"
  And I wait for 3 seconds
  #Asociar tag al post
  And I click view with selector "<POST_SETTINGS_BUTTON>"
  Then I define tag name "Kraken Scenario 11" into tags field
  And I wait for 3 seconds
  #Validar que el post muestre el tag
  And I publish my new post
  And I wait for 5 seconds
  And I return to dashboard
  And I wait for 5 seconds
  Then I navigate to view site page "<GHOST_URL>"
  And I wait for 5 seconds
  Then I found post "This is a post with tag: Kraken Scenario 11" with tag "Kraken Scenario 11" related
  And I send a signal to user 12 containing "Finished 11"
  
@user12 @web
Scenario: 12 - Como administrador me gustaría crear tag, crear post con el tag creado y publicarlo, validar que el post muestre tag, eliminar el tag, verificar que el post ya no muestre el tag
Given I wait for a signal containing "Finished 11" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_TAG_BUTTON>"
  And I wait for 2 seconds
  Then I enter text "Kraken Scenario 12" into field with id "name"
  And I click view with selector "<SAVE_TAG_BUTTON>"
  And I wait for 2 seconds
  And I select option posts
  And I wait for 3 seconds
  And I select New post
  And I wait for 3 seconds
  And I write a new post with title "This is a post with tag: Kraken Scenario 12"
  And I wait for 3 seconds
  #Asociar tag al post
  And I click view with selector "<POST_SETTINGS_BUTTON>"
  Then I define tag name "Kraken Scenario 12" into tags field
  And I wait for 3 seconds
  #Validar que el post muestre el tag
  And I publish my new post
  And I wait for 5 seconds
  And I return to dashboard
  And I wait for 5 seconds
  Then I navigate to view site page "<GHOST_URL>"
  And I wait for 5 seconds
  Then I found post "This is a post with tag: Kraken Scenario 12" with tag "Kraken Scenario 12" related
  #Eliminar el tag creado
  And I wait for 3 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 3 seconds
  Then I select a tag with name "Kraken Scenario 12"
  And I wait for 3 seconds
  And I click view with selector "<DELETE_TAG_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<DELETE_CONFIRMATION_BUTTON>"
  And I wait for 5 seconds
  #Validar que el post no muestre el tag
  Then I navigate to view site page "<GHOST_URL>"
  And I wait for 5 seconds
  Then I dont found post "This is a post with tag: Kraken Scenario 12" with tag "Kraken Scenario 12" related
  And I send a signal to user 13 containing "Finished 12"

@user13 @web
Scenario: 13 - Como administrador me gustaría crear post con el tag creado y publicarlo, validar que el post muestre el tag, modificar el tag, verificar que el post muestre el tag actualizado
Given I wait for a signal containing "Finished 12" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_TAG_BUTTON>"
  And I wait for 2 seconds
  Then I enter text "Kraken Scenario 13" into field with id "name"
  And I click view with selector "<SAVE_TAG_BUTTON>"
  And I wait for 2 seconds
  And I select option posts
  And I wait for 3 seconds
  And I select New post
  And I wait for 3 seconds
  And I write a new post with title "This is a post with tag: Kraken Scenario 13"
  And I wait for 3 seconds
  #Asociar tag al post
  And I click view with selector "<POST_SETTINGS_BUTTON>"
  Then I define tag name "Kraken Scenario 13" into tags field
  And I wait for 3 seconds
  And I publish my new post
  And I wait for 5 seconds
  And I return to dashboard
  #Validar que el post muestre el tag
  And I wait for 3 seconds
  Then I navigate to view site page "<GHOST_URL>"
  And I wait for 5 seconds
  Then I found post "This is a post with tag: Kraken Scenario 13" with tag "Kraken Scenario 13" related
  #Modificar el tag creado
  And I wait for 3 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 3 seconds
  Then I select a tag with name "Kraken Scenario 13"
  And I wait for 3 seconds
  Then I enter text "Kraken Scenario 13 nuevo" into field with id "name"
  And I click view with selector "<SAVE_TAG_BUTTON>"
  And I wait for 2 seconds
  #Validar que el post no muestre el tag
  Then I navigate to view site page "<GHOST_URL>"
  And I wait for 5 seconds
  Then I found post "This is a post with tag: Kraken Scenario 13" with tag "Kraken Scenario 13 nuevo" related
  And I send a signal to user 14 containing "Finished 13"

@user14 @web
Scenario: 14 - Como administrador me gustaría crear tag, crear una pagina con el tag asociado, ir a la lista de paginas, filtrar por el tag creado y verificar que retorne la pagina creada
Given I wait for a signal containing "Finished 13" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_TAG_BUTTON>"
  And I wait for 2 seconds
  Then I enter text "Kraken Scenario 14" into field with id "name"
  And I click view with selector "<SAVE_TAG_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<PAGES_MENU>"
  And I wait for 3 seconds
  And I click view with selector "<NEW_PAGE_BUTTON>"
  And I wait for 3 seconds
  And I write a new page with title "Page for scenario 14"
  And I wait for 3 seconds
  #Asociar tag al post
  And I click view with selector "<POST_SETTINGS_BUTTON>"
  Then I define tag name "Kraken Scenario 14" into tags field
  And I wait for 2 seconds
  And I publish my new page
  And I wait for 5 seconds
  #Validar que el post muestre el tag
  And I click view with selector "<RETURN_PAGES>"
  And I wait for 3 seconds
  And I filter by tag "Kraken Scenario 14"
  And I wait for 3 seconds
  Then I found page "Page for scenario 14"
  And I send a signal to user 15 containing "Finished 14"

@user15 @web
Scenario: 15 - Como administrador me gustaria crear miembro, verificar que se muestra en la ventana de miembros, modificar miembro, verificar que se muestre el miembro actualizado
Given I wait for a signal containing "Finished 14" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<MEMBERS_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_MEMBER_BUTTON>"
  And I wait for 2 seconds
  And I create member with name "$name_1" and email "$email_1"
  And I wait for 2 seconds
  And I click view with selector "<MEMBERS_MENU>"
  And I wait for 2 seconds
  Then I found member with name "$$name_1"
  Then I set new name "$name_2" to member with name "$$name_1"
  And I wait for 2 seconds
  And I click view with selector "<MEMBERS_MENU>"
  And I wait for 2 seconds
  Then I found member with name "$$name_2"
  And I send a signal to user 16 containing "Finished 15"

@user16 @web
Scenario: 16 - Como administrador me gustaria modificar el autor principal, ir a la lista de posts, filtrar por author y validar que tenga el nuevo nombre
Given I wait for a signal containing "Finished 15" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I select option posts
  And I wait for 3 seconds
  And I select New post
  And I wait for 3 seconds
  And I write a new post with title "This is a post with tag: Kraken Scenario 16"
  And I wait for 3 seconds
  And I click view with selector "<POST_SETTINGS_BUTTON>"
  And I wait for 2 seconds
  And I publish my new post
  And I wait for 5 seconds
  And I return to dashboard
  And I wait for 5 seconds
  #Modificar el autor principal
  And I click view with selector "<SETTINGS_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<STAFF_OPTION>"
  And I wait for 2 seconds
  Then I set new name "$name_3" to author with name "<USER_NAME>"
  And I wait for 2 seconds
  #Buscar el post del miembro con el nuevo nombre
  And I click view with selector "<POSTS_MENU>"
  Then I filter by author "$$name_3"
  Then I found post with title "This is a post with tag: Kraken Scenario 16"
  And I send a signal to user 17 containing "Finished 16"

@user17 @web
Scenario: 1 - Como administrador me gustaria crear post, visualizarlo en View site, modificar post, validar en View Site post con el cambio realizado
Given I wait for a signal containing "Finished 16" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I select option posts
  And I wait for 3 seconds
  And I select New post
  And I wait for 3 seconds
  And I write a new post with title "This is a post with tag: Kraken Scenario 17"
  And I wait for 3 seconds
  And I publish my new post
  And I wait for 5 seconds
  And I return to dashboard
  And I wait for 5 seconds
  #Validar que el post se vea en el sitio
  Then I navigate to view site page "<GHOST_URL>"
  And I wait for 5 seconds
  Then I found post with title "This is a post with tag: Kraken Scenario 17"
  #Modificar el post
  And I wait for 3 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  And I select option posts
  And I wait for 3 seconds
  And I change title to "This is a post with tag: Kraken Scenario 17 modificado" of post with title "This is a post with tag: Kraken Scenario 17"
  And I wait for 3 seconds
  And I click view with selector "<POST_SETTINGS_BUTTON>"
  And I wait for 3 seconds
  And I update my new post
  And I wait for 5 seconds
  And I return to dashboard
  And I wait for 5 seconds
  #Validar el cambio en el sitio
  Then I navigate to view site page "<GHOST_URL>"
  And I wait for 5 seconds
  Then I found post with title "This is a post with tag: Kraken Scenario 17 modificado"
  And I send a signal to user 18 containing "Finished 17"

@user18 @web
Scenario: 18 - Como administrador me gustaria modificar el título del sitio
Given I wait for a signal containing "Finished 17" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  #Modificar el titulo del sitio
  And I click view with selector "<SETTINGS_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<GENERAL_OPTION>"
  And I wait for 2 seconds
  And I click view with selector "<EXPAND_TITLE_AND_DESCRIPTION_BUTTON>"
  And I wait for 2 seconds
  And I set title with "Sitio probado con Kraken"
  And I click view with selector "<SAVE_TAG_BUTTON>"
  And I wait for 2 seconds
  #Verificar el nuevo titulo en el sitio
  Then I navigate to view site page "<GHOST_URL>"
  Then I found site with title "Sitio probado con Kraken"
  And I send a signal to user 19 containing "Finished 18"
  
@user19 @web
Scenario: 19 - Como administrador me gustaria cambiar la contraseña del usuario, cerrar sesión, intentar con la antigua contraseña, validar que no le permita ingresar
  Given I wait for a signal containing "Finished 18" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  #Cambiar la clave
  And I click view with selector "<AVATAR_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<PROFILE_OPTION>"
  And I wait for 2 seconds
  And I change current password "<PASSWORD>" to new password "<NEW_PASSWORD>"
  And I wait for 2 seconds
  And I click view with selector "<CHANGE_PASSWORD_BUTTON>"
  And I wait for 8 seconds
  And I click view with selector "<AVATAR_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<SIGNOUT_OPTION>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I found password error message
  And I send a signal to user 20 containing "Finished 19"

@user20 @web
Scenario: 20 - Como administrador me gustaria iniciar sesion con la nueva clave y posteriormente actualizarla para dejarla como la original, finalmente, validar que puedo iniciar sesion con la misma clave
Given I wait for a signal containing "Finished 19" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<NEW_PASSWORD>"
  And I wait for 5 seconds
  #Cambiar la clave
  And I click view with selector "<AVATAR_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<PROFILE_OPTION>"
  And I wait for 2 seconds
  And I change current password "<NEW_PASSWORD>" to new password "<PASSWORD>"
  And I wait for 2 seconds
  And I click view with selector "<CHANGE_PASSWORD_BUTTON>"
  And I wait for 8 seconds
  And I click view with selector "<AVATAR_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<SIGNOUT_OPTION>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I am on dashboard page
  And I send a signal to user 20 containing "Finished 19"