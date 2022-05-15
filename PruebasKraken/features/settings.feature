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
  And I send a signal to user 18 containing "Finished 15"

@user18 @web
Scenario: 18 - Como administrador me gustaria modificar el título del sitio
Given I wait for a signal containing "Finished 15" for 9999999 seconds
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