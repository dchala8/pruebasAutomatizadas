Feature: Escenarios que involucran la creacion de tags


@user14 @web
Scenario: 14 - Como administrador me gustaría crear tag, crear una pagina con el tag asociado, ir a la lista de paginas, filtrar por el tag creado y verificar que retorne la pagina creada
Given I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  And I take a screenshot of scenario "14" and step number "1"
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I take a screenshot of scenario "14" and step number "2"
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "14" and step number "3"
  And I click view with selector "<NEW_TAG_BUTTON>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "14" and step number "4"
  Then I enter text "Kraken Scenario 14" into field with id "name"
  And I wait for 2 seconds
  And I take a screenshot of scenario "14" and step number "5"
  And I click view with selector "<SAVE_TAG_BUTTON>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "14" and step number "6"
  And I click view with selector "<PAGES_MENU>"
  And I wait for 3 seconds
  And I take a screenshot of scenario "14" and step number "7"
  And I click view with selector "<NEW_PAGE_BUTTON>"
  And I wait for 3 seconds
  And I take a screenshot of scenario "14" and step number "8"
  And I write a new page with title "Page for scenario 14"
  And I wait for 3 seconds
  And I take a screenshot of scenario "14" and step number "9"
  #Asociar tag al post
  And I click view with selector "<POST_SETTINGS_BUTTON>"
  And I wait for 3 seconds
  And I take a screenshot of scenario "14" and step number "10"
  Then I define tag name "Kraken Scenario 14" into tags field
  And I wait for 2 seconds
  And I take a screenshot of scenario "14" and step number "11"
  And I publish my new page
  And I wait for 5 seconds
  And I take a screenshot of scenario "14" and step number "12"
  #Validar que el post muestre el tag
  And I click view with selector "<RETURN_PAGES>"
  And I wait for 3 seconds
  And I take a screenshot of scenario "14" and step number "13"
  And I filter by tag "Kraken Scenario 14"
  And I wait for 3 seconds
  And I take a screenshot of scenario "14" and step number "14"
  Then I found page "Page for scenario 14"
  And I take a screenshot of scenario "14" and step number "15"
 