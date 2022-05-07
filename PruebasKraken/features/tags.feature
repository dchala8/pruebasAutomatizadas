Feature: Tags

@user1 @web
Scenario: Escenario 11
  Given I navigate to page "<GHOST_URL>"
  And I wait for 20 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_TAG_BOTON>"
  And I wait for 2 seconds
  Then I enter text "$string_1" into field with id "name"
  And I click view with selector "<SAVE_TAG_BOTON>"
  And I wait for 2 seconds