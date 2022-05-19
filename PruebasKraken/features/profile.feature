Feature: Escenarios de validación de perfil de usuario

@user1 @web
Scenario: 34 - Como administrador me gustaría ingresar a perfil de usuario, eliminar el nombre completo e intentar salvar
Given I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<AVATAR_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<PROFILE_OPTION>"
  And I wait for 2 seconds
  And I define profile full name with name " "
  And I wait for 2 seconds
  And I click view with selector "<SAVE_BUTTON>"
  Then I should see the retry save button
  And I send a signal to user 2 containing "Finished 1"

@user2 @web
Scenario: 35 - Como administrador me gustaría ingresar a perfil de usuario, definir un nuevo nombre, salvar y verificar que el nombre haya cambiado
Given I wait for a signal containing "Finished 1" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<AVATAR_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<PROFILE_OPTION>"
  And I wait for 2 seconds
  And I define profile full name with fake name "$name_1"
  And I wait for 2 seconds
  And I click view with selector "<SAVE_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<POSTS_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<AVATAR_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<PROFILE_OPTION>"
  And I wait for 2 seconds
  Then I should see the profile full name "$$name_1"
  And I send a signal to user 3 containing "Finished 2"

@user3 @web
Scenario: 36 - Como administrador me gustaría ingresar a perfil de usuario, definir un nuevo correo válido, salvar y verificar que el correo haya cambiado
Given I wait for a signal containing "Finished 2" for 9999999 seconds
  And  I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<AVATAR_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<PROFILE_OPTION>"
  And I wait for 2 seconds
  And I update my profile with valid name and email
  And I wait for 2 seconds
  And I click view with selector "<SAVE_BUTTON>"
  And I wait for 1 seconds
  Then I should see the saved confirmation button
  And I update my profile with email "<USER>"
  And I click view with selector "<SAVE_BUTTON>"
  And I wait for 1 seconds
  Then I should see the saved confirmation button
  And I send a signal to user 4 containing "Finished 3"

@user4 @web
Scenario: 37 - Como administrador me gustaría ingresar a perfil de usuario, definir un nuevo correo no válido e intentar salvar
Given I wait for a signal containing "Finished 3" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<AVATAR_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<PROFILE_OPTION>"
  And I wait for 2 seconds
  And I define profile email with string "$name_2"
  And I wait for 2 seconds
  And I click view with selector "<SAVE_BUTTON>"
  Then I should see the retry save button
  And I send a signal to user 5 containing "Finished 4"

@user5 @web
Scenario: 38 - Como administrador me gustaría ingresar a perfil de usuario, definir una biografía de 200 caractéres, salvar y verificar que los cambios persisten
Given I wait for a signal containing "Finished 4" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<AVATAR_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<PROFILE_OPTION>"
  And I wait for 2 seconds
  And I define bio with "200" characters
  And I wait for 2 seconds
  And I click view with selector "<SAVE_BUTTON>"
  And I wait for 1 seconds
  Then I should see the saved confirmation button
  And I send a signal to user 6 containing "Finished 5"

@user6 @web
Scenario: 39 - Como administrador me gustaría ingresar a perfil de usuario, definir una biografía de menos de 200 caractéres, salvar y verificar que los cambios persisten
Given I wait for a signal containing "Finished 5" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<AVATAR_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<PROFILE_OPTION>"
  And I wait for 2 seconds
  And I define bio with "150" characters
  And I wait for 2 seconds
  And I click view with selector "<SAVE_BUTTON>"
  And I wait for 1 seconds
  Then I should see the saved confirmation button
  And I send a signal to user 7 containing "Finished 6"

@user7 @web
Scenario: 40 - Como administrador me gustaría ingresar a perfil de usuario, definir una biografía de más de 200 caractéres e intentar salvar
Given I wait for a signal containing "Finished 6" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<AVATAR_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<PROFILE_OPTION>"
  And I wait for 2 seconds
  And I define bio with "500" characters
  And I wait for 2 seconds
  And I click view with selector "<SAVE_BUTTON>"
  And I wait for 1 seconds
  Then I should see the retry save button