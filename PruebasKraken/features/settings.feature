Feature: Escenarios que involucran cambios en la configuración del sitio y otros

@user15 @web
Scenario: 15 - Como administrador me gustaria crear miembro, verificar que se muestra en la ventana de miembros, modificar miembro, verificar que se muestre el miembro actualizado
Given I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  And I take a screenshot of scenario "15" and step number "1"
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I take a screenshot of scenario "15" and step number "2"
  And I click view with selector "<MEMBERS_MENU>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "15" and step number "3"
  And I click view with selector "<NEW_MEMBER_BUTTON>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "15" and step number "4"
  And I create member with name "$name_1" and email "$email_1"
  And I wait for 2 seconds
  And I take a screenshot of scenario "15" and step number "5"
  And I click view with selector "<MEMBERS_MENU>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "15" and step number "6"
  Then I found member with name "$$name_1"
  And I wait for 2 seconds
  And I take a screenshot of scenario "15" and step number "7"
  Then I set new name "$name_2" to member with name "$$name_1"
  And I wait for 2 seconds
  And I take a screenshot of scenario "15" and step number "8"
  And I click view with selector "<MEMBERS_MENU>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "15" and step number "9"
  Then I found member with name "$$name_2"
  And I wait for 2 seconds
  And I take a screenshot of scenario "15" and step number "10"
  And I send a signal to user 16 containing "Finished 15"

@user16 @web
Scenario: 16 - Como administrador me gustaria modificar el autor principal, ir a la lista de posts, filtrar por author y validar que tenga el nuevo nombre
Given I wait for a signal containing "Finished 15" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  And I take a screenshot of scenario "16" and step number "1"
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I take a screenshot of scenario "16" and step number "2"
  And I select option posts
  And I wait for 3 seconds
  And I take a screenshot of scenario "16" and step number "3"
  And I select New post
  And I wait for 3 seconds
  And I take a screenshot of scenario "16" and step number "4"
  And I write a new post with title "This is a post with tag: Kraken Scenario 16"
  And I wait for 3 seconds
  And I take a screenshot of scenario "16" and step number "5"
  And I click view with selector "<POST_SETTINGS_BUTTON>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "16" and step number "6"
  And I publish my new post
  And I wait for 5 seconds
  And I take a screenshot of scenario "16" and step number "7"
  And I return to dashboard
  And I wait for 5 seconds
  And I take a screenshot of scenario "16" and step number "8"
  #Modificar el autor principal
  And I click view with selector "<SETTINGS_BUTTON>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "16" and step number "9"
  And I click view with selector "<STAFF_OPTION>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "16" and step number "10"
  Then I set new name "$name_3" to author with name "<USER_NAME>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "16" and step number "11"
  #Buscar el post del miembro con el nuevo nombre
  And I click view with selector "<POSTS_MENU>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "16" and step number "12"
  Then I filter by author "$$name_3"
  And I wait for 2 seconds
  And I take a screenshot of scenario "16" and step number "13"
  Then I found post with title "This is a post with tag: Kraken Scenario 16"
  And I wait for 2 seconds
  And I take a screenshot of scenario "16" and step number "14"
  And I send a signal to user 17 containing "Finished 16"

@user17 @web
Scenario: 17 - Como administrador me gustaria crear post, visualizarlo en View site, modificar post, validar en View Site post con el cambio realizado
Given I wait for a signal containing "Finished 16" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  And I take a screenshot of scenario "17" and step number "1"
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I take a screenshot of scenario "17" and step number "2"
  And I select option posts
  And I wait for 3 seconds
  And I take a screenshot of scenario "17" and step number "3"
  And I select New post
  And I wait for 3 seconds
  And I take a screenshot of scenario "17" and step number "4"
  And I write a new post with title "This is a post with tag: Kraken Scenario 17"
  And I wait for 3 seconds
  And I take a screenshot of scenario "17" and step number "5"
  And I publish my new post
  And I wait for 5 seconds
  And I take a screenshot of scenario "17" and step number "6"
  And I return to dashboard
  And I wait for 5 seconds
  And I take a screenshot of scenario "17" and step number "7"
  #Validar que el post se vea en el sitio
  Then I navigate to view site page "<GHOST_URL>"
  And I wait for 5 seconds
  And I take a screenshot of scenario "17" and step number "8"
  Then I found post with title "This is a post with tag: Kraken Scenario 17"
  #Modificar el post
  And I wait for 3 seconds
  And I take a screenshot of scenario "17" and step number "9"
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  And I take a screenshot of scenario "17" and step number "10"
  And I select option posts
  And I wait for 3 seconds
  And I take a screenshot of scenario "17" and step number "11"
  And I change title to "This is a post with tag: Kraken Scenario 17 modificado" of post with title "This is a post with tag: Kraken Scenario 17"
  And I wait for 3 seconds
  And I take a screenshot of scenario "17" and step number "12"
  And I click view with selector "<POST_SETTINGS_BUTTON>"
  And I wait for 3 seconds
  And I take a screenshot of scenario "17" and step number "13"
  And I update my new post
  And I wait for 5 seconds
  And I take a screenshot of scenario "17" and step number "14"
  And I return to dashboard
  And I wait for 5 seconds
  And I take a screenshot of scenario "17" and step number "15"
  #Validar el cambio en el sitio
  Then I navigate to view site page "<GHOST_URL>"
  And I wait for 5 seconds
  And I take a screenshot of scenario "17" and step number "16"
  Then I found post with title "This is a post with tag: Kraken Scenario 17 modificado"
  And I wait for 5 seconds
  And I take a screenshot of scenario "17" and step number "17"
  And I send a signal to user 18 containing "Finished 17"

@user18 @web
Scenario: 18 - Como administrador me gustaria modificar el título del sitio
Given I wait for a signal containing "Finished 17" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  And I take a screenshot of scenario "18" and step number "1"
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I take a screenshot of scenario "18" and step number "2"
  #Modificar el titulo del sitio
  And I click view with selector "<SETTINGS_BUTTON>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "18" and step number "3"
  And I click view with selector "<GENERAL_OPTION>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "18" and step number "4"
  And I click view with selector "<EXPAND_TITLE_AND_DESCRIPTION_BUTTON>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "18" and step number "5"
  And I set title with "Sitio probado con Kraken"
  And I wait for 2 seconds
  And I take a screenshot of scenario "18" and step number "6"
  And I click view with selector "<SAVE_SETTINGS_BUTTON>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "18" and step number "7"
  #Verificar el nuevo titulo en el sitio
  Then I navigate to view site page "<GHOST_URL>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "18" and step number "8"
  Then I found site with title "Sitio probado con Kraken"
  And I send a signal to user 19 containing "Finished 18"

@user19 @web
Scenario: 41 - Como administrador me gustaria Ingresar a perfil de usuario, definir un valor sin formato de dirección URL en el campo Website e intentar salvar
 Given I wait for a signal containing "Finished 18" for 9999999 seconds
 And I navigate to edit page "<GHOST_URL>"
 And I wait for 5 seconds
 When I make login with "<USER>" and "<PASSWORD>"
 And I wait for 5 seconds
 And I select profile menu
 And I wait for 5 seconds
 And I write the next value for Website field "$string_1"
 And I wait for 5 seconds
 And I click button save
 And I wait for 5 seconds
 Then I should see error "Website is not a valid url"
 And I wait for 2 seconds
 And I send a signal to user 20 containing "Finished 19"  

 @user20 @web
Scenario: 42 - Como administrador me gustaria Ingresar a perfil de usuario, definir un valor con formato correcto de dirección URL en el campo Website e intentar salvar
 Given I wait for a signal containing "Finished 19" for 9999999 seconds
 And I navigate to edit page "<GHOST_URL>"
 And I wait for 5 seconds
 When I make login with "<USER>" and "<PASSWORD>"
 And I wait for 5 seconds
 And I select profile menu
 And I wait for 5 seconds
 And I write the next valid value for Website field "$name_1"
 And I wait for 5 seconds
 And I click button save
 And I wait for 5 seconds
 Then I should be able to save changes
 And I wait for 2 seconds
 And I send a signal to user 21 containing "Finished 20"

 @user21 @web
Scenario: 43 - Como administrador me gustaria Ingresar a perfil de usuario, ingresar la clave actual, no ingresar nueva clave e intentar cambiar la clave
 Given I wait for a signal containing "Finished 20" for 9999999 seconds
 And I navigate to edit page "<GHOST_URL>"
 And I wait for 5 seconds
 When I make login with "<USER>" and "<PASSWORD>"
 And I wait for 5 seconds
 And I select profile menu
 And I wait for 5 seconds
 And I write the current password "<PASSWORD>"
 And I wait for 5 seconds
 And I click button Change Password
 And I wait for 5 seconds
 Then I should not be able to change password
 And I wait for 2 seconds
 And I send a signal to user 22 containing "Finished 21"

@user22 @web
Scenario: 44 - Como administrador me gustaria Ingresar a perfil de usuario, ingresar la clave actual, ingresar nueva clave, no ingresar clave de confirmación e intentar cambiar la clave
 Given I wait for a signal containing "Finished 21" for 9999999 seconds
 And I navigate to edit page "<GHOST_URL>"
 And I wait for 5 seconds
 When I make login with "<USER>" and "<PASSWORD>"
 And I wait for 5 seconds
 And I select profile menu
 And I wait for 5 seconds
 And I write the current password "<PASSWORD>"
 And I wait for 5 seconds
And I write the new password "$string_1"
 And I wait for 5 seconds
 And I click button Change Password
 And I wait for 5 seconds
 Then I should get error in confirmation password
 And I wait for 2 seconds
 And I send a signal to user 23 containing "Finished 22" 

@user23 @web
Scenario: 45 - Como administrador me gustaria Ingresar a perfil de usuario, ingresar la clave actual, ingresar nueva clave, ingresar clave de confirmación diferente a la nueva clave e intentar cambiar la clave
 Given I wait for a signal containing "Finished 22" for 9999999 seconds
 And I navigate to edit page "<GHOST_URL>"
 And I wait for 5 seconds
 When I make login with "<USER>" and "<PASSWORD>"
 And I wait for 5 seconds
 And I select profile menu
 And I wait for 5 seconds
 And I write the current password "<PASSWORD>"
 And I wait for 5 seconds
 And I write the new password "$string_1"
 And I wait for 5 seconds
 And I confirm the new password "$string_2"
 And I wait for 5 seconds
 And I click button Change Password
 And I wait for 5 seconds
 Then I should get error in confirmation password
 And I wait for 2 seconds
 And I send a signal to user 24 containing "Finished 23"  

@user24 @web
Scenario: 46 - Como administrador me gustaria Ingresar a perfil de usuario, NO ingresar la clave actual, ingresar nueva clave, ingresar clave de confirmación igual a la nueva clave e intentar cambiar la clave
 Given I wait for a signal containing "Finished 23" for 9999999 seconds
 And I navigate to edit page "<GHOST_URL>"
 And I wait for 5 seconds
 When I make login with "<USER>" and "<PASSWORD>"
 And I wait for 5 seconds
 And I select profile menu
 And I wait for 5 seconds
 And I write the new password "$string_1"
 And I wait for 5 seconds
 And I confirm the new password "$$string_1"
 And I wait for 5 seconds
 And I click button Change Password
 And I wait for 5 seconds
 Then I should get error in old password
 And I send a signal to user 25 containing "Finished 24"

@user25 @web
Scenario: 56 - Ingresar a configuraciones, seleccionar general, expandir publication language, cambiar el idioma de publicacion por otro valido, salvar y verificar que los cambios persisten
Given I wait for a signal containing "Finished 24" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  I click view with selector "<SETTINGS_BUTTON>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "18" and step number "3"
  And I click view with selector "<GENERAL_OPTION>"
  And I wait for 5 seconds
  And And I click view with selector "<EXPAND_PUBLICATION_LANGUAGE>"
  And I wait for 5 seconds
  And I change language with value "es"
  And I wait for 5 seconds
  And I click button save
  Then I should get new language "es"
  And I send a signal to user 26 containing "Finished 25"

@user26 @web
Scenario: 57 - Ingresar a configuraciones, seleccionar general, expandir publication language, cambiar el idioma de publicacion por uno invalido e intentar salvar
Given I wait for a signal containing "Finished 25" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<SETTINGS_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<GENERAL_OPTION>"
  And I wait for 5 seconds
  And I click view with selector "<EXPAND_PUBLICATION_LANGUAGE>"
  And I wait for 5 seconds
  And I change language with value "$string_1"
  And I wait for 5 seconds
  And I click button save
  Then I should not be able to save language
  And I send a signal to user 27 containing "Finished 26"

@user27 @web
Scenario: 58 - Ingresar a configuraciones, seleccionar general, expandir publication language, dejar vacio el idioma de publicacion e intentar salvar
Given I wait for a signal containing "Finished 26" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<SETTINGS_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<GENERAL_OPTION>"
  And I wait for 5 seconds
  And I click view with selector "<EXPAND_PUBLICATION_LANGUAGE>"
  And I wait for 5 seconds
  And I delete language value
  And I wait for 5 seconds
  And I click button save
  And I wait for 5 seconds
  Then I should not be able to save
  And I send a signal to user 28 containing "Finished 27"

@user28 @web
Scenario: 59 - Ingresar a settings, code injection en site header ingresar texto que no tenga formato de codigo e intentar guardar
Given I wait for a signal containing "Finished 27" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<SETTINGS_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<CODE_INJECTION_OPTION>"
  And I wait for 5 seconds
  And I set value in Site Header "$string_1"
  And I wait for 5 seconds
  And I click button save
  And I wait for 5 seconds
  Then I should not be able to save
  And I send a signal to user 29 containing "Finished 28"

@user29 @web
Scenario: 60 - Ingresar a settings, code injection en site footer ingresar texto que no tenga formato de codigo e intentar guardar
Given I wait for a signal containing "Finished 28" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<SETTINGS_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<CODE_INJECTION_OPTION>"
  And I wait for 5 seconds
  And I set value in Site Footer
  And I wait for 5 seconds
  And I click button save
  And I wait for 5 seconds
  Then I should not be able to save