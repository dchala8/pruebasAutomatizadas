Feature: Escenarios que involucran cambios en la configuración del sitio y otros

@user15 @web
Scenario: 15 - Como administrador me gustaria Ingresar a perfil de usuario, definir un valor sin formato de dirección URL en el campo Website e intentar salvar
Given I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I select profile menu
  And I wait for 5 seconds
  And I write the next value for Website field "$string_1"
  And I wait for 5 seconds
  And I click button save
  And I wait for 5 seconds
  Then I should not be able to save changes
  And I wait for 5 seconds
  #And I send a signal to user 16 containing "Finished 15"

# @user16 @web
# Scenario: 16 - Como administrador me gustaria modificar el autor principal, ir a la lista de posts, filtrar por author y validar que tenga el nuevo nombre
# Given I wait for a signal containing "Finished 15" for 9999999 seconds
#   And I navigate to edit page "<GHOST_URL>"
#   And I wait for 5 seconds
#   And I take a screenshot of scenario "16" and step number "1"
#   When I make login with "<USER>" and "<PASSWORD>"
#   And I wait for 5 seconds
#   And I take a screenshot of scenario "16" and step number "2"
#   And I select option posts
#   And I wait for 3 seconds
#   And I take a screenshot of scenario "16" and step number "3"
#   And I select New post
#   And I wait for 3 seconds
#   And I take a screenshot of scenario "16" and step number "4"
#   And I write a new post with title "This is a post with tag: Kraken Scenario 16"
#   And I wait for 3 seconds
#   And I take a screenshot of scenario "16" and step number "5"
#   And I click view with selector "<POST_SETTINGS_BUTTON>"
#   And I wait for 2 seconds
#   And I take a screenshot of scenario "16" and step number "6"
#   And I publish my new post
#   And I wait for 5 seconds
#   And I take a screenshot of scenario "16" and step number "7"
#   And I return to dashboard
#   And I wait for 5 seconds
#   And I take a screenshot of scenario "16" and step number "8"
#   #Modificar el autor principal
#   And I click view with selector "<SETTINGS_BUTTON>"
#   And I wait for 2 seconds
#   And I take a screenshot of scenario "16" and step number "9"
#   And I click view with selector "<STAFF_OPTION>"
#   And I wait for 2 seconds
#   And I take a screenshot of scenario "16" and step number "10"
#   Then I set new name "$name_3" to author with name "<USER_NAME>"
#   And I wait for 2 seconds
#   And I take a screenshot of scenario "16" and step number "11"
#   #Buscar el post del miembro con el nuevo nombre
#   And I click view with selector "<POSTS_MENU>"
#   And I wait for 2 seconds
#   And I take a screenshot of scenario "16" and step number "12"
#   Then I filter by author "$$name_3"
#   And I wait for 2 seconds
#   And I take a screenshot of scenario "16" and step number "13"
#   Then I found post with title "This is a post with tag: Kraken Scenario 16"
#   And I wait for 2 seconds
#   And I take a screenshot of scenario "16" and step number "14"
#   And I send a signal to user 17 containing "Finished 16"

# @user17 @web
# Scenario: 17 - Como administrador me gustaria crear post, visualizarlo en View site, modificar post, validar en View Site post con el cambio realizado
# Given I wait for a signal containing "Finished 16" for 9999999 seconds
#   And I navigate to edit page "<GHOST_URL>"
#   And I wait for 5 seconds
#   And I take a screenshot of scenario "17" and step number "1"
#   When I make login with "<USER>" and "<PASSWORD>"
#   And I wait for 5 seconds
#   And I take a screenshot of scenario "17" and step number "2"
#   And I select option posts
#   And I wait for 3 seconds
#   And I take a screenshot of scenario "17" and step number "3"
#   And I select New post
#   And I wait for 3 seconds
#   And I take a screenshot of scenario "17" and step number "4"
#   And I write a new post with title "This is a post with tag: Kraken Scenario 17"
#   And I wait for 3 seconds
#   And I take a screenshot of scenario "17" and step number "5"
#   And I publish my new post
#   And I wait for 5 seconds
#   And I take a screenshot of scenario "17" and step number "6"
#   And I return to dashboard
#   And I wait for 5 seconds
#   And I take a screenshot of scenario "17" and step number "7"
#   #Validar que el post se vea en el sitio
#   Then I navigate to view site page "<GHOST_URL>"
#   And I wait for 5 seconds
#   And I take a screenshot of scenario "17" and step number "8"
#   Then I found post with title "This is a post with tag: Kraken Scenario 17"
#   #Modificar el post
#   And I wait for 3 seconds
#   And I take a screenshot of scenario "17" and step number "9"
#   And I navigate to edit page "<GHOST_URL>"
#   And I wait for 5 seconds
#   And I take a screenshot of scenario "17" and step number "10"
#   And I select option posts
#   And I wait for 3 seconds
#   And I take a screenshot of scenario "17" and step number "11"
#   And I change title to "This is a post with tag: Kraken Scenario 17 modificado" of post with title "This is a post with tag: Kraken Scenario 17"
#   And I wait for 3 seconds
#   And I take a screenshot of scenario "17" and step number "12"
#   And I click view with selector "<POST_SETTINGS_BUTTON>"
#   And I wait for 3 seconds
#   And I take a screenshot of scenario "17" and step number "13"
#   And I update my new post
#   And I wait for 5 seconds
#   And I take a screenshot of scenario "17" and step number "14"
#   And I return to dashboard
#   And I wait for 5 seconds
#   And I take a screenshot of scenario "17" and step number "15"
#   #Validar el cambio en el sitio
#   Then I navigate to view site page "<GHOST_URL>"
#   And I wait for 5 seconds
#   And I take a screenshot of scenario "17" and step number "16"
#   Then I found post with title "This is a post with tag: Kraken Scenario 17 modificado"
#   And I wait for 5 seconds
#   And I take a screenshot of scenario "17" and step number "17"
#   And I send a signal to user 18 containing "Finished 17"

# @user18 @web
# Scenario: 18 - Como administrador me gustaria modificar el título del sitio
# Given I wait for a signal containing "Finished 17" for 9999999 seconds
#   And I navigate to edit page "<GHOST_URL>"
#   And I wait for 5 seconds
#   And I take a screenshot of scenario "18" and step number "1"
#   When I make login with "<USER>" and "<PASSWORD>"
#   And I wait for 5 seconds
#   And I take a screenshot of scenario "18" and step number "2"
#   #Modificar el titulo del sitio
#   And I click view with selector "<SETTINGS_BUTTON>"
#   And I wait for 2 seconds
#   And I take a screenshot of scenario "18" and step number "3"
#   And I click view with selector "<GENERAL_OPTION>"
#   And I wait for 2 seconds
#   And I take a screenshot of scenario "18" and step number "4"
#   And I click view with selector "<EXPAND_TITLE_AND_DESCRIPTION_BUTTON>"
#   And I wait for 2 seconds
#   And I take a screenshot of scenario "18" and step number "5"
#   And I set title with "Sitio probado con Kraken"
#   And I wait for 2 seconds
#   And I take a screenshot of scenario "18" and step number "6"
#   And I click view with selector "<SAVE_SETTINGS_BUTTON>"
#   And I wait for 2 seconds
#   And I take a screenshot of scenario "18" and step number "7"
#   #Verificar el nuevo titulo en el sitio
#   Then I navigate to view site page "<GHOST_URL>"
#   And I wait for 2 seconds
#   And I take a screenshot of scenario "18" and step number "8"
#   Then I found site with title "Sitio probado con Kraken"