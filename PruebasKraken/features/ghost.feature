Feature: Escenarios que involucran la creacion de posts

@user1 @web
Scenario: Como administrador me gustaria crear post, publicarlo, y luego modificarlo
  Given I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new post with text "This is a new post for scenario 1"  
  And I wait for 5 seconds
  And I publish my new post
  And I wait for 5 seconds
  And I return to dashboard
  And I wait for 5 seconds
  And I search for published posts with text "This is a new post"
  And I wait for 3 seconds
  And I modify the post writing "This post is modified for scenario 1"
  And I wait for 3 seconds
  And I publish my modified post
  And I wait for 3 seconds
  And I return to dashboard
  And I wait for 3 seconds
  Then I should see the modified post with text "This post is modified for scenario 1"
  And I send a signal to user 2 containing "Finished 1"

 @user2 @web
 Scenario: Como administrador me gustaria crear post, publicarlo, y luego eliminarlo
  Given I wait for a signal containing "Finished 1" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new post with text "This is a post for scenario 2"  
  And I wait for 5 seconds
  And I publish my new post
  And I wait for 5 seconds
  And I return to dashboard
  And I wait for 5 seconds
  And I search for published posts with text "This is a post for scenario 2"
  And I wait for 3 seconds
  And I delete the post
  And I wait for 5 seconds
  Then I shouldnt see the deleted post
  And I send a signal to user 3 containing "Finished 2"

 @user3 @web
 Scenario: Como administrador me gustaria crear post, dejarlo en draft, luego publicarlo y validar que se publique
  Given I wait for a signal containing "Finished 2" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new post with text "This is a post for scenario 3"  
  And I wait for 5 seconds
  And I return to dashboard
  And I wait for 5 seconds
  And I search for draft posts with text "This is a post for scenario 3"
  And I wait for 3 seconds
  And I publish my new post
  And I wait for 5 seconds
  And I return to dashboard
  Then I should see the published post with text "This is a post for scenario 3"
  And I send a signal to user 4 containing "Finished 3"

 @user4 @web
 Scenario: Como administrador me gustaria crear post, programarlo y verificar que no se publique 
  Given I wait for a signal containing "Finished 3" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new post with text "This is a post for scenario 4"  
  And I wait for 5 seconds
  And I schedule post for a future date
  And I wait for 5 seconds
  And I return to dashboard
  And I wait for 5 seconds
  And I select scheduled from Dashboard
  And I wait for 5 seconds
  Then I should see the scheduled post with text "This is a post for scenario 4"
  And I send a signal to user 5 containing "Finished 4"

@user5 @web
 Scenario: Como administrador me gustaria crear post, publicarlo, verificar que se publique, cambiarlo a draft y validar que ya no se publique
  Given I wait for a signal containing "Finished 4" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new post with text "This is a post for scenario 5"  
  And I wait for 5 seconds
  And I publish my new post
  And I wait for 5 seconds
  And I return to dashboard
  And I wait for 5 seconds
  And I search for published posts with text "This is a post for scenario 5"
  And I wait for 5 seconds
  And I unpublish the post
  And I wait for 5 seconds
  And I return to dashboard
  And I wait for 5 seconds
  And I select drafted from Dashboard
  And I wait for 3 seconds
  Then I should see drafted post with text "This is a post for scenario 5"
  And I send a signal to user 6 containing "Finished 5"
  
@user6 @web
 Scenario: Como administrador me gustaria crear una pagina, publicarla, modificarla y ver que se realice el cambio
  Given I wait for a signal containing "Finished 5" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new page with text "This is a page for scenario 6"  
  And I wait for 5 seconds
  And I publish my new page
  And I wait for 5 seconds
  And I return to dashboard from pages
  And I wait for 5 seconds
  And I search for published pages with text "This is a page for scenario 6"
  And I wait for 3 seconds
  And I modify the page writing "This page is modified for scenario 6"
  And I wait for 3 seconds
  And I publish my modified page
  And I wait for 3 seconds
  And I return to dashboard from pages
  And I wait for 3 seconds
  Then I should see the modified page with text "This page is modified for scenario 6"
  And I send a signal to user 7 containing "Finished 6"

@user7 @web
 Scenario: Como administrador me gustaria crear una pagina, publicarla, y luego eliminarla
  Given I wait for a signal containing "Finished 6" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new page with text "This is a page for scenario 7"  
  And I wait for 5 seconds
  And I publish my new page
  And I wait for 5 seconds
  And I return to dashboard from pages
  And I wait for 5 seconds
  And I search for published pages with text "This is a page for scenario 7"
  And I wait for 3 seconds
  And I delete the page
  And I wait for 5 seconds
  Then I shouldnt see the deleted page
  And I send a signal to user 8 containing "Finished 7"

 @user8 @web
 Scenario: Como administrador me gustaria crear una pagina, dejarla en draft, luego publicarla y validar que se publique
  Given I wait for a signal containing "Finished 7" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new page with text "This is a page for scenario 8"  
  And I wait for 5 seconds
  And I return to dashboard from pages
  And I wait for 5 seconds
  And I search for draft pages with text "This is a page for scenario 8"
  And I wait for 3 seconds
  And I publish my new page
  And I wait for 5 seconds
  And I return to dashboard from pages
  Then I should see the published page with text "This is a page for scenario 8"  
  And I send a signal to user 9 containing "Finished 8"

 @user9 @web
 Scenario: Como administrador me gustaria crear una pagina, programarla y verificar que no se publique aún
  Given I wait for a signal containing "Finished 8" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new page with text "This is a page for scenario 9"  
  And I wait for 5 seconds
  And I schedule page for a future date
  And I wait for 5 seconds
  And I return to dashboard from pages
  And I wait for 5 seconds
  And I select scheduled pages
  And I wait for 5 seconds
  Then I should see the scheduled page with text "This is a page for scenario 9"
  And I send a signal to user 10 containing "Finished 9"

@user10 @web
 Scenario: Como administrador me gustaria crear una pagina, publicarla, verificar que se publique, cambiarla a draft y validar que ya no se publique
  Given I wait for a signal containing "Finished 9" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new page with text "This is a post for scenario 10"  
  And I wait for 5 seconds
  And I publish my new page
  And I wait for 5 seconds
  And I return to dashboard from pages
  And I wait for 5 seconds
  And I search for published pages with text "This is a post for scenario 10"
  And I wait for 5 seconds
  And I unpublish the page
  And I wait for 5 seconds
  And I return to dashboard from pages
  And I wait for 5 seconds
  And I select draft pages
  And I wait for 3 seconds
  Then I should see draft page with text "This is a post for scenario 10"
  And I send a signal to user 11 containing "Finished 10"

@user11 @web
Scenario: 11 - Como administrador me gustaria cear tag, crear post con el tag creado y publicarlo, validar que el post muestre tag
  Given I wait for a signal containing "Finished 10" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"  
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
  And I publish the new page
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
  #And I send a signal to user 20 containing "Finished 19"