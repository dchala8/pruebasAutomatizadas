Feature: Escenarios que involucran cambios en la configuración del sitio y otros

@user15 @web
Scenario: 15 - Como administrador me gustaria crear miembro, verificar que se muestra en la ventana de miembros, modificar miembro, verificar que se muestre el miembro actualizado
Given I navigate to edit page "<GHOST_URL>"
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
Scenario: 17 - Como administrador me gustaria crear post, visualizarlo en View site, modificar post, validar en View Site post con el cambio realizado
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