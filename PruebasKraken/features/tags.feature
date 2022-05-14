Feature: Escenarios que involucran la creacion de tags

@user11 @web
Scenario: 11 - Como administrador me gustaria cear tag, crear post con el tag creado y publicarlo, validar que el post muestre tag
  Given I navigate to edit page "<GHOST_URL>"  
  And I wait for 5 seconds
  And I take a screenshot of scenario "11" and step number "1"
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I take a screenshot of scenario "11" and step number "2"
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "11" and step number "3"
  And I click view with selector "<NEW_TAG_BUTTON>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "11" and step number "4"
  Then I enter text "Kraken Scenario 11" into field with id "name"
  And I wait for 2 seconds
  And I take a screenshot of scenario "11" and step number "5"
  And I click view with selector "<SAVE_TAG_BUTTON>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "11" and step number "6"
  And I select option posts
  And I wait for 3 seconds
  And I take a screenshot of scenario "11" and step number "7"
  And I select New post
  And I wait for 3 seconds
  And I take a screenshot of scenario "11" and step number "8"
  And I write a new post with title "This is a post with tag: Kraken Scenario 11"
  And I wait for 3 seconds
  And I take a screenshot of scenario "11" and step number "9"
  #Asociar tag al post
  And I click view with selector "<POST_SETTINGS_BUTTON>"
  And I wait for 3 seconds
  And I take a screenshot of scenario "11" and step number "10"
  Then I define tag name "Kraken Scenario 11" into tags field
  And I wait for 3 seconds
  And I take a screenshot of scenario "11" and step number "11"
  #Validar que el post muestre el tag
  And I publish my new post
  And I wait for 5 seconds
  And I take a screenshot of scenario "11" and step number "12"
  And I return to dashboard
  And I wait for 5 seconds
  And I take a screenshot of scenario "11" and step number "13"
  Then I navigate to view site page "<GHOST_URL>"
  And I wait for 5 seconds
  And I take a screenshot of scenario "11" and step number "14"
  Then I found post "This is a post with tag: Kraken Scenario 11" with tag "Kraken Scenario 11" related
  And I wait for 5 seconds
  And I take a screenshot of scenario "11" and step number "15"
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
 