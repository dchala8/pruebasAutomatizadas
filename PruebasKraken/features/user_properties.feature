Feature: Escenarios que involucran la modificación de usuario y clave
 
@user19 @web
Scenario: 19 - Como administrador me gustaria cambiar la contraseña del usuario, cerrar sesión, intentar con la antigua contraseña, validar que no le permita ingresar
  Given I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  #Cambiar la clave
  And I click view with selector "<AVATAR_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<PROFILE_OPTION>"
  And I wait for 2 seconds
  And I change current password "<PASSWORD>" to new password "<NEW_PASSWORD>"
  And I wait for 2 seconds
  And I click view with selector "<CHANGE_PASSWORD_BUTTON>"
  And I wait for 8 seconds
  And I click view with selector "<AVATAR_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<SIGNOUT_OPTION>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I found password error message
  And I send a signal to user 20 containing "Finished 19"

@user20 @web
Scenario: 20 - Como administrador me gustaria iniciar sesion con la nueva clave y posteriormente actualizarla para dejarla como la original, finalmente, validar que puedo iniciar sesion con la misma clave
Given I wait for a signal containing "Finished 19" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<NEW_PASSWORD>"
  And I wait for 5 seconds
  #Cambiar la clave
  And I click view with selector "<AVATAR_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<PROFILE_OPTION>"
  And I wait for 2 seconds
  And I change current password "<NEW_PASSWORD>" to new password "<PASSWORD>"
  And I wait for 2 seconds
  And I click view with selector "<CHANGE_PASSWORD_BUTTON>"
  And I wait for 8 seconds
  And I click view with selector "<AVATAR_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<SIGNOUT_OPTION>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I am on dashboard page
  #And I send a signal to user 20 containing "Finished 19"