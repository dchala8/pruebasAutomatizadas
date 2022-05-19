Feature: Escenarios de validación de creación de miembros

@user1 @web
Scenario: 28 - Como administrador me gustaría crear miembro, definir nombre, definir correo válido, salvar y verificar que se haya creado
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
  And I send a signal to user 2 containing "Finished 1"

@user2 @web
Scenario: 29 - Como administrador me gustaría crear miembro, definir nombre, no ingresar correo e intentar salvar
Given I wait for a signal containing "Finished 1" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<MEMBERS_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_MEMBER_BUTTON>"
  And I wait for 2 seconds
  And I define member with name "$name_1"
  And I wait for 2 seconds
  And I click view with selector "<SAVE_BUTTON>"
  Then I should see the retry save button
  And I send a signal to user 3 containing "Finished 2"

@user3 @web
Scenario: 30 - Como administrador me gustaría crear miembro, definir nombre, ingresar correo con formato inválido e intentar salvar
Given I wait for a signal containing "Finished 2" for 9999999 seconds
  And  I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<MEMBERS_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_MEMBER_BUTTON>"
  And I wait for 2 seconds
  And I define member with name "$name_1"
  And I wait for 2 seconds
  And I define member with email "$name_2"
  And I wait for 2 seconds
  And I click view with selector "<SAVE_BUTTON>"
  Then I should see the retry save button
  And I send a signal to user 4 containing "Finished 3"

@user4 @web
Scenario: 31 - Como administrador me gustaría crear miembro, definir nombre, definir correo válido, definir nota con menos de 500 caractéres, salvar y verificar que se haya creado
Given I wait for a signal containing "Finished 3" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<MEMBERS_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_MEMBER_BUTTON>"
  And I wait for 2 seconds
  And I define member with name "$name_1"
  And I wait for 2 seconds
  And I define member with email "$email_1"
  And I wait for 2 seconds
  And I define member note with "498" characters
  And I click view with selector "<SAVE_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<MEMBERS_MENU>"
  And I wait for 2 seconds
  Then I found member with name "$$name_1"
  And I send a signal to user 5 containing "Finished 4"


@user5 @web
Scenario: 32 - Como administrador me gustaría crear miembro, definir nombre, definir correo válido, definir nota de 500 caractéres, salvar y verificar que se haya creado
Given I wait for a signal containing "Finished 4" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<MEMBERS_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_MEMBER_BUTTON>"
  And I wait for 2 seconds
  And I define member with name "$name_1"
  And I wait for 2 seconds
  And I define member with email "$email_1"
  And I wait for 2 seconds
  And I define member note with "500" characters
  And I click view with selector "<SAVE_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<MEMBERS_MENU>"
  And I wait for 2 seconds
  Then I found member with name "$$name_1"
  And I send a signal to user 6 containing "Finished 5"

@user6 @web
Scenario: 33 - Como administrador me gustaría crear miembro, definir nombre, definir correo válido, definir nota con mas de 500 caractéres e intentar salvar
Given I wait for a signal containing "Finished 5" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<MEMBERS_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_MEMBER_BUTTON>"
  And I wait for 2 seconds
  And I define member with name "$name_1"
  And I wait for 2 seconds
  And I define member with email "$email_1"
  And I wait for 2 seconds
  And I define member note with "502" characters
  And I click view with selector "<SAVE_BUTTON>"
  And I wait for 2 seconds
  Then I should see the retry save button