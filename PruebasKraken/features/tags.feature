Feature: Tags

@user1 @web
Scenario: Escenario 11
  Given I navigate to page "http://localhost:2369/ghost"
  When I wait for 5 sencods
  Then I click view with selector "<TAG_MENU>"
  When I wait for 2 sencods
  Then I click view with selector "<NEW_TAG_BOTON>"
  When I wait for 2 sencods
  Then I enter text "$tagname_1" into field with id "name"
  And I click view with selector "<SAVE_TAG_BOTON>"
  When I wait for 2 sencods


@user1 @web
Scenario: Escenario 12
  Given I navigate to page "http://localhost:2369/ghost"
  When I wait for 5 sencods
  Then I click view with selector "<TAG_MENU>"
  When I wait for 2 sencods
  Then I click view with selector "<NEW_TAG_BOTON>"
  When I wait for 2 sencods
  Then I enter text "$tagname_1" into field with id "name"
  And I click view with selector "<SAVE_TAG_BOTON>"
  When I wait for 2 sencods


@user1 @web
Scenario: Escenario 13
  Given I navigate to page "http://localhost:2369/ghost"
  When I wait for 5 sencods
  Then I click view with selector "<TAG_MENU>"
  When I wait for 2 sencods
  Then I click view with selector "<NEW_TAG_BOTON>"
  When I wait for 2 sencods
  Then I enter text "$tagname_1" into field with id "name"
  And I click view with selector "<SAVE_TAG_BOTON>"
  When I wait for 2 sencods


@user1 @web
Scenario: Escenario 14
  Given I navigate to page "http://localhost:2369/ghost"
  When I wait for 5 sencods
  Then I click view with selector "<TAG_MENU>"
  When I wait for 2 sencods
  Then I click view with selector "<NEW_TAG_BOTON>"
  When I wait for 2 sencods
  Then I enter text "$tagname_1" into field with id "name"
  And I click view with selector "<SAVE_TAG_BOTON>"
  When I wait for 2 sencods